import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';

const Stats: React.FC = () => {
  const theme = useTheme();

  const stats = [
    {
      number: '3.5k',
      label: 'Empresas impactadas',
    },
    {
      number: 'R$1.5M',
      label: 'custo reduzido',
    },
    {
      number: '20k',
      label: 'artigos gerados',
    },
    {
      number: '2A',
      label: 'anos de mercado',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.dark,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid size={{xs: 6, md: 3}} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    textTransform: 'lowercase',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
