# Postify UI Style Guide: Sleek & Modern

## 1. Core Philosophy

Our UI aims for a **sleek, modern, and professional** aesthetic. Key principles include:

*   **Minimalism**: Keep interfaces clean and uncluttered. Every element should serve a purpose.
*   **Generous Whitespace**: Use ample spacing to improve readability and reduce cognitive load.
*   **Subtlety**: Effects like shadows, borders, and gradients should be understated and refined.
*   **Frosted Glass/Glassmorphism**: Utilize `backdrop-blur` with semi-transparent backgrounds for a sophisticated, layered feel where appropriate.
*   **Crisp Typography**: Employ modern, legible fonts with clear hierarchy and tight tracking for a polished look.
*   **Strategic Accent Colors**: Use vibrant accent colors purposefully for CTAs and key highlights against a neutral background.
*   **Consistent Rounded Corners**: Apply consistent corner radii to buttons, cards, and containers for a soft, approachable, and modern appearance.
*   **Meaningful Interactivity**: Provide subtle and smooth transitions for hover and focus states to give users clear feedback.
*   **Clarity & Focus**: Design elements should guide the user naturally and keep the focus on content and core actions.
*   **Playful Micro-Animations**: Add personality through careful use of animations like marquees, waveforms, and smooth transitions.

## 2. Color Palette

### Primary & Accent Colors
*   **Primary Purple (Main Accent)**: Used for key highlights, gradients, and brand elements.
    *   Base: `text-primary` (CSS Variable: `--primary: 271 51% 53%`)
    *   Gradient Start: `from-purple-600` (HEX: `#9333EA`)
    *   Gradient End: `to-purple-400` (HEX: `#C084FC`)
    *   Text Gradients: `bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent`
    *   Borders: `border-primary/60`, `border-purple-200`, `border-purple-400/30`
    *   Backgrounds: `bg-primary/30`, `bg-primary/10`, `bg-primary/5`
    
*   **Primary Blue (Secondary Accent)**: Still used for CTAs and certain UI elements.
    *   Base: `text-blue-600` (HEX: `#2563EB`)
    *   Gradient Start: `from-blue-600` (HEX: `#2563EB`)
    *   Gradient End: `to-blue-700` (HEX: `#1D4ED8`)
    *   Lighter shade for backgrounds/gradients: `stopColor="#60A5FA"` (HEX: `#60A5FA`)
    *   Darker shade for backgrounds/gradients: `stopColor="#1E40AF"` (HEX: `#1E40AF`)
    
*   **Text on Accent**: `text-white`

### Neutral Colors
*   **Light Mode Base Background**: `#FAFBFD` (`fill-[#FAFBFD]`)
*   **Dark Mode Base Background**: `#030712` (`dark:fill-[#030712]`)
*   **Light Mode Text (Primary)**: `text-gray-900` (HEX: `#111827`)
*   **Dark Mode Text (Primary)**: `text-white`
*   **Light Mode Text (Secondary)**: `text-gray-700` (HEX: `#374151`)
*   **Dark Mode Text (Secondary)**: `text-gray-300` (HEX: `#D1D5DB`)
*   **Light Mode Borders/Subtle Backgrounds**: `border-gray-200/20`, `bg-gray-50`, `bg-gray-100`, `bg-white/[opacity]`
*   **Dark Mode Borders/Subtle Backgrounds**: `dark:border-gray-800/20`, `dark:bg-gray-800`, `dark:bg-gray-900/[opacity]`

### Gradients
*   **Primary CTA Gradient**: `bg-gradient-to-r from-blue-600 to-blue-700`
*   **Text Accent Gradient**: `bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent`
*   **Subtle Background Gradients**: Used in `app/layout.tsx` with very low opacities (e.g., `stopOpacity="0.06"` down to `0`). Colors include shades of blue like `#3B82F6`, `#2563EB`, `#1E40AF`, `#60A5FA`, `#93C5FD`.

## 3. Typography

