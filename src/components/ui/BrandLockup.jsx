export default function BrandLockup({ className = "", href = "#top", label = "Rasmus Cederdorff, home" }) {
  const classes = ["brand-lockup", className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href} aria-label={label}>
      <span className="wordmark">
        <img src="/img/logo192.webp" alt="" />
      </span>
      <span>Cederdorff</span>
    </a>
  );
}
