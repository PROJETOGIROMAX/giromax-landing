/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Benefits from "./components/Benefits";
import Solution from "./components/Solution";
import VisualProof from "./components/VisualProof";
import Offer from "./components/Offer";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark selection:bg-brand selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Benefits />
        <Solution />
        <VisualProof />
        <Offer />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