### Font Families
*   **Primary Sans-Serif (UI Text, Body)**: Instrument Sans (`--font-instrument`, `instrumentSans.className`)
*   **Secondary Sans-Serif (UI Text, Links)**: Geist Sans (`--font-geist`, `geist.className`)
*   **Serif (Headings)**: Default system serif (`font-serif`) - Used for main page heading.
*   **Editorial/Italic (Special Highlights)**: `font-editorial italic` (e.g., "authentic", decorative text). Often combined with `font-semibold` or `font-extrabold`.

### Font Weights & Styles
*   **Normal**: `font-normal` (Main Headings)
*   **Medium**: `font-medium` (Nav links, button text, trust badge, feature pills)
*   **Semibold**: `font-semibold` (Highlight text within paragraphs, decorative editorial text, section headings)
*   **Bold**: `font-bold` (Uppercase labels like "FEATURES", "BENEFITS")
*   **Extrabold**: `font-extrabold` (Key highlighted words like "authentic" in main heading)
*   **Italic**: `italic` (Used with `font-editorial` for decorative text)

### Font Sizes & Line Heights
*   **Main Heading (H1)**: `text-4xl md:text-5xl lg:text-6xl xl:text-[68px]`, `leading-[1.05]`, `tracking-tight`
*   **Section Heading (H2)**: `text-3xl sm:text-4xl md:text-5xl`, `tracking-tight`
*   **Section Labels**: `text-sm uppercase tracking-wider` (e.g., "FEATURES", "BENEFITS")
*   **Card Headings**: `text-xl font-semibold`
*   **Navigation Links**: `text-[14px]`, `tracking-tight`
*   **Button Text (Dashboard Nav)**: `text-[14px]`, `tracking-tight`
*   **Button Text (Main CTA)**: `text-[16px]` (Desktop), `text-[15px]` (Mobile), `tracking-tight`
*   **Trust Badge Text**: `text-[13px]`, `tracking-tight`
*   **Feature Pill Text**: `text-[14px]`, `tracking-tight`
*   **Card Text (Testimonials)**: `text-[14px]`, `leading-relaxed`
*   **Small Meta Text (Testimonials)**: `text-[12px]`
*   **Decorative Text (e.g., "Grow your brand on")**: `text-[18px]`, `leading-[18px]`, `tracking-tight`

### General Typography Rules
*   **Tracking**: Use `tracking-tight` for most headings and UI text for a sleeker look.
*   **Hierarchy**: Establish clear visual hierarchy through size, weight, and color.
*   **Readability**: Ensure sufficient contrast and appropriate line heights (`leading-relaxed` for body copy, `leading-[1.05]` to `leading-[1.1]` for large headings).

## 4. Layout & Spacing

*   **Container**: `w-[95%] max-w-[1100px]` for navigation. Page content generally within a `max-w-screen-lg` or `max-w-7xl` for sections.
*   **Responsive Design**: Utilize Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) extensively.
*   **Gutters/Gaps**: Consistent gaps are used.
    *   Navigation items: `gap-8`
    *   Feature Pills: `gap-6`
    *   Testimonial Cards: `gap-4`
*   **Margins & Padding**:
    *   Navigation: `px-5 sm:px-7 py-2`, `top-5`
    *   Page Hero: `pt-[180px]`
    *   Trust Badge: `mb-6`, `px-3.5 py-1.5`
    *   Main Heading: `mb-6`
    *   Feature Pills Container: `mt-10 mb-10`
    *   Feature Pills Element: `px-5 py-2.5`
    *   CTA Button: `mt-10`
    *   Video Section: `mt-14 md:mt-20`
    *   Testimonials Section: `py-20`, `px-4`. Header `mb-16`. Cards `p-5`.
*   **Principle**: Maintain consistent spacing units where possible. Use visual balance and breathing room.

## 5. Iconography

*   **Style**: Clean, modern, and often line-based or subtly filled. Matched to the surrounding UI.
*   **Primary Accent Color**: Icons often take `text-blue-600` or `fill="currentColor"` inheriting blue.
*   **X/Twitter Icon**: Specific SVG used throughout for branding.
*   **Lucide React**: Used for general icons like `Menu`.
*   **Sizes**:
    *   Navigation Menu Icon: `w-4 h-4`
    *   X Icon in CTA/Decorative: `size-5`, `size-6`
    *   X Icon in Main Heading: `lg:size-[60px] xl:size-[68px] 2xl:size-[76px]`
    *   Play Icon in Video: `size-8`
