import Arrow from "../ui/Arrow";

export default function ArchiveFeature({ className = "", image, imageAlt, role, title, url, children }) {
  const classes = ["archive-feature", className].filter(Boolean).join(" ");

  return (
    <article className={classes}>
      <figure>
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      </figure>
      <div>
        <p className="project-role">{role}</p>
        <h3>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {title} <Arrow />
            </a>
          ) : (
            title
          )}
        </h3>
        <p>{children}</p>
      </div>
    </article>
  );
}
