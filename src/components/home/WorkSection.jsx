import { projects } from "../../data/homeContent";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <section className="work" aria-labelledby="work-heading">
      <div className="section-heading">
        <p className="section-label">02 / Selected work</p>
        <h2 id="work-heading">
          <span>Recent</span>
          <span>work</span>
        </h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
    </section>
  );
}
