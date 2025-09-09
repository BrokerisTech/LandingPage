import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Speed as SpeedIcon,
  AutoAwesome as AutoAwesomeIcon,
  Analytics as AnalyticsIcon,
  Group as GroupIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
} from '@mui/icons-material';

const Benefits: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const benefits = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Controle de Proposta',
      description: 'Tudo acontece automaticamente, sem necessidade de intervenção manual. Configure uma vez e deixe nossa IA trabalhar.',
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Controle de entradas de parcelas',
      description: 'Nossa IA é especializada em SEO e criação de conteúdo, muito mais poderosa que ferramentas genéricas.',
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Geração de recibos de pagamentos',
      description: 'Receba relatórios semanais completos via WhatsApp com todas as métricas importantes do seu blog.',
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Relatórios Detalhados',
      description: 'Receba relatórios semanais completos via WhatsApp com todas as métricas importantes do seu blog.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Acesso online para o Produtor',
      description: 'Descubra as melhores estratégias dos seus concorrentes e use isso a seu favor automaticamente.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Comissão organizada',
      description: 'Nossa IA cria conteúdo que parece ter sido escrito por humanos, evitando penalizações do Google.',
    },
  ];

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
            VANTAGENS
          </Typography>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              mb: 3,
            }}
          >
            Por que escolher a Brokeris?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            Somos a única ferramenta do mercado que automatiza estratégias avançadas de SEO,
            criando conteúdos preparados para ranquear no Google e também nas IAs.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 2.5,
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid #e9ecef',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ mb: 2 }}>
                    {benefit.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                      mb: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.5,
                      fontSize: '0.9rem',
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
