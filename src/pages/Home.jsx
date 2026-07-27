const projects = [
  {
    title: "Vestjydske Kunstnere",
    type: "Art association · Website",
    role: "Concept, design & development",
    description:
      "A new digital home for a West Jutland artists’ association — bringing its artists, work and exhibitions together in one clear, contemporary space.",
    image: "/img/projects/vestjydske-kunstnere.webp",
    url: "https://vestjydskekunstnere.dk/",
    imagePosition: "center",
    imageFit: "contain",
    imageClass: "project-image--art"
  },
  {
    title: "Paul M. Cederdorff",
    type: "Personal archive · Digital storytelling",
    role: "Research, storytelling, design & development",
    description:
      "A living memorial and archive built around a life in art, teaching and culture. A deeply personal project shaped through stories, artworks and family material.",
    image: "/img/projects/paul-cederdorff.jpg",
    url: "https://cederdorff.dk/",
    imagePosition: "center 42%",
    imageFit: "cover"
  },
  {
    title: "Spangsgaard",
    type: "Hospitality · Website",
    role: "Design & development",
    description:
      "A quiet, image-led website for a bed & breakfast near Odense — designed to let the place, atmosphere and personal hospitality speak for themselves.",
    image: "/img/projects/spangsgaard.webp",
    url: "https://spangsgaard.com/",
    imagePosition: "center",
    imageFit: "cover"
  }
];

const archive = [
  {
    name: "House of Vincent",
    detail: "Shopify webshop",
    url: "https://houseofvincent.com/"
  },
  {
    name: "BouMatic / BouTime",
    detail: "Website, web app & mobile app",
    url: "https://boumatic.dk/"
  },
  { name: "Café Sidewalk", detail: "Website", url: "https://sidewalk.dk/" },
  {
    name: "Karolines Hus",
    detail: "Gallery website",
    url: "https://karolineshus.dk/"
  }
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand-lockup" href="#top" aria-label="Rasmus Cederdorff, home">
          <span className="wordmark">
            <img src="/img/logo192.webp" alt="" />
          </span>
          <span>Cederdorff</span>
        </a>
        <div className="nav-links">
          <a href="#who-i-am">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Senior Lecturer · Developer · Aarhus</p>
          <h1>
            Rasmus
            <br />
            Cederdorff<span className="accent">.</span>
          </h1>
          <p className="hero-intro">
            I teach, design and build for the web — and stay curious about everything in between.
          </p>
          <a className="text-link" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="hero-portrait">
          <img src="/img/new/race_2024.jpg" alt="Portrait of Rasmus Cederdorff in a yellow shirt" />
          <figcaption>
            <span>Developer</span>
            <span>Senior Lecturer</span>
            <span>Maker</span>
          </figcaption>
        </figure>
      </header>

      <section className="statement" id="about" aria-labelledby="about-heading">
        <p className="section-label">01 / About</p>
        <div className="statement-body">
          <h2 id="about-heading">I teach people how to make digital products — and still make them myself.</h2>
          <div className="statement-details">
            <p className="statement-copy">
              I’m a senior lecturer at Business Academy Aarhus and a JavaScript developer with an eye for UI and UX.
              Most days, I help students turn ideas into thoughtful digital products. Every now and then, I build
              something of my own or make a website for a project I care about.
            </p>
            <dl className="about-facts">
              <div>
                <dt>Based in</dt>
                <dd>Aarhus, Denmark</dd>
              </div>
              <div>
                <dt>At work</dt>
                <dd>Business Academy Aarhus</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>JavaScript, UI, UX & learning</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="practice-section" aria-labelledby="practice-heading">
        <div className="practice-heading">
          <p className="section-label">What I spend my time on</p>
          <h2 id="practice-heading">Teaching keeps me sharp. Making keeps me curious.</h2>
        </div>
        <div className="practice">
          <article>
            <p className="practice-number">01</p>
            <h3>Teaching</h3>
            <p>Frontend development, JavaScript, React, UI, UX, design thinking and mobile app development.</p>
          </article>
          <article>
            <p className="practice-number">02</p>
            <h3>Building</h3>
            <p>Useful, accessible websites and digital experiences — from the first sketch to the finished product.</p>
          </article>
          <article>
            <p className="practice-number">03</p>
            <h3>Exploring</h3>
            <p>New tools, creative code and small experiments that keep me learning, questioning and making.</p>
          </article>
        </div>
      </section>

      <section className="personal-note" id="who-i-am" aria-labelledby="who-i-am-heading">
        <figure>
          <img src="/img/new/race.jpg" alt="Black and white portrait of Rasmus Cederdorff" />
        </figure>
        <div>
          <p className="section-label">02 / Who I am</p>
          <h2 id="who-i-am-heading">A teacher, developer, dad and incurably curious maker.</h2>
          <div className="personal-copy">
            <p>
              I’m Rasmus. I care about clear ideas, thoughtful details and creating spaces where people feel comfortable
              learning, asking questions and trying things out.
            </p>
            <p>
              Technology is my material, but people are the point. That is true when I’m teaching a class, shaping an
              interface or building a small project for someone I care about.
            </p>
            <p>
              Outside work, I’m a dad and a curious human. Instagram is where I share glimpses of everyday life, family,
              colour and whatever currently has my attention.
            </p>
          </div>
          <div className="personal-links">
            <a className="text-link" href="https://www.instagram.com/cederdorff/" target="_blank" rel="noreferrer">
              Instagram <Arrow />
            </a>
            <a className="text-link" href="https://www.linkedin.com/in/cederdorff/" target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="section-label">03 / Selected work</p>
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
              aria-label={`Visit ${project.title}`}
            >
              <figure>
                <img
                  src={project.image}
                  alt=""
                  className={project.imageClass}
                  style={{
                    objectPosition: project.imagePosition,
                    objectFit: project.imageFit
                  }}
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
          ))}
        </div>
      </section>

      <section className="archive" aria-labelledby="archive-heading">
        <div className="archive-intro">
          <p className="section-label">04 / Earlier work</p>
          <h2 id="archive-heading">A few more things I’ve helped bring to life.</h2>
        </div>
        <div className="archive-list">
          {archive.map((item) => (
            <a href={item.url} target="_blank" rel="noreferrer" key={item.name}>
              <span>{item.name}</span>
              <span>{item.detail}</span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <p className="section-label">05 / Contact</p>
        <h2 id="contact-heading">
          Let’s keep in
          <br />
          touch<span className="accent">.</span>
        </h2>
        <div className="contact-bottom">
          <p>
            I’m not running a freelance studio, but I’m always happy to hear about an interesting idea, a shared
            curiosity or a good conversation.
          </p>
          <div className="contact-links">
            <a href="mailto:rasmus@cederdorff.com">
              Email <Arrow />
            </a>
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
