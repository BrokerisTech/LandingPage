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
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
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
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid  size={{xs: 12, md: 6}} >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                ROTINA 100% AUTOMATIZADA
              </Typography>
              
              <Typography
                variant={isMobile ? 'h3' : 'h2'}
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Sem tempo?
              </Typography>
              
              <Typography
                variant={isMobile ? 'h3' : 'h2'}
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Faremos tudo por você
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Construir o blog? Pensar em pautas? Analisar concorrentes? Escrever conteúdos? 
                Agendar as postagens? Divulgar nas redes sociais? Gerar e analisar relatórios? 
                A nossa IA fará tudo isso por você... e você irá receber os resultados toda semana por WhatsApp.
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Iniciar teste grátis
              </Button>
            </Box>
          </Grid>

          {/* Right Column - Dashboard Mockup */}
          <Grid size={{xs: 12, md: 6}}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              {/* Main Dashboard Card */}
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3,
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
                    top: -20,
                    left: -20,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    p: 2,
                    minWidth: 200,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    zIndex: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                        10
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Artigos
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.text.primary, mb: 1 }}>
                    • Artigo: Lorem Ipsum
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.primary, mb: 2 }}>
                    • Artigo: Lorem Ipsum
                  </Typography>
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
