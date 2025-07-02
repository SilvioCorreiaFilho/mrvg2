# 📁 **MRVG Law Firm Website - Complete Project Documentation**

> Comprehensive documentation for the MRVG Advogados website project with CMS integration

---

## 🎯 **Project Overview**

**Project Name**: MRVG Law Firm Website with Headless CMS  
**Client**: Machado Ramos & Von Glehn Advogados  
**Location**: Brasília, DF - Brazil  
**Developer**: Silvio Correia Filho  
**Started**: July 2025  
**Status**: CMS Integration Phase Complete (60%)

### **Project Goals**
1. **Modernize** the law firm's online presence
2. **Implement autonomous content management** without designer dependency
3. **Optimize SEO** for legal services in Brasília
4. **Enhance user experience** with modern design and performance
5. **Provide scalable architecture** for future growth

---

## 🏗️ **Complete Project Structure**

```
MRVG Law Firm Website Design/
├── mrvg2/                           # Main website project
│   ├── react_template/              # Frontend React application
│   │   ├── public/
│   │   │   ├── robots.txt           # SEO robots configuration
│   │   │   ├── site.webmanifest     # PWA manifest
│   │   │   └── assets/              # Static assets
│   │   ├── src/
│   │   │   ├── components/          # React components
│   │   │   │   ├── Header.jsx       # Navigation header
│   │   │   │   ├── Hero.jsx         # Hero section
│   │   │   │   ├── About.jsx        # About section
│   │   │   │   ├── Services.jsx     # Legal services
│   │   │   │   ├── Team.jsx         # Team showcase
│   │   │   │   ├── Contact.jsx      # Contact form
│   │   │   │   ├── Footer.jsx       # Footer
│   │   │   │   ├── Blog.jsx         # Static blog (legacy)
│   │   │   │   ├── BlogDynamic.jsx  # CMS-powered blog
│   │   │   │   ├── ArticleCard.jsx  # Article display cards
│   │   │   │   ├── ChatBot.jsx      # AI chatbot
│   │   │   │   └── Commemorative.jsx # 15-year anniversary
│   │   │   ├── lib/
│   │   │   │   └── strapiApi.js     # CMS API integration
│   │   │   ├── utils/               # Utility functions
│   │   │   ├── App.jsx              # Main app component
│   │   │   ├── main.jsx             # Entry point
│   │   │   └── index.css            # Global styles + Design System
│   │   ├── package.json             # Frontend dependencies
│   │   ├── tailwind.config.js       # Tailwind configuration
│   │   ├── vite.config.js           # Vite build configuration
│   │   └── README_NEW.md            # Frontend documentation
│   ├── cover/                       # Design assets
│   ├── uploads/                     # Uploaded files
│   ├── OPTIMIZATION_PLAN.md         # Optimization roadmap
│   └── README.md                    # Main project README
├── mrvg-cms/                        # Headless CMS (Strapi)
│   ├── src/
│   │   ├── api/                     # API endpoints
│   │   │   ├── article/             # Articles content type
│   │   │   │   ├── content-types/
│   │   │   │   │   └── article/
│   │   │   │   │       └── schema.json
│   │   │   │   ├── controllers/
│   │   │   │   │   └── article.js   # Custom article logic
│   │   │   │   └── routes/
│   │   │   │       └── article.js   # Custom routes
│   │   │   ├── author/              # Authors content type
│   │   │   ├── category/            # Categories content type
│   │   │   └── tag/                 # Tags content type
│   │   └── admin/                   # Admin panel customizations
│   ├── config/
│   │   ├── server.js                # Server configuration
│   │   ├── database.js              # Database settings
│   │   └── middlewares.js           # Security settings
│   ├── database/
│   │   └── seeders/
│   │       └── initial-data.js      # Seed data for MRVG
│   ├── public/
│   │   └── uploads/                 # Media uploads
│   ├── package.json                 # Backend dependencies
│   └── README_MRVG.md               # CMS documentation
└── CMS_IMPLEMENTATION_STATUS.md     # Implementation progress
```

---

## 📦 **Dependencies and Technologies**

