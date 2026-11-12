import { useEffect, useState } from "react";
import useCyclingText from "../../hooks/useCyclingText";
import { ACCENTS, DEFAULT_SETTINGS } from "../../data/playground";
import CodePanel from "./CodePanel";
import GlyphField from "./GlyphField";

const ROLES = ["Senior Lecturer", "Web App Developer", "Dad"];

export default function HeroSection() {
  const role = useCyclingText(ROLES);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const accentColor = ACCENTS.find((item) => item.name === settings.accent).value;

  // The accent is a custom property on the root, so one value restyles the whole page.
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accentColor);

    return () => document.documentElement.style.removeProperty("--accent");
  }, [accentColor]);

  const updateSettings = (change) => setSettings((current) => ({ ...current, ...change }));

  return (
    <header className="hero" id="top">
      <GlyphField count={settings.glyphs} gravity={settings.gravity} accent={accentColor} />
      <div className="hero-copy">
        <p className="eyebrow">
          <span key={role} className="eyebrow-role">
            {role}
          </span>{" "}
          · Holstebro
        </p>
        <h1>
          Rasmus
          <br />
          Cederdorff<span className="accent">.</span>
        </h1>
        <p className="hero-intro">
          Hi, I’m Rasmus. I teach JavaScript and web development, and I still love building things for the web.
        </p>
        <div className="hero-links">
          <a className="text-link" href="#teaching">
            How I teach <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="hero-media">
        <figure className="hero-portrait">
          <img
            src="/img/new/race_2024.webp"
            srcSet="/img/new/race_2024-1200.webp 1200w, /img/new/race_2024.webp 2400w"
            sizes="(max-width: 900px) 100vw, 46vw"
            fetchPriority="high"
            alt="Portrait of Rasmus Cederdorff in a yellow shirt"
          />
        </figure>
        <div className="hero-code-float">
          <CodePanel settings={settings} onChange={updateSettings} />
        </div>
      </div>
    </header>
  );
}
