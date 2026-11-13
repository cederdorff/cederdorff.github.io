import { useEffect, useRef } from "react";

const GLYPHS = ["C", "E", "D", "E", "R", "D", "O", "R", "F", "F", ";", "{", "}", "(", ")", "/", "+", "=", "<", ">"];

const STEP = 1000 / 60;
const POINTER_RADIUS = 150;

function random(min, max) {
  return min + Math.random() * (max - min);
}

function createBody(index, width, height, gravity) {
  const scale = Math.min(1, Math.max(0.55, width / 760));
  const size = random(46, 132) * scale;
  const radius = size * 0.36;

  return {
    char: GLYPHS[index % GLYPHS.length],
    outlined: index % 5 === 2,
    size,
    radius,
    x: random(radius, Math.max(radius, width - radius)),
    y: gravity ? -radius - random(0, height * 0.6) : random(radius, Math.max(radius, height - radius)),
    vx: 0,
    vy: 0,
    driftX: random(0.12, 0.42) * (Math.random() < 0.5 ? -1 : 1),
    driftY: random(0.08, 0.32) * (Math.random() < 0.5 ? -1 : 1),
    rotation: random(0, Math.PI * 2),
    spin: random(-0.003, 0.003)
  };
}

export default function GlyphField({ count, gravity, accent }) {
  const canvasRef = useRef(null);
  const liveRef = useRef({ count, gravity, accent });
  const wakeRef = useRef(() => {});

  useEffect(() => {
    liveRef.current = { count, gravity, accent };
    wakeRef.current();
  }, [count, gravity, accent]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, active: false };
    const bodies = [];

    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let accumulator = 0;
    let visible = true;
    let wasGravity = liveRef.current.gravity;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function syncBodies() {
      const { count: target, gravity: falling } = liveRef.current;

      while (bodies.length < target) bodies.push(createBody(bodies.length, width, height, falling));
      bodies.length = Math.min(bodies.length, target);

      if (wasGravity && !falling) {
        // gravity off: kick everything back up
        bodies.forEach((body) => {
          body.vy = -random(2, 7);
          body.vx = random(-2, 2);
        });
      }

      wasGravity = falling;
    }

    function collide() {
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i];
          const b = bodies[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy) || 0.001;
          const overlap = a.radius + b.radius - distance;

          if (overlap <= 0) continue;

          const nx = dx / distance;
          const ny = dy / distance;

          a.x -= nx * overlap * 0.5;
          a.y -= ny * overlap * 0.5;
          b.x += nx * overlap * 0.5;
          b.y += ny * overlap * 0.5;

          const approach = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;

          if (approach < 0) {
            const impulse = -approach * 0.6;

            a.vx -= nx * impulse;
            a.vy -= ny * impulse;
            b.vx += nx * impulse;
            b.vy += ny * impulse;
          }
        }
      }
    }

    function step() {
      const { gravity: falling } = liveRef.current;

      for (const body of bodies) {
        if (falling) {
          body.vy += 0.42;
          body.vx *= 0.985;
          body.vy *= 0.995;
        } else {
          body.vx += (body.driftX - body.vx) * 0.02;
          body.vy += (body.driftY - body.vy) * 0.02;
        }

        if (pointer.active) {
          const dx = body.x - pointer.x;
          const dy = body.y - pointer.y;
          const distance = Math.hypot(dx, dy) || 0.001;

          if (distance < POINTER_RADIUS) {
            const force = (1 - distance / POINTER_RADIUS) * 1.4;

            body.vx += (dx / distance) * force;
            body.vy += (dy / distance) * force;
          }
        }

        body.x += body.vx;
        body.y += body.vy;
        body.rotation += falling ? body.vx * 0.012 : body.spin + body.vx * 0.002;

        if (body.x < body.radius) {
          body.x = body.radius;
          body.vx = Math.abs(body.vx) * 0.5;
          body.driftX = Math.abs(body.driftX);
        } else if (body.x > width - body.radius) {
          body.x = width - body.radius;
          body.vx = -Math.abs(body.vx) * 0.5;
          body.driftX = -Math.abs(body.driftX);
        }

        if (body.y > height - body.radius) {
          body.y = height - body.radius;
          body.vy = -Math.abs(body.vy) * 0.3;
          body.driftY = -Math.abs(body.driftY);
        } else if (!falling && body.y < body.radius) {
          body.y = body.radius;
          body.vy = Math.abs(body.vy) * 0.5;
          body.driftY = Math.abs(body.driftY);
        }
      }

      if (falling) {
        collide();
        collide();
      }
    }

    function draw() {
      const { accent: accentColor } = liveRef.current;

      context.clearRect(0, 0, width, height);
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.lineWidth = 2;
      context.lineJoin = "round";

      for (const body of bodies) {
        context.save();
        context.translate(body.x, body.y);
        context.rotate(body.rotation);
        context.font = `700 ${body.size}px Brown, "Helvetica Neue", Arial, sans-serif`;

        if (body.outlined) {
          context.globalAlpha = 0.75;
          context.strokeStyle = accentColor;
          context.strokeText(body.char, 0, 0);
        } else {
          context.globalAlpha = 0.1;
          context.fillStyle = "#f7f7f5";
          context.fillText(body.char, 0, 0);
        }

        context.restore();
      }
    }

    function renderStill() {
      // reduced motion: run the simulation and draw one still frame
      syncBodies();
      for (let i = 0; i < (liveRef.current.gravity ? 420 : 1); i++) step();
      draw();
    }

    function loop(time) {
      frame = 0;
      if (!visible || document.hidden) return;

      accumulator += Math.min(time - (lastTime || time), 100);
      lastTime = time;

      let steps = 0;
      while (accumulator >= STEP && steps < 4) {
        step();
        accumulator -= STEP;
        steps++;
      }

      draw();
      frame = requestAnimationFrame(loop);
    }

    function wake() {
      syncBodies();

      if (reducedMotion) {
        renderStill();
        return;
      }

      if (!frame && visible && !document.hidden) {
        lastTime = 0;
        frame = requestAnimationFrame(loop);
      }
    }

    function handlePointerMove(event) {
      const rect = canvas.getBoundingClientRect();

      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = pointer.x >= 0 && pointer.x <= rect.width && pointer.y >= 0 && pointer.y <= rect.height;
    }

    function handlePointerLeave() {
      pointer.active = false;
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) renderStill();
    });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      wake();
    });

    resize();
    wakeRef.current = wake;
    wake();
    // redraw when Brown has loaded
    document.fonts?.load('700 60px "Brown"').then(() => reducedMotion && draw());

    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerLeave);
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", wake);

    return () => {
      cancelAnimationFrame(frame);
      wakeRef.current = () => {};
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerLeave);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", wake);
    };
  }, []);

  return (
    <div className="glyph-field" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
