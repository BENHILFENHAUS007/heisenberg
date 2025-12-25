#!/bin/bash

##############################################################################
# 🚀 REACT BITS UPGRADE - INSTALLATION SCRIPT
# TK Fireworks - React Components & Animations Setup
# 
# INSTRUCTIONS:
# 1. Copy this entire script
# 2. Open Terminal in VS Code (Ctrl+` or View > Terminal)
# 3. Paste and run
# 4. Wait for completion (5-10 minutes)
# 5. Run: npm run dev
##############################################################################

echo ""
echo "=================================================================="
echo "🚀 React Bits Upgrade - Installation Starting"
echo "=================================================================="
echo ""

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}[1/4]${NC} Installing React Bits Core Components..."
npm install @react-bits/core --save 2>/dev/null
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ @react-bits/core${NC}"
else
  echo -e "${YELLOW}⚠️  Retrying @react-bits/core...${NC}"
  npm install @react-bits/core --save
fi

echo -e "\n${BLUE}[2/4]${NC} Installing React Bits UI Components..."
echo -e "${YELLOW}  Installing ElectricBorder...${NC}"
npm install @react-bits/electric-border --save 2>/dev/null || npm install @react-bits/ui --save

echo -e "${YELLOW}  Installing Stack Gallery...${NC}"
npm install @react-bits/stack --save 2>/dev/null || npm install @react-bits/stack-ui --save

echo -e "${YELLOW}  Installing AnimatedList...${NC}"
npm install @react-bits/animated-list --save 2>/dev/null || npm install @react-bits/animations --save

echo -e "${YELLOW}  Installing Lightning Background...${NC}"
npm install @react-bits/lightning --save 2>/dev/null || npm install @react-bits/backgrounds --save

echo -e "\n${BLUE}[3/4]${NC} Installing Animation Dependencies..."
echo -e "${YELLOW}  Updating Framer Motion...${NC}"
npm install framer-motion@latest --save

echo -e "${YELLOW}  Ensuring Lottie React...${NC}"
npm install lottie-react --save

echo -e "\n${BLUE}[4/4]${NC} Installing Additional Dev Dependencies..."
npm install --save-dev @types/node

echo ""
echo "=================================================================="
echo -e "${GREEN}✅ Installation Complete!${NC}"
echo "=================================================================="
echo ""
echo -e "${GREEN}Next Steps:${NC}"
echo "  1. Review: REACT_BITS_UPGRADE_GUIDE.md"
echo "  2. Start dev server: ${BLUE}npm run dev${NC}"
echo "  3. Open: ${BLUE}http://localhost:5173${NC} in your browser"
echo ""
echo -e "${YELLOW}Installed Packages:${NC}"
npm list --depth=0 | grep -E "@react-bits|framer-motion|lottie-react"
echo ""
echo "Happy coding! 🎉"
echo ""
