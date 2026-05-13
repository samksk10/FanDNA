#!/bin/bash
# FanDNA Project Verification Script
# Run this to verify everything is set up correctly

echo "🚀 FanDNA Project Verification Script"
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for checks
PASSED=0
FAILED=0

# Function to check if command exists
check_command() {
    if command -v $1 &> /dev/null; then
        echo -e "${GREEN}✓${NC} $1 is installed"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} $1 is NOT installed"
        ((FAILED++))
    fi
}

# Function to check if file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} $1 does NOT exist"
        ((FAILED++))
    fi
}

# Function to check if directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 directory exists"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} $1 directory does NOT exist"
        ((FAILED++))
    fi
}

echo "📋 Checking Prerequisites..."
echo ""

check_command node
check_command npm
check_command git

echo ""
echo "📦 Checking Project Files..."
echo ""

check_file package.json
check_file tsconfig.json
check_file tailwind.config.ts
check_file next.config.ts
check_file .env.example
check_file README.md
check_file DEPLOYMENT.md
check_file ARCHITECTURE.md
check_file QUICKSTART.md

echo ""
echo "📁 Checking Directories..."
echo ""

check_dir app
check_dir components
check_dir lib
check_dir types
check_dir data

echo ""
echo "🧩 Checking Core Components..."
echo ""

check_file components/Navbar.tsx
check_file components/Hero.tsx
check_file components/AnimatedBackground.tsx
check_file components/ProgressBar.tsx
check_file components/QuestionCard.tsx
check_file components/AIAnalyzer.tsx
check_file components/IdentityCard.tsx
check_file components/WrappedSlide.tsx
check_file components/ShareCard.tsx
check_file components/Footer.tsx

echo ""
echo "📱 Checking Pages..."
echo ""

check_file app/page.tsx
check_file app/layout.tsx
check_file app/globals.css
check_file app/journey/page.tsx
check_file app/analyzing/page.tsx
check_file app/result/page.tsx
check_file app/wrapped/page.tsx
check_file app/share/page.tsx

echo ""
echo "🔌 Checking API Routes..."
echo ""

check_file app/api/analyze/route.ts
check_file app/api/profile/save/route.ts
check_file app/api/profile/[id]/route.ts

echo ""
echo "🛠️ Checking Utilities..."
echo ""

check_file lib/aws.ts
check_file lib/bedrock.ts
check_file lib/dynamodb.ts
check_file lib/utils.ts

echo ""
echo "🗂️ Checking Data..."
echo ""

check_file data/mock.ts
check_file types/index.ts

echo ""
echo "📖 Checking Documentation..."
echo ""

check_file README.md
check_file DEPLOYMENT.md
check_file ARCHITECTURE.md
check_file QUICKSTART.md
check_file DELIVERY.md
check_file INDEX.md

echo ""
echo "======================================"
echo "📊 Verification Results:"
echo -e "${GREEN}✓ Passed:${NC} $PASSED"
echo -e "${RED}✗ Failed:${NC} $FAILED"
echo "======================================"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed! Project is ready to use.${NC}"
    echo ""
    echo "Next steps:"
    echo "1. npm install"
    echo "2. npm run dev"
    echo "3. Open http://localhost:3000"
    echo ""
else
    echo -e "${YELLOW}⚠️ Some checks failed. Please verify the project setup.${NC}"
    echo ""
    echo "Failed items:"
    grep -r "does NOT" <(echo "See output above")
    echo ""
fi

echo "📚 Start with: README.md or QUICKSTART.md"
echo ""
echo "Happy coding! 🚀"
