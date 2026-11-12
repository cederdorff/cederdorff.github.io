const STEPS = [
  { call: "intro", args: "topic", note: "short on purpose" },
  { call: "practice", args: "", note: "code and explore" },
  { call: "recap", args: "", note: "what did we find out?" }
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
            <span className="kw">for</span>
            <span className="punc"> (</span>
            <span className="kw">const</span>
            <span className="prop"> topic </span>
            <span className="kw">of</span>
            <span className="prop"> course</span>
            <span className="punc">) {"{"}</span>
          </div>
          {STEPS.map((step, index) => (
            <div className="loop-line loop-line--step" style={{ "--i": index }} key={step.call}>
              <span className="fn">{`  ${step.call}`}</span>
              <span className="punc">(</span>
              <span className="prop">{step.args}</span>
              <span className="punc">);</span>
              <span className="com">{`  // ${step.note}`}</span>
            </div>
          ))}
          <div className="loop-line">
            <span className="punc">{"}"}</span>
            <span className="com">{"  // then from the top"}</span>
          </div>
        </pre>
      </div>
      <figcaption>How a lesson runs. There are no stupid questions inside this loop.</figcaption>
    </figure>
  );
}
