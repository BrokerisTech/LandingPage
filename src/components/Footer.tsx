import React from 'react';

import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { getLinkWhatApp } from '../Shared/Features';

const Footer: React.FC = () => {
  const theme = useTheme();

  const footerLinks = {
    product: [
      { label: 'Início', href: '#inicio' },
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Planos', href: '#planos' },
      { label: 'Sobre nós', href: '#sobrenos' },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                  }}
                >
                  Brokeris
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                }}
              >
                A plataforma de automação de conteúdo que revoluciona o marketing digital.
                Crie, publique e analise conteúdo automaticamente com nossa IA especializada.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Produto
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {footerLinks.product.map((link, index) => (
                <>
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'white',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                  {index < footerLinks.product.length - 1 && (
                    <Divider orientation="vertical" flexItem sx={{ background: 'white' }} />
                  )}
                </>
              ))}

            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            ©2025 Brokeris - Todos os direitos reservados
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.875rem',
              }}
            >
              Desenvolvido pela equipe Brokeris ❤️
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Floating WhatsApp Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <IconButton
          href={getLinkWhatApp(
            "5521980143451",
            `Olá, tenho uma duvida: `
          )}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: theme.palette.success.main,
            color: 'white',
            width: 56,
            height: 56,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            '&:hover': {
              backgroundColor: theme.palette.success.dark,
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
          aria-label="Fale com um especialista"
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
