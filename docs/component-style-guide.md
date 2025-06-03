# Component Development Style Guide

This document outlines the coding patterns, conventions, and best practices used in this project. Follow these guidelines when creating new components to maintain consistency.

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [File Structure](#file-structure)
3. [Component Patterns](#component-patterns)
4. [TypeScript Conventions](#typescript-conventions)
5. [Styling Approach](#styling-approach)
6. [State Management](#state-management)
7. [Animation Guidelines](#animation-guidelines)
8. [Accessibility Standards](#accessibility-standards)
9. [Performance Optimization](#performance-optimization)
10. [Debugging & Logging](#debugging-logging)

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components with Radix UI primitives
- **Fonts**: 
  - Primary: Instrument Sans
  - Secondary: Geist Sans  
  - Editorial: Playfair Display
- **Icons**: Lucide React icons
- **Animations**: CSS animations with Tailwind utilities
- **State**: React hooks (useState, useEffect, useRef)

## File Structure

### Component Organization
```
components/
├── ui/                    # Reusable UI primitives
│   └── button.tsx        # Example: shadcn-style components
├── navigation.tsx        # Feature-specific components
├── logo.tsx             # Brand components
└── icons.tsx            # Custom icon components
```

### Key Principles:
- **UI components** go in `components/ui/` directory
- **Feature components** go in root `components/` directory
- **No test files** - delete after creation
- **Edit existing files** rather than creating duplicates
- **Check for existing functionality** before creating new files

## Component Patterns

### 1. Basic Component Structure

```typescript
"use client"  // Always declare client components explicitly

import React from "react"
import { cn } from "@/lib/utils"  // Always use cn for className merging

// Define props interface
export interface ComponentNameProps {
  className?: string
  children?: React.ReactNode
  // ... other props
}

// Use React.forwardRef for components that need ref
export const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ className, children, ...props }, ref) => {
    // Add console.log for debugging
    console.log("ComponentName rendered with props:", props)
    
    return (
      <div
        ref={ref}
        className={cn(
          "base-styles here",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ComponentName.displayName = "ComponentName"
```

### 2. UI Component Pattern (shadcn-style)

```typescript
import { cva, type VariantProps } from "class-variance-authority"

// Define variants using cva
const componentVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "default-styles",
        secondary: "secondary-styles",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Extend props with variants
export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  asChild?: boolean
}
```

### 3. Icon Component Pattern

```typescript
export const IconName = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
    className={className}
    {...props}
  >
    {/* SVG paths */}
  </svg>
)
```

## TypeScript Conventions

1. **Always use explicit types** - no `any` types
2. **Export interfaces** for all component props
3. **Use type imports**: `import type { Metadata } from "next"`
4. **Destructure props** with explicit typing
5. **ForwardRef pattern** for components needing refs
6. **Display names** for all forwardRef components

## Styling Approach

### 1. Design System Colors

The project uses a custom color scheme with CSS variables:

```css
/* Primary brand color - Purple */
--primary: 271 51% 53%;  /* #9333EA */

/* Blue accent colors for gradients */
#3B82F6, #2563EB, #1E40AF, #60A5FA, #93C5FD
```

### 2. Tailwind Class Patterns

```typescript
// Complex glassmorphism effect
className={`
  fixed top-8 left-1/2 -translate-x-1/2 z-50
  backdrop-blur-[10px] rounded-full
  transition-all duration-200
  ${scrolled 
    ? "bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(20,20,20,0.5)]" 
    : "bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(20,20,20,0.75)]"
  }
  border border-[rgba(147,51,234,0.2)]
  shadow-[inset_0px_2px_8px_rgba(255,255,255,0.6),0px_4px_20px_rgba(0,0,0,0.05)]
`}

// Hover states with transitions
className="hover:opacity-90 transition-opacity duration-200"

// Responsive design
className="w-[95%] max-w-[1050px] px-3 sm:px-4"
```

### 3. Custom Utility Classes

Always define custom animations and utilities in `globals.css`:

```css
/* Animation with delay */
.animate-delay-200 {
  animation-delay: 200ms;
}

/* Custom shadows */
.shadow-[0_8px_30px_rgba(147,51,234,0.08)] {
  box-shadow: 0 8px 30px rgba(147, 51, 234, 0.08);
}
```

## State Management

### 1. Component State Pattern

```typescript
export function ComponentName() {
  // State declarations at top
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  // Effects after state
  useEffect(() => {
    setMounted(true)
    console.log("Component mounted")
  }, [])
  
  // Event handlers before render
  const handleClick = () => {
    console.log("Button clicked")
    setIsOpen(!isOpen)
  }
  
  // Conditional rendering based on mount state
  if (!mounted) return null
  
  return (
    // Component JSX
  )
}
```

### 2. Animation State Pattern

```typescript
// Use mounted state for animations
className={`transition-all duration-700 ${
  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
}`}
style={{ transitionDelay: "300ms" }}
```

## Animation Guidelines

### 1. Standard Transitions

- **Duration**: 200ms for micro-interactions, 300-700ms for page elements
- **Easing**: Use Tailwind's default (cubic-bezier)
- **Properties**: Transform and opacity for performance

### 2. Animation Patterns

```css
/* Fade in up */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale with fade */
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 3. Scroll Animations

```css
/* Infinite scroll for carousels */
@keyframes infinite-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-infinite-scroll {
  animation: infinite-scroll 50s linear infinite;
}

/* Pause on hover */
.container:hover .animate-infinite-scroll {
  animation-play-state: paused;
}
```

## Accessibility Standards

1. **Semantic HTML**: Use proper HTML elements
2. **ARIA labels**: Add for interactive elements
   ```typescript
   aria-label="Menu"
   ```
3. **Focus states**: Custom focus rings
   ```css
   focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
   ```
4. **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
5. **Motion preferences**: Respect prefers-reduced-motion
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation-duration: 0.01ms !important; }
   }
   ```

## Performance Optimization

### 1. Image Optimization

```typescript
import Image from "next/image"

<Image
  src="/path/to/image"
  alt="Description"
  width={1200}
  height={630}
  className="w-full h-auto"
  priority={isAboveFold}
/>
```

### 2. Component Optimization

- Use `React.memo` for expensive components
- Implement proper `useCallback` and `useMemo` hooks
- Lazy load heavy components

### 3. CSS Performance

- Use `transform` and `opacity` for animations
- Avoid layout-triggering properties in animations
- Use `will-change` sparingly

## Debugging & Logging

### Required Console Logs

Every component and significant function must include console logs:

```typescript
// Component mount
useEffect(() => {
  console.log("ComponentName mounted")
}, [])

// User interactions
const handleClick = () => {
  console.log("Button clicked with value:", value)
}

// State changes
useEffect(() => {
  console.log("State updated:", { stateName: stateValue })
}, [stateValue])

// API calls or data fetching
console.log("Fetching data from:", url)
console.log("Data received:", data)

// Errors
console.error("Error in ComponentName:", error)
```

## Component Examples

### Navigation Component Pattern
- Fixed positioning with glassmorphism
- Scroll-based state changes
- Responsive design with mobile menu
- Smooth transitions

### Button Component Pattern
- Multiple variants (default, ghost, gradient)
- Multiple sizes
- ForwardRef implementation
- Compound component support with `asChild`

### Icon Component Pattern
- SVG-based with currentColor
- Accepts all SVG props
- Default className handling
- Consistent viewBox sizing

## Best Practices Summary

1. **Always use TypeScript** with strict typing
2. **Console log everything** for debugging
3. **Edit existing files** rather than creating new ones
4. **Use AI/LLM calls** over hardcoded logic
5. **Implement real functionality** - no mock data
6. **Optimize for performance** from the start
7. **Make everything fully functional** on first implementation
8. **Follow the established patterns** exactly
9. **Check for existing functionality** before creating new features
10. **Maintain clean folder structure** with proper organization

## Common Pitfalls to Avoid

1. Creating duplicate files or functionality
2. Using hardcoded strings instead of dynamic content
3. Implementing placeholder/mock data
4. Skipping console logs
5. Creating test files
6. Using hyphens in git commit messages
7. Not following the established animation patterns
8. Ignoring TypeScript types
9. Creating components without proper accessibility
10. Not optimizing for both light and dark modes 