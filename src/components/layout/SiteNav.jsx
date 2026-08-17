import BrandLockup from "../ui/BrandLockup";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" }
];

export default function SiteNav({ activeSection }) {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <BrandLockup />
      <div className="nav-links">
        {links.map(({ id, label }) => {
          const isActive = activeSection === id;

          return (
            <a
              href={`#${id}`}
              className={isActive ? "is-active" : undefined}
              aria-current={isActive ? "location" : undefined}
              key={id}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
