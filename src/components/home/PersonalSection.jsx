import Arrow from "../ui/Arrow";

export default function PersonalSection() {
  return (
    <section className="personal-note reveal" aria-labelledby="who-i-am-heading">
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
  );
}
