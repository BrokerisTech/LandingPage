import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import LandingPage from './pages/LandingPage';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh' }}>
        <CssBaseline />
        <LandingPage />
      </Box>
    </ThemeProvider>
  );
}

