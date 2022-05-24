import BannerImage from "../components/BannerImage";
import ContactSection from "../components/ContactSection";
import CVHero from "../components/CVHero";
import Expertise from "../components/Expertise";
import Header from "../components/Header";
import ClientsSection from "../components/ClientsSection";

export default function HomePage() {
    return (
        <>
            <Header />
            <Expertise />
            <ClientsSection />
            <CVHero />
            <BannerImage />
            <ContactSection />
        </>
    );
}
