import LessonLoop from "./LessonLoop";
import RaceMark from "./RaceMark";

export default function TeachingSection() {
  return (
    <section className="teaching" aria-labelledby="teaching-heading">
      <p className="section-label">02 / Teaching</p>
      <RaceMark />
      <div className="teaching-body">
        <h2 id="teaching-heading">Most days I teach. Some days I build.</h2>
        <p className="teaching-lead">
            A good learning environment starts with feeling safe enough to ask questions. There are no stupid
            questions in my classroom, and getting something wrong is part of learning.
        </p>
        <div className="teaching-split">
          <div className="teaching-copy">
            <p>
              My teaching is hands-on and iterative: a short introduction, then the students code and practise, then
              we sum up together and go again. I keep the introductions compact on purpose. I would rather not hand
              over everything up front, because students learn more when they have to investigate and work things out
              themselves.
            </p>
            <p>
              Working as an external examiner across Denmark also gives me a useful look at how other schools approach
              the same subjects.
            </p>
          </div>
          <LessonLoop />
        </div>
      </div>
    </section>
  );
}
