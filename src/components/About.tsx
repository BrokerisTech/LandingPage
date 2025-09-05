import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  Group as GroupIcon,
} from '@mui/icons-material';

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const team = [
    {
      name: 'Ge Coelho',
      role: 'Desenvolvedor',
      avatar: '/api/placeholder/80/80',
      description: 'Especialista em desenvolvimento de soluções de automação e IA.',
    },
    {
      name: 'Equipe Brokeris',
      role: 'Especialistas em SEO',
      avatar: '/api/placeholder/80/80',
      description: 'Profissionais especializados em estratégias de conteúdo e SEO.',
    },
  ];

  const values = [
    {
      icon: <BusinessIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Inovação',
      description: 'Utilizamos as mais avançadas tecnologias de IA para criar soluções únicas no mercado.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Resultados',
      description: 'Focamos em entregar resultados reais e mensuráveis para nossos clientes.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Suporte',
      description: 'Nossa equipe está sempre disponível para ajudar você a alcançar seus objetivos.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid size={{xs: 12, md: 6}}>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.primary.main,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                SOBRE NÓS
              </Typography>
              
              <Typography
                variant={isMobile ? 'h3' : 'h2'}
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                A revolução da automação de conteúdo
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                A Brokeris nasceu da necessidade de democratizar o marketing de conteúdo. 
                Vimos que muitas empresas não conseguiam manter blogs ativos por falta de tempo, 
                conhecimento ou recursos. Por isso, criamos uma solução que automatiza todo o 
                processo, desde a estratégia até a publicação e análise de resultados.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Nossa missão é fazer com que qualquer empresa, independente do tamanho ou 
                orçamento, possa ter uma presença digital forte através de conteúdo de qualidade 
                e estratégias de SEO avançadas.
              </Typography>

              {/* Values */}
              <Grid container spacing={2}>
                {values.map((value, index) => (
                  <Grid size={{xs: 12, md: 6}} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ mb: 1.5 }}>
                        {value.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                          mb: 1,
                          fontSize: '1rem',
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.5,
                          fontSize: '0.9rem',
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right Column - Team */}
          <Grid size={{xs: 12, md: 6}}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  mb: 3,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Nossa Equipe
              </Typography>

              <Grid container spacing={2}>
                {team.map((member, index) => (
                  <Grid size={{xs: 12, md: 6}} key={index}>
                    <Card
                      sx={{
                        textAlign: 'center',
                        p: 2,
                        transition: 'all 0.3s ease-in-out',
                        border: '1px solid #e9ecef',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <Avatar
                          src={member.avatar}
                          sx={{
                            width: 60,
                            height: 60,
                            mx: 'auto',
                            mb: 1.5,
                            backgroundColor: theme.palette.primary.main,
                          }}
                        >
                          {member.name.charAt(0)}
                        </Avatar>
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 600,
                            mb: 0.5,
                            fontSize: '1rem',
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 500,
                            mb: 1,
                            fontSize: '0.85rem',
                          }}
                        >
                          {member.role}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.5,
                            fontSize: '0.85rem',
                          }}
                        >
                          {member.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Company Stats */}
              <Box sx={{ mt: 3 }}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    p: 2,
                  }}
                >
                  <CardContent sx={{ p: 0, textAlign: 'center' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        fontSize: '1.8rem',
                      }}
                    >
                      2+ Anos
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        opacity: 0.9,
                        fontSize: '0.9rem',
                      }}
                    >
                      de experiência no mercado
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
