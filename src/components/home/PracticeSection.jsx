import LessonLoop from "./LessonLoop";
import RaceMark from "./RaceMark";

export default function PracticeSection() {
  return (
    <section className="practice-section" aria-labelledby="practice-heading">
      <p className="section-label">02 / Teaching</p>
      <RaceMark />
      <div className="practice-body">
        <h2 id="practice-heading">Most days I teach. Some days I build.</h2>
        <div className="practice-split">
          <div className="practice-copy">
            <p>
              A good learning environment starts with feeling safe enough to ask questions. There are no stupid
              questions in my classroom, and getting something wrong is part of learning.
            </p>
            <p>
              I believe in a hands-on approach: write the code, build something, break it and try again. Working as an
              external examiner across Denmark also gives me a useful look at how other schools approach the same
              subjects.
            </p>
          </div>
          <LessonLoop />
        </div>
      </div>
    </section>
  );
}
