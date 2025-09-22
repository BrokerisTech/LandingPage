import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  useTheme,
  useMediaQuery,
} from '@mui/material';


const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="inicio"
      sx={{
        color: 'white',
        py: { xs: 5, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        borderRadius: " 0 0 35px 35px",
        zIndex: 10,
        background: "white",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid size={{ xs: 12, md: 6.5 }} >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  mb: { xs: 1, md: 2 },
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                ROTINA 100% AUTOMATIZADA
              </Typography>
              <Typography
                variant={isMobile ? 'h3' : 'h2'}
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.2rem', lg: '2rem' },
                  mb: 2,
                  lineHeight: 1.2,
                  color: theme.palette.text.primary,
                }}
              >
                Organize comissões e pagamentos com total clareza sobre a lucratividade da sua corretora – <Box
                  component={"strong"} sx={{ color: theme.palette.primary.main }}>
                  Tudo em um só sistema
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 1, md: 4 },
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  color: theme.palette.text.primary,
                }}
              >
                Chega de planilhas confusas e processos manuais. Com o Brokeris,
                sua corretora tem tudo em um só lugar: Gestão de contratos, comissões, pagamentos, relatórios inteligentes e equipes conectadas tudo através do sistema. Simples, moderno e eficaz.
              </Typography>

              <Box sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: { xs: 'center', md: 'center' },
                gap: 3
              }}>

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => window.open('https://www.app.brokeris.com.br/register', '_blank')}
                  sx={{
                    px: { xs: 2, md: 4 },
                    py: { xs: 1, md: 1.5 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Iniciar teste grátis por 15 dias
                </Button>

                {/* <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease-in-out, scale 0.3s ease-in-out',
                    scale: 1.03,
                  },

                }}>
                  <PlayCircleOutlineIcon sx={{
                    color: theme.palette.primary.main,
                    fontSize: { xs: '0.9rem', md: '1.2rem' },
                    '&:hover > *': {
                      opacity: 0.8,
                    },
                  }} />
                  <Typography sx={{
                    color: theme.palette.primary.main,
                    fontSize: { xs: '0.9rem', md: '0.9rem' },
                    fontWeight: 600,
                    display: { xs: 'none', md: 'block' },
                  }}>
                    Veja como funciona a plataforma
                  </Typography>
                </Box> */}
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Dashboard Mockup */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              {/* Main Dashboard Card */}
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 1,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.125)',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src="/assets/image.webp"
                  alt="Logo do sistema"
                  sx={{
                    cursor: 'pointer',
                    width: { xs: '100%', md: '100%' },
                    height: { xs: 'auto', md: '300px' },
                    display: 'flex',
                  }}
                />
              </Card>

              {/* Floating Cards */}
              <Box sx={{ position: 'relative' }}>
                {/* Article Card */}
                <Card
                  sx={{
                    position: 'absolute',
                    top: { xs: -50, md: -40 },
                    left: { xs: 260, md: -20 },
                    backgroundColor: 'white',
                    borderRadius: 2,
                    p: { xs: 1, md: 2 },
                    minWidth: { xs: 100, md: 200 },
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    zIndex: 2,
                  }}
                >

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box sx={{ width: 24, height: 24, backgroundColor: '#0077b5', borderRadius: 1 }} />
                    <Box sx={{ width: 24, height: 24, backgroundColor: '#1877f2', borderRadius: 1 }} />
                    <Box sx={{ width: 24, height: 24, backgroundColor: '#25d366', borderRadius: 1 }} />
                  </Box>
                </Card>

                {/* Metrics Card */}
                <Card
                  sx={{
                    position: 'absolute',
                    top: 100,
                    right: -140,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    p: 2,
                    width: '320px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    zIndex: 2,
                    mt: -25,
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/recibo.webp"
                    alt="Logo do sistema"
                    sx={{
                      cursor: 'pointer',
                      width: { xs: '110px', md: '100%' },
                      height: { xs: '18px', md: 'auto' },

                    }}
                  />
                </Card>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: { xs: 'center', },
        }}>

          <Button
            variant="contained"
            size="large"
            onClick={() => window.open('https://www.app.brokeris.com.br/register', '_blank')}
            sx={{
              px: { xs: 2, md: 4 },
              py: { xs: 1, md: 1.5 },
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Iniciar teste grátis por 15 dias
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
