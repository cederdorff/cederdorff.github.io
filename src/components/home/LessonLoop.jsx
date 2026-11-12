const STEPS = [
  { call: "write", note: "the code yourself" },
  { call: "build", note: "something real" },
  { call: "breakIt", note: "on purpose or not" },
  { call: "tryAgain", note: "" }
];

export default function LessonLoop() {
  return (
    <figure className="lesson-loop reveal">
      <div className="code-panel">
        <div className="code-panel-bar">
          <span className="code-dot code-dot--red" />
          <span className="code-dot code-dot--yellow" />
          <span className="code-dot code-dot--green" />
          <span className="code-filename">lesson.js</span>
        </div>
        <pre className="code-body">
          <div className="loop-line">
            <span className="kw">while</span>
            <span className="punc"> (!</span>
            <span className="prop">itClicks</span>
            <span className="punc">) {"{"}</span>
          </div>
          {STEPS.map((step, index) => (
            <div className="loop-line loop-line--step" style={{ "--i": index }} key={step.call}>
              <span className="fn">{`  ${step.call}`}</span>
              <span className="punc">();</span>
              {step.note && <span className="com">{`  // ${step.note}`}</span>}
            </div>
          ))}
          <div className="loop-line">
            <span className="punc">{"}"}</span>
          </div>
        </pre>
      </div>
      <figcaption>How a lesson runs. There are no stupid questions inside this loop.</figcaption>
    </figure>
  );
}
