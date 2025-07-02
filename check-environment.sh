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
