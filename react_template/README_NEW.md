# MRVG Advogados - Website Otimizado 2025 🚀

> Website moderno e otimizado para o escritório de advocacia Machado Ramos & Von Glehn

## ✨ Principais Melhorias Implementadas

### 🎨 Design System Moderno
- **Paleta de cores profissional**: Azul marinho corporativo (#1B365D) + Dourado elegante (#C9A961)
- **Tipografia otimizada**: Inter para UI + Playfair Display para elementos elegantes
- **Componentes glassmorphism**: Efeitos visuais modernos
- **Animações suaves**: Micro-interações que melhoram a experiência

### ⚡ Performance & SEO
- **Lazy Loading**: Componentes carregados sob demanda
- **Meta tags avançadas**: Open Graph, Twitter Cards, Schema.org
- **PWA Ready**: Manifest, service workers, instalável
- **Structured Data**: Schema.org para SEO local
- **Otimização de fontes**: Preload e fallbacks

### 🎯 Acessibilidade (WCAG)
- **Navegação por teclado**: Totalmente acessível
- **Screen readers**: Suporte completo
- **Contraste otimizado**: AA compliance
- **Focus indicators**: Visibilidade aprimorada
- **Skip links**: Navegação rápida

### 📱 Mobile-First
- **Design responsivo**: Otimizado para todos os dispositivos
- **Touch-friendly**: Botões e interações otimizadas
- **Performance mobile**: Carregamento rápido em 3G/4G

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + Vite 5
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Icons**: Font Awesome 6
- **Animations**: CSS Transitions + Transforms
- **Build**: Vite (ES Modules, HMR)
- **Deploy**: Vercel/Netlify ready

## 🚀 Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### 1. Instalar dependências
```bash
pnpm install
# ou
npm install
```

### 2. Desenvolvimento
```bash
pnpm dev
# ou
npm run dev
```
Acesse: `http://localhost:5173`

### 3. Build de Produção
```bash
pnpm build
# ou
npm run build
```

### 4. Preview do Build
```bash
pnpm preview
# ou
npm run preview
```

### 5. Linting
```bash
pnpm lint
# ou
npm run lint
```

## 📁 Estrutura do Projeto

```
react_template/
├── public/
│   ├── robots.txt          # SEO robots
│   ├── site.webmanifest    # PWA manifest
│   └── assets/
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.jsx      # Cabeçalho com navegação
│   │   ├── Hero.jsx        # Seção principal
│   │   ├── About.jsx       # Sobre o escritório
│   │   ├── Services.jsx    # Serviços oferecidos
│   │   ├── Team.jsx        # Equipe de advogados
│   │   ├── Contact.jsx     # Formulário de contato
│   │   ├── Footer.jsx      # Rodapé
│   │   └── ChatBot.jsx     # Assistente virtual
│   ├── utils/             # Utilitários
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Entry point
│   └── index.css          # Estilos globais + Design System
├── package.json
├── tailwind.config.js     # Configuração Tailwind
├── vite.config.js         # Configuração Vite
└── README.md
```

## 🎨 Design System

### Cores
```css
--primary-dark: #1B365D    /* Azul Marinho Profissional */
--primary-light: #2563EB   /* Azul Moderno */
--secondary-gold: #C9A961  /* Dourado Elegante */
--accent-blue: #E8F4FD     /* Azul Claro */
```

### Tipografia
- **Headers**: Playfair Display (elegante)
- **Body**: Inter (legibilidade)
- **Legal**: Georgia (documentos)

### Componentes CSS
```css
.btn-primary         /* Botão principal com gradiente */
.btn-secondary       /* Botão secundário outline */
.card-hover          /* Card com efeito hover */
.glass-effect        /* Efeito glassmorphism */
.text-gradient       /* Texto com gradiente */
```

## 📊 Métricas de Performance

### Lighthouse Scores (Target)
- **Performance**: 95+ ⚡
- **Accessibility**: 100 ♿
- **Best Practices**: 100 ✅
- **SEO**: 100 🎯

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🔧 Configuração de Desenvolvimento

### Environment Variables
Crie um arquivo `.env.local`:
```env
VITE_SITE_URL=https://mrvgadvogados.com.br
VITE_CONTACT_EMAIL=contato@mrvgadvogados.com.br
VITE_PHONE=+55-61-XXXX-XXXX
```

### Deploy

#### Vercel
```bash
npx vercel
```

#### Netlify
```bash
npm run build
# Upload pasta dist/
```

## 📈 Próximas Implementações

### Fase 2 - Funcionalidades Avançadas
- [ ] Sistema de agendamento online
- [ ] Portal do cliente (login/dashboard)
- [ ] Calculadoras jurídicas
- [ ] Chat ao vivo
- [ ] Newsletter

### Fase 3 - Migração Next.js
- [ ] SSR/SSG para melhor SEO
- [ ] API Routes
- [ ] CMS Integration
- [ ] Analytics avançado

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📞 Suporte

- **Website**: [mrvgadvogados.com.br](https://mrvgadvogados.com.br)
- **Email**: contato@mrvgadvogados.com.br
- **Desenvolvedor**: Silvio Correia Filho

---

**Feito com ❤️ para MRVG Advogados**
