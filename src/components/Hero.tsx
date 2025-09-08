import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Visibility as VisibilityIcon,
  Mouse as MouseIcon,
} from '@mui/icons-material';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="inicio"
      sx={{
        // background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,

        color: 'white',
        py: { xs: 8, md: 12 },
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
          <Grid  size={{xs: 12, md: 6.5}} >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  mb: 2,
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
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 2,
                  lineHeight: 1.2,
                  color: theme.palette.text.primary,
                }}
              >
                  Organize comissões, simplifique pagamentos e tenha total visibilidade da lucratividade – <Box component={"strong"} sx={{ color: theme.palette.primary.main }}>
                  Tudo em um só sistema
                  </Box>
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: theme.palette.text.primary,
                }}
              >
                Chega de planilhas confusas e processos manuais. Com o Brokeris,
                sua corretora tem tudo em um só lugar: gestão de contratos, comissões e pagamentos, relatórios inteligentes e equipe conectada. Simples, moderno e feito para crescer
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                }}
              >
                Iniciar teste grátis por 15 dias
              </Button>
            </Box>
          </Grid>

          {/* Right Column - Dashboard Mockup */}
          <Grid size={{xs: 12, md: 5.5}}>
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
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  {/* Dashboard Header */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Dashboard
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                    </Box>
                  </Box>
                  
                  {/* Content Blocks */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[1, 2, 3].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          height: 60,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
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

              {/* Floating Cards */}
              <Box sx={{ position: 'relative' }}>
                {/* Article Card */}
                <Card
                  sx={{
                    position: 'absolute',
                    top: -50,
                    left: -20,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    p: 2,
                    minWidth: 200,
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
                    right: -20,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    p: 2,
                    minWidth: 180,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    zIndex: 2,
                    mt: -30,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <MouseIcon sx={{ color: theme.palette.primary.main, mr: 1, fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Cliques
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 1 }}>
                    12.412
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TrendingUpIcon sx={{ color: theme.palette.success.main, fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2" sx={{ color: theme.palette.success.main, fontWeight: 600 }}>
                      +9.675
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, mt: 2 }}>
                    <VisibilityIcon sx={{ color: theme.palette.error.main, mr: 1, fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Impressões
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 1 }}>
                    523.123
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TrendingUpIcon sx={{ color: theme.palette.success.main, fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2" sx={{ color: theme.palette.success.main, fontWeight: 600 }}>
                      +123.512
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
