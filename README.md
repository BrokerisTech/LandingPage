# Brokeris - Landing Page

Uma landing page moderna e responsiva para a plataforma Brokeris, desenvolvida com React + Material UI.

## 🚀 Funcionalidades

- **Design Responsivo**: Otimizado para desktop e mobile
- **Componentes Modulares**: Cada seção é um componente independente
- **Tema Personalizado**: Cores e tipografia customizadas
- **Animações Suaves**: Transições e efeitos hover
- **Acessibilidade**: Componentes acessíveis e semânticos

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Hero.tsx            # Seção principal com CTA
│   ├── Stats.tsx           # Estatísticas da empresa
│   ├── Benefits.tsx        # Vantagens e benefícios
│   ├── Services.tsx        # Serviços oferecidos
│   ├── Testimonials.tsx    # Depoimentos de clientes
│   ├── Plans.tsx           # Planos e preços
│   ├── FAQ.tsx             # Perguntas frequentes
│   ├── About.tsx           # Sobre a empresa
│   └── Footer.tsx          # Rodapé com links
├── pages/
│   └── LandingPage.tsx     # Página principal
├── theme.ts                # Configuração do tema MUI
└── App.tsx                 # Componente raiz
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca de interface
- **Material UI (MUI) 7** - Componentes e sistema de design
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Emotion** - CSS-in-JS para estilização

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Abrir no navegador:**
   ```
   http://localhost:5173
   ```

## 📱 Seções da Landing Page

### 1. Header
- Logo da Brokeris
- Menu de navegação responsivo
- Botões de Login e CTA

### 2. Hero
- Chamada principal com valor único
- Dashboard mockup interativo
- Botão de call-to-action

### 3. Stats
- Estatísticas da empresa
- Números de impacto

### 4. Benefits
- Vantagens da plataforma
- Cards com ícones e descrições

### 5. Services
- Funcionalidades principais
- Grid de serviços com imagens

### 6. Testimonials
- Cases de sucesso
- Depoimentos de clientes
- Métricas de resultados

### 7. Plans
- Planos de assinatura
- Toggle mensal/anual
- Comparação de recursos

### 8. FAQ
- Perguntas frequentes
- Accordion interativo
- Seção de contato

### 9. About
- Sobre a empresa
- Equipe e valores
- Missão e visão

### 10. Footer
- Links úteis
- Redes sociais
- Informações legais
- Botão flutuante do WhatsApp

## 🎨 Design System

### Cores
- **Primária**: Roxo (#7c3aed)
- **Secundária**: Verde (#10b981)
- **Texto**: Cinza escuro (#1e293b)
- **Fundo**: Branco (#ffffff)

### Tipografia
- **Fonte**: Inter, Roboto, Helvetica, Arial
- **Hierarquia**: H1-H6 com pesos e tamanhos definidos
- **Responsiva**: Adapta-se a diferentes tamanhos de tela

### Componentes
- **Cards**: Bordas arredondadas e sombras suaves
- **Botões**: Estilo consistente com hover effects
- **Formulários**: Design limpo e acessível
- **Navegação**: Menu responsivo com drawer mobile

## 📱 Responsividade

A landing page é totalmente responsiva e se adapta a:
- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Layout adaptado com 2 colunas
- **Mobile**: Layout em coluna única com navegação drawer

## 🔧 Personalização

### Tema
Edite o arquivo `src/theme.ts` para personalizar:
- Cores da marca
- Tipografia
- Espaçamentos
- Componentes customizados

### Conteúdo
Cada componente pode ser facilmente editado:
- Textos e descrições
- Imagens e ícones
- Links e CTAs
- Dados e estatísticas

## 📈 Performance

- **Lazy Loading**: Componentes carregados sob demanda
- **Otimização de Imagens**: Placeholders para imagens
- **Bundle Size**: Código otimizado e minificado
- **SEO**: Estrutura semântica e meta tags

## 🚀 Deploy

Para fazer deploy da aplicação:

1. **Build de produção:**
   ```bash
   npm run build
   ```

2. **Preview local:**
   ```bash
   npm run preview
   ```

3. **Deploy**: Os arquivos na pasta `dist/` podem ser enviados para qualquer serviço de hospedagem estática.

## 📄 Licença

Este projeto foi desenvolvido para a Brokeris. Todos os direitos reservados.

## 👨‍💻 Desenvolvido por

**Ge Coelho** - Desenvolvedor Full Stack
- Especialista em React, TypeScript e Material UI
- Foco em landing pages de alta conversão
- Experiência em automação de marketing

---

Para mais informações ou suporte, entre em contato através do botão flutuante do WhatsApp na página.