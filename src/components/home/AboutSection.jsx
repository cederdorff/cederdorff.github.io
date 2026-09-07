export default function AboutSection() {
  return (
    <section className="statement" aria-labelledby="about-heading">
      <p className="section-label">01 / About</p>
      <div className="accent-shape accent-shape--ring" aria-hidden="true"></div>
      <div className="statement-body reveal">
        <h2 id="about-heading">Code is easier to learn when you have something real to build.</h2>
        <div className="statement-details">
          <p className="statement-copy">
            I’m a senior lecturer at Business Academy Aarhus and a JavaScript developer with an eye for UI and UX. Most
            days, I help students turn ideas into working digital products. Alongside teaching, I build my own
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
  );
}
