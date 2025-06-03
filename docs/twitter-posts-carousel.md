# Twitter-Style Posts Carousel Update

## 📱 Portrait Dimensions Implementation

The Post Examples Carousel has been updated to match Twitter's portrait post dimensions for an authentic social media experience.

## 🎯 Key Changes

### Dimensions
- **Width**: 320px (narrower, Twitter-like portrait format)
- **Height**: 560px (taller portrait orientation)
- **Aspect Ratio**: 4:7 (portrait, similar to Twitter posts)

### Styling Updates
- **Container**: `bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200`
- **Spacing**: Reduced margins to `mx-2` for tighter spacing
- **Object Fit**: Changed from `object-contain` to `object-cover` for better image cropping
- **Border**: Added `border border-gray-200` for authentic Twitter card appearance
- **Shadow**: Changed to `shadow-lg` for more prominent card effect

### Post Count
- Increased from 4 to 6 posts per set
- Files needed:
  - `/images/posts/story1.png` through `/images/posts/story6.png`

## 📐 Layout Specifications

```css
/* Post Card Dimensions */
width: 320px
height: 560px

/* Container Styling */
background: white
border-radius: 16px (rounded-2xl)
border: 1px solid #E5E7EB (gray-200)
box-shadow: large shadow

/* Image Display */
object-fit: cover
full width and height
```

## 🖼️ Image Requirements

- **Format**: PNG files  
- **Recommended Size**: 640x1120px (2x for retina)
- **Content**: Twitter-style posts with:
  - Profile information
  - Tweet text
  - Engagement metrics
  - Authentic Twitter UI elements

## ✨ Visual Impact

The narrower portrait format creates a more authentic Twitter browsing experience, making the testimonials feel like real social proof directly from the platform. The carousel continues to auto-scroll with pause on hover functionality. 