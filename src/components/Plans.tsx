import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  alpha,
  Divider,
} from '@mui/material';
import {
  Check as CheckIcon,
} from '@mui/icons-material';

const CompItem = ({ title, isUsers }: { title: string, isUsers?: boolean }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <CheckIcon sx={{ color: "#52b014", fontSize: 22, mr: 1 }} />
      <Typography variant="body2" sx={{ color: theme => theme.palette.text.primary, fontSize: isUsers ? '0.9rem' : '0.8rem', fontWeight: isUsers ? 600 : 400 }}>
        {title}
      </Typography>
    </Box>
  )
}

const Plans: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const featuresNew = [
    'Importação de proposta com IA',
    'Upload de arquivos (Drive)',
  ];

  const detailedFeatures = [
    'Propostas/Contratos ilimitados',
    'Cadastro de produtores (Corretor/Supervisor/Gerente) ilimitado',
    'Acesso online para o produtores acompanhar suas vendas, importações e recebimentos',
    'Recibo para Corretor, supervisor e Gerente',
    'Relatórios (PDF/EXCEL/DASHBOARD)',
    'Software 100% online',
  ]

  const plans = [
    {
      name: '2 Usuários',
      description: 'Ideal para quem tem 1 administrador',
      monthlyPrice: 300,
      featuresNew,
      detailedFeatures,
      isPopular: false,
      users: "2",
    },
    {
      name: '1 Usuário',
      description: 'Ideal para quem está sozinho no seu negócio',
      monthlyPrice: 200.0,
      featuresNew,
      detailedFeatures,
      isPopular: true,
      users: "1",
    },
    {
      name: 'Personalizado',
      description: 'Ideal para médias/grandes empresas',
      monthlyPrice: 399,
      featuresNew,
      detailedFeatures,
      isPopular: false,
      users: "3 - Usuários adicionais",
    },
  ];

  return (
    <Box id="planos"
      sx={{
        py: { xs: 6, md: 8 },
        background: theme => `linear-gradient(to bottom, #ffffff, ${alpha(theme.palette.primary.main, 0.16)}, #ffffff)`
      }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontWeight: 600,
              mb: 2,
            }}
          >
            PLANOS
          </Typography>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              mb: 3,
            }}
          >
            Temos o plano perfeito para a sua empresa
          </Typography>
        </Box>

        <Grid container spacing={3} >
          {plans.map((plan, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  border: plan.isPopular ? `2px solid ${theme.palette.primary.main}` : '1px solid #e9ecef',
                  transition: 'all 0.3s ease-in-out',
                  overflow: 'visible',
                  scale: plan.isPopular ? 1.04 : 1,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                {plan.isPopular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: '0.7rem',
                      fontWeight: 600,
                    }}
                  >
                    MAIS POPULAR
                  </Box>
                )}

                <CardContent sx={{ p: 2.5 }}>
                  {/* Plan Header */}
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                        mb: 1,
                      }}
                    >
                      {plan.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: { xs: 1, md: 2 },
                        fontSize: { xs: '0.8rem', md: '0.85rem' },
                      }}
                    >
                      {plan.description}
                    </Typography>
                  </Box>

                  {/* Pricing */}
                  <Box sx={{ textAlign: 'center', mb: { xs: 2, md: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', mb: 1 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 700,
                          fontSize: { xs: '1.8rem', md: '2rem' },
                        }}
                      >
                        R${plan.monthlyPrice}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary, ml: 1, }}
                      >
                        /mês
                      </Typography>
                    </Box>
                  </Box>

                  {/* Key Features */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: 600,
                        mb: 1,
                        textAlign: 'center',
                        display: plan.featuresNew.length > 0 ? 'block' : 'none',
                        fontSize: { xs: '0.7rem', md: '0.8rem' },
                      }}>
                      NOVOS RECURSOS:
                    </Typography>

                    {plan.featuresNew.map((feature, featureIndex) => (
                      <CompItem title={feature} key={featureIndex} />
                    ))}
                  </Box>

                  <Divider sx={{ my: 1 }} />

                  <Box>
                    <CompItem title={`Usuários: ${plan.users}`} isUsers />
                  </Box>

                  {plan.detailedFeatures.map((feature, featureIndex) => (
                    <CompItem title={feature} key={featureIndex} />
                  ))}

                  {/* CTA Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      py: { xs: 1, md: 1.2 },
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      mt: { xs: 2, md: 3 },
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    Faça uma teste grátis
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Plans;