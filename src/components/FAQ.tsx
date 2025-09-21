import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Button,
  useMediaQuery,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { getLinkWhatApp } from '../Shared/Features';

const FAQ: React.FC = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'Quais são os planos de mensalidade oferecidos pelo Brokeris ?',
      answer: 'Temos um plano com todas funcionalidades e você precisar personalizar a quantidade de usuários.',
    },
    {
      question: 'Posso alterar meu plano a qualquer momento ?',
      answer: "Sim, solicite um novo plano.",
    },
    {
      question: 'Como faço para cancelar meu plano ?',
      answer: 'Sim, 15 dias de avaliação com tudo liberado.',
    },
    {
      question: 'Existe um número máximo de produtores (Corretores/Supervisores/Gerentes) ?',
      answer: 'Não, é ilimitado o cadastro dos Corretores/Supervisores/Gerentes.',
    },
    {
      question: 'Como faço para cancelar meu plano ?',
      answer: 'Você pode solicitar o cancelamento a qualquer momento.',
    },
    {
      question: 'Tenho direito a treinamento ?',
      answer: 'Sim, solicite o treinamento, normalmente em 1 semana você fica apto 100%.',
    },
    {
      question: 'Posso acessar pelo celular ?',
      answer: 'Sim, o Brokeris é 100% online, você pode acessar de qualquer dispositivo com internet.',
    },
    {
      question: 'Meus dados estarão seguros ?',
      answer: 'Sim. Usamos os servidores mais modernos do mercado, os mesmos de grandes marcas como Netflix e iFood..',
    },
    {
      question: 'E se eu tiver mais algumas perguntas ?',
      answer: 'Nós ficaremos felizes em respondê-las. Entre em contato pelo whats (11) 98573-7008.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
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
            FAQ
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Perguntas frequentes
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: 2,
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: '0 0 16px 0',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderRadius: 2,
                  '&.Mui-expanded': {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: { xs: '0.8rem', md: '1rem' },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: 'white',
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontSize: { xs: '0.8rem', md: '1rem' },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Contact CTA */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 3, md: 4 },
            backgroundColor: theme.palette.primary.light,
            borderRadius: 3,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 100,
              height: 100,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Continua com dúvidas?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 3,
              fontSize: { xs: '0.8rem', md: '1rem' },
            }}
          >
            Entre em contato com o nosso time! Vamos responder suas dúvidas com o maior prazer 😊
          </Typography>

          <Button
            variant="contained"
            size={isMobile ? "small" : "large"}
            href={getLinkWhatApp(
              "5521980143451",
              `Olá, tenho uma duvida: `
            )}
            sx={{
              // backgroundColor: theme.palette.primary.main,
              // border: '1px solid white',
              color: 'black',
              backgroundColor: 'white',
              // '&:hover': {
              //   backgroundColor: theme.palette.primary.dark,
              // },
            }}>
            Entre em contato
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
