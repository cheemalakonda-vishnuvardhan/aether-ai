import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030712] text-gray-100">
      <Navbar />
      <main className="flex-grow" aria-label="Main content">
        <Hero />
        <Features />
        <Pricing />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

export default App;
