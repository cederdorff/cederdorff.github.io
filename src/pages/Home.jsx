import { useEffect, useState } from "react";

const projects = [
  {
    title: "Vestjydske Kunstnere",
    type: "Artist association · React platform",
    role: "UX/UI, React development & deployment",
    description:
      "A complete modernization of the association’s former website, built with React and React Router and deployed via GitHub Pages. The challenge was to give many different artists an equal, consistent framework while keeping the art in focus, supported by clear navigation and an optimized WebP image workflow.",
    image: "/img/projects/vestjydske-kunstnere-browser.webp",
    url: "https://vestjydskekunstnere.dk/",
    imagePosition: "center",
    imageFit: "contain",
    figureClass: "project-figure--browser"
  },
  {
    title: "Paul M. Cederdorff",
    type: "Personal archive · Digital storytelling",
    role: "Research, storytelling, design & development",
    description:
      "A living memorial and archive built around a life in art, teaching and culture. A deeply personal project shaped through stories, artworks and family material.",
    image: "/img/projects/paul-cederdorff-browser.webp",
    url: "https://cederdorff.dk/",
    imagePosition: "center",
    imageFit: "contain",
    figureClass: "project-figure--browser"
  },
  {
    title: "Spangsgaard",
    type: "Hospitality · Website",
    role: "Design & development",
    description:
      "A quiet, image-led website for a bed & breakfast near Odense — designed to let the place, atmosphere and personal hospitality speak for themselves.",
    image: "/img/projects/spangsgaard-browser.webp",
    url: "https://spangsgaard.com/",
    imagePosition: "center",
    imageFit: "contain",
    figureClass: "project-figure--browser"
  },
  {
    title: "Karolines Hus",
    type: "Gallery · React platform",
    role: "UX/UI, React development & modernization",
    description:
      "A modern rebuild of the gallery’s website on Fur, created with React, Vite and React Router. Exhibitions, artists and practical information are brought into a clear structure, with dedicated artist pages, optimized WebP imagery and a focus on performance.",
    image: "/img/projects/karolines-hus-browser.webp",
    url: "https://karolineshus.dk/",
    imagePosition: "center",
    imageFit: "contain",
    figureClass: "project-figure--browser"
  }
];

const archive = [
  {
    name: "House of Vincent",
    detail: "Shopify webshop",
    url: "https://houseofvincent.com/"
  },
  {
    name: "BouMatic",
    detail: "Website",
    url: "https://boumatic.dk/"
  },
  { name: "Café Sidewalk", detail: "Website", url: "https://sidewalk.dk/" }
];

