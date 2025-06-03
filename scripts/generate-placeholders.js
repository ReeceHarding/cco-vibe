const fs = require('fs');
const path = require('path');

// Ensure directories exist
const dirs = [
  'public/images/posts',
  'public/images/feature_videos',
  'public/images'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Generate post placeholder SVGs
for (let i = 1; i <= 4; i++) {
  const postSvg = `<svg width="400" height="700" viewBox="0 0 400 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="700" fill="#F9FAFB"/>
  <rect x="20" y="20" width="60" height="60" rx="30" fill="#E9D5FF"/>
  <rect x="90" y="30" width="120" height="16" rx="8" fill="#E5E7EB"/>
  <rect x="90" y="54" width="80" height="12" rx="6" fill="#E5E7EB"/>
  <rect x="20" y="110" width="360" height="200" rx="12" fill="#F3E8FF"/>
  <text x="200" y="220" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#A855F7">Post Example ${i}</text>
  <rect x="20" y="330" width="340" height="12" rx="6" fill="#E5E7EB"/>
  <rect x="20" y="354" width="320" height="12" rx="6" fill="#E5E7EB"/>
  <rect x="20" y="378" width="280" height="12" rx="6" fill="#E5E7EB"/>
  <rect x="20" y="420" width="100" height="32" rx="16" fill="#E9D5FF"/>
  <rect x="130" y="420" width="100" height="32" rx="16" fill="#E9D5FF"/>
</svg>`;
  
  fs.writeFileSync(`public/images/posts/story${i}.svg`, postSvg);
  
  // Create PNG reference (browsers will use SVG)
  fs.writeFileSync(`public/images/posts/story${i}.png`, '');
  console.log(`Created post placeholder: story${i}.svg and story${i}.png`);
}

// Generate thumbnail placeholder SVGs
for (let i = 1; i <= 4; i++) {
  const thumbnailSvg = `<svg width="1280" height="720" viewBox="0 0 1280 720" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1280" height="720" fill="#F3E8FF"/>
  <rect x="490" y="260" width="300" height="200" rx="20" fill="#A855F7" opacity="0.2"/>
  <path d="M590 360L690 310V410L590 360Z" fill="#A855F7"/>
  <text x="640" y="520" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#7C3AED">Video Thumbnail ${i}</text>
</svg>`;
  
  fs.writeFileSync(`public/images/thumbnail_${i}.svg`, thumbnailSvg);
  fs.writeFileSync(`public/images/thumbnail_${i}.jpg`, '');
  console.log(`Created thumbnail placeholder: thumbnail_${i}.svg and thumbnail_${i}.jpg`);
}

// Generate video placeholder files (empty files as placeholders)
const videos = [
  'post-ideas-lq.mp4',
  'speech-to-post-lq.mp4',
  'youtube-to-post-lq.mp4',
  'knowledge-base-lq.mp4'
];

videos.forEach(video => {
  const videoPath = `public/images/feature_videos/${video}`;
  if (!fs.existsSync(videoPath)) {
    fs.writeFileSync(videoPath, '');
    console.log(`Created video placeholder: ${video}`);
  }
});

console.log('\n✅ All placeholder files created successfully!'); 