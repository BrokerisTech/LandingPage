import React from 'react';

import { Box, Typography } from '@mui/material';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Plans from '../components/Plans';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Footer from '../components/Footer';
import StarIcon from '@mui/icons-material/Star';

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Box
        sx={{
          height: '140px',
          backgroundColor: theme => theme.palette.primary.light,
          borderRadius: '0 0 35px 35px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // 👈 muda layout
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          mt: -6,
          pt: 6,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: '#ffd900',
          }}
        >
          <StarIcon sx={{ fontSize: 20 }} />
          <StarIcon sx={{ fontSize: 20 }} />
          <StarIcon sx={{ fontSize: 20 }} />
          <StarIcon sx={{ fontSize: 20 }} />
          <StarIcon sx={{ fontSize: 20 }} />
        </Box>

        <Typography
          sx={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: { xs: '0.8rem', md: '1rem' },
            px: { xs: 5, md: 0 },
          }}
        >
          <strong style={{ marginRight: 2 }}>Brokeris -</strong> mais de 20 anos conectando corretoras ao sucesso.
        </Typography>
      </Box>


      <Steps />
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
