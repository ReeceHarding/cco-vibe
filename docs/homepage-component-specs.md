# Homepage Component Specifications

This document provides exact specifications for every component on the homepage with precise measurements, code examples, and implementation details.

## Hero Section Components

### Trust Signal Badge
```typescript
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full border border-purple-200/30">
  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full animate-pulse" />
  <span className="text-sm font-medium text-muted-foreground">
    800+ creators growing on X
  </span>
</div>
```
**Specifications:**
- Container: `inline-flex` with `gap-2`
- Padding: `px-4 py-2`
- Background: `bg-white/50` with `backdrop-blur-sm`
- Border: `border-purple-200/30`
- Dot: `w-2 h-2` with purple gradient
- Text: `text-sm font-medium`

### Hero Heading with Underline
```typescript
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
  Write{" "}
  <span className="relative">
    <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
      authentic
    </span>
    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
      <path d="M2 9C2 9 75 3 150 3C225 3 298 9 298 9" 
        stroke="url(#paint0_linear)" 
        strokeWidth="4" 
        strokeLinecap="round"/>
      <defs>
        <linearGradient id="paint0_linear" x1="2" y1="9" x2="298" y2="9">
          <stop stopColor="#9333EA"/>
          <stop offset="1" stopColor="#A855F7"/>
        </linearGradient>
      </defs>
    </svg>
  </span>{" "}
  posts
  <br />
  <span className="text-muted-foreground">that grow your audience</span>
</h1>
```
**Specifications:**
- Font sizes: `text-4xl` → `md:text-6xl` → `lg:text-7xl`
- Line height: `leading-[1.1]`
- Underline SVG: `-bottom-2` positioning, `w-full`
- Gradient text: `from-purple-600 to-purple-400`

### Feature Pills
```typescript
<div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
  <Check className="w-4 h-4 text-purple-600" />
  <span className="text-sm font-medium text-purple-900">No generic AI content</span>
</div>
```
**Specifications:**
- Container: `flex items-center gap-2`
- Padding: `px-4 py-2`
- Background: `bg-purple-50`
- Icon: `w-4 h-4 text-purple-600`
- Text: `text-sm font-medium text-purple-900`

### Primary CTA Button
```typescript
<Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200 group">
  <span className="flex items-center gap-3">
    Start creating for free
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>
</Button>
```
**Specifications:**
- Padding: `px-8 py-6`
- Border radius: `rounded-full`
- Text size: `text-lg font-medium`
- Shadow: `[0_10px_40px_rgba(147,51,234,0.3)]`
- Hover transform: `-translate-y-0.5`
- Arrow icon: `w-5 h-5` with `group-hover:translate-x-1`

### Social Proof Avatars
```typescript
<div className="flex items-center justify-center gap-6">
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
  <div className="text-left">
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="..." />
        </svg>
      ))}
    </div>
    <p className="text-sm text-muted-foreground">Loved by 800+ creators</p>
  </div>
</div>
```
**Specifications:**
- Avatar size: `w-10 h-10`
- Avatar overlap: `-space-x-3`
- Border: `border-2 border-white`
- Star icons: `w-4 h-4 text-yellow-400`

## Video Section Components

### Video Container with Play Button
```typescript
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-200/20">
  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-purple-900/10 to-transparent z-10 pointer-events-none" />
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent z-10 pointer-events-none" />
  <button className="relative w-full group">
    <Image src="/images/postel-dashboard.svg" alt="Postify Dashboard" width={1920} height={1080} className="w-full h-auto" />
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(147,51,234,0.4)] transition-all duration-300">
        <PlayIcon className="w-8 h-8 text-white ml-1" />
      </div>
    </div>
  </button>
</div>
```
**Specifications:**
- Border radius: `rounded-2xl`
- Shadow: `shadow-2xl`
- Border: `border-purple-200/20`
- Play button: `w-20 h-20`
- Play icon: `w-8 h-8` with `ml-1` offset
- Hover scale: `group-hover:scale-110`

## Testimonial Tweet Cards

### Twitter Card Structure
```typescript
<article className="mx-2 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:scale-[1.02] transition-all" style={{ width: "320px", height: "560px" }}>
  <div className="p-4 h-full flex flex-col">
    {/* Header */}
    <div className="flex items-start gap-3 mb-3">
      <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="font-bold text-gray-900 text-sm">{name}</span>
          <Verified className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="text-gray-500">@{handle}</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">{time}</span>
        </div>
      </div>
      <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
        <MoreHorizontal className="w-4 h-4 text-gray-500" />
      </button>
    </div>
    
    {/* Content */}
    <div className="text-gray-900 text-sm leading-normal mb-3">{content}</div>
    
    {/* Video */}
    <div className="rounded-xl overflow-hidden border border-gray-200 relative flex-1 mb-3">
      <video className="w-full h-full object-cover" poster={posterUrl} controls preload="metadata">
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
    
    {/* Engagement */}
    <div className="flex items-center justify-between -mx-2">
      {/* Engagement buttons */}
    </div>
  </div>
</article>
```
**Specifications:**
- Fixed size: `width: "320px", height: "560px"`
- Padding: `p-4`
- Avatar: `w-10 h-10`
- Verified badge: `w-3.5 h-3.5`
- More button: `p-1.5` with `w-4 h-4` icon
- Video border radius: `rounded-xl`

