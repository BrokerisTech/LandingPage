import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { keyframes } from '@mui/system';

import {
  ShoppingBag as ShoppingBagIcon,
  TrendingUp as TrendingUpIcon,
  Autorenew as AutorenewIcon,
  CheckCircle as CheckCircleIcon,
  SwapHoriz as SwapHorizIcon,
} from '@mui/icons-material';

// Animação de balanço contínuo
const wiggle = keyframes`
  0% { transform: rotate(-25deg); }
  100% { transform: rotate(25deg); }
`;

const Benefits: React.FC = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const topCards = [
    {
      icon: <ShoppingBagIcon sx={{
        fontSize: 32,
        color: theme => theme.palette.primary.main,
        animation: `${wiggle} 2s linear infinite alternate`,
        transformOrigin: 'center'
      }} />,
      title: 'Controle de Proposta',
      description: 'Registre propostas com agilidade e mantenha clientes e contratos centralizados em um único sistema.',
      backgroundColor: '#ecf6ff',
    },
    {
      icon: <TrendingUpIcon sx={{
        fontSize: 32,
        color: theme => theme.palette.primary.main,
        animation: `${wiggle} 2s linear infinite alternate`,
        transformOrigin: 'center'
      }} />,
      title: 'Controle de entradas de parcelas',
      description: 'Monitore pagamentos confirmados e em atraso de forma simples, assegurando uma gestão financeira completa e organizada.',
      backgroundColor: '#fff4e1',
    },
    {
      icon: <AutorenewIcon sx={{
        fontSize: 32,
        color: theme => theme.palette.primary.main,
        animation: `${wiggle} 2s linear infinite alternate`,
        transformOrigin: 'center'
      }} />,
      title: 'Geração de recibos de pagamentos',
      description: 'Emita recibos facilmente e mantenha todo o histórico organizado e disponível.',
      backgroundColor: '#ecf6ff',
    },
  ];

  const bottomCards = [
    {
      icon: <CheckCircleIcon sx={{
        fontSize: 32,
        color: 'white',
        animation: `${wiggle} 2s linear infinite alternate`,
        transformOrigin: 'center'
      }} />,
      title: 'Relatórios Detalhados',
      description: [
        '• Dashboard analítico',
        '• Relatórios de parcelas não recebidas',
        '• Relatórios detalhados de comissões e lucros',
        '• Relatórios de base de clientes',
        '• Relatórios de vendedores / supervisores / gerentes'
      ],

      backgroundColor: '#1f0073',
      textColor: 'white',
    },
    {
      icon: (
        <SwapHorizIcon sx={{
          fontSize: 32,
          color: 'white',
          animation: `${wiggle} 2s linear infinite alternate`,
          transformOrigin: 'center'
        }} />
      ),
      title: 'Outras funcionalidades',
      description: [
        '• Acesso online para sua equipe visualizar recibos, produção e comissões',
        '• Importação de propostas com IA',
        '• Upload de arquivos (Drive)',
        '• Anexar Nota fiscal',
        '• Conta corrente individual',

      ],
      backgroundColor: 'linear-gradient(90deg, #7143FF 0%, #7143FF 50%, #7143FF 50%, #7143FF 100%)',
      textColor: 'white',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="body2"
            sx={{
              color: theme => theme.palette.primary.main,
              textTransform: 'uppercase',
              letterSpacing: 2,
              mb: 2,
              fontWeight: 600,
              fontSize: '0.875rem',
            }}
          >
            Funcionalidades
          </Typography>
          <Typography
            // variant="h2"
            sx={{
              color: '#1F2937',
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              textAlign: 'center',
              // mb: 6,
              fontSize: { xs: '1.6rem', md: '2rem' },
            }}
          >
            Tudo que sua Corretora precisa
          </Typography>
        </Box>

        {/* Top Row - 3 Cards */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {topCards.map((card, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: card.backgroundColor,
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 'none',
                  border: 'none',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-start' }}>
                    {card.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1F2937',
                      fontWeight: 600,
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6B7280',
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Row - 2 Cards */}
        <Grid container spacing={3}>
          {bottomCards.map((card, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: card.backgroundColor,
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 'none',
                  border: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-start' }}>
                    {card.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: card.textColor,
                      fontWeight: 600,
                      mb: 2,
                      fontSize: '1.1rem',
                    }}
                  >
                    {card.title}
                  </Typography>
                  {Array.isArray(card.description) ? (
                    <Box>
                      {card.description.map((item, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: card.textColor,
                            lineHeight: 1.6,
                            fontSize: '0.9rem',
                            mb: 0.5,
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{
                        color: card.textColor,
                        lineHeight: 1.6,
                        fontSize: '0.9rem',
                      }}
                    >
                      {card.description}
                    </Typography>
                  )}
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
