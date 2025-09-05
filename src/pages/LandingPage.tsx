import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Plans from '../components/Plans';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <Services />
      <Testimonials />
      <Plans />
      <FAQ />
      <About />
      <Footer />
    </Box>
  );
};

export default LandingPage;
