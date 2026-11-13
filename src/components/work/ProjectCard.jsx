import Arrow from "../ui/Arrow";

function imageProps(project) {
  return {
    srcSet: `${project.image.replace(".webp", "-1200.webp")} 1200w, ${project.image} 2400w`,
    sizes: "(max-width: 900px) 100vw, 920px",
    width: 2400,
    height: 1525
  };
}

export default function ProjectCard({ project, index }) {
  const content = (
    <>
      <figure className="project-figure">
        <img src={project.image} {...imageProps(project)} loading="lazy" decoding="async" alt="" />
      </figure>
      <div className="project-copy">
        <div className="project-meta">
          <p>{project.type}</p>
          <p>{String(index + 1).padStart(2, "0")}</p>
        </div>
        <p className="project-role">{project.role}</p>
        <h3>
          {project.title} {project.url && <Arrow />}
        </h3>
        <p>{project.description}</p>
      </div>
    </>
  );

  // no url = internal project, shown without a link
  if (!project.url) {
    return <article className="project project--static reveal">{content}</article>;
  }

  return (
    <a
      className="project reveal"
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${project.title}`}
    >
      {content}
    </a>
  );
}
