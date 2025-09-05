import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Switch,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Check as CheckIcon,
} from '@mui/icons-material';

const Plans: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'ESSENTIAL',
      description: 'Ideal para quem está começando a construir sua presença digital',
      monthlyPrice: 99,
      annualPrice: 99,
      discount: 25,
      features: [
        '1 blog automatizado',
        '5 artigos por mês',
        '50 palavras-chave',
        '1 pessoa no time',
      ],
      detailedFeatures: [
        'Blog automático com sua marca',
        'Sugestões inteligentes de conteúdo',
        'Linking interno e externo',
        'Cursos completos de SEO',
        'Análise de palavras-chave',
        'Relatórios semanais no WhatsApp',
        'Dashboard com dados do Google',
      ],
      isPopular: false,
    },
    {
      name: 'PLUS',
      description: 'Ideal para empresas que querem escalar o seu tráfego com um blog estratégico',
      monthlyPrice: 199,
      annualPrice: 149,
      discount: 25,
      features: [
        '1 blog automatizado',
        '15 artigos por mês',
        '150 palavras-chave',
        '3 pessoas no time',
      ],
      detailedFeatures: [
        'Tudo no plano Essential e mais',
        'Blog com seu próprio domínio',
        'Conexão com ferramentas de blog',
        'Sugestões avançadas de conteúdo',
        'Integração com redes sociais',
        'Clusters de Conteúdo (EM BREVE)',
        'Buscador de tendências (EM BREVE)',
      ],
      isPopular: true,
    },
    {
      name: 'SCALE',
      description: 'Ideal para agências e redes de blogs que querem aumentar seu lucro',
      monthlyPrice: 399,
      annualPrice: 299,
      discount: 25,
      features: [
        '4 blogs automatizados',
        '40 artigos por mês',
        '500 palavras-chave',
        '10 pessoas no time',
      ],
      detailedFeatures: [
        'Tudo no plano Plus e mais',
        'Programa de agência parceira',
        'Desconto em blogs e artigos',
        'Plugin WordPress white-label',
        'Gerente de conta',
        'Suporte prioritário no WhatsApp',
        'Área do cliente',
        'Relatórios com sua marca (EM BREVE)',
      ],
      isPopular: false,
    },
  ];

  const getPrice = (plan: any) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getOriginalPrice = (plan: any) => {
    return isAnnual ? plan.monthlyPrice : plan.monthlyPrice;
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

          {/* Billing Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Typography
              variant="body1"
              sx={{
                color: isAnnual ? theme.palette.text.secondary : theme.palette.primary.main,
                fontWeight: isAnnual ? 400 : 600,
              }}
            >
              Mensal
            </Typography>
            <Switch
              checked={isAnnual}
              onChange={(e) => setIsAnnual(e.target.checked)}
              sx={{
                '& .MuiSwitch-thumb': {
                  backgroundColor: theme.palette.primary.main,
                },
                '& .MuiSwitch-track': {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  color: isAnnual ? theme.palette.primary.main : theme.palette.text.secondary,
                  fontWeight: isAnnual ? 600 : 400,
                }}
              >
                Anual
              </Typography>
              {isAnnual && (
                <Chip
                  label="2 meses grátis"
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.success.main,
                    color: 'white',
                    fontSize: '0.75rem',
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {plans.map((plan, index) => (
            <Grid size={{xs: 12, md: 4}} key={index}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  border: plan.isPopular ? `2px solid ${theme.palette.primary.main}` : '1px solid #e9ecef',
                  transition: 'all 0.3s ease-in-out',
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
                        mb: 1,
                        fontSize: '1.2rem',
                      }}
                    >
                      {plan.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                        fontSize: '0.85rem',
                      }}
                    >
                      {plan.description}
                    </Typography>
                  </Box>

                  {/* Pricing */}
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', mb: 1 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 700,
                          fontSize: '2rem',
                        }}
                      >
                        R${getPrice(plan)}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          ml: 1,
                          fontSize: '0.9rem',
                        }}
                      >
                        /mês
                      </Typography>
                    </Box>
                    {getOriginalPrice(plan) > getPrice(plan) && (
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            textDecoration: 'line-through',
                            fontSize: '0.8rem',
                          }}
                        >
                          R${getOriginalPrice(plan)}
                        </Typography>
                        <Chip
                          label={`BEMVINDO25`}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.warning.main,
                            color: 'white',
                            fontSize: '0.65rem',
                            height: 20,
                          }}
                        />
                      </Box>
                    )}
                  </Box>

                  {/* Key Features */}
                  <Box sx={{ mb: 2 }}>
                    <Grid container spacing={1}>
                      {plan.features.map((feature, featureIndex) => (
                        <Grid size={{xs: 6}} key={featureIndex}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                            <CheckIcon sx={{ color: theme.palette.success.main, fontSize: 14, mr: 0.5 }} />
                            <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontSize: '0.8rem' }}>
                              {feature}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* Detailed Features */}
                  <Box sx={{ mb: 3 }}>
                    <List dense>
                      {plan.detailedFeatures.slice(0, 4).map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ px: 0, py: 0.25 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <CheckIcon sx={{ color: theme.palette.success.main, fontSize: 14 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontSize: '0.8rem' }}>
                                {feature}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                      {plan.detailedFeatures.length > 4 && (
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.75rem', textAlign: 'center', mt: 1 }}>
                          +{plan.detailedFeatures.length - 4} recursos
                        </Typography>
                      )}
                    </List>
                  </Box>

                  {/* CTA Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      py: 1.2,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    Iniciar teste grátis
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