const teachingResources = [
  {
    name: "Portfolio on GitHub Pages",
    detail: "React template, routing & deployment",
    url: "https://github.com/cederdorff/username.github.io"
  },
  {
    name: "Post App + Supabase",
    detail: "React CRUD, routing & backend",
    url: "https://github.com/cederdorff/post-app-supabase"
  },
  {
    name: "Codeagram",
    detail: "Components, state & events in React",
    url: "https://github.com/cederdorff/codeagram"
  },
  {
    name: "JavaScript Movie App",
    detail: "DOM, data, fetch & interaction",
    url: "https://github.com/cederdorff/js-movie-app"
  },
  {
    name: "React Products",
    detail: "A practical React product exercise",
    url: "https://github.com/cederdorff/react-products"
  },
  {
    name: "Figma to React",
    detail: "Design-to-code lessons & course material",
    url: "https://github.com/cederdorff/figma-to-react"
  },
  {
    name: "Webcam-controlled game",
    detail: "React, TensorFlow.js & browser interaction",
    url: "https://github.com/cederdorff/webcam-controlled-game"
  },
  {
    name: "Dandelion Field",
    detail: "Hand tracking & creative coding in React",
    url: "https://github.com/cederdorff/dandelion-experiment"
  }
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const readingLine = window.scrollY + window.innerHeight * 0.36;
      let currentSection = "";

      for (const sectionId of ["about", "work", "contact"]) {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= readingLine) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

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
          <a
            href="#about"
            className={activeSection === "about" ? "is-active" : undefined}
            aria-current={activeSection === "about" ? "location" : undefined}
          >
            About
          </a>
          <a
            href="#work"
            className={activeSection === "work" ? "is-active" : undefined}
            aria-current={activeSection === "work" ? "location" : undefined}
          >
            Work
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "is-active" : undefined}
            aria-current={activeSection === "contact" ? "location" : undefined}
          >
            Contact
          </a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Senior Lecturer · Web App Developer · Holstebro</p>
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
        </figure>
      </header>

      <div className="chapter" id="about">
      <section className="statement" aria-labelledby="about-heading">
        <p className="section-label">01 / About</p>
        <div className="statement-body">
          <h2 id="about-heading">Digital things are best made with people in mind.</h2>
          <div className="statement-details">
            <p className="statement-copy">
              I’m a senior lecturer at Business Academy Aarhus and a JavaScript developer with an eye for UI and UX.
              Most days, I help students turn ideas into thoughtful digital products. Every now and then, I build
              something of my own or make a website for a project I care about.
            </p>
            <dl className="about-facts">
              <div>
                <dt>Based in</dt>
                <dd>Holstebro, Denmark</dd>
              </div>
              <div>
                <dt>At work</dt>
                <dd>Business Academy Aarhus</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>JavaScript, web development & learning</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="personal-note" aria-labelledby="who-i-am-heading">
        <figure>
          <img src="/img/new/race.jpg" alt="Black and white portrait of Rasmus Cederdorff" />
        </figure>
        <div>
          <p className="section-label">Who I am</p>
          <h2 id="who-i-am-heading">Husband, dad and always making something.</h2>
          <div className="personal-copy">
            <p>
              I’m Rasmus. I care about clear ideas, thoughtful details and creating space for people to learn, ask
              questions and try things out.
            </p>
            <p>
              Outside work, I’m a husband and dad. At home, there is always another renovation or interior project
              underway, and that passion even took us onto the Danish TV programme Nybyggerne. Instagram is where I share
              glimpses of it all.
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

      <section className="practice-section" aria-labelledby="practice-heading">
        <p className="section-label">How I work</p>
        <div className="practice-body">
          <h2 id="practice-heading">Teaching, building and staying curious.</h2>
          <div className="practice-copy">
            <p>
              Most of my time is spent teaching web development and JavaScript at Business Academy Aarhus. Serving as
              an external examiner across Denmark keeps me inspired, up to date and often reassured that we are on the
              right track.
            </p>
            <p>Alongside that, I build selected web projects and keep experimenting with new tools and ideas.</p>
          </div>
          <ul className="practice-list" aria-label="What my work consists of">
            <li>
              <span>01</span>
              Web development & JavaScript
            </li>
            <li>
              <span>02</span>
              Selected digital projects
            </li>
            <li>
              <span>03</span>
              Tools, ideas & experiments
            </li>
          </ul>
        </div>
      </section>
      <figure className="work-banner">
        <img
          src="/img/banner_web.webp"
          alt="A desk with a laptop, ruler, coffee and scattered letterforms"
        />
      </figure>
      </div>

      <div className="chapter" id="work">
      <section className="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <p className="section-label">02 / Selected work</p>
          <h2 id="work-heading">Recent work</h2>
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
              <figure className={project.figureClass}>
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

      <section className="teaching-work" aria-labelledby="teaching-work-heading">
        <div className="teaching-intro">
          <p className="section-label">Teaching in practice</p>
          <h2 id="teaching-work-heading">What I teach also lives in code.</h2>
          <p>
            I build exercises, starter projects and small experiments that give students something concrete to
            explore, break and rebuild. Much of it is shared openly on GitHub.
          </p>
        </div>
        <div className="teaching-list">
          {teachingResources.map((resource) => (
            <a href={resource.url} target="_blank" rel="noreferrer" key={resource.name}>
              <span>{resource.name}</span>
              <span>{resource.detail}</span>
              <Arrow />
            </a>
          ))}
          <a
            className="teaching-all"
            href="https://github.com/cederdorff?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <span>More on GitHub</span>
            <span>Browse all repositories</span>
            <Arrow />
          </a>
        </div>
      </section>

      <section className="archive" aria-labelledby="archive-heading">
        <div className="archive-intro">
          <p className="section-label">Earlier work</p>
          <h2 id="archive-heading">A few more things I’ve helped bring to life.</h2>
        </div>
        <div className="archive-content">
          <div className="archive-features">
            <article className="archive-feature">
              <figure>
                <img src="/img/thebigfridge_web.webp" alt="The BIG Fridge logo" />
              </figure>
              <div>
                <p className="project-role">Food sharing · Mobile app</p>
                <h3>theBIGfridge</h3>
                <p>
                  A mobile app created to reduce food waste by making it easier for people to share surplus food
                  locally. I worked across product design and development, building the app with Ionic, Angular,
                  JavaScript and Firebase.
                </p>
              </div>
            </article>
            <article className="archive-feature archive-feature--boutime">
              <figure>
                <img src="/img/boutime_web.webp" alt="BouTime displayed on a tablet" />
              </figure>
              <div>
                <p className="project-role">Work management · Web & mobile app</p>
                <h3>BouTime</h3>
                <p>
                  A shared tool for BouMatic employees covering time registration, absence, calendars and contacts. I
                  designed and developed the original web and mobile app, and recently upgraded it with React Router
                  7, TypeScript and Tailwind CSS.
                </p>
              </div>
            </article>
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
        </div>
      </section>
      </div>

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <p className="section-label">03 / Contact</p>
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
        <a className="brand-lockup footer-brand" href="#top" aria-label="Rasmus Cederdorff, home">
          <span className="wordmark">
            <img src="/img/logo192.webp" alt="" />
          </span>
          <span>Cederdorff</span>
        </a>
        <p>Holstebro, Denmark</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
