import Arrow from "../ui/Arrow";

export default function PersonalSection() {
  return (
    <section className="personal-note reveal" aria-labelledby="who-i-am-heading">
      <figure>
        <picture>
          <source media="(max-width: 560px)" srcSet="/img/new/race-portrait.webp" />
          <img
            src="/img/new/race.webp"
            srcSet="/img/new/race-1440.webp 1440w, /img/new/race.webp 2880w"
            sizes="(max-width: 900px) 135vw, 50vw"
            loading="lazy"
            decoding="async"
            alt="Black and white portrait of Rasmus Cederdorff"
          />
        </picture>
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
  );
}
