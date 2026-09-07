const LINES = [
  [
    { t: "kw", v: "const" },
    { t: "prop", v: " race" },
    { t: "punc", v: " = {" }
  ],
  [
    { t: "prop", v: "  fullname" },
    { t: "punc", v: ": " },
    { t: "str", v: '"Rasmus Cederdorff"' },
    { t: "punc", v: "," }
  ],
  [
    { t: "prop", v: "  role" },
    { t: "punc", v: ": " },
    { t: "str", v: '"Senior Lecturer"' },
    { t: "punc", v: "," }
  ],
  [
    { t: "prop", v: "  builds" },
    { t: "punc", v: ": " },
    { t: "str", v: '"web apps"' },
    { t: "punc", v: "," }
  ],
  [
    { t: "prop", v: "  teaches" },
    { t: "punc", v: ": " },
    { t: "str", v: '"JavaScript"' },
    { t: "punc", v: "," }
  ],
  [
    { t: "prop", v: "  based" },
    { t: "punc", v: ": " },
    { t: "str", v: '"Holstebro, DK"' },
    { t: "punc", v: "," }
  ],
  [
    { t: "prop", v: "  alsoA" },
    { t: "punc", v: ": " },
    { t: "str", v: '"dad"' }
  ],
  [{ t: "punc", v: "};" }]
];

export default function CodePanel() {
  return (
    <div className="code-panel" aria-hidden="true">
      <div className="code-panel-bar">
        <span className="code-dot code-dot--red" />
        <span className="code-dot code-dot--yellow" />
        <span className="code-dot code-dot--green" />
        <span className="code-filename">race.js</span>
      </div>
      <pre className="code-body">
        {LINES.map((tokens, index) => (
          <div className="code-line" style={{ "--i": index }} key={index}>
            {tokens.map((token, tokenIndex) => (
              <span className={token.t} key={tokenIndex}>
                {token.v}
              </span>
            ))}
          </div>
        ))}
        <span className="code-cursor" style={{ "--i": LINES.length }} />
      </pre>
    </div>
  );
}