### **Frontend Stack (React Template)**
```json
{
  "dependencies": {
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/material": "^6.0.2",
    "@supabase/supabase-js": "^2.47.12",
    "axios": "^1.x.x",
    "chart.js": "^4.4.9",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.5.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "postcss": "^8.4.45",
    "tailwindcss": "^3.4.10",
    "vite": "^5.4.1"
  }
}
```

### **Backend Stack (Strapi CMS)**
```json
{
  "dependencies": {
    "@strapi/strapi": "5.17.0",
    "@strapi/plugin-users-permissions": "5.17.0",
    "@strapi/plugin-i18n": "5.17.0",
    "sqlite3": "^5.1.7",
    "pg": "^8.12.0"
  }
}
```

### **Design & Styling**
- **CSS Framework**: Tailwind CSS 3.4.10
- **Design System**: Custom MRVG variables
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Inter (UI) + Playfair Display (headings)
- **Animation**: CSS Transitions + Transform

### **Build & Development Tools**
- **Build Tool**: Vite 5.4.1
- **Bundler**: Rollup (via Vite)
- **Transpiler**: Babel (via Vite)
- **Linter**: ESLint 9.9.0
- **Package Manager**: npm/pnpm

---

## 🌐 **Environment Setup**

### **System Requirements**
- **Node.js**: 18.x or higher
- **npm**: 9.x or higher (or pnpm 8.x)
- **OS**: macOS, Linux, Windows
- **Memory**: 4GB RAM minimum
- **Storage**: 2GB free space

### **Installation Commands**

#### **1. Clone Repository**
```bash
git clone https://github.com/SilvioCorreiaFilho/mrvg2.git
cd mrvg2
```

#### **2. Frontend Setup**
```bash
cd react_template
npm install
# or
pnpm install
```

#### **3. Backend CMS Setup**
```bash
cd ../mrvg-cms
npm install
# or
pnpm install
```

### **Environment Variables**

#### **Frontend (.env.local)**
```env
# API Configuration
VITE_STRAPI_URL=http://localhost:1337/api
VITE_STRAPI_PUBLIC_URL=http://localhost:1337

# Site Configuration
VITE_SITE_URL=https://mrvgadvogados.com.br
VITE_CONTACT_EMAIL=contato@mrvgadvogados.com.br
VITE_PHONE=+55-61-XXXX-XXXX

# Analytics (optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_HOTJAR_ID=XXXXXXX
```

#### **Backend (.env)**
```env
# Server Configuration
HOST=0.0.0.0
PORT=1337
APP_KEYS="key1,key2,key3,key4"
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# Database (Development)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# Database (Production)
# DATABASE_CLIENT=postgres
# DATABASE_HOST=127.0.0.1
# DATABASE_PORT=5432
# DATABASE_NAME=mrvg_cms
# DATABASE_USERNAME=strapi
# DATABASE_PASSWORD=password

# Upload Provider (Production)
# CLOUDINARY_NAME=your-cloud-name
# CLOUDINARY_KEY=your-key
# CLOUDINARY_SECRET=your-secret
```

---

## 🚀 **Development Commands**

### **Frontend Development**
```bash
cd react_template

# Start development server
npm run dev          # Runs on http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### **Backend CMS Development**
```bash
cd mrvg-cms

# Start development server
npm run develop      # Runs on http://localhost:1337

# Build admin panel
npm run build

# Start production server
npm run start

# Create admin user
npm run strapi admin:create-user
```

---

## 🔌 **Port Configuration**

| Service | Port | URL | Purpose |
|---------|------|-----|----------|
| **Frontend** | 5173 | http://localhost:5173 | Vite dev server |
| **CMS Admin** | 1337 | http://localhost:1337/admin | Strapi admin panel |
| **CMS API** | 1337 | http://localhost:1337/api | REST API endpoints |
| **Production Frontend** | 80/443 | https://mrvgadvogados.com.br | Live website |
| **Production CMS** | 1337 | https://cms.mrvgadvogados.com | Live CMS |

### **Port Conflicts Resolution**
```bash
# Check if ports are in use
lsof -i :5173
lsof -i :1337

