import Arrow from "../ui/Arrow";

const contactLinks = [
  { label: "Email", url: "mailto:rasmus@cederdorff.dk" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/cederdorff/" },
  { label: "Instagram", url: "https://www.instagram.com/cederdorff/" },
  { label: "GitHub", url: "https://github.com/cederdorff" }
];

export default function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="reveal">
        <p className="section-label">04 / Contact</p>
        <h2 id="contact-heading">
          Let’s keep in <br className="contact-break" />
          touch<span className="accent">.</span>
        </h2>
      </div>
      <div className="contact-bottom">
        <p>
          I don’t run a freelance studio, but you’re always welcome to write to me about a project, or about web
          development, design or teaching.
        </p>
        <div className="contact-links">
          {contactLinks.map((link) => {
            const isExternal = link.url.startsWith("http");

            return (
              <a
                className="reveal"
                href={link.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                key={link.label}
              >
                {link.label} <Arrow />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
