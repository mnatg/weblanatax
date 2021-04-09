import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import SectionA from '../sectionA'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <SectionA />
      <Footer />
    </>
  );
}

export default Home;
