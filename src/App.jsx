import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSlider from './components/PortfolioSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <Navbar />
      <main>
        <Hero />
        <PortfolioSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
