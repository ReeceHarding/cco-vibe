# Comprehensive Homepage Design Practices Guide

This document provides an exhaustive guide to homepage design patterns, ensuring complete consistency and eliminating all ambiguity for future development.

## Table of Contents
1. [Page Structure Overview](#page-structure-overview)
2. [Hero Section Design](#hero-section-design)
3. [Section Design Patterns](#section-design-patterns)
4. [Typography System](#typography-system)
5. [Spacing & Layout Rules](#spacing-layout-rules)
6. [Color & Visual Hierarchy](#color-visual-hierarchy)
7. [Animation & Interaction Patterns](#animation-interaction-patterns)
8. [Component Design Rules](#component-design-rules)
9. [Responsive Design Strategy](#responsive-design-strategy)
10. [Content Patterns](#content-patterns)

## Page Structure Overview

### Overall Page Architecture
```
<Navigation /> → Fixed top navigation
<main>
  ├── Hero Section
  ├── Video Demo Section
  ├── Testimonials Section
  ├── Interactive Demo Grid
  ├── Features Section
  ├── Post Examples Carousel
  ├── Avatar Stack (Trust) Section
  ├── Pricing Section
  ├── FAQ Section
  ├── CTA Section
  └── Footer
</main>
<Video Modal /> → Conditional overlay
```

### Key Structural Rules
1. **Main wrapper**: `<main className="relative min-h-screen overflow-hidden">`
2. **All sections use semantic HTML**: `<section>` tags with unique IDs
3. **Z-index hierarchy**: Navigation (50) > Modals (50) > Content (10) > Decorative (1-10) > Background (-10 to -20)
4. **Overflow handling**: Main has `overflow-hidden`, sections handle their own overflow

## Hero Section Design

### Container Structure
```typescript
<div className="container relative z-10 pt-32 md:pt-40 pb-20 md:pb-32">
```

### Background Decorations
- **Absolute positioned blur orbs** with purple gradients
- **Positioning**: 
  - First orb: `top-20 left-[10%]` - 72x72 (w-72 h-72)
  - Second orb: `top-40 right-[15%]` - 96x96 (w-96 h-96)
- **Effects**: `bg-purple-200/20 rounded-full blur-3xl animate-pulse`
- **Animation delay**: Second orb has `animationDelay: "2s"`

### Content Layout Pattern
```
Trust Signal (pill badge)
   ↓
Main Heading (h1)
   ↓
Subheading (p)
   ↓
Feature Pills (3 items)
   ↓
CTA Button + Guarantee Text
   ↓
Social Proof Avatars
```

### Specific Hero Measurements
- **Max width**: `max-w-5xl mx-auto`
- **Text alignment**: Always `text-center`
- **Vertical spacing between elements**:
  - Trust signal → Heading: `mb-8`
  - Heading → Subheading: `mb-6`
  - Subheading → Feature pills: `mb-10`
  - Feature pills → CTA: `mb-10`
  - CTA button → Guarantee text: `mt-4`
  - CTA section → Social proof: `mt-16`

### Hero Typography
- **Heading**: `text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]`
- **Subheading**: `text-xl md:text-2xl text-muted-foreground leading-relaxed`
- **Feature pills**: `text-sm font-medium`
- **CTA button**: `text-lg font-medium`

## Section Design Patterns

### Standard Section Structure
```typescript
<section id="section-name" className="[spacing] [background]">
  <div className="container max-w-7xl">
    {/* Section Header */}
    <div className="text-center mx-auto mb-[12-20]">
      <h2>SECTION LABEL</h2>
      <h3>Main Heading</h3>
      <p>Optional description</p>
    </div>
    
    {/* Section Content */}
    <div>
      {/* Content specific to section */}
    </div>
  </div>
</section>
```

### Section Spacing Rules
- **Standard padding**: `py-16 md:py-24`
- **Large padding**: `py-24` or `py-32`
- **Hero/CTA sections**: `py-32`
- **Container padding**: `px-4` (handled by container class)

### Section Backgrounds
1. **Default**: `bg-background`
2. **Gradient transitions**: 
   - `bg-gradient-to-b from-background to-background/50`
   - `bg-gradient-to-b from-background/50 to-background`
3. **Muted sections**: `bg-gradient-to-b from-background to-muted/30`
4. **CTA sections**: `bg-gradient-to-br from-purple-50 via-background to-purple-50`

## Typography System

### Heading Hierarchy

#### Section Labels (h2)
```css
font-bold font-mono text-primary text-sm uppercase tracking-wider
```
- Always uppercase
- Always uses `font-mono`
- Always `text-primary` color
- Standard margin: `mb-4`

#### Main Section Headings (h3)
```css
font-semibold text-3xl sm:text-4xl md:text-5xl
```
- Responsive sizing
- Often includes gradient text spans
- Standard margins: `mt-4` after label, `mb-6` or `mb-10` before content

#### Gradient Text Pattern
```typescript
<span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
  highlighted text
</span>
```

### Body Text Rules
- **Default**: `text-muted-foreground`
- **Sizes**: 
  - Standard: default (16px implied)
  - Small: `text-sm` or `text-[15px]`
  - Large: `text-lg`
- **Line height**: Often `leading-relaxed` or `leading-[1.8]`
- **Max widths**: 
  - Descriptions: `max-w-2xl mx-auto`
  - Narrow content: `max-w-md mx-auto`

## Spacing & Layout Rules

### Container System
1. **Standard container**: `container` (centers with padding)
2. **Max widths by content type**:
   - Hero: `max-w-5xl`
   - Standard sections: `max-w-7xl`
   - FAQ/narrow content: `max-w-3xl`
   - CTA sections: `max-w-4xl`
   - Video content: `max-w-6xl`

### Grid Systems

#### Three Column Grid (Features, Pricing)
```css
grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8
```

#### Two Column Grid (Testimonials)
```css
grid grid-cols-1 md:grid-cols-2 gap-4
```

#### Responsive Flex
```css
flex flex-col md:flex-row items-center gap-6
```

### Margin/Padding Constants
- **Small gap**: `gap-2` or `gap-3`
- **Medium gap**: `gap-4` or `gap-6`
- **Large gap**: `gap-8` or `gap-12`
- **Section header margin**: `mb-12` to `mb-20`
- **Element spacing**: `mb-4`, `mb-6`, `mb-8`, `mb-10`

## Color & Visual Hierarchy

### Primary Colors
- **Purple gradient**: `from-purple-600 to-purple-400`
- **Purple variations**:
  - Light: `purple-50`
  - Muted: `purple-100`, `purple-200`
  - Standard: `purple-600`
  - Dark: `purple-700`, `purple-800`
- **Opacity modifiers**: `/10`, `/20`, `/30`, `/50`

### Card & Container Styling

#### Standard Card
```css
bg-white/80 backdrop-blur-sm rounded-3xl 
shadow-[0_2px_20px_rgba(0,0,0,0.04)] 
hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
border border-border/40 
hover:border-primary/30
transition-all duration-300
```

#### Glassmorphism Card
```css
bg-white/50 dark:bg-gray-900/50 
backdrop-blur-sm rounded-2xl 
border border-purple-100/20 
hover:border-purple-300/40
```

#### Interactive Elements
- **Hover scale**: `hover:scale-[1.02]` or `hover:scale-105`
- **Hover shadows**: Custom shadow with purple tint on hover
- **Transitions**: Always include `transition-all duration-200` or `duration-300`

## Animation & Interaction Patterns

### Mount Animations
All hero elements use staggered fade-in animations:

```typescript
className={`transition-all duration-700 ${
  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
}`}
style={{ transitionDelay: `${index * 100}ms` }}
```

Delays:
- Trust signal: `0ms`
- Heading: `100ms`
- Subheading: `200ms`
- Feature pills: `300ms`
- CTA: `400ms`
- Social proof: `500ms`
- Video: `600ms`

### Hover Interactions

#### Button Hover Pattern
```css
/* Standard */
hover:bg-primary/90

/* Gradient */
from-purple-600 to-purple-500 
hover:from-purple-700 hover:to-purple-600

/* With transform */
transform hover:-translate-y-0.5 transition-all duration-200
```

#### Card Hover Effects
1. **Scale**: `hover:scale-[1.02]` with `transition-all duration-300`
2. **Shadow enhancement**: Increases shadow opacity/size
3. **Border color**: Changes to primary color variant

### Scroll Animations

#### Infinite Marquee
```css
[--duration:60s] /* or 80s for slower */
animate-marquee
group-hover:[animation-play-state:paused]
```

#### Pulse Animations
```css
animate-pulse
/* With delay */
style={{ animationDelay: "2s" }}
```

## Component Design Rules

### Feature Cards
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

### Trust Badges/Pills
```css
/* Basic pill */
px-4 py-2 bg-purple-50 rounded-full

/* With icon */
flex items-center gap-2

/* Special CTA pill */
bg-gradient-to-r from-purple-50 to-purple-100/50 
text-purple-700 px-6 py-3 rounded-full 
border border-purple-200/50 shadow-sm
```

### Video Containers
```typescript
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-200/20">
  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-purple-900/10 to-transparent z-10 pointer-events-none" />
  <button className="relative w-full group">
    <Image />
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
        <PlayIcon className="w-8 h-8 text-white ml-1" />
      </div>
    </div>
  </button>
</div>
```

### Social Proof Avatars
```typescript
<div className="flex -space-x-3">
  {avatars.map((avatar, i) => (
    <img
      key={i}
      src={avatar}
      alt="User avatar"
      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
    />
  ))}
</div>
```

## Responsive Design Strategy

### Breakpoint Usage
- **Mobile first approach**
- **Common patterns**:
  - Hide on mobile: `hidden md:block`
  - Stack on mobile: `flex-col md:flex-row`
  - Reduce on mobile: `text-4xl md:text-6xl lg:text-7xl`

### Mobile-Specific Rules
1. **Padding reduction**: `px-3 sm:px-4`
2. **Font size reduction**: Always provide mobile size first
3. **Grid collapsing**: `grid-cols-1 md:grid-cols-3`
4. **Spacing reduction**: `gap-4 md:gap-8`

### Desktop-Specific Features
- Feature tabs (hidden on mobile, shown as list)
- Hover effects (touch-friendly on mobile)
- Complex animations (simplified on mobile)

## Content Patterns

### CTA Patterns

#### Primary CTA Button
```typescript
<Button
  onClick={handleSignIn}
  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200 group"
>
  <span className="flex items-center gap-3">
    Start creating for free
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform">
      {/* Arrow icon */}
    </svg>
  </span>
</Button>
```

#### Secondary Text
Always follows CTA with:
```typescript
<p className="text-sm text-muted-foreground mt-4">
  7-day free trial • No questions asked money back guarantee
</p>
```

### Feature Lists
Use check icons with consistent spacing:
```typescript
<div className="flex items-center gap-2">
  <Check className="w-4 h-4 text-purple-600" />
  <span className="text-sm font-medium text-purple-900">Feature text</span>
</div>
```

### Testimonial Cards
Fixed dimensions: `width: "320px", height: "560px"`
Standard Twitter card layout with:
- User avatar (40x40)
- Name with optional verified badge
- Handle and timestamp
- Tweet content
- Media attachment
- Engagement buttons

### Pricing Cards
- Recommended card: `scale-105` with special border/shadow
- Badge positioning: `absolute -top-4 left-1/2 transform -translate-x-1/2`
- Price display: Large price + "/month" + crossed out yearly savings

## Special Effects & Decorations

### Background SVG (in Layout)
Complex gradient system with:
- Multiple radial gradients
- Blur filters
- Subtle atmospheric effects
- Clean base gradient

### Decorative Blur Orbs
```css
w-[size] h-[size] bg-purple-200/20 rounded-full blur-3xl animate-pulse
```
Positioned absolutely with specific coordinates

### Gradient Overlays
For fade effects between sections:
```css
absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent
```

### Shadow System
Custom shadows always use rgba values:
- Light: `[0_2px_20px_rgba(0,0,0,0.04)]`
- Medium: `[0_8px_30px_rgba(0,0,0,0.08)]`
- Purple tinted: `[0_8px_30px_rgba(147,51,234,0.15)]`
- Heavy purple: `[0_15px_50px_rgba(147,51,234,0.4)]`

## Critical Rules to Never Break

1. **Always use semantic HTML** - sections, headings in order
2. **Always include transitions** - minimum `transition-all duration-200`
3. **Always use the color system** - never hardcode colors outside the palette
4. **Always make interactive elements obvious** - hover states are mandatory
5. **Always consider mobile** - test every component at mobile breakpoints
6. **Always use consistent spacing** - stick to the 4/8/12/16/20/24/32 system
7. **Always animate thoughtfully** - stagger animations, respect prefers-reduced-motion
8. **Always maintain z-index hierarchy** - navigation must stay on top
9. **Always use the gradient patterns** - purple-600 to purple-400 for brand
10. **Always include console logs** - for all interactions and state changes

## Implementation Checklist

When building homepage sections:
- [ ] Use semantic section tag with unique ID
- [ ] Apply standard section padding pattern
- [ ] Include section header with label/heading/description
- [ ] Use appropriate container max-width
- [ ] Implement mount animations with delays
- [ ] Add hover states to all interactive elements  
- [ ] Test responsive behavior
- [ ] Verify color usage matches system
- [ ] Check spacing follows 4px grid
- [ ] Ensure proper z-index layering
- [ ] Add decorative elements if needed
- [ ] Include console logs for debugging
- [ ] Test keyboard navigation
- [ ] Verify dark mode compatibility
- [ ] Check animation performance 