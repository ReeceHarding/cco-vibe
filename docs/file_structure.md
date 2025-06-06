# File Structure Documentation

## Project Overview
This is a Next.js 14+ project for CCO Vibe's agency website, showcasing software development services using AI-powered techniques.

## Current File Structure

### `/app` - Next.js App Router Pages
- `page.tsx` - Main homepage with sections:
  - Hero section with rotating words showing services ✅
  - Video showcase section
  - About section
  - Testimonials section (currently has 6 testimonials)
  - Features tabs section
  - Pricing section
  - FAQ section
  - Free consultation form section ✅
  - CTA section
  - Footer with updated links ✅
- `layout.tsx` - Root layout with navigation and global styles
- `globals.css` - Global CSS styles and Tailwind imports
- `page-backup.tsx` - Backup of previous homepage version
- `page-broken.tsx` - Another backup version
- `favicon.ico` - Site favicon
- `/about/page.tsx` - About Us page ✅
  - Hero section with story
  - Mission section
  - Core values
  - Journey timeline
  - Why choose us section
  - Stats display
- `/services/page.tsx` - Services page ✅
  - Hero section
  - Value propositions
  - Tech stack showcase
  - Services grid
  - Case studies (Slack/Zendesk)
  - Data integration focus
  - Process explanation
  - CTA section

### `/components` - React Components
- `navigation.tsx` - Main navigation component with About/Services links ✅
- `logo.tsx` - PostelLogo component
- `InteractiveCostSavingsCard.tsx` - Interactive cost savings calculator
- `InteractiveProgressTimeline.tsx` - Timeline showing development progress
- `/ui` - UI components (Button, etc.)

### `/public` - Static Assets
- `/images` - Image assets
  - `/feature_videos` - Feature demonstration videos
  - `/posts` - Post related images
  - `/projects` - Project showcase images
  - `/testimonials` - Testimonial images
- `/videos` - Video assets
  - `/testimonials` - Testimonial videos

### `/docs` - Documentation
- `homepage-design-practices.md` - Comprehensive design guide
- `component-style-guide.md` - Component development standards
- `file_structure.md` - This file

### `/lib` - Utility Functions
- (To be documented as we discover)

## Implemented Features

### Homepage Features
1. **Hero Section** ✅
   - Trust signal badge
   - Main heading: "Still renting software you could own?"
   - Subheading about Gauntlet AI program
   - Rotating words animation showing services ✅
   - Enhanced feature pills with icons ✅
   - Dual CTA buttons (Schedule call + Free consultation) ✅
   - Social proof avatars

2. **Video Showcase**
   - Project demonstration video modal
   - Interactive play button
   - Gradient overlays

3. **About Section**
   - Three value propositions
   - Focus on ownership vs renting

4. **Testimonials**
   - 6 testimonial cards in marquee carousel
   - Twitter-style layout
   - Video testimonials support

5. **Features Tabs**
   - Internal tools
   - AI features
   - MVP development
   - Process automation

6. **Pricing Section**
   - Non-exclusive license
   - Exclusive license
   - Comparison with industry pricing

7. **FAQ Section**
   - 5 common questions
   - Expandable accordion

8. **Free Consultation Form** ✅
   - Name and email fields
   - Company and revenue fields
   - Budget and timeline selects
   - Project description textarea
   - Value propositions display
   - Form submission handling

### About Page Features ✅
- Company story and mission
- Core values with icons
- Journey timeline with milestones
- Why choose us section
- Statistics display
- CTA for consultation

### Services Page Features ✅
- All requested services listed
- Tech stack: LangChain, LangGraph, FastAPI, Python, JavaScript
- Case studies: Slack rebuild, Zendesk rebuild
- Real-time messaging features
- Chatbot/agent focus
- Data integration capabilities
- Satellite imaging example
- PRD process explanation
- Project-based pricing
- 2-week delivery promise
- Low upfront cost messaging

## Variables and Components to Track

### State Variables (in page.tsx)
- `mounted` - Track mount state for animations
- `showVideo` - Control video modal
- `activeFeatureTab` - Current feature tab
- `openFaqItem` - Current FAQ item
- `showNavigation` - Navigation visibility on scroll
- `currentWordIndex` - Current word in rotation ✅
- `isWordAnimating` - Word animation state ✅

### Data Arrays
- `features` - Feature tabs data
- `faqItems` - FAQ questions and answers
- `pricingPlans` - Pricing plan details
- `testimonials` - Testimonial data
- `rotatingWords` - Words for hero rotation ✅

### Key Functions
- `handleVideoClick()` - Open video modal
- `handleCloseVideo()` - Close video modal
- `handleScheduleCall()` - Open calendar link

## Completed Tasks

### ✅ Homepage Updates
- Added rotating words animation in hero section
- Modernized hero section design with gradient text
- Enhanced feature pills with icons and colors
- Added dual CTA buttons
- Created free consultation form with all requested fields
- Updated footer links to new pages

### ✅ New Pages Created
- About Us page with all requested content
- Services page with comprehensive service offerings

### ✅ Navigation Updates
- Added About and Services links to main navigation
- Updated footer navigation with new page links

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom + shadcn/ui
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Fonts**: Instrument Sans, Geist Sans, Playfair Display

## Important Notes
- Always edit existing files rather than creating duplicates
- Use AI/LLM calls for dynamic content, not hardcoded strings
- All functionality must be fully working, no placeholders
- Add extensive console logging for debugging
- Maintain clean folder structure with proper organization
- Reference this document before creating new files 