*   **Usage**: Icons should be clear, immediately recognizable, and used to enhance understanding or provide quick actions.

## 6. Component Styling

### 6.1. Navigation Bar
*   **Appearance**: Fixed, top-centered, with frosted glass effect.
*   **Tailwind**: `fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-[1100px] h-[60px] px-5 sm:px-7 py-2 bg-white/70 dark:bg-gray-900/70 border border-gray-200/20 dark:border-gray-800/20 shadow-[0_2px_20px_rgba(0,0,0,0.04)] backdrop-blur-2xl backdrop-saturate-150 rounded-2xl`
*   **Logo Link**: `hover:opacity-80 transition-opacity duration-200`
*   **Nav Links**: `font-geist text-[14px] font-medium text-gray-700 hover:text-blue-600 tracking-tight`

### 6.2. Buttons

#### Primary CTA Button (e.g., Dashboard Nav, Main Sign In)
*   **Appearance**: Blue gradient, rounded corners, subtle shadow, interactive hover.
*   **Nav CTA**: `h-9 px-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-[14px] rounded-xl shadow-[0_2px_8px_rgba(59,130,246,0.25)] tracking-tight`
*   **Hover (Nav CTA)**: `hover:from-blue-700 hover:to-blue-800 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)]`
*   **Main Page CTA**: `h-12 px-8 text-[16px] bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-medium shadow-[0_4px_14px_rgba(59,130,246,0.2)] tracking-tight`
*   **Hover (Main Page CTA)**: `hover:from-blue-700 hover:to-blue-800 hover:shadow-[0_6px_20px_rgba(59,130,246,0.25)] transform hover:-translate-y-0.5`
*   **Transition**: `transition-all duration-200`

#### Ghost/Secondary Button (e.g., Mobile Menu Toggle)
*   **Appearance**: Minimal background, often icon-only.
*   **Tailwind**: `md:hidden w-9 h-9 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700`
*   **Transition**: `transition-colors duration-200`

### 6.3. Cards & Containers

#### Trust Badge / Feature Pills
*   **Appearance**: Rounded, frosted glass effect, subtle border, and shadow. Contains iconic dot and text.
*   **Trust Badge**: `rounded-full border border-gray-200/40 bg-white/60 dark:bg-gray-900/60 px-3.5 py-1.5 text-[13px] backdrop-blur-md shadow-sm`
*   **Feature Pills Bar**: `px-5 py-2.5 gap-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl shadow-sm rounded-2xl border border-gray-200/20 dark:border-gray-800/20`
*   **Animated Dot**: `relative flex h-1.5 w-1.5` (Trust Badge) or `h-2 w-2` (Pills) with `animate-ping` and a static colored circle.

#### Decorative Side Boxes (e.g., "Grow your brand on")
*   **Appearance**: Rotated, frosted glass, subtle shadow, rounded corners, contains stylized text and icon.
*   **Tailwind**: `bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/20 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]`
*   **Hover**: `hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300`

#### Testimonial Cards
*   **Appearance**: Clean, minimal shadow, rounded corners, clear typography.
*   **Tailwind**: `w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-gray-100`
*   **Hover**: `hover:shadow-md transition-all duration-300` (No `hover:scale` to adhere to "no animation below fold" principle, but subtle shadow change implies interactivity).

#### Feature Tabs
*   **Container**: `hidden md:flex flex-wrap justify-center gap-8 mb-24`
*   **Tab Button**: `flex flex-1 flex-col items-center transition-colors pb-6 border-b-2`
*   **Active State**: `border-primary` with icon `text-primary` and `bg-primary/10`
*   **Inactive State**: `border-transparent` with icon `text-muted-foreground` and `bg-muted`
*   **Icon Container**: `w-20 h-20 mb-4 rounded-full`
*   **Content**: `text-center` with `font-semibold text-lg` title and `text-sm text-muted-foreground` description

