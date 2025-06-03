# Component Development Quick Reference

## 🚀 Component Template

```typescript
"use client"

import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export interface ComponentNameProps {
  className?: string
  children?: React.ReactNode
}

export function ComponentName({ className, children, ...props }: ComponentNameProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    console.log("ComponentName mounted")
  }, [])
  
  const handleClick = () => {
    console.log("ComponentName clicked")
  }
  
  return (
    <div 
      className={cn(
        "base-styles-here",
        mounted ? "opacity-100" : "opacity-0",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  )
}
```

## 🎨 Styling Cheatsheet

### Colors
- **Primary Purple**: `text-purple-600` `bg-purple-50` `border-purple-200`
- **Glassmorphism**: `backdrop-blur-[10px] bg-white/50 dark:bg-gray-900/50`
- **Shadows**: `shadow-[0_8px_30px_rgba(147,51,234,0.08)]`

### Common Patterns
```typescript
// Responsive padding
className="px-3 sm:px-4 py-6 md:py-8"

// Hover effects
className="hover:opacity-90 transition-all duration-200"

// Gradient backgrounds
className="bg-gradient-to-r from-purple-600 to-purple-400"

// Focus states
className="focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
```

## 📁 File Organization

```
components/
├── ui/              # Reusable primitives (button, input, etc.)
├── sections/        # Page sections (hero, features, etc.)
├── navigation.tsx   # Top-level components
└── icons.tsx        # Custom icons
```

## ✅ Checklist Before Creating Components

- [ ] Check if component already exists
- [ ] Search codebase for similar functionality
- [ ] Plan to edit existing files if possible
- [ ] Review the style guide
- [ ] Add console logs for all interactions
- [ ] Test with keyboard navigation
- [ ] Verify dark mode support
- [ ] Add proper TypeScript types
- [ ] Include animation states
- [ ] Implement real functionality (no mocks)

## 🚫 Common Mistakes to Avoid

1. **DON'T** create duplicate components
2. **DON'T** use hardcoded strings
3. **DON'T** skip console.log statements
4. **DON'T** use placeholder data
5. **DON'T** forget TypeScript types
6. **DON'T** ignore accessibility
7. **DON'T** create test files
8. **DON'T** use absolute positioning without need
9. **DON'T** forget mobile responsiveness
10. **DON'T** skip animations

## 🔧 Utility Functions

```typescript
// Always available
import { cn } from "@/lib/utils"

// Common imports
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
```

## 🎯 Animation Timings

- **Micro-interactions**: 200ms
- **Component transitions**: 300-500ms  
- **Page transitions**: 600-700ms
- **Scroll animations**: 40-50s (carousels)

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔍 Debug Pattern

```typescript
console.log("Component: Action", { 
  state: currentState,
  props: relevantProps,
  timestamp: new Date().toISOString()
})
``` 