import { archiveLinks } from "../../data/homeContent";
import Arrow from "../ui/Arrow";
import ArchiveFeature from "./ArchiveFeature";

export default function ArchiveSection() {
  return (
    <section className="archive" aria-labelledby="archive-heading">
      <div className="archive-intro reveal">
        <p className="section-label">Earlier work</p>
        <h2 id="archive-heading">Apps, shops and client work from earlier years.</h2>
      </div>
      <div className="archive-content">
        <div className="archive-features">
          <ArchiveFeature
            className="reveal"
            image="/img/thebigfridge_web.webp"
            imageAlt="The BIG Fridge logo"
            role="Food sharing · Mobile app"
            title="theBIGfridge"
          >
            A mobile app created to reduce food waste by making it easier for people to share surplus food locally. I
            worked across product design and development, building the app with Ionic, Angular, JavaScript and Firebase.
          </ArchiveFeature>
          <ArchiveFeature
            className="archive-feature--reverse reveal"
            image="/img/houseofvincent.webp"
            imageAlt="A hand wearing a House of Vincent watch, holding a cup of coffee"
            role="Jewellery · Shopify store"
            title="House of Vincent"
            url="https://houseofvincent.com/"
          >
            The online store for the Danish jewellery brand House of Vincent, built on Shopify.
          </ArchiveFeature>
        </div>
        <div className="archive-list">
          {archiveLinks.map((item) => (
            <a className="reveal" href={item.url} target="_blank" rel="noreferrer" key={item.name}>
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
