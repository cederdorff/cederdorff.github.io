const projects = [
  {
    title: "Vestjydske Kunstnere",
    type: "Art association · Website",
    description:
      "A new digital home for a West Jutland artists’ association — bringing its artists, work and exhibitions together in one clear, contemporary space.",
    image: "/img/projects/vestjydske-kunstnere.webp",
    url: "https://vestjydskekunstnere.dk/",
    imagePosition: "center"
  },
  {
    title: "Paul M. Cederdorff",
    type: "Personal archive · Digital storytelling",
    description:
      "A living memorial and archive built around a life in art, teaching and culture. A deeply personal project shaped through stories, artworks and family material.",
    image: "/img/projects/paul-cederdorff.jpg",
    url: "https://cederdorff.dk/",
    imagePosition: "center 42%"
  },
  {
    title: "Spangsgaard",
    type: "Hospitality · Website",
    description:
      "A quiet, image-led website for a bed & breakfast near Odense — designed to let the place, atmosphere and personal hospitality speak for themselves.",
    image: "/img/projects/spangsgaard.webp",
    url: "https://spangsgaard.com/",
    imagePosition: "center"
  }
];

const archive = [
  { name: "House of Vincent", detail: "Shopify webshop", url: "https://houseofvincent.com/" },
  { name: "BouMatic / BouTime", detail: "Website, web app & mobile app", url: "https://boumatic.dk/" },
  { name: "Café Sidewalk", detail: "Website", url: "https://sidewalk.dk/" },
  { name: "Karolines Hus", detail: "Gallery website", url: "https://karolineshus.dk/" }
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Rasmus Cederdorff, home">
          <img src="/img/logo192.webp" alt="" />
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Aarhus, Denmark · 2026</p>
          <h1 className="race-word" aria-label="RACE">
            <span>RA</span>
            <span>
              CE<span className="accent">.</span>
            </span>
          </h1>
          <p className="race-identity">
            <span className="race-full-name">
              <strong>Ra</strong>smus <strong>Ce</strong>derdorff
            </span>
            <span className="race-nickname">Most people call me RACE.</span>
          </p>
          <p className="hero-intro">
            I teach, design and build for the web — and stay curious about everything in between.
          </p>
          <a className="text-link" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="hero-portrait">
          <img src="/img/new/race_2024.jpg" alt="Portrait of Rasmus Cederdorff in a yellow shirt" />
          <figcaption>Developer · Senior Lecturer · Maker</figcaption>
        </figure>
      </header>

      <section className="statement" id="about" aria-labelledby="about-heading">
        <p className="section-label">01 / About</p>
        <div>
          <h2 id="about-heading">Digital things are best made with people in mind.</h2>
          <p className="statement-copy">
            I’m a senior lecturer at Business Academy Aarhus and a JavaScript developer with an eye
            for UI and UX. Most days, I help students turn ideas into thoughtful digital products.
            Every now and then, I make something of my own or build a website for a project I care
            about.
          </p>
        </div>
      </section>

      <section className="practice" aria-label="What I do">
        <article>
          <p className="practice-number">01</p>
          <h3>Teaching</h3>
          <p>
            Frontend development, JavaScript, React, UI, UX, design thinking and mobile app
            development.
          </p>
        </article>
        <article>
          <p className="practice-number">02</p>
          <h3>Building</h3>
          <p>
            Useful, accessible websites and digital experiences — from the first sketch to the
            finished product.
          </p>
        </article>
        <article>
          <p className="practice-number">03</p>
          <h3>Exploring</h3>
          <p>
            New tools, creative code and small experiments that keep me learning, questioning and
            making.
          </p>
        </article>
      </section>

      <section className="work" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="section-label">02 / Selected work</p>
          <h2 id="work-heading">Recently made</h2>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <a
              className="project"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              aria-label={`Visit ${project.title}`}>
              <figure>
                <img
                  src={project.image}
                  alt=""
                  style={{ objectPosition: project.imagePosition }}
                />
              </figure>
              <div className="project-copy">
                <div className="project-meta">
                  <p>{project.type}</p>
                  <p>{String(index + 1).padStart(2, "0")}</p>
                </div>
                <h3>
                  {project.title} <Arrow />
                </h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="archive" aria-labelledby="archive-heading">
        <div className="archive-intro">
          <p className="section-label">03 / Earlier work</p>
          <h2 id="archive-heading">A few more things I’ve helped bring to life.</h2>
        </div>
        <div className="archive-list">
          {archive.map(item => (
            <a href={item.url} target="_blank" rel="noreferrer" key={item.name}>
              <span>{item.name}</span>
              <span>{item.detail}</span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="personal-note" aria-label="Personal note">
        <figure>
          <img src="/img/new/race.jpg" alt="Black and white portrait of Rasmus Cederdorff" />
        </figure>
        <div>
          <p className="section-label">Beyond the screen</p>
          <blockquote>
            “I like good ideas, kind people, bold details and making things that feel like they
            belong.”
          </blockquote>
          <p>
            You’ll also find glimpses of everyday life, family, colour and whatever currently has
            my attention on Instagram.
          </p>
          <a
            className="text-link"
            href="https://www.instagram.com/cederdorff/"
            target="_blank"
            rel="noreferrer">
            Follow along on Instagram <Arrow />
          </a>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <p className="section-label">04 / Contact</p>
        <h2 id="contact-heading">
          Let’s keep in
          <br />
          touch<span className="accent">.</span>
        </h2>
        <div className="contact-bottom">
          <p>
            I’m not running a freelance studio, but I’m always happy to hear about an interesting
            idea, a shared curiosity or a good conversation.
          </p>
          <div className="contact-links">
            <a href="mailto:rasmus@cederdorff.com">Email <Arrow /></a>
            <a href="https://www.linkedin.com/in/cederdorff/" target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
            <a href="https://github.com/cederdorff" target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-logo" href="#top" aria-label="Rasmus Cederdorff, home">
          <img src="/img/logo_inverted.webp" alt="Cederdorff" />
        </a>
        <p>Teaching, building & exploring · Aarhus</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