### Engagement Button
```typescript
<button className="flex items-center gap-1 p-2 hover:bg-purple-50 rounded-full transition-colors group/btn">
  <MessageCircle className="w-4 h-4 text-gray-500 group-hover/btn:text-purple-600" />
  <span className="text-xs text-gray-500 group-hover/btn:text-purple-600">24</span>
</button>
```
**Specifications:**
- Padding: `p-2`
- Icon size: `w-4 h-4`
- Text size: `text-xs`
- Hover background: `hover:bg-[color]-50`

## Feature Components

### Feature Tab Button
```typescript
<button className={`flex flex-1 flex-col items-center transition-colors pb-6 border-b-2 ${
  activeFeatureTab === feature.id
    ? "border-primary"
    : "border-transparent"
}`}>
  <div className={`flex items-center justify-center w-20 h-20 mb-4 rounded-full transition-colors ${
    activeFeatureTab === feature.id
      ? "bg-primary/10"
      : "bg-muted"
  }`}>
    <feature.icon className={`h-10 w-10 transition-colors ${
      activeFeatureTab === feature.id
        ? "text-primary"
        : "text-muted-foreground"
    }`} />
  </div>
  <div className="text-center">
    <p className={`font-semibold text-lg ${
      activeFeatureTab === feature.id
        ? "text-primary"
        : "text-muted-foreground"
    }`}>
      {feature.title}
    </p>
    <p className="text-sm text-muted-foreground text-balance mt-2 mx-auto">
      {feature.description}
    </p>
  </div>
</button>
```
**Specifications:**
- Icon container: `w-20 h-20`
- Icon size: `h-10 w-10`
- Bottom padding: `pb-6`
- Border: `border-b-2`
- Title: `font-semibold text-lg`
- Description: `text-sm` with `mt-2`

### Feature Video Display
```typescript
<div className="hidden md:block relative rounded-xl overflow-hidden border shadow-lg aspect-video max-w-5xl mx-auto">
  <video
    className="w-full h-full object-cover"
    src={feature.video}
    autoPlay
    loop
    muted
    playsInline
  />
</div>
```
**Specifications:**
- Aspect ratio: `aspect-video`
- Max width: `max-w-5xl`
- Border radius: `rounded-xl`
- Shadow: `shadow-lg`

## Pricing Components

### Billing Toggle
```typescript
<div className="bg-muted/50 rounded-2xl p-1.5 shadow-inner border border-border/20">
  <button
    onClick={() => setBillingPeriod("monthly")}
    className={`px-8 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
      billingPeriod === "monthly"
        ? "bg-white text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
        : "text-muted-foreground hover:text-foreground"
    }`}
  >
    Monthly
  </button>
</div>
```
**Specifications:**
- Container padding: `p-1.5`
- Button padding: `px-8 py-3`
- Border radius: Container `rounded-2xl`, Button `rounded-xl`
- Active shadow: `[0_2px_10px_rgba(0,0,0,0.08)]`

### Pricing Card
```typescript
<div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border transition-all duration-300 ${
  plan.recommended
    ? "border-primary scale-105 shadow-[0_8px_30px_rgba(168,85,247,0.12)]"
    : "border-border/40 hover:border-primary/30"
}`}>
  {plan.recommended && (
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-400 text-white px-5 py-2 rounded-full text-[13px] font-semibold shadow-lg">
      RECOMMENDED
    </div>
  )}
  <div className="p-10">
    {/* Content */}
  </div>
</div>
```
**Specifications:**
- Padding: `p-10`
- Border radius: `rounded-3xl`
- Recommended scale: `scale-105`
- Badge position: `-top-4`
- Badge padding: `px-5 py-2`

### Price Display
```typescript
<div className="mb-10">
  <span className="text-5xl font-bold text-foreground">
    ${price}
  </span>
  <span className="text-muted-foreground text-[15px] ml-2">
    /month
  </span>
  {billingPeriod === "yearly" && (
    <div className="text-muted-foreground/70 text-[14px] line-through mt-2">
      ${monthlyPrice}/month
    </div>
  )}
