import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  Group as GroupIcon,
} from '@mui/icons-material';

const About: React.FC = () => {
  const theme = useTheme();

  const team = [
    {
      name: 'Equipe Brokeris',
      role: 'Especialistas em gestão de corretoras de planos de saúde',
      avatar: '/api/placeholder/80/80',
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
      description: 'Focamos em criar funcionalidades essenciais para melhores resultados dos nossos clientes.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Suporte',
      description: 'Nossa equipe está sempre disponível para ajudar você a alcançar seus objetivos.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: theme.palette.background.default }} id="sobrenos">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.primary.main,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  mb: { xs: 1, md: 2 },
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                }}
              >
                SOBRE NÓS
              </Typography>

              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: { xs: 600, md: 700 },
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '1.4rem', md: '2.3rem' },
                }}
              >
                A revolução na gestão de Corretoras de planos de saúde
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: { xs: '0.88rem', md: '1.1rem' },
                }}
              >
                O Brokeris nasceu da necessidade de simplificar a rotina das corretoras,
                percebemos que muitas delas ainda perdem tempo com planilhas confusas,
                controles manuais e processos que dificultam o crescimento. Por tal motivo,
                criamos uma solução simples, moderna e completa,
                que reúne em um só lugar tudo o que você precisa: gestão de contratos, parcelas, comissões, relatórios e recibos.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: { xs: '0.88rem', md: '1.1rem' },
                }}
              >
                Nossa missão é garantir que qualquer corretora, independente do tamanho ou estrutura,
                possa ter uma gestão eficiente, organizada e inteligente, economizando tempo e aumentando resultados.
              </Typography>

              {/* Values */}
              <Grid container spacing={2}>
                {values.map((value, index) => (
                  <Grid size={{ xs: 6, md: 6 }} key={index}>
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
          <Grid size={{ xs: 12, md: 6 }}>
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
                  <Grid size={{ xs: 12, md: 12 }} key={index}>
                    <Card
                      sx={{
                        textAlign: 'center',
                        p: 3.5,
                        border: '1px solid #e9ecef',
                      }}
                    >
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
                          mb: 2,
                          fontSize: '1rem',
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                          fontSize: '0.85rem',
                        }}
                      >
                        {member.role}
                      </Typography>
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
                    p: 3.5,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: { xs: '1.4rem', md: '1.8rem' },
                    }}
                  >
                    20+ Anos
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.9,
                      fontSize: { xs: '0.88rem', md: '0.9rem' },
                    }}
                  >
                    de experiência no mercado
                  </Typography>
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
