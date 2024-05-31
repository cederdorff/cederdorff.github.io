import BannerImage from "./components/BannerImage";
import CVHero from "./components/CVHero";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopBtn from "./components/ScollToTopBtn";

function App() {
  return (
    <>
      <Header />
      <Expertise />
      <ClientsSection />
      <CVHero />
      <BannerImage />
      <ContactSection />
      <Footer />
      <ScrollToTopBtn />
    </>
  );
}

export default App;
