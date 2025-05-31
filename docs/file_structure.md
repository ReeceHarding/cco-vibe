# Postel Clone File Structure

## Project Overview
This is a pixel-perfect clone of the Postel website (postel.app) built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Directory Structure

```
postel-clone/
├── app/                          # Next.js app directory
│   ├── favicon.ico              # Website favicon
│   ├── globals.css              # Global CSS styles and Tailwind imports
│   ├── layout.tsx               # Root layout with metadata and font configuration
│   └── page.tsx                 # Home page component with animations
├── components/                   # Reusable React components
│   ├── icons.tsx                # Custom icon components (X/Twitter, Play)
│   ├── navigation.tsx           # Header navigation component
│   └── ui/                      # UI component library
│       └── button.tsx           # Button component with variants
├── docs/                        # Documentation
│   └── file_structure.md        # This file
├── lib/                         # Utility functions and helpers
│   └── utils.ts                 # cn() utility for merging class names
├── public/                      # Static assets
│   └── images/                  # Image assets
│       ├── decoration_right_new.png  # Right side decoration image
│       ├── decoration_right_new.svg  # Right side decoration (source)
│       ├── postel-screenshot.svg     # Hero section screenshot (source)
│       └── postel-screenshot.webp    # Hero section screenshot
├── .gitignore                   # Git ignore configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── postcss.config.mjs          # PostCSS configuration for Tailwind
├── README.md                   # Project readme
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Key Components

### Layout (`app/layout.tsx`)
- Configures Instrument Sans font
- Sets up metadata for SEO
- Implements gradient background effect
- Provides dark mode support

### Home Page (`app/page.tsx`)
- Main landing page with staggered animations
- Uses client-side rendering for animations
- Implements fade-in, slide-in, and scale animations
- Responsive design for all screen sizes

### Navigation (`components/navigation.tsx`)
- Fixed header with blur backdrop
- Responsive navigation menu
- Dashboard CTA button

### Button Component (`components/ui/button.tsx`)
- Reusable button with multiple variants
- Gradient variant for primary CTA
- Size variations (sm, default, lg, xl)
- Full accessibility support

### Icons (`components/icons.tsx`)
- Custom X/Twitter icon component
- Play icon for video button
- Consistent sizing and styling

## Styling Architecture

### Tailwind Configuration
- Custom color palette matching Postel brand
- Purple gradient colors (#8B5CF6 to #C6ACFF)
- Custom fonts (Instrument Sans, PP Editorial Old)
- Animation utilities for staggered effects

### CSS Variables
- HSL color system for theme flexibility
- Light/dark mode support
- Consistent spacing and border radius

## Animation System

### Entrance Animations
1. **Trust Badge** (100ms delay) - Fade in from bottom
2. **Main Heading** (200ms delay) - Fade in from bottom
3. **Feature Pills** (300ms delay) - Fade in from bottom
4. **CTA Button** (400ms delay) - Fade in from bottom
5. **Video Section** (500ms delay) - Fade in from bottom
6. **Left Arrow** (600ms delay) - Slide in from left
7. **Right Arrow** (600ms delay) - Slide in from right
8. **"Your next post"** (700ms delay) - Scale in
9. **Decorative Boxes** (800ms delay) - Scale in

### Hover Effects
- Button brightness changes
- Video play button scaling
- Navigation link color transitions

## Dependencies

### Core
- next: ^14.x - React framework
- react: ^18.x - UI library
- typescript: ^5.x - Type safety

### Styling
- tailwindcss: ^3.x - Utility CSS framework
- tailwindcss-animate: Animation plugin
- clsx: Class name utility
- tailwind-merge: Merge Tailwind classes

### UI Components
- @radix-ui/react-slot: Composable components
- @radix-ui/react-dialog: Dialog primitives
- class-variance-authority: Component variants

### Animation
- framer-motion: Animation library

## Performance Optimizations

1. **Image Optimization**
   - WebP format for photographs
   - SVG for illustrations and icons
   - Lazy loading for below-fold content

2. **Font Loading**
   - Font display swap for faster text rendering
   - Variable font weights to reduce file size

3. **CSS Optimization**
   - Tailwind CSS purging unused styles
   - Minimal custom CSS

4. **Component Architecture**
   - Client components only where needed
   - Server components by default
   - Code splitting automatic with Next.js

## Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

- Hidden elements on mobile:
  - Decorative arrows
  - Side boxes
  - Some navigation items

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Notes

- All animations use CSS transitions for performance
- Dark mode ready but not implemented in UI
- Placeholder images used for screenshot/decoration
- Font fallbacks configured for PP Editorial Old
- SEO optimized with proper meta tags
- Accessibility considered with ARIA labels 