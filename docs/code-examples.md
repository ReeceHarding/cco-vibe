# Real Code Examples from Project

This document contains actual code snippets from the project showing the exact patterns to follow.

## Component Examples

### 1. Navigation Component (Glassmorphism + Scroll Effects)

```typescript
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { PostelLogo } from "@/components/logo"
import { useEffect, useState } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY)
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-[1050px] h-[58px] px-3 sm:px-4 py-1.5 backdrop-blur-[10px] rounded-full transition-all duration-200 ${
        scrolled 
          ? "bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(20,20,20,0.5)] border-[rgba(147,51,234,0.2)] shadow-[inset_0px_2px_8px_rgba(255,255,255,0.6),0px_4px_20px_rgba(0,0,0,0.05)]" 
          : "bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(20,20,20,0.75)] border-[rgba(147,51,234,0.3)] shadow-[inset_0px_2px_12px_rgba(255,255,255,0.8),0px_8px_32px_rgba(147,51,234,0.08)]"
      } border`}
      data-test="navigation"
    >
      {/* Content */}
    </nav>
  )
}
```

### 2. Button Component with Variants

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        gradient: "bg-gradient-to-b from-[#3B82F6] to-[#1E40AF] hover:from-[#2563EB] hover:to-[#1E40AF] border border-[#1E3A8A] shadow-lg text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
```

### 3. Custom Icon Component

```typescript
export const DiscordIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
    <path fillRule="evenodd" clipRule="evenodd" d="..." fill="currentColor"></path>
  </svg>
)

export const PlayIcon = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="1em" 
    height="1em" 
    fill="currentColor" 
    viewBox="0 0 256 256" 
    className={className}
    {...props}
  >
    <path d="..." opacity="0.2"></path>
    <path d="..."></path>
  </svg>
)
```

## Styling Examples

### 1. Glassmorphism Effect

```css
/* From navigation component */
backdrop-blur-[10px] 
bg-[rgba(255,255,255,0.75)] 
dark:bg-[rgba(20,20,20,0.75)]
border border-[rgba(147,51,234,0.3)]
shadow-[inset_0px_2px_12px_rgba(255,255,255,0.8),0px_8px_32px_rgba(147,51,234,0.08)]
```

### 2. Animation Classes

```css
/* From globals.css */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

/* Animation with delay */
.animate-delay-200 {
  animation-delay: 200ms;
}
```

### 3. Responsive Design Pattern

```typescript
// From page components
<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    {/* Content */}
  </div>
</div>
```

## State Management Examples

### 1. Mount Animation Pattern

```typescript
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
  console.log("Component mounted")
}, [])

return (
  <div 
    className={`transition-all duration-700 ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}
    style={{ transitionDelay: "300ms" }}
  >
    {/* Content */}
  </div>
)
```

### 2. Interactive State Pattern

```typescript
const [activeTab, setActiveTab] = useState("tab1")
const [isOpen, setIsOpen] = useState(false)

const handleTabChange = (tab: string) => {
  console.log("Tab changed to:", tab)
  setActiveTab(tab)
}

const toggleOpen = () => {
  console.log("Toggle state:", !isOpen)
  setIsOpen(!isOpen)
}
```

## Common UI Patterns

### 1. Feature Card

```typescript
<div className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/20 hover:border-purple-300/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)]">
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="font-semibold mb-2">Title</h3>
      <p className="text-sm text-muted-foreground">Description</p>
    </div>
  </div>
</div>
```

### 2. CTA Button

```typescript
<Button 
  asChild 
  size="lg"
  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
>
  <Link href="/signup">
    Get Started Free
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</Button>
```

### 3. Section Header

```typescript
<div className="text-center mx-auto mb-12">
  <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">
    Section Label
  </h2>
  <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
    Main heading with{" "}
    <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
      gradient text
    </span>
  </h3>
  <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
    Supporting description text here
  </p>
</div>
```

## Debugging Patterns

### 1. Component Lifecycle Logging

```typescript
useEffect(() => {
  console.log("ComponentName: Initial mount")
  
  return () => {
    console.log("ComponentName: Cleanup")
  }
}, [])

useEffect(() => {
  console.log("ComponentName: Prop changed", { propName: propValue })
}, [propValue])
```

### 2. Event Handler Logging

```typescript
const handleClick = (e: React.MouseEvent) => {
  console.log("Button clicked", {
    target: e.currentTarget,
    timestamp: new Date().toISOString(),
    state: currentState
  })
}
```

### 3. State Change Logging

```typescript
const updateState = (newValue: string) => {
  console.log("State update", {
    from: currentValue,
    to: newValue,
    component: "ComponentName"
  })
  setCurrentValue(newValue)
}
```

## Layout Patterns

### 1. Responsive Container

```typescript
<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
  {/* Content */}
</div>
```

### 2. Grid Layout

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {items.map((item, index) => (
    <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
      {/* Card content */}
    </div>
  ))}
</div>
```

### 3. Flex Layout with Gap

```typescript
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
  <div className="flex-1">{/* Left content */}</div>
  <div className="flex-shrink-0">{/* Right content */}</div>
</div>
```

## Remember

- Always use these exact patterns
- Include console.log statements
- Follow the TypeScript interfaces
- Use the cn() utility for className merging
- Implement real functionality (no placeholders)
- Test in both light and dark modes
- Ensure mobile responsiveness
- Add proper animations and transitions 