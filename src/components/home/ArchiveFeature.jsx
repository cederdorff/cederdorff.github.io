export default function ArchiveFeature({ className = "", image, imageAlt, role, title, children }) {
  const classes = ["archive-feature", className].filter(Boolean).join(" ");

  return (
    <article className={classes}>
      <figure>
        <img src={image} alt={imageAlt} />
      </figure>
      <div>
        <p className="project-role">{role}</p>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}
