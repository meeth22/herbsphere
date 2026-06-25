import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import PlantDirectory from "./components/PlantDirectory.jsx";
import CommunitySection from "./components/CommunitySection.jsx";
import AIAdvisor from "./components/AIAdvisor.jsx";
import SelfieGarden from "./components/SelfieGarden.jsx";
import ImpactStats from "./components/ImpactStats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [modalPlant, setModalPlant] = useState(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PlantDirectory onSelectPlant={setModalPlant} />
        <CommunitySection />
        <AIAdvisor />
        <SelfieGarden />
        <ImpactStats />
        <Testimonials />
      </main>
      <Footer />

      {/* Plant Modal rendered at root level */}
      {modalPlant && (
        <PlantModalPortal plant={modalPlant} onClose={() => setModalPlant(null)} />
      )}
    </>
  );
}

// Lazy import modal to keep App clean
import PlantModal from "./components/PlantModal.jsx";
function PlantModalPortal({ plant, onClose }) {
  return <PlantModal plant={plant} onClose={onClose} />;
}

export default App;