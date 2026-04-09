import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Benefits from "./components/Benefits";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import VisualProof from "./components/VisualProof";
import Offer from "./components/Offer";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  return (
    <div className="min-h-screen bg-dark selection:bg-brand selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <PainPoints />
      <Benefits />
      <Solution />
      <HowItWorks />
      <VisualProof />
      <Offer />
      <FinalCTA />
      <Footer />
      <CookieBanner />
    </div>
  );
}
