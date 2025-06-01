#!/bin/bash

# Postel Frontend Clone Script
# This script helps automate the cloning process of the Postel frontend

echo "🚀 Starting Postel Frontend Clone Process..."
echo "=========================================="

# Check if project name is provided
if [ -z "$1" ]; then
    echo "❌ Error: Please provide a project name"
    echo "Usage: ./clone_script.sh <project-name>"
    exit 1
fi

PROJECT_NAME=$1
echo "📁 Creating new project: $PROJECT_NAME"

# Create new Next.js project
echo "📦 Creating Next.js project with TypeScript and Tailwind..."
npx create-next-app@latest $PROJECT_NAME --typescript --app --tailwind --no-git

# Navigate to project
cd $PROJECT_NAME

# Install dependencies
echo "📥 Installing required dependencies..."
npm install framer-motion@^12.15.0 \
  @radix-ui/react-dialog@^1.1.14 \
  @radix-ui/react-slot@^1.2.3 \
  class-variance-authority@^0.7.1 \
  clsx@^2.1.1 \
  lucide-react@^0.511.0 \
  tailwind-merge@^3.3.0 \
  tailwindcss-animate@^1.0.7 \
  geist@^1.4.2

# Create directory structure
echo "📂 Creating directory structure..."
mkdir -p components/ui
mkdir -p lib
mkdir -p public/images
mkdir -p docs

# Create utility file
echo "📝 Creating utility files..."
cat > lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

# Create PostCSS config
cat > postcss.config.mjs << 'EOF'
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
EOF

# Create a basic README
cat > README.md << EOF
# $PROJECT_NAME

This project is a clone of the Postel frontend UI.

## Getting Started

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3001](http://localhost:3001) to view the application.

## Tech Stack

- Next.js 15.3.3
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI

## Customization

Refer to \`docs/frontend_cloning_guide.md\` for detailed customization instructions.
EOF

# Create package.json scripts update
echo "📝 Updating package.json scripts..."
npm pkg set scripts.predev="lsof -ti:3001 | xargs kill -9 2>/dev/null || true"
npm pkg set scripts.dev="next dev --turbopack -p 3001"
npm pkg set scripts.start="next start -p 3001"

echo "✅ Basic setup complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Copy the Tailwind config from the original project"
echo "2. Replace app/globals.css with the original"
echo "3. Copy all component files from components/"
echo "4. Replace app/layout.tsx and app/page.tsx"
echo "5. Copy all assets from public/"
echo ""
echo "💡 Tip: Refer to docs/frontend_cloning_guide.md for detailed instructions"
echo ""
echo "🎉 Happy cloning!" 