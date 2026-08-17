import { archiveLinks } from "../../data/homeContent";
import Arrow from "../ui/Arrow";
import ArchiveFeature from "./ArchiveFeature";

export default function ArchiveSection() {
  return (
    <section className="archive" aria-labelledby="archive-heading">
      <div className="archive-intro">
        <p className="section-label">Earlier work</p>
        <h2 id="archive-heading">Apps, shops and client work from earlier years.</h2>
      </div>
      <div className="archive-content">
        <div className="archive-features">
          <ArchiveFeature
            image="/img/thebigfridge_web.webp"
            imageAlt="The BIG Fridge logo"
            role="Food sharing · Mobile app"
            title="theBIGfridge"
          >
            A mobile app created to reduce food waste by making it easier for people to share surplus food locally. I
            worked across product design and development, building the app with Ionic, Angular, JavaScript and Firebase.
          </ArchiveFeature>
          <ArchiveFeature
            className="archive-feature--boutime"
            image="/img/boutime_web.webp"
            imageAlt="BouTime displayed on a tablet"
            role="Work management · Web & mobile app"
            title="BouTime"
          >
            A shared tool for BouMatic employees covering time registration, absence, calendars and contacts. I designed
            and developed the original web and mobile app. The current version uses React Router 7, TypeScript and
            Tailwind CSS.
          </ArchiveFeature>
        </div>
        <div className="archive-list">
          {archiveLinks.map((item) => (
            <a href={item.url} target="_blank" rel="noreferrer" key={item.name}>
              <span>{item.name}</span>
              <span>{item.detail}</span>
              <Arrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
