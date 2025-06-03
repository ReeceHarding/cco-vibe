# Project File Structure

## Overview
This document maintains a comprehensive list of all files in the project. **Always check this document before creating new files to avoid duplicates.**

## Directory Structure

```
CCO-Vibe/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with fonts and background
│   ├── page.tsx                 # Home page (main landing page)
│   ├── globals.css              # Global styles and CSS variables
│   ├── favicon.ico              # Site favicon
│   ├── page-backup.tsx          # Backup of page (DO NOT USE)
│   └── page-broken.tsx          # Broken version (DO NOT USE)
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   └── button.tsx           # Button component with variants
│   ├── navigation.tsx           # Top navigation bar
│   ├── logo.tsx                 # Brand logo component
│   └── icons.tsx                # Custom icon components
│
├── lib/                         # Utilities and helpers
│   └── utils.ts                 # cn() utility for className merging
│
├── public/                      # Static assets
│   ├── images/
│   │   ├── feature_videos/      # Feature demo videos
│   │   ├── posts/              # Example post images
│   │   └── testimonials/       # Testimonial avatars
│   └── videos/
│       └── testimonials/        # Testimonial videos
│
├── docs/                        # Documentation
│   ├── component-style-guide.md # Comprehensive style guide
│   ├── component-quick-reference.md # Quick reference
│   ├── code-examples.md         # Real code examples
│   ├── homepage-design-practices.md # Homepage design guide
│   ├── homepage-component-specs.md # Component specifications
│   └── file_structure.md        # This file
│
├── Configuration Files
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Locked dependencies
├── .gitignore                   # Git ignore rules
├── README.md                    # Project README
└── next-env.d.ts               # Next.js TypeScript definitions
```

## Component Registry

### UI Components (`components/ui/`)
- **button.tsx**: Reusable button with multiple variants (default, ghost, gradient, etc.)

### Feature Components (`components/`)
- **navigation.tsx**: Fixed top navigation with glassmorphism effect
- **logo.tsx**: PostelLogo SVG component
- **icons.tsx**: Custom icons (XIcon, PlayIcon, DiscordIcon)

### Page Components (`app/`)
- **page.tsx**: Main landing page with all sections
- **layout.tsx**: Root layout with background SVG and fonts

## Styling Files
- **globals.css**: Contains all global styles, animations, and CSS variables
- **tailwind.config.js**: Custom theme extensions and color scheme

## Documentation Files (`docs/`)
- **component-style-guide.md**: Complete component development guide (424 lines)
- **component-quick-reference.md**: Quick reference with templates (138 lines)
- **code-examples.md**: Real code patterns from project (351 lines)
- **homepage-design-practices.md**: Comprehensive homepage design guide (541 lines)
- **homepage-component-specs.md**: Exact component specifications (441 lines)
- **file_structure.md**: Project file registry (this file)

## Key Features Already Implemented

### Navigation
- [x] Fixed glassmorphism navigation bar
- [x] Scroll-based transparency changes
- [x] Mobile menu button (UI only)
- [x] Discord link integration

### Homepage Sections
- [x] Hero section with video modal
- [x] Features carousel
- [x] Testimonials (scrolling)
- [x] Pricing section
- [x] FAQ accordion
- [x] Footer

### Design System
- [x] Purple primary color (#9333EA)
- [x] Blue gradient accents
- [x] Glassmorphism effects
- [x] Custom animations
- [x] Dark mode support

### Fonts
- [x] Instrument Sans (primary)
- [x] Geist Sans (secondary)
- [x] Playfair Display (editorial)

## Before Creating New Files

1. **Check this document** for existing files
2. **Search the codebase** for similar functionality
3. **Consider editing existing files** instead of creating new ones
4. **Follow the component patterns** in the style guide
5. **Update this document** after creating new files

## Files to Never Modify
- `page-backup.tsx` - Backup file only
- `page-broken.tsx` - Broken version for reference
- `package-lock.json` - Auto-generated

## Naming Conventions

### Components
- Use PascalCase: `ComponentName.tsx`
- UI components go in `ui/` folder
- Feature components go in root `components/` folder

### Utilities
- Use camelCase: `utilityName.ts`
- Place in `lib/` folder

### Styles
- Use kebab-case for CSS classes
- Use camelCase for CSS-in-JS

### Assets
- Use kebab-case: `image-name.png`
- Organize by type in `public/` subfolders

## Common Locations

### Need to add a new UI component?
→ `components/ui/[component-name].tsx`

### Need to add a page section?
→ Edit `app/page.tsx` (don't create new files)

### Need to add an icon?
→ Add to `components/icons.tsx`

### Need to add styles?
→ Add to `app/globals.css`

### Need to add a utility function?
→ Add to `lib/utils.ts`

## Git Workflow

Remember:
- NO forward slashes or backslashes in commit messages
- Commit after each feature implementation
- Use descriptive commit messages without special characters 