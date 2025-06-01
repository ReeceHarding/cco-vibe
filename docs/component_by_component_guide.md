# Component-by-Component Implementation Guide

This document provides the complete code for each component in the Postel frontend. Copy these exactly as shown for a perfect clone.

## Table of Contents
1. [Layout Component](#layout-component)
2. [Page Component](#page-component)
3. [Navigation Component](#navigation-component)
4. [Button Component](#button-component)
5. [Icons Component](#icons-component)
6. [Logo Component](#logo-component)
7. [Complete Component Integration](#complete-component-integration)

## Layout Component

**File**: `app/layout.tsx`

```typescript
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

// Configure Instrument Sans font
const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
});

// Configure Geist Sans font
const geist = GeistSans;

// Metadata configuration
export const metadata: Metadata = {
  title: "Postel - Write authentic X posts in 9 seconds",
  description: "AI-powered tool to create authentic X/Twitter posts that sound like you. Trusted by 800+ users, try for free - no credit card required.",
  keywords: ["AI", "Twitter", "X", "social media", "content creation", "posts"],
  authors: [{ name: "Postel" }],
  openGraph: {
    title: "Postel - Write authentic X posts in 9 seconds",
    description: "AI-powered tool to create authentic X/Twitter posts that sound like you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geist.variable}`}>
      <body className={`${instrumentSans.className} ${geist.className} antialiased bg-background text-foreground overscroll-none`}>
        {/* SVG Background with Leadify blue gradient theme */}
        <div className="fixed inset-0 -z-20 h-full w-full">
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Blue gradient variations */}
              <radialGradient id="cloudGradient1" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#BFDBFE" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.3" />
              </radialGradient>
              
              <radialGradient id="cloudGradient2" cx="70%" cy="40%">
                <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#C7D2FE" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#A5B4FC" stopOpacity="0.2" />
              </radialGradient>
              
              <radialGradient id="cloudGradient3" cx="50%" cy="70%">
                <stop offset="0%" stopColor="#EFF6FF" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#DBEAFE" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.2" />
              </radialGradient>

              {/* Blur filter for soft clouds */}
              <filter id="cloudBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
              </filter>
            </defs>
            
            {/* Base gradient */}
            <rect width="100%" height="100%" fill="#FAFAFA" className="dark:fill-[#0a0a0a]" />
            
            {/* Cloud shapes */}
            <ellipse cx="20%" cy="40%" rx="35%" ry="25%" fill="url(#cloudGradient1)" filter="url(#cloudBlur)" transform="translate(0, 50)" />
            <ellipse cx="70%" cy="30%" rx="40%" ry="30%" fill="url(#cloudGradient2)" filter="url(#cloudBlur)" transform="translate(0, 80)" />
            <ellipse cx="50%" cy="60%" rx="45%" ry="35%" fill="url(#cloudGradient3)" filter="url(#cloudBlur)" transform="translate(0, 100)" />
            
            {/* Additional cloud layers for depth */}
            <ellipse cx="85%" cy="50%" rx="30%" ry="20%" fill="#DBEAFE" fillOpacity="0.3" filter="url(#cloudBlur)" transform="translate(0, 120)" />
            <ellipse cx="15%" cy="70%" rx="35%" ry="25%" fill="#BFDBFE" fillOpacity="0.3" filter="url(#cloudBlur)" transform="translate(0, 140)" />
            <ellipse cx="60%" cy="80%" rx="50%" ry="30%" fill="#93C5FD" fillOpacity="0.2" filter="url(#cloudBlur)" transform="translate(0, 160)" />
          </svg>
        </div>
        
        {/* Enhanced gradient overlay */}
        <div className="fixed top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#FAFAFB] via-[#FAFAFB]/95 via-30% to-transparent dark:from-[#0F0F0F] dark:via-[#0F0F0F]/95 -z-10"></div>
        
        {children}
      </body>
    </html>
  );
}
```

## Page Component

**File**: `app/page.tsx`

Due to the large size of this component (383 lines), here are the key sections:

### Imports and Setup
```typescript
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { XIcon, PlayIcon } from "@/components/icons";
import Image from "next/image";
```

### Main Structure
```typescript
export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <main className="relative z-10">
        <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-full">
              <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">Trusted by 800+ users</span>
              <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">•</span>
              <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">Try for free, no CC</span>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[88px] font-instrument font-bold leading-[0.9] mb-6 text-[#333333] dark:text-white">
              Write authentic X<br />
              posts in 9 seconds
            </h1>
            <p className="text-lg md:text-xl text-[#666666] dark:text-[#CCCCCC] max-w-2xl mx-auto mb-8">
              Postel uses AI to create posts that sound like you
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <div className="px-4 py-2 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-full text-sm text-[#4B5563] dark:text-[#D1D5DB]">
              Trained on your posts
            </div>
            <div className="px-4 py-2 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-full text-sm text-[#4B5563] dark:text-[#D1D5DB]">
              Fine tune your voice
            </div>
            <div className="px-4 py-2 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-full text-sm text-[#4B5563] dark:text-[#D1D5DB]">
              Higher engagement rates
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="xl" variant="gradient" className="gap-2 rounded-full">
              <XIcon className="w-4 h-4" />
              Sign in with X
            </Button>
          </motion.div>

          {/* Video Section - continues with animation delays... */}
        </div>
      </main>
    </div>
  );
}
```

## Navigation Component

**File**: `components/navigation.tsx`

```typescript
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAFAFB]/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md border-b border-[#E5E7EB] dark:border-[#1F2937]">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/features" 
            className="text-sm font-medium text-[#666666] dark:text-[#CCCCCC] hover:text-[#333333] dark:hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className="text-sm font-medium text-[#666666] dark:text-[#CCCCCC] hover:text-[#333333] dark:hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link 
            href="/faqs" 
            className="text-sm font-medium text-[#666666] dark:text-[#CCCCCC] hover:text-[#333333] dark:hover:text-white transition-colors"
          >
            FAQs
          </Link>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            className="rounded-full border-[#E5E7EB] dark:border-[#374151] text-[#333333] dark:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#1F2937]"
          >
            Dashboard
          </Button>
        </div>
      </nav>
    </header>
  );
}
```

## Button Component

**File**: `components/ui/button.tsx`

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Button variants configuration
const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-b from-[#3B82F6] to-[#1E40AF] hover:from-[#2563EB] hover:to-[#1E40AF] border border-[#1E3A8A] shadow-lg text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

## Icons Component

**File**: `components/icons.tsx`

```typescript
import { SVGProps } from "react";

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
```

## Logo Component

**File**: `components/logo.tsx`

```typescript
import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Logo P */}
      <path
        d="M10 8H22C26.4183 8 30 11.5817 30 16C30 20.4183 26.4183 24 22 24H18V32H10V8Z"
        fill="#2563EB"
      />
      <path
        d="M18 16H22C22.5523 16 23 16.4477 23 17C23 17.5523 22.5523 18 22 18H18V16Z"
        fill="white"
      />
      
      {/* Text "ostel" */}
      <text
        x="38"
        y="28"
        fontFamily="'Instrument Sans', sans-serif"
        fontSize="24"
        fontWeight="600"
        fill="#1F2937"
      >
        ostel
      </text>
    </svg>
  );
}
```

## Complete Component Integration

### Animation Patterns Used

1. **Staggered Fade-In Animations**:
   - Trust badge: 100ms delay
   - Heading: 200ms delay
   - Feature pills: 300ms delay
   - CTA buttons: 400ms delay
   - Video section: 500ms delay
   - Arrows: 600ms delay
   - "Your next post": 700ms delay
   - Decorative boxes: 800ms delay

2. **Animation Types**:
   - `fade-in`: Opacity 0 to 1 with translateY
   - `slide-in-left`: Slides from left
   - `slide-in-right`: Slides from right
   - `scale-in`: Scales from 0.9 to 1

### Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Key Design Patterns

1. **Fixed Navigation**: Always visible with backdrop blur
2. **Container Max Width**: 1152px (max-w-6xl)
3. **Padding Pattern**: px-4 on mobile, scales up
4. **Typography Scale**: 
   - Mobile: 36px heading
   - Tablet: 48px heading
   - Desktop: 88px heading

### Color System

- **Primary Blue**: #3B82F6 to #1E40AF gradient
- **Text Colors**:
  - Primary: #333333 (light) / white (dark)
  - Secondary: #666666 (light) / #CCCCCC (dark)
  - Muted: #6B7280 (light) / #9CA3AF (dark)
- **Background Colors**:
  - Main: #FAFAFB (light) / #0F0F0F (dark)
  - Card: #F3F4F6 (light) / #1F2937 (dark)
  - Border: #E5E7EB (light) / #1F2937 (dark)

### Important Implementation Notes

1. **Use Client Directive**: Required for Framer Motion components
2. **Font Loading**: Fonts must be imported in layout.tsx
3. **Image Optimization**: Use Next.js Image component
4. **Dark Mode**: CSS variables support both themes
5. **Accessibility**: All interactive elements have proper labels
6. **Performance**: Lazy load below-fold content

## Testing Checklist

- [ ] All animations trigger on scroll
- [ ] Responsive design works on all devices
- [ ] Fonts load correctly
- [ ] Images optimize and lazy load
- [ ] Navigation remains fixed on scroll
- [ ] Hover states work on all interactive elements
- [ ] Dark mode switches properly (if implemented)
- [ ] No console errors
- [ ] Build completes without warnings
- [ ] Lighthouse score > 90 