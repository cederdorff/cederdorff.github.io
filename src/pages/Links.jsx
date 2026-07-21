import LinkTree from "../components/LinkTree";

export default function Links() {
  return (
    <section className="links">
      <a className="links-logo" href="/" aria-label="Go to Rasmus Cederdorff's website">
        <img src="/img/logo_inverted.webp" alt="Cederdorff" />
      </a>
      <figure>
        <img src="/img/new/race.jpg" alt="Rasmus Cederdorff" />
      </figure>
      <header>
        <h1>Rasmus Cederdorff</h1>
        <p>Developer · Senior Lecturer · Maker</p>
      </header>

      <LinkTree />
    </section>
  );
}
