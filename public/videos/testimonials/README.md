# Video Testimonials

This directory should contain your client video testimonials. Please add your video files here following these specifications:

## Required Video Files

Place your video testimonial files in this directory with the following naming convention:

- `testimonial-1.mp4` - Video testimonial from Caleb Smith
- `testimonial-2.mp4` - Video testimonial from Zaid Al Kazemi
- `testimonial-3.mp4` - Video testimonial from Julia
- `testimonial-4.mp4` - Video testimonial from Grant Singleton
- `testimonial-5.mp4` - Video testimonial from Omar
- `testimonial-6.mp4` - Video testimonial from Nemo

## Required Poster Images

For each video, you should also provide a poster image (thumbnail) that will be displayed before the video loads:

- `testimonial-1-poster.jpg` - Poster image for Caleb Smith's testimonial
- `testimonial-2-poster.jpg` - Poster image for Zaid Al Kazemi's testimonial
- `testimonial-3-poster.jpg` - Poster image for Julia's testimonial
- `testimonial-4-poster.jpg` - Poster image for Grant Singleton's testimonial
- `testimonial-5-poster.jpg` - Poster image for Omar's testimonial
- `testimonial-6-poster.jpg` - Poster image for Nemo's testimonial

## Video Specifications

### Format
- **File Format**: MP4 (H.264 codec recommended for best browser compatibility)
- **Alternative Format**: WebM (optional, for better compression)

### Quality
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Aspect Ratio**: 16:9 (standard widescreen)
- **Frame Rate**: 30fps or 60fps
- **Bitrate**: 5-10 Mbps for 1080p, 2.5-5 Mbps for 720p

### Duration
- **Recommended**: 30-60 seconds per testimonial
- **Maximum**: 2 minutes

### Audio
- **Codec**: AAC
- **Sample Rate**: 48kHz
- **Bitrate**: 128-192 kbps
- **Ensure clear audio quality with minimal background noise**

## Poster Image Specifications

### Format
- **File Format**: JPEG or PNG
- **Resolution**: Same as video (1920x1080 or 1280x720)
- **Quality**: High quality, optimized for web (under 500KB)

### Content
- Should be a representative frame from the video
- Preferably showing the person speaking
- Clear and well-lit
- Professional appearance

## How to Add More Testimonials

If you want to add more video testimonials:

1. Add your video file following the naming pattern: `testimonial-[number].mp4`
2. Add the corresponding poster image: `testimonial-[number]-poster.jpg`
3. Update the `app/page.tsx` file to include the new testimonial in the grid

## File Upload Instructions

1. **Via Terminal/Command Line**:
   ```bash
   cp /path/to/your/video.mp4 public/videos/testimonials/testimonial-1.mp4
   cp /path/to/your/poster.jpg public/images/testimonials/testimonial-1-poster.jpg
   ```

2. **Via File Manager**:
   - Navigate to `postel-clone/public/videos/testimonials/`
   - Copy your video files here
   - Navigate to `postel-clone/public/images/testimonials/`
   - Copy your poster images here

3. **Via Git** (if videos are stored elsewhere):
   ```bash
   git add public/videos/testimonials/*.mp4
   git add public/images/testimonials/*.jpg
   git commit -m "Add video testimonials"
   ```

## Optimization Tips

1. **Compress videos** before uploading to reduce load times:
   - Use tools like HandBrake, FFmpeg, or online video compressors
   - Target file size: 10-20MB per video

2. **Use video hosting** for better performance (optional):
   - Consider hosting on Vimeo, YouTube, or Cloudinary
   - Update the video src URLs in `app/page.tsx` accordingly

3. **Lazy loading** is already implemented in the code with `preload="metadata"`

## Browser Compatibility

The current implementation supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Note

Currently, placeholder references are in place. You need to add the actual video and poster image files to make the testimonials functional. 