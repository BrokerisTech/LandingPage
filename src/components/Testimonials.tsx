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
  TrendingUp as TrendingUpIcon,
  Visibility as VisibilityIcon,
  Mouse as MouseIcon,
} from '@mui/icons-material';

const Testimonials: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const testimonials = [
    {
      name: 'Daniel',
      role: 'Corretor de imóveis',
      company: 'DDourado',
      avatar: '/api/placeholder/60/60',
      title: 'Daniel, Corretor de imóveis, alcançou a primeira página em 20 dias',
      description: 'Apenas 3 semanas após começar a usar a Brokeris, o site do Daniel passou a aparecer na primeira página do Google para o termo mais importante do seu negócio: "corretor de imóveis em orlando"',
      metrics: {
        type: 'chat',
        content: 'Falaa Tiago, bem demais? Passando aqui pra deixar um depoimento sobre a Brokeris... Nem fechou o primeiro mês testando a plataforma com um cliente aqui da agência e já conseguimos subir A HOMEPAGE para 1a posição na principal palavra-chave dele. +425 impressões em relação ao mês passado. O que mais me deixou feliz, foi que os posts ajudaram indiretamente a subir a home do site nas pesquisas (que era nosso objetivo desde o início). Agora trabalhar para pegar o top !!',
      },
    },
    {
      name: 'Leonardo',
      role: 'Dono de software',
      company: 'Conecta Gabinete',
      avatar: '/api/placeholder/60/60',
      title: 'Leonardo, Dono de software, cresceu o seu blog sozinho, sem experiência',
      description: 'O dono do Conecta Gabinete, mesmo sem ser especialista na área, aumentou em 100x a quantidade de palavras-chave, e hoje recebe mais de 5.000 cliques por mês, aparecendo na primeira página para termos como "crm político", "gestão de gabinete", "ferramenta para político"',
      metrics: {
        type: 'chart',
        title: 'Métricas de Palavras-Chave',
        data: {
          keywords: '1.667',
          growth: '+140%',
          chartData: [
            { month: 'Abr 2024', value: 200 },
            { month: 'Mai 2024', value: 400 },
            { month: 'Jun 2024', value: 600 },
            { month: 'Jul 2024', value: 800 },
            { month: 'Ago 2024', value: 1000 },
            { month: 'Set 2024', value: 1200 },
            { month: 'Out 2024', value: 1400 },
            { month: 'Nov 2024', value: 1600 },
            { month: 'Dez 2024', value: 1500 },
            { month: 'Jan 2025', value: 1700 },
            { month: 'Fev 2025', value: 1800 },
            { month: 'Mar 2025', value: 1900 },
            { month: 'Abr 2025', value: 2000 },
            { month: 'Mai 2025', value: 2100 },
            { month: 'Jun 2025', value: 2200 },
          ],
        },
      },
    },
    {
      name: 'Dr. Guilherme',
      role: 'Urologista',
      company: 'DR. GUILHERME BRAGA UROLOGISTA & ANDROLOGISTA',
      avatar: '/api/placeholder/60/60',
      title: 'Dr Guilherme, Urologista, recebe mais de 9.000 cliques/mês',
      description: 'Mesmo tendo contratado redatores profissionais, hoje 9 dos 10 melhores artigos do blog dele no Google foram escritos pela Brokeris. Se o Dr...',
      metrics: {
        type: 'stats',
        data: {
          clicks: '39.845',
          clicksGrowth: '+167%',
          impressions: '2.518.335',
          ctr: '1,58%',
        },
      },
    },
  ];

  const renderMetrics = (metrics: any) => {
    if (metrics.type === 'chat') {
      return (
        <Box sx={{ backgroundColor: '#f8f9fa', p: 1.5, mt: 1.5, borderRadius: 1, border: '1px solid #e9ecef' }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.4, fontSize: '0.8rem' }}>
            {metrics.content.substring(0, 120)}...
          </Typography>
        </Box>
      );
    }

    if (metrics.type === 'chart') {
      return (
        <Box sx={{ mt: 1.5 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: theme.palette.text.primary, fontSize: '0.85rem', fontWeight: 600 }}>
            {metrics.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 'bold', mr: 1, fontSize: '1.2rem' }}>
              {metrics.data.keywords}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TrendingUpIcon sx={{ color: theme.palette.success.main, mr: 0.5, fontSize: 16 }} />
              <Typography variant="body2" sx={{ color: theme.palette.success.main, fontWeight: 600, fontSize: '0.8rem' }}>
                {metrics.data.growth}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ height: 80, backgroundColor: theme.palette.background.paper, borderRadius: 1, p: 1, border: '1px solid #e9ecef' }}>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, textAlign: 'center', mt: 2, fontSize: '0.75rem' }}>
              Gráfico de evolução
            </Typography>
          </Box>
        </Box>
      );
    }

    if (metrics.type === 'stats') {
      return (
        <Box sx={{ mt: 1.5 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: theme.palette.text.primary, fontSize: '0.85rem', fontWeight: 600 }}>
            Métricas de Tráfego
          </Typography>
          <Grid container spacing={1}>
            <Grid size={{xs: 6}}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <MouseIcon sx={{ color: theme.palette.primary.main, mr: 0.5, fontSize: 16 }} />
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.75rem' }}>
                  Cliques
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 0.5, fontSize: '1.1rem' }}>
                {metrics.data.clicks}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TrendingUpIcon sx={{ color: theme.palette.success.main, fontSize: 14, mr: 0.5 }} />
                <Typography variant="body2" sx={{ color: theme.palette.success.main, fontWeight: 600, fontSize: '0.75rem' }}>
                  {metrics.data.clicksGrowth}
                </Typography>
              </Box>
            </Grid>
            <Grid size={{xs: 6}}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <VisibilityIcon sx={{ color: theme.palette.error.main, mr: 0.5, fontSize: 16 }} />
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.75rem' }}>
                  Impressões
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 0.5, fontSize: '1.1rem' }}>
                {metrics.data.impressions}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.75rem' }}>
                CTR: {metrics.data.ctr}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      );
    }

    return null;
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
            CASES DE SUCESSO
          </Typography>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              mb: 3,
            }}
          >
            Veja os resultados dos nossos clientes
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{xs: 12, md: 4}} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      sx={{
                        width: 48,
                        height: 48,
                        mr: 2,
                        backgroundColor: theme.palette.primary.main,
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary, fontWeight: 600, fontSize: '0.9rem' }}>
                        {testimonial.company}
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.8rem' }}>
                        {testimonial.name}, {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                      mb: 1.5,
                      fontSize: '1rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {testimonial.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.5,
                      mb: 2,
                      fontSize: '0.85rem',
                    }}
                  >
                    {testimonial.description}
                  </Typography>

                  {renderMetrics(testimonial.metrics)}

                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Iniciar teste grátis
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