# Kill processes using ports
kill -9 $(lsof -ti:5173)
kill -9 $(lsof -ti:1337)

# Alternative ports in package.json
"dev": "vite --port 3000"  # Frontend
"develop": "strapi develop --port 1338"  # CMS
```

---

## 🔍 **Environment Check Script**

Create `check-environment.sh` in project root:

```bash
#!/bin/bash

# MRVG Project Environment Check Script
echo "🔍 MRVG Law Firm Website - Environment Check"
echo "============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check command existence
check_command() {
    if command -v $1 &> /dev/null; then
        echo -e "${GREEN}✅ $1 is installed${NC}"
        $1 --version | head -1
    else
        echo -e "${RED}❌ $1 is not installed${NC}"
        return 1
    fi
    echo ""
}

# Function to check port availability
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo -e "${YELLOW}⚠️  Port $1 is in use${NC}"
        echo "   Process: $(lsof -ti:$1 | head -1)"
    else
        echo -e "${GREEN}✅ Port $1 is available${NC}"
    fi
}

# Function to check directory
check_directory() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✅ Directory $1 exists${NC}"
    else
        echo -e "${RED}❌ Directory $1 not found${NC}"
    fi
}

# Function to check file
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅ File $1 exists${NC}"
    else
        echo -e "${YELLOW}⚠️  File $1 not found${NC}"
    fi
}

echo "📋 System Requirements"
echo "───────────────────────"
check_command "node"
check_command "npm"
check_command "git"

echo "🔌 Port Availability"
echo "──────────────────────"
check_port 5173
check_port 1337
check_port 3000
echo ""

echo "📁 Project Structure"
echo "────────────────────────"
check_directory "react_template"
check_directory "mrvg-cms"
check_file "react_template/package.json"
check_file "mrvg-cms/package.json"
echo ""

echo "🔧 Dependencies Check"
echo "────────────────────────"
if [ -d "react_template/node_modules" ]; then
    echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠️  Frontend dependencies not installed${NC}"
    echo "   Run: cd react_template && npm install"
fi

if [ -d "mrvg-cms/node_modules" ]; then
    echo -e "${GREEN}✅ CMS dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠️  CMS dependencies not installed${NC}"
    echo "   Run: cd mrvg-cms && npm install"
fi
echo ""

echo "🌐 Environment Variables"
echo "──────────────────────────"
check_file "react_template/.env.local"
check_file "mrvg-cms/.env"
echo ""

echo "📊 Project Status"
echo "─────────────────────"
if [ -f "CMS_IMPLEMENTATION_STATUS.md" ]; then
    echo -e "${GREEN}✅ Implementation status documented${NC}"
else
    echo -e "${YELLOW}⚠️  Implementation status not found${NC}"
fi

if [ -f "OPTIMIZATION_PLAN.md" ]; then
    echo -e "${GREEN}✅ Optimization plan available${NC}"
else
    echo -e "${YELLOW}⚠️  Optimization plan not found${NC}"
fi
echo ""

echo "🚀 Quick Start Commands"
echo "─────────────────────────"
echo -e "${BLUE}Frontend:${NC} cd react_template && npm run dev"
echo -e "${BLUE}CMS:${NC}      cd mrvg-cms && npm run develop"
echo -e "${BLUE}Admin:${NC}    http://localhost:1337/admin"
echo -e "${BLUE}Website:${NC}  http://localhost:5173"
echo ""

echo "✨ Environment check complete!"
```

Make it executable:
```bash
chmod +x check-environment.sh
./check-environment.sh
```

---

## 🤖 **Genspark Integration Instructions**

### **AI Assistant Setup for MRVG Project**

To help Genspark understand and improve this project, follow these guidelines:

#### **1. Context Understanding**
```markdown
**Project Context for AI:**
- Legal services website for Brazilian law firm
- Headless CMS architecture (Strapi + React)
- Focus on autonomous content management
- SEO optimization for legal keywords
- Accessibility compliance (WCAG)
- Mobile-first responsive design
```

#### **2. Code Analysis Prompts**
```markdown
**For Code Review:**
"Analyze this React component for a Brazilian law firm website. 
Focus on: accessibility, SEO, performance, and legal industry UX patterns.
Suggest improvements for: loading states, error handling, and mobile experience."

