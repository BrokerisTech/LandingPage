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
  Article as ArticleIcon,
  WhatsApp as WhatsAppIcon,
  Search as SearchIcon,
  AutoFixHigh as AutoFixHighIcon,
  Analytics as AnalyticsIcon,
  Share as ShareIcon,
} from '@mui/icons-material';

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <ArticleIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      title: 'Blog Profissional',
      description: 'Baixíssimo tempo de carregamento, design moderno, domínio customizável e otimizado para SEO... sem esforço!',
      image: '/api/placeholder/300/200',
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 48, color: theme.palette.success.main }} />,
      title: 'Relatórios no WhatsApp',
      description: 'Receba relatórios semanais e nunca mais nem entre na ferramenta acompanhe tudo por lá!',
      image: '/api/placeholder/300/200',
    },
    {
      icon: <SearchIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      title: 'Análise de Concorrentes',
      description: 'Descubra os melhores artigos e palavras-chaves dos seus concorrentes - e use isso na sua estratégia!',
      image: '/api/placeholder/300/200',
    },
    {
      icon: <AutoFixHighIcon sx={{ fontSize: 48, color: theme.palette.success.main }} />,
      title: 'Conteúdo Humanizado',
      description: 'Nossa IA cria conteúdo que parece ter sido escrito por humanos, evitando penalizações do Google.',
      image: '/api/placeholder/300/200',
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      title: 'Análise de Palavra-Chave',
      description: 'Descubra as melhores palavras-chave para o seu nicho e otimize seu conteúdo automaticamente.',
      image: '/api/placeholder/300/200',
    },
    {
      icon: <ShareIcon sx={{ fontSize: 48, color: theme.palette.success.main }} />,
      title: 'Várias Formas de Criar',
      description: 'Crie conteúdo para diferentes plataformas: blog, redes sociais, e-mail marketing e muito mais.',
      image: '/api/placeholder/300/200',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: theme.palette.background.paper }}>
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
            FUNCIONALIDADES
          </Typography>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              mb: 3,
            }}
          >
            Ferramentas para crescer o seu blog
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
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      backgroundColor: theme.palette.primary.light,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    {service.icon}
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
