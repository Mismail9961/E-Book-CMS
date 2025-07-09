import Navbar from "./components/Navbar"
import Hero from "./components/HeroSection";
import Slider from "./components/Slider"
import AgencySection from "./components/AgencySection"
import PublishingSection from "./components/PublishingSection"
import FeatureSection from "./components/FeatureSection";
import ServicesText from "./components/ServicesText"
import Slider2 from "./components/Slider2"
import Cards from "./components/Cards"
import Testnamnials from "./components/Testnamnials"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-portfolioDark text-white">
      <Navbar />
      <div>
        <Hero />
        <Slider />
        <AgencySection />
        <PublishingSection />
        <FeatureSection />
        <ServicesText />
        <Slider2 />
        <PublishingSection />
        <Cards />
        <Testnamnials />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
