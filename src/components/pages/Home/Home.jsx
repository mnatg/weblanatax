// React
import React from 'react';
// Styles
// Components
import { Grid } from '@material-ui/core';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from './Footer';
import SectionA from './sectionA'
import SectionB from './sectionB'
import SectionC from './sectionC'
import SectionD from './sectionD'



const Home = () => {
  return (
    <Grid>
      <HeroSection />
      <Cards />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Footer />
    </Grid>
  );
}

export default Home;
