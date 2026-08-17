export default function HeroSection() {
  return (
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
  );
}
