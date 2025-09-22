import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Button,
} from '@mui/material';

const Services: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      title: '100% Online na palma da sua mão',
      description: 'Acesse sua corretora de qualquer lugar, com total praticidade.',
    },
    {
      title: 'Criptografia de Dados (LGPD)',
      description: 'Segurança completa com proteção e conformidade com a LGPD.',
    },
    {
      title: 'Treinamento Especializado',
      description: 'Suporte e capacitação para aproveitar todo o sistema.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 5 }, backgroundColor: "#ecf6ff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              textTransform: 'uppercase',
              letterSpacing: 2,
              mb: 1,
              fontWeight: 600,
            }}
          >
            O melhor da tecnologia
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              color: theme.palette.text.primary,
              fontWeight: 700,
              mb: 2,
            }}
          >
            Simplicidade e eficiência
          </Typography>
        </Box>

        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              {/* Main Dashboard Card */}
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 1,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.125)',
                  mb: { xs: 1, md: 3 },
                }}
              >
                <Box
                  component="img"
                  src="/assets/image.webp"
                  alt="Logo do sistema"
                  sx={{
                    cursor: 'pointer',
                    width: { xs: '100%', md: '100%' },
                    height: { xs: 'auto', md: '440px' },
                    display: 'flex',
                  }}
                />
              </Card>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} container spacing={3}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 0,
                    transition: 'all 0.3s ease-in-out',
                    borderRight: '4px solid #0683ff',
                    background: "none",
                    textAlign: "right"
                  }}
                >
                  <CardContent sx={{ p: 2, textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        mb: { xs: 1, md: 1.5 },
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        textAlign: "left"
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.5,
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        textAlign: "left"
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
            ))}
            <Box sx={{
              justifyContent: { xs: 'center', },
              width: '100%',
              px: 2
            }}>

              <Button
                variant="contained"
                size="large"
                onClick={() => window.open('https://www.app.brokeris.com.br/register', '_blank')}
                fullWidth
                sx={{
                  px: { xs: 2, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontSize: { xs: '0.9rem', md: '1rem' },
                }}
              >
                Iniciar teste grátis por 15 dias
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
