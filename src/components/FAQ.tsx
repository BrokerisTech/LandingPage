import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

const FAQ: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'Preciso ter um blog para usar a Brokeris?',
      answer: 'Não! A Brokeris pode criar um blog completo para você do zero, ou se conectar com seu blog existente. Você escolhe a opção que melhor se adapta ao seu negócio.',
    },
    {
      question: 'A Brokeris é um plugin de WordPress?',
      answer: 'A Brokeris é uma plataforma completa de automação de conteúdo. Ela pode se conectar com WordPress e outras plataformas, mas não é apenas um plugin - é uma solução completa de marketing de conteúdo.',
    },
    {
      question: 'Quanto tempo vou precisar gastar por mês?',
      answer: 'Praticamente zero! A Brokeris foi desenvolvida para ser 100% automática. Você só precisa configurar uma vez e nossa IA cuida de tudo: criação de conteúdo, publicação, análise de concorrentes e relatórios.',
    },
    {
      question: 'O blog que vou receber é no WordPress?',
      answer: 'Sim! Nossos blogs são construídos em WordPress, a plataforma mais confiável e flexível do mercado. Isso garante máxima compatibilidade e facilidade de uso.',
    },
    {
      question: 'Consigo conectar o meu domínio?',
      answer: 'Sim! Você pode conectar seu próprio domínio personalizado ao blog criado pela Brokeris, mantendo a identidade da sua marca.',
    },
    {
      question: 'Consigo personalizar o meu blog?',
      answer: 'Sim! Nossos blogs vêm com design moderno e responsivo, mas você pode personalizar cores, fontes, layout e muito mais para combinar com a identidade da sua marca.',
    },
    {
      question: 'O Google pode me punir por usar conteúdo de IA?',
      answer: 'Não! Nossa IA cria conteúdo humanizado e otimizado para SEO. O Google valoriza conteúdo de qualidade, independente de como foi criado. Nossos clientes têm resultados excelentes sem penalizações.',
    },
    {
      question: 'SEO ainda funciona?',
      answer: 'Sim! SEO continua sendo uma das melhores estratégias de marketing digital. A Brokeris usa as técnicas mais avançadas de SEO para garantir que seu conteúdo apareça no topo do Google.',
    },
    {
      question: 'A IA vai substituir o Google? O SEO vai deixar de funcionar?',
      answer: 'Não! A IA e o Google trabalham juntos. Na verdade, o Google está investindo pesado em IA. Nossa plataforma se adapta às mudanças e sempre usa as melhores práticas de SEO.',
    },
    {
      question: 'Posso gerar artigos em vários idiomas? Ou apenas em português?',
      answer: 'Atualmente focamos no mercado brasileiro com conteúdo em português, mas estamos trabalhando para expandir para outros idiomas em breve.',
    },
    {
      question: 'Vou demorar para ter resultado?',
      answer: 'Nossos clientes começam a ver resultados em 2-4 semanas. Alguns casos mostram melhorias significativas em apenas 20 dias. O tempo varia conforme a competitividade do seu nicho.',
    },
    {
      question: 'Vocês garantem o meu resultado?',
      answer: 'Garantimos que nossa IA fará tudo que prometemos: criar conteúdo, analisar concorrentes, otimizar SEO, etc. Os resultados de tráfego dependem de vários fatores externos, mas nossos clientes têm excelentes resultados.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: theme.palette.background.paper }}>
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
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              mb: 3,
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
                    fontSize: '1rem',
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
            p: 4,
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
            }}
          >
            Continua com dúvidas?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 3,
            }}
          >
            Entre em contato com o nosso time! Vamos responder suas dúvidas com o maior prazer 😊
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
