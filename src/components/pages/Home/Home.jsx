import React from 'react';
import '../../../App.css';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';
import SectionA from './sectionA'
import SectionB from './sectionB'
import SectionC from './sectionC'
import SectionD from './sectionD'



function Home() {
  return (
    <>
    
      <HeroSection />
      <Cards />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Footer />
   
    </>
  );
}

export default Home;