#### Benefits Grid Cards
*   **Grid Layout**: `grid grid-cols-1 md:grid-cols-12 gap-6`
*   **Base Card**: `rounded-xl bg-muted/80 p-8 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg`
*   **Column Spans**: Various sizes using `md:col-span-4`, `md:col-span-5`, `md:col-span-3`, `md:col-span-6`
*   **Interactive Elements**:
     - Audio waveform with `group-hover/card:animate-pulse`
     - YouTube thumbnails with image swap on hover
     - Chart visualizations with SVG

#### Marquee Carousel
*   **Container**: `group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]`
*   **Animation**: `animate-marquee` with `group-hover:[animation-play-state:paused]`
*   **Reverse Direction**: `[animation-direction:reverse]` for alternating rows
*   **Post Cards**: `mx-4 bg-white rounded-2xl overflow-hidden p-2` with `boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"`
*   **Gradient Overlays**: `w-1/4 bg-gradient-to-r from-background` and `bg-gradient-to-l from-background`

#### Testimonial Cards (Updated)
*   **Desktop**: `w-[450px] h-[280px]` with `border border-primary/60 dark:border-primary/20`
*   **Mobile**: `w-72 h-[380px]` with snap scrolling
*   **Profile Images**: Using `unavatar.io` service with purple border `border-[3px] border-purple-200`
*   **Highlighted Text**: `bg-primary/30 p-1 py-0.5 font-semibold`
*   **Hover**: `hover:scale-[1.02] hover:shadow-lg`

### 6.4. Interactive Elements

#### Video Player Preview
*   **Container**: `rounded-xl border border-gray-200/20 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden group`
*   **Hover**: `hover:shadow-[0_12px_50px_rgba(0,0,0,0.06)] transition-all duration-300`
*   **Image**: `group-hover:scale-105 transition-all duration-500 ease-out`
*   **Play Button Outer**: `size-28 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300`
*   **Play Button Inner**: `size-16 rounded-full bg-white shadow-lg group-hover:scale-110 transition-all duration-300`

## 7. Effects

### Shadows
*   **Subtle Container Shadow**: `shadow-sm` or `shadow-[0_2px_20px_rgba(0,0,0,0.04)]` (Nav), `shadow-[0_4px_20px_rgba(0,0,0,0.04)]` (Decor Box), `shadow-[0_8px_40px_rgba(0,0,0,0.04)]` (Video). Generally soft, neutral, and small.
*   **Button Shadow**: `shadow-[0_2px_8px_rgba(59,130,246,0.25)]` (Nav CTA), `shadow-[0_4px_14px_rgba(59,130,246,0.2)]` (Main CTA). Blue-tinted for primary CTAs to add emphasis.
*   **Hover Shadows**: Slightly larger or more diffused shadows on hover, e.g., `hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)]`.

### Animations
*   **Marquee**: Custom CSS animation with `--duration` variable for speed control
    ```css
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(calc(-100% - var(--gap))); }
    }
    ```
*   **Waveform Pulse**: `animate-pulse` with staggered `animationDelay` for audio visualization
*   **Image Swap**: Opacity transition from `opacity-100` to `opacity-0` on hover with underlying image revealed
*   **Tab Transitions**: `transition-colors` for smooth active state changes
*   **Card Scale**: `hover:scale-[1.02]` for subtle lift effect on interactive cards

### Blurs
*   **Backdrop Blur**: `backdrop-blur-xl` (Nav, Feature Pills), `backdrop-blur-md` (Trust Badge), `backdrop-blur-lg` (Decor Box). Used on semi-transparent backgrounds.
*   **Background SVG Blur**: `stdDeviation="100"` for a very soft, atmospheric effect in the main layout background.

### Borders
*   **Subtle Borders**: `border border-gray-200/20 dark:border-gray-800/20` for containers like Nav, Feature Pills, Decor Boxes.
*   **Card Borders**: `border border-gray-100` for basic cards.
*   **Purple Borders**: `border-primary/60`, `border-purple-200`, `border-purple-400/30` for testimonials and accent elements.
*   **Opacity**: Often used with low opacity (e.g., `/20`, `/30`, `/60`) to make them less stark.

### Rounded Corners
*   **Standard**: `rounded-xl` (12px) or `rounded-2xl` (16px) for most containers, buttons.
*   **Full Round**: `rounded-full` for small circular elements like trust badge container, avatar placeholders (in testimonials).