</div>
```
**Specifications:**
- Price text: `text-5xl font-bold`
- Unit text: `text-[15px]` with `ml-2`
- Strikethrough: `text-[14px]` with `mt-2`

## FAQ Components

### FAQ Item
```typescript
<div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-border/40 overflow-hidden transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-primary/30">
  <button
    onClick={() => setOpenFaqItem(openFaqItem === item.id ? null : item.id)}
    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
  >
    <h3 className="font-medium text-foreground text-[17px] group-hover:text-primary transition-colors duration-200">
      {item.question}
    </h3>
    <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-all duration-300 ${
      openFaqItem === item.id ? "rotate-180" : ""
    }`} />
  </button>
  <div className={`grid transition-all duration-300 ${
    openFaqItem === item.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
  }`}>
    <div className="overflow-hidden">
      <p className="px-8 pb-6 text-muted-foreground text-[15px] leading-[1.8]">
        {item.answer}
      </p>
    </div>
  </div>
</div>
```
**Specifications:**
- Button padding: `px-8 py-6`
- Question text: `text-[17px]`
- Answer text: `text-[15px] leading-[1.8]`
- Answer padding: `px-8 pb-6`
- Icon rotation: `rotate-180` when open

## Footer Components

### Footer Logo Section
```typescript
<div className="flex items-center gap-3 mb-6">
  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center shadow-lg">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="..." />
    </svg>
  </div>
  <span className="font-semibold text-xl text-foreground">Postify</span>
</div>
```
**Specifications:**
- Logo container: `w-10 h-10`
- Icon size: `w-6 h-6`
- Border radius: `rounded-xl`
- Shadow: `shadow-lg`
- Brand text: `text-xl font-semibold`

### Footer Link
```typescript
<a href="#" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
  Link text
</a>
```
**Specifications:**
- Text size: `text-[15px]`
- Default color: `text-muted-foreground`
- Hover color: `hover:text-primary`

## Special Effects

### Decorative Blur Orb
```typescript
<div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
```
**Specifications:**
- Sizes: `w-72 h-72` or `w-96 h-96`
- Background: `bg-purple-200/20` or `bg-purple-300/20`
- Blur: `blur-3xl`
- Animation: `animate-pulse`

### Section Fade Gradient
```typescript
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
```
**Specifications:**
- Height: `h-32`
- Position: `absolute bottom-0 left-0 right-0`
- Gradient: `from-background to-transparent`

### Avatar Stack with Hover
```typescript
<div
  key={index}
  className="relative group"
  style={{ zIndex: 10 - index }}
>
  <img
    src={avatar.src}
    alt={avatar.name}
    className="w-16 h-16 rounded-full shadow-lg border-4 border-white hover:scale-110 hover:z-20 transition-all duration-300 cursor-pointer"
  />
  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
    <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
      {avatar.name}
    </div>
  </div>
</div>
```
**Specifications:**
- Avatar size: `w-16 h-16`
- Border: `border-4 border-white`
- Hover scale: `hover:scale-110`
- Z-index: Decreasing with `10 - index`
- Tooltip position: `-bottom-8`

## Animation Timings Reference

- **Instant feedback**: `duration-200`
- **Standard transitions**: `duration-300`
- **Page mount animations**: `duration-700`
- **Marquee scrolling**: `[--duration:60s]` or `[--duration:80s]`
- **Pulse animations**: Continuous with optional delay

## Shadow Reference

```css
/* Light shadows */
shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow-[0_2px_10px_rgba(0,0,0,0.08)]
shadow-[0_2px_20px_rgba(0,0,0,0.04)]

/* Medium shadows */
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-[0_8px_30px_rgba(0,0,0,0.06)]
shadow-[0_8px_30px_rgba(0,0,0,0.08)]

/* Heavy shadows */
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

/* Purple tinted shadows */
shadow-[0_4px_20px_rgba(147,51,234,0.15)]
shadow-[0_8px_30px_rgba(147,51,234,0.15)]
shadow-[0_10px_40px_rgba(147,51,234,0.3)]
shadow-[0_15px_50px_rgba(147,51,234,0.4)]
shadow-[0_8px_30px_rgba(168,85,247,0.12)]
```

## Border Radius Reference

- `rounded`: 0.25rem
- `rounded-lg`: 0.5rem
- `rounded-xl`: 0.75rem
- `rounded-2xl`: 1rem
- `rounded-3xl`: 1.5rem
- `rounded-full`: 9999px

## Z-Index Hierarchy

- Background decorations: `-z-10` to `-z-20`
- Content: `z-10`
- Sticky elements: `z-20`
- Overlays: `z-30`
- Modals: `z-40`
- Navigation: `z-50` 