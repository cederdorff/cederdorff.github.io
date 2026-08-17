import { useEffect, useState } from "react";

const projects = [
  {
    title: "Vestjydske Kunstnere",
    type: "Artist association · React platform",
    role: "UX/UI, React development & deployment",
    description:
      "I rebuilt the association’s former website with React and React Router. The main challenge was giving each artist the same framework without making their work feel the same. I also set up the navigation, GitHub Pages deployment and a WebP image workflow.",
    image: "/img/projects/vestjydske-kunstnere-site.webp",
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
      "This personal archive brings together Paul M. Cederdorff’s art, stories and work as a teacher. I researched, designed and built it using artworks and material from the family archive.",
    image: "/img/projects/paul-cederdorff-site.webp",
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
      "For this bed & breakfast near Odense, I kept the interface quiet and let the photographs do most of the work. The site focuses on the place, the atmosphere and the practical details guests need.",
    image: "/img/projects/spangsgaard-site.webp",
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
      "I rebuilt the gallery’s website on Fur with React, Vite and React Router. Exhibitions, artists and visitor information now have their own clear structure, including dedicated artist pages and an optimized WebP image workflow.",
    image: "/img/projects/karolines-hus-site.webp",
    url: "https://karolineshus.dk/",
    imagePosition: "center",
    imageFit: "contain",
    figureClass: "project-figure--browser"
  }
];

const archive = [
  {
    name: "House of Vincent",
    detail: "Shopify store",
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
    <>
    <a className="skip-link" href="#main-content">
      Skip to main content
    </a>
    <main id="main-content" tabIndex="-1">
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
            I teach JavaScript and web development — and still love building for the web.
          </p>
          <a className="text-link" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="hero-portrait">
          <img src="/img/new/race_2024.webp" alt="Portrait of Rasmus Cederdorff in a yellow shirt" />
        </figure>
      </header>

      <div className="chapter" id="about">
      <section className="statement" aria-labelledby="about-heading">
        <p className="section-label">01 / About</p>
        <div className="statement-body">
          <h2 id="about-heading">Code is easier to learn when you have something real to build.</h2>
          <div className="statement-details">
            <p className="statement-copy">
              I’m a senior lecturer at Business Academy Aarhus and a JavaScript developer with an eye for UI and UX.
              Most days, I help students turn ideas into working digital products. Alongside teaching, I build my own
              experiments and create digital projects I care about.
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
          <img src="/img/new/race.webp" alt="Black and white portrait of Rasmus Cederdorff" />
        </figure>
        <div>
          <p className="section-label">Who I am</p>
          <h2 id="who-i-am-heading">Husband, dad and always making something.</h2>
          <div className="personal-copy">
            <p>
              Outside work, I’m a husband and dad, and there is usually another renovation or interior project underway
              at home. That interest even took us onto the Danish TV programme Nybyggerne. I share parts of that life on
              Instagram.
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
          <h2 id="practice-heading">Most days I teach. Some days I build.</h2>
          <div className="practice-copy">
            <p>
              A good learning environment starts with feeling safe enough to ask questions. There are no stupid
              questions in my classroom, and getting something wrong is part of learning.
            </p>
            <p>
              I believe in a hands-on approach: write the code, build something, break it and try again. Working as an
              external examiner across Denmark also gives me a useful look at how other schools approach the same
              subjects.
            </p>
          </div>
          <ul className="practice-list" aria-label="What my work consists of">
            <li>Teaching JavaScript</li>
            <li>Designing & building web apps</li>
            <li>Small experiments</li>
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
          <h2 id="work-heading">
            <span>Recent</span>{" "}
            <span>work</span>
          </h2>
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
          <h2 id="teaching-work-heading">The examples from class live on GitHub.</h2>
          <p>
            I build exercises and starter projects so students have something concrete to explore, break and rebuild.
            Much of the material is shared openly on GitHub.
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
          <h2 id="archive-heading">Apps, shops and client work from earlier years.</h2>
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
                  designed and developed the original web and mobile app. The current version uses React Router 7,
                  TypeScript and Tailwind CSS.
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
            I don’t run a freelance studio, but you’re always welcome to write about a project—or about web development,
            design or teaching.
          </p>
          <div className="contact-links">
            <a href="mailto:rasmus@cederdorff.com">
              Email <Arrow />
            </a>
            <a href="https://www.linkedin.com/in/cederdorff/" target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
            <a href="https://www.instagram.com/cederdorff/" target="_blank" rel="noreferrer">
              Instagram <Arrow />
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
    </>
  );
}
