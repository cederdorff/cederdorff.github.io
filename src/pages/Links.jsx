import { useEffect } from "react";
import LinkTree from "../components/links/LinkTree";
import BrandLockup from "../components/ui/BrandLockup";

const ICONS_URL = "https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.min.css";
const ICONS_INTEGRITY =
  "sha512-JApjWRnfonFeGBY7t4yq8SWr1A6xVYEJgO/UMIYONxaR3C9GETKUg0LharbJncEzJF5Nmiv+Pr5QNulr81LjGQ==";

export default function Links() {
  // Ionicons is only used on this page
  useEffect(() => {
    if (document.querySelector(`link[href="${ICONS_URL}"]`)) return;

    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = ICONS_URL;
    link.integrity = ICONS_INTEGRITY;
    link.crossOrigin = "anonymous";
    link.referrerPolicy = "no-referrer";
    document.head.append(link);
  }, []);

  return (
    <main className="links">
      <BrandLockup className="links-brand" href="/" label="Go to Rasmus Cederdorff's website" />
      <figure>
        <img src="/img/new/race-avatar.webp" width="320" height="320" alt="Rasmus Cederdorff" />
      </figure>
      <header>
        <h1>Rasmus Cederdorff</h1>
        <p>Senior Lecturer · Web App Developer</p>
      </header>

      <LinkTree />
    </main>
  );
}
