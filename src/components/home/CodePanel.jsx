import { ACCENTS, GLYPH_LIMITS } from "../../data/playground";

function Line({ index, children }) {
  return (
    <div className="code-line" style={{ "--i": index }}>
      {children}
    </div>
  );
}

function Property({ name, children, last = false }) {
  return (
    <>
      <span className="prop">{`  ${name}`}</span>
      <span className="punc">: </span>
      {children}
      {!last && <span className="punc">,</span>}
    </>
  );
}

export default function CodePanel({ settings, onChange }) {
  const { accent, glyphs, gravity } = settings;
  const accentIndex = ACCENTS.findIndex((item) => item.name === accent);
  const nextAccent = ACCENTS[(accentIndex + 1) % ACCENTS.length];

  const setGlyphs = (value) =>
    onChange({ glyphs: Math.min(GLYPH_LIMITS.max, Math.max(GLYPH_LIMITS.min, value)) });

  return (
    <div className="code-panel" role="group" aria-label="Live code. Change a value to change the page.">
      <div className="code-panel-bar">
        <span className="code-dot code-dot--red" />
        <span className="code-dot code-dot--yellow" />
        <span className="code-dot code-dot--green" />
        <span className="code-filename">race.js</span>
        <span className="code-live">live</span>
      </div>
      <div className="code-body">
        <Line index={0}>
          <span className="com">{"// this one is live. change a value ↓"}</span>
        </Line>
        <Line index={1}>
          <span className="kw">const</span>
          <span className="prop"> race</span>
          <span className="punc">{" = {"}</span>
        </Line>
        <Line index={2}>
          <Property name="name">
            <span className="str">{'"Rasmus Cederdorff"'}</span>
          </Property>
        </Line>
        <Line index={3}>
          <Property name="teaches">
            <span className="str">{'"JavaScript"'}</span>
          </Property>
        </Line>
        <Line index={4}>
          <Property name="accent">
            <button
              type="button"
              className="code-control"
              onClick={() => onChange({ accent: nextAccent.name })}
              aria-label={`Accent colour is ${accent}. Change to ${nextAccent.name}.`}
            >
              <span className="code-swatch" />
              {`"${accent}"`}
            </button>
          </Property>
        </Line>
        <Line index={5}>
          <Property name="glyphs">
            <span className="code-stepper">
              <button
                type="button"
                className="code-control"
                onClick={() => setGlyphs(glyphs - GLYPH_LIMITS.step)}
                disabled={glyphs <= GLYPH_LIMITS.min}
                aria-label="Fewer glyphs"
              >
                −
              </button>
              <output className="num" aria-label={`${glyphs} glyphs`}>
                {glyphs}
              </output>
              <button
                type="button"
                className="code-control"
                onClick={() => setGlyphs(glyphs + GLYPH_LIMITS.step)}
                disabled={glyphs >= GLYPH_LIMITS.max}
                aria-label="More glyphs"
              >
                +
              </button>
            </span>
          </Property>
        </Line>
        <Line index={6}>
          <Property name="gravity">
            <button
              type="button"
              className="code-control"
              onClick={() => onChange({ gravity: !gravity })}
              aria-pressed={gravity}
              aria-label="Gravity"
            >
              {String(gravity)}
            </button>
          </Property>
        </Line>
        <Line index={7}>
          <Property name="alsoA" last>
            <span className="str">{'"dad"'}</span>
          </Property>
        </Line>
        <Line index={8}>
          <span className="punc">{"};"}</span>
        </Line>
        <span className="code-cursor" style={{ "--i": 9 }} />
      </div>
    </div>
  );
}