**For CMS Integration:**
"Review this Strapi CMS setup for a law firm. 
Evaluate: content modeling, API efficiency, security, and scalability.
Suggest: performance optimizations and content workflow improvements."

**For Performance:**
"Analyze this website for Core Web Vitals optimization.
Focus on: bundle size, lazy loading, image optimization, and caching strategies.
Provide: specific recommendations for legal services websites."
```

#### **3. Enhancement Suggestions**

**Ask Genspark to help with:**

1. **Performance Optimization**
   ```
   "How can I optimize this law firm website for:
   - Lighthouse score 95+
   - Core Web Vitals
   - Mobile performance
   - SEO for legal keywords in Portuguese"
   ```

2. **Accessibility Improvements**
   ```
   "Review accessibility for law firm website:
   - WCAG 2.1 AA compliance
   - Screen reader optimization
   - Keyboard navigation
   - Color contrast for legal documents"
   ```

3. **Legal Industry Features**
   ```
   "Suggest legal-specific features for this website:
   - Document automation
   - Client portal functionality
   - Legal calculator widgets
   - Appointment scheduling
   - Case tracking system"
   ```

4. **Content Strategy**
   ```
   "Help improve content management for law firm:
   - SEO-optimized article templates
   - Legal content categorization
   - Author management for lawyers
   - Related articles algorithm"
   ```

#### **4. Debugging Assistance**

**Common Issues to Ask About:**
```markdown
1. "CMS API not loading articles" - Check CORS and authentication
2. "Slow mobile performance" - Analyze bundle size and lazy loading
3. "SEO not indexing" - Review meta tags and structured data
4. "Form submissions failing" - Check validation and error handling
```

#### **5. Feature Development**

**Next Phase Enhancements:**
```markdown
**Phase 2 Features to Implement:**
- Client portal with login system
- Online appointment booking
- Legal document templates
- Case progress tracking
- Payment integration
- Multi-language support (PT/EN)

**Ask Genspark:**
"Help me implement [specific feature] for a Brazilian law firm website.
Consider: Brazilian legal requirements, UX best practices, and security."
```

#### **6. Security Review**
```markdown
**Security Checklist for Genspark:**
- LGPD compliance (Brazilian GDPR)
- Secure file uploads
- Authentication best practices
- API rate limiting
- Data encryption
- Backup strategies
```

#### **7. Deployment Assistance**
```markdown
**Production Deployment Help:**
"Guide me through deploying this law firm website:
- Strapi CMS on VPS (Contabo)
- React frontend on Vercel/Netlify
- SSL configuration
- Database migration
- Environment variables setup"
```

---

## 📋 **Testing and Quality Assurance**

### **Testing Strategy**
```bash
# Frontend Testing
npm run test          # Unit tests
npm run e2e           # End-to-end tests
npm run lighthouse    # Performance testing

# CMS Testing
npm run test:api      # API endpoint tests
npm run test:content  # Content validation
```

### **Quality Metrics**
- **Lighthouse Score**: 95+ target
- **Accessibility**: WCAG AA compliance
- **Performance**: Core Web Vitals green
- **SEO**: 100/100 score
- **Security**: A+ SSL rating

---

## 📞 **Support and Maintenance**

### **Documentation Links**
- [Frontend README](react_template/README_NEW.md)
- [CMS Documentation](mrvg-cms/README_MRVG.md)
- [Optimization Plan](OPTIMIZATION_PLAN.md)
- [Implementation Status](CMS_IMPLEMENTATION_STATUS.md)

### **Contact Information**
- **Developer**: Silvio Correia Filho
- **Email**: silvio@example.com
- **GitHub**: @SilvioCorreiaFilho
- **Project Repository**: https://github.com/SilvioCorreiaFilho/mrvg2

### **Support Hours**
- **Emergency**: 24/7
- **Regular Support**: Mon-Fri 9AM-6PM (Brasília Time)
- **Response Time**: < 4 hours

---

**Last Updated**: July 2, 2025  
**Version**: 1.0.0  
**Status**: CMS Integration Phase Complete