## 8. Interactivity (Hover States & Transitions)

*   **Transitions**: Smooth and quick. `transition-all`, `transition-colors`, `transition-opacity`, `transition-transform`.
*   **Duration**: Typically `duration-200` or `duration-300`. For image scaling, `duration-500`.
*   **Hover Effects**:
    *   **Color Change**: `hover:text-blue-600` for links, `hover:bg-gray-100` for ghost buttons.
    *   **Gradient Shift**: `hover:from-blue-700 hover:to-blue-800` for primary buttons.
    *   **Shadow Elevation**: Shadows become slightly more prominent.
    *   **Scale**: `hover:scale-105` for images or specific interactive elements. `hover:scale-[1.02]` for cards. `group-hover:scale-110` for nested elements like play button.
    *   **Opacity Change**: `hover:opacity-80` for logo, `group-hover:opacity-100` for hidden elements.
    *   **Transform (Translate)**: `hover:-translate-y-0.5` for main CTA button for a subtle lift.
    *   **Animation Control**: `group-hover:[animation-play-state:paused]` for marquee animations.
    *   **Border Changes**: `hover:border-primary/30` for interactive feature buttons.
*   **Focus States**: While not explicitly detailed in the provided code for brevity, ensure focus states are visually distinct and accessible, typically by adding rings or changing background/border colors (e.g., `focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`).

## 9. Special Components

### Audio Waveform Visualization
*   **Container**: `relative flex h-16 flex-row items-center justify-between rounded-full bg-white px-4 py-3`
*   **Play Button**: `w-10 h-10 rounded-full border border-purple-500`
*   **Waveform Bars**: Individual `div` elements with:
    - Base: `w-[2px] rounded-full bg-gray-400/70`
    - Hover: `group-hover/card:bg-purple-400 group-hover/card:animate-pulse`
    - Staggered animation delays for wave effect

### Interactive Feature Buttons
*   **Selected State**: `border-primary bg-primary/5`
*   **Default State**: `border-border/40 hover:border-primary/30 bg-white/50`
*   **Icon Container**: `w-10 h-10 rounded-full bg-primary/10`
*   **Mobile Accordion**: Hidden description with `ChevronDown` icon

### Chart Visualizations
*   **SVG-based**: Using viewBox for responsive scaling
*   **Gradients**: Linear gradients with IDs for fill areas
*   **Grid Lines**: `stroke-divider stroke-1` for subtle backgrounds
*   **Area Charts**: Multiple layers with different opacity gradients

### Twitter/X UI Components
*   **Feed Container**: `max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200`
*   **Tweet Article**: `px-4 py-3 hover:bg-gray-50/50 transition-colors cursor-pointer`
*   **Tweet Layout**: `flex gap-3` with avatar on left and content on right
*   **Avatar**: `w-12 h-12 rounded-full` using unavatar.io service
*   **Header**: `flex items-center gap-1 flex-wrap` with:
    - Name: `font-bold text-gray-900 hover:underline`
    - Verified Badge: `w-4 h-4 text-purple-500` (Lucide Verified icon)
    - Handle: `text-gray-500`
    - Timestamp: `text-gray-500 hover:underline`
    - More Button: `p-2 hover:bg-gray-100 rounded-full`
*   **Tweet Body**: `text-gray-900 text-[15px] leading-normal`
*   **Video Attachment**: `mt-3 rounded-2xl overflow-hidden border border-gray-200`
*   **Engagement Buttons**: `flex items-center justify-between mt-3 -ml-2` with:
    - Button Base: `p-2 rounded-full transition-colors group`
    - Comment: `hover:bg-purple-50` with `group-hover:text-purple-600`
    - Retweet: `hover:bg-green-50` with `group-hover:text-green-600`
    - Like: `hover:bg-red-50` with `group-hover:text-red-600`
    - Share/Bookmark: `hover:bg-blue-50` with `group-hover:text-blue-600`
    - Counts: `text-sm text-gray-500` inheriting group hover colors
*   **Dividers**: `divide-y divide-gray-200` between tweet articles

This style guide should provide a solid foundation for maintaining a cohesive, sleek, and modern UI across the Postify application. 