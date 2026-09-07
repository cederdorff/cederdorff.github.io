import { teachingResources } from "../../data/homeContent";
import Arrow from "../ui/Arrow";

export default function TeachingSection() {
  return (
    <section className="teaching-work" aria-labelledby="teaching-work-heading">
      <div className="teaching-intro reveal">
        <p className="section-label">Teaching in practice</p>
        <h2 id="teaching-work-heading">The examples from class live on GitHub.</h2>
        <p>
          I build exercises and starter projects so students have something concrete to explore, break and rebuild.
          Much of the material is shared openly on GitHub.
        </p>
      </div>
      <div className="teaching-list">
        {teachingResources.map((resource) => (
          <a className="reveal" href={resource.url} target="_blank" rel="noreferrer" key={resource.name}>
            <span>{resource.name}</span>
            <span>{resource.detail}</span>
            <Arrow />
          </a>
        ))}
        <a
          className="teaching-all reveal"
          href="https://github.com/cederdorff?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <span>More on GitHub</span>
          <span>Browse all repositories</span>
          <Arrow />
        </a>
      </div>
    </section>
  );
}
