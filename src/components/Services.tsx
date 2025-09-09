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
      title: '100% Online',
      description: 'Baixíssimo tempo de carregamento, domínio customizável e otimizado para SEO',
      image: '/api/placeholder/300/200',
    },
    {
      title: 'Criptografia de Dados (LGPD)',
      description: 'Receba relatórios semanais e nunca mais nem entre na ferramenta acompanhe tudo por lá!',
      image: '/api/placeholder/300/200',
    },
    {
      title: 'Suporte Especializado',
      description: 'Descubra os melhores artigos e palavras-chaves dos seus concorrentes',
      image: '/api/placeholder/300/200',
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 5 }, backgroundColor: theme.palette.background.paper }}>
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
            Simplicidade e eficiente
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
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  p: 3,
                  mb: 3,
                  height: '400px',
                }}
              >
                <CardContent sx={{ p: 0 }}>

                  {/* Content Blocks */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[1, 2, 3].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          height: 60,
                          backgroundColor: 'rgba(131, 126, 126, 0.1)',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          px: 2,
                        }}
                      >
                        <Box sx={{ width: 40, height: 40, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 1, mr: 2 }} />
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ height: 8, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 1, mb: 1, width: '80%' }} />
                          <Box sx={{ height: 6, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 1, width: '60%' }} />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} container spacing={3}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    border: '1px solid #e9ecef',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <CardContent sx={{ p: 2, textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: '1.1rem',
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.5,
                        fontSize: '0.9rem',
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
