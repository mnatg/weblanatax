import React from 'react';
import '../../../App.css';
import Cards from '../../pages/Home/Cards';
import HeroSection from '../../pages/Home/HeroSection';
import Footer from '../../pages/Home/Footer';
import SectionA from '../../pages/Home/sectionA'
import SectionB from '../../pages/Home/sectionB'
import SectionC from '../../pages/Home/sectionC'
import SectionD from '../../pages/Home/sectionD'


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
