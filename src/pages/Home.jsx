import AboutSection from "../components/home/AboutSection";
import ArchiveSection from "../components/home/ArchiveSection";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import PersonalSection from "../components/home/PersonalSection";
import PracticeSection from "../components/home/PracticeSection";
import TeachingSection from "../components/home/TeachingSection";
import WorkBanner from "../components/home/WorkBanner";
import WorkSection from "../components/home/WorkSection";
import SiteFooter from "../components/layout/SiteFooter";
import SiteNav from "../components/layout/SiteNav";
import useActiveSection from "../hooks/useActiveSection";
import useScrollReveal from "../hooks/useScrollReveal";

const SECTION_IDS = ["about", "teaching", "work", "contact"];

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteNav activeSection={activeSection} />
      <main id="main-content" tabIndex="-1">
        <HeroSection />

        <div className="chapter" id="about">
          <AboutSection />
          <PersonalSection />
        </div>

        <div className="chapter" id="teaching">
          <PracticeSection />
          <TeachingSection />
          <WorkBanner />
        </div>

        <div className="chapter" id="work">
          <WorkSection />
          <ArchiveSection />
        </div>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
