import { useEffect } from "react";
import AboutSection from "../components/about/AboutSection";
import PersonalSection from "../components/about/PersonalSection";
import ContactSection from "../components/contact/ContactSection";
import HeroSection from "../components/hero/HeroSection";
import SiteFooter from "../components/layout/SiteFooter";
import SiteNav from "../components/layout/SiteNav";
import TeachingResources from "../components/teaching/TeachingResources";
import TeachingSection from "../components/teaching/TeachingSection";
import ArchiveSection from "../components/work/ArchiveSection";
import WorkBanner from "../components/work/WorkBanner";
import WorkSection from "../components/work/WorkSection";
import useActiveSection from "../hooks/useActiveSection";
import useScrollReveal from "../hooks/useScrollReveal";

const SECTION_IDS = ["about", "teaching", "work", "contact"];

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);
  useScrollReveal();

  // scroll to /#section on first load (the section isn't rendered yet when the browser tries)
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));

    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteNav activeSection={activeSection} />
      <main id="main-content" tabIndex="-1">
        <HeroSection />

        <div id="about">
          <AboutSection />
          <PersonalSection />
        </div>

        <div id="teaching">
          <TeachingSection />
          <TeachingResources />
          <WorkBanner />
        </div>

        <div id="work">
          <WorkSection />
          <ArchiveSection />
        </div>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
