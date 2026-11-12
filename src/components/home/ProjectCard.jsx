import Arrow from "../ui/Arrow";

export default function ProjectCard({ project, index }) {
  return (
    <a
      className="project reveal"
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${project.title}`}
    >
      <figure className="project-figure--screenshot">
        <img
          src={project.image}
          srcSet={`${project.image.replace(".webp", "-1200.webp")} 1200w, ${project.image} 2400w`}
          sizes="(max-width: 900px) 100vw, 920px"
          width="2400"
          height="1525"
          loading="lazy"
          decoding="async"
          alt=""
        />
      </figure>
      <div className="project-copy">
        <div className="project-meta">
          <p>{project.type}</p>
          <p>{String(index + 1).padStart(2, "0")}</p>
        </div>
        <p className="project-role">{project.role}</p>
        <h3>
          {project.title} <Arrow />
        </h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}
