import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  Article as ArticleIcon,
  WhatsApp as WhatsAppIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

const Services: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <ArticleIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      title: '100% Online',
      description: 'Baixíssimo tempo de carregamento, design moderno, domínio customizável e otimizado para SEO... sem esforço!',
      image: '/api/placeholder/300/200',
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 48, color: theme.palette.success.main }} />,
      title: 'Criptografia de Dados (LGPD)',
      description: 'Receba relatórios semanais e nunca mais nem entre na ferramenta acompanhe tudo por lá!',
      image: '/api/placeholder/300/200',
    },
    {
      icon: <SearchIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      title: 'Suporte Especializado',
      description: 'Descubra os melhores artigos e palavras-chaves dos seus concorrentes - e use isso na sua estratégia!',
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
            Segurança e eficiência
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
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
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
