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

const SECTION_IDS = ["about", "work", "contact"];

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <main id="main-content" tabIndex="-1">
        <SiteNav activeSection={activeSection} />
        <HeroSection />

        <div className="chapter" id="about">
          <AboutSection />
          <PersonalSection />
          <PracticeSection />
          <WorkBanner />
        </div>

        <div className="chapter" id="work">
          <WorkSection />
          <TeachingSection />
          <ArchiveSection />
        </div>

        <ContactSection />
        <SiteFooter />
      </main>
    </>
  );
}
