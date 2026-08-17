import LinkTree from "../components/LinkTree";

export default function Links() {
  return (
    <section className="links">
      <a className="brand-lockup links-brand" href="/" aria-label="Go to Rasmus Cederdorff's website">
        <span className="wordmark">
          <img src="/img/logo192.webp" alt="" />
        </span>
        <span>Cederdorff</span>
      </a>
      <figure>
        <img src="/img/new/race.webp" alt="Rasmus Cederdorff" />
      </figure>
      <header>
        <h1>Rasmus Cederdorff</h1>
        <p>Senior Lecturer · Web App Developer</p>
      </header>

      <LinkTree />
    </section>
  );
}
