import LinkTree from "../components/links/LinkTree";
import BrandLockup from "../components/ui/BrandLockup";

export default function Links() {
  return (
    <main className="links">
      <BrandLockup className="links-brand" href="/" label="Go to Rasmus Cederdorff's website" />
      <figure>
        <img src="/img/new/race.webp" alt="Rasmus Cederdorff" />
      </figure>
      <header>
        <h1>Rasmus Cederdorff</h1>
        <p>Senior Lecturer · Web App Developer</p>
      </header>

      <LinkTree />
    </main>
  );
}
