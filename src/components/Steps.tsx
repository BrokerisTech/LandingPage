import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  AutoAwesome as AutoAwesomeIcon,
  Analytics as AnalyticsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Steps: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const steps = [
    {
      icon: AssignmentIcon,
      title: 'Criar proposta',
      description: 'Conte-nos sobre seu negócio, público-alvo e objetivos para personalizar sua estratégia de conteúdo.',
      color: '#1976d2',
    },
    {
      icon: AutoAwesomeIcon,
      title: 'Receber parcela',
      description: 'Nossa inteligência artificial analisa tendências, gera artigos e planeja sua estratégia de marketing.',
      color: '#9c27b0',
    },
    {
      icon: AnalyticsIcon,
      title: 'Gerar recibos',
      description: 'Receba relatórios semanais com métricas de performance e insights para otimizar seus resultados.',
      color: '#2e7d32',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        delay: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative circles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e3f2fd" fill-opacity="0.3"%3E%3Ccircle cx="20" cy="20" r="8"/%3E%3Ccircle cx="80" cy="40" r="12"/%3E%3Ccircle cx="40" cy="80" r="6"/%3E%3Ccircle cx="90" cy="90" r="4"/%3E%3Ccircle cx="10" cy="70" r="10"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.6,
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.primary.main,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  mb: 2,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                COMO FUNCIONA
              </Typography>
              
              <Typography
                variant={isMobile ? 'h4' : 'h3'}
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Três passos simples para o sucesso
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                Nossa plataforma automatiza todo o processo de criação de conteúdo, 
                desde a configuração inicial até a análise de resultados.
              </Typography>
            </motion.div>
          </Box>

          {/* Steps Container */}
          <Box 
            sx={{ 
              position: 'relative',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 4, md: 2 },
            }}
          >
            {/* Background Line - Desktop */}
            {!isMobile && (
              <motion.div
                variants={lineVariants}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10%',
                  right: '10%',
                  height: '3px',
                  background: 'linear-gradient(90deg, #1976d2 0%, #9c27b0 50%, #2e7d32 100%)',
                  borderRadius: '2px',
                  zIndex: 1,
                  transformOrigin: 'left center',
                }}
              />
            )}

            {/* Background Line - Mobile */}
            {isMobile && (
              <motion.div
                variants={lineVariants}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '60px',
                  bottom: '60px',
                  width: '3px',
                  background: 'linear-gradient(180deg, #1976d2 0%, #9c27b0 50%, #2e7d32 100%)',
                  borderRadius: '2px',
                  zIndex: 1,
                  transformOrigin: 'top center',
                }}
              />
            )}

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2,
                    flex: 1,
                    maxWidth: isMobile ? '100%' : '300px',
                  }}
                >
                  {/* Step Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      border: `3px solid ${step.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 24,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      position: 'relative',
                    }}
                  >
                    <IconComponent
                      style={{
                        fontSize: 48,
                        color: step.color,
                      }}
                    />
                  </motion.div>

                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.8 + (index * 0.2),
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    style={{
                      position: 'absolute',
                      top: -10,
                      right: isMobile ? 'calc(50% - 20px)' : 20,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: step.color,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Step Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 1 + (index * 0.2),
                      duration: 0.6 
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        mb: 2,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                      }}
                    >
                      {step.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        maxWidth: 280,
                        mx: 'auto',
                      }}
                    >
                      {step.description}
                    </Typography>
                  </motion.div>
                </motion.div>
              );
            })}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Steps;
