import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import theme from './theme';
import LandingPage from './pages/LandingPage';
import axios from 'axios';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    const url = window.location.href

    const sendView = async () => {
      try {
        await axios.post('https://function-bun-production-079a.up.railway.app/createView', { url })
        console.log('View registrada:', url)
      } catch (err) {
        console.error('Erro ao registrar view:', err)
      }
    }

    sendView()
  }, []) // executa só uma vez ao montar

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh' }}>
        <CssBaseline />
        <LandingPage />
        <Analytics />
      </Box>
    </ThemeProvider>
  );
}

