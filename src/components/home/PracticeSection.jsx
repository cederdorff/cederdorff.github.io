export default function PracticeSection() {
  return (
    <section className="practice-section" aria-labelledby="practice-heading">
      <p className="section-label">How I work</p>
      <div className="practice-body">
        <h2 id="practice-heading">Most days I teach. Some days I build.</h2>
        <div className="practice-copy">
          <p>
            A good learning environment starts with feeling safe enough to ask questions. There are no stupid questions
            in my classroom, and getting something wrong is part of learning.
          </p>
          <p>
            I believe in a hands-on approach: write the code, build something, break it and try again. Working as an
            external examiner across Denmark also gives me a useful look at how other schools approach the same subjects.
          </p>
        </div>
        <ul className="practice-list" aria-label="What my work consists of">
          <li>Teaching JavaScript</li>
          <li>Designing & building web apps</li>
          <li>Small experiments</li>
        </ul>
      </div>
    </section>
  );
}
