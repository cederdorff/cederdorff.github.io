import { useEffect, useState } from "react";

// One tag, and everything I am goes inside it in turn.
const ROLES = [
  { glyph: "?", label: "senior lecturer" }, // a lesson starts with a question
  { glyph: "/", label: "web app developer" }, // the slash that closes the tag
  { glyph: "&", label: "husband" },
  { glyph: "+", label: "dad" },
  { glyph: ";", label: "I’m RACE" } // the semicolon from my logo
];

const TILTS = [
  [-10, 8],
  [14, -6],
  [-4, 16],
  [10, 4],
  [-14, -10]
];

const INTERVAL = 2800;

export default function RoleMark() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const role = ROLES[index];
  const [left, right] = TILTS[index];

  const next = () => setIndex((current) => (current + 1) % ROLES.length);

  // Moves on by itself, but waits while you hover or focus it, and never starts
  // for people who have asked for reduced motion. Keyed on index, so a click restarts the wait.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setTimeout(next, INTERVAL);

    return () => clearTimeout(id);
  }, [index, paused]);

  return (
    <button
      type="button"
      className="glyph-mark glyph-mark--roles"
      onClick={next}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-label={`${role.label}. Press for the next role.`}
    >
      <span className="glyph-letters" aria-hidden="true">
        <span className="glyph-letter glyph-letter--green" style={{ "--rotate": `${left}deg` }}>
          {"<"}
        </span>
        <span className="glyph-letter glyph-letter--accent glyph-letter--pop" key={role.glyph}>
          {role.glyph}
        </span>
        <span className="glyph-letter glyph-letter--outline" style={{ "--rotate": `${right}deg` }}>
          {">"}
        </span>
      </span>
      <span className="glyph-hint glyph-hint--pop" aria-hidden="true" key={role.label}>
        {`// ${role.label}`}
      </span>
    </button>
  );
}
