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
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();

  const footerLinks = {
    company: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Nossa Equipe', href: '#equipe' },
      { label: 'Carreiras', href: '#carreiras' },
      { label: 'Contato', href: '#contato' },
    ],
    product: [
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Planos', href: '#planos' },
      { label: 'Cases de Sucesso', href: '#cases' },
      { label: 'Blog', href: '#blog' },
    ],
    support: [
      { label: 'Central de Ajuda', href: '#ajuda' },
      { label: 'Documentação', href: '#docs' },
      { label: 'Status do Sistema', href: '#status' },
      { label: 'Suporte Técnico', href: '#suporte' },
    ],
    legal: [
      { label: 'Termos de Uso', href: '#termos' },
      { label: 'Política de Privacidade', href: '#privacidade' },
      { label: 'Cookies', href: '#cookies' },
      { label: 'LGPD', href: '#lgpd' },
    ],
  };

  const socialLinks = [
    { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
    { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
  ];

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
          <Grid size={{xs: 12, md: 4}}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: 'white',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                    }}
                  >
                    A
                  </Typography>
                </Box>
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
                  mb: 3,
                }}
              >
                A plataforma de automação de conteúdo que revoluciona o marketing digital. 
                Crie, publique e analise conteúdo automaticamente com nossa IA especializada.
              </Typography>
            </Box>

            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Links Sections */}
          <Grid size={{xs: 12, sm: 6, md: 2}}>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Empresa
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.company.map((link, index) => (
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
              ))}
            </Box>
          </Grid>

          <Grid size={{xs: 12, sm: 6, md: 2}}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.product.map((link, index) => (
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
              ))}
            </Box>
          </Grid>

          <Grid size={{xs: 12, sm: 6, md: 2}}>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Suporte
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.support.map((link, index) => (
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
              ))}
            </Box>
          </Grid>

          <Grid size={{xs: 12, sm: 6, md: 2}}>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.legal.map((link, index) => (
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
            <Link
              href="#termos"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Conheça os Termos de uso e Políticas de privacidade da plataforma.
            </Link>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.875rem',
              }}
            >
              Desenvolvido por Ge Coelho
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
          href="https://wa.me/5511999999999"
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
