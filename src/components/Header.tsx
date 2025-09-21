import React from 'react';

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useTheme,
  Container,
  useMediaQuery,
} from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';



import { Person as PersonIcon } from '@mui/icons-material';

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  const navigationItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Planos', href: '#planos' },
    { label: 'Sobre nós', href: '#sobrenos' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'white',
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: "0 0 10px 0 rgba(43, 91, 234, 0.363)",
        borderRadius: "0 0 35px 35px",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box
            onClick={() => scrollToSection('inicio')}
            component="img"
            src="/assets/images/brokeris4.svg"
            alt="Logo do sistema"
            sx={{
              cursor: 'pointer',
              width: { xs: '110px', md: '150px' },
              height: { xs: '18px', md: '28px' },
              display: 'flex',
            }}
          />

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
              width: "500px",
            }}>
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                onClick={() => scrollToSection(item.href)}
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 600,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Desktop Buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: "right",
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            <Button
              startIcon={isMobile ? <PersonIcon color="primary" /> : null}
              onClick={() => window.open('https://www.app.brokeris.com.br/login', '_blank')}
              variant="outlined"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: { xs: '0.8rem', md: '1rem' },
                py: { xs: 1, md: 1.5 },
                px: { xs: 1, md: 2 },

              }}
            >
              Área produtor
            </Button>
            <Button
              startIcon={isMobile ? <LocationCityIcon /> : null}
              onClick={() => window.open('https://www.app.brokeris.com.br/login', '_blank')}
              variant="contained"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '0.8rem', md: '1rem' },
                py: { xs: 1, md: 1.5 },
                px: { xs: 1, md: 2 },
              }}
            >
              Área corretora
            </Button>

            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                px: 1.5,
                py: 1,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
              >
              Criar conta
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
