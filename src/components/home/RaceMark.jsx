import { useState } from "react";

const LETTERS = ["R", "A", "C", "E"];
const STYLES = ["accent", "outline", "green", "soft"];
const ANGLES = [-90, -35, -20, -12, 0, 12, 20, 35, 90, 180];

const INITIAL = {
  shift: 0,
  letters: [
    { rotate: -12, x: 0, y: 0 },
    { rotate: 20, x: 4, y: -6 },
    { rotate: 12, x: -4, y: 4 },
    { rotate: -20, x: 2, y: 0 }
  ]
};

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle(current) {
  return {
    // Hand each letter the next style, so every click visibly changes something.
    shift: (current.shift + 1) % STYLES.length,
    letters: current.letters.map((letter) => {
      const options = ANGLES.filter((angle) => angle !== letter.rotate);

      return { rotate: pick(options), x: Math.round(Math.random() * 20 - 10), y: Math.round(Math.random() * 20 - 10) };
    })
  };
}

export default function RaceMark() {
  const [layout, setLayout] = useState(INITIAL);

  return (
    <button
      type="button"
      className="race-mark"
      onClick={() => setLayout(shuffle)}
      aria-label="RACE, my initials. Press to shuffle the letters."
    >
      <span className="race-letters" aria-hidden="true">
        {LETTERS.map((letter, index) => {
          const { rotate, x, y } = layout.letters[index];
          const style = STYLES[(index + layout.shift) % STYLES.length];

          return (
            <span
              className={`race-letter race-letter--${style}`}
              style={{ "--rotate": `${rotate}deg`, "--x": `${x}%`, "--y": `${y}%` }}
              key={letter}
            >
              {letter}
            </span>
          );
        })}
      </span>
      <span className="race-hint" aria-hidden="true">
        {"// click to shuffle"}
      </span>
    </button>
  );
}
