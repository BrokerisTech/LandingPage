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

const Testimonials: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const testimonials = [
    {
      name: 'Rodrigo Ferreira, Diretor de Corretora em Curitiba',
      avatar: '/api/placeholder/60/60',
      description: 'Com os relatórios detalhados do Brokeris consigo enxergar claramente o lucro, as parcelas a vencer e os gastos com cada produtor. Hoje tomo decisões muito mais seguras e rápidas.',
    },
    {
      name: 'Ana Paula Mendes, Supervisora Comercial em Belo Horizonte',
      avatar: '/api/placeholder/60/60',
      description: 'O que mais me impressiona é poder gerar todos os recibos da equipe em um clique. Isso economiza horas de trabalho todo mês e traz uma transparência enorme para os produtores.',
    },
    {
      name: 'Marcos Silva, Gerente de Corretora em São Paulo',
      avatar: '/api/placeholder/60/60',
      description: 'Antes do Brokeris eu me perdia com planilhas e pagamentos atrasados. Hoje tenho todo o controle das comissões em tempo real e minha equipe acompanha tudo online. Simplificou totalmente a gestão.',
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
                      <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                        {testimonial.name}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.5,
                      fontSize: '1rem',
                    }}
                  >
                    {testimonial.description}
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

export default Testimonials;
