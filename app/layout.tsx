import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

// Configure Instrument Sans font
const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
});

// Configure Geist Sans font
const geist = GeistSans;

// Metadata configuration
export const metadata: Metadata = {
  title: "Postel - Write authentic X posts in 9 seconds",
  description: "AI-powered tool to create authentic X/Twitter posts that sound like you. Trusted by 800+ users, try for free - no credit card required.",
  keywords: ["AI", "Twitter", "X", "social media", "content creation", "posts"],
  authors: [{ name: "Postel" }],
  openGraph: {
    title: "Postel - Write authentic X posts in 9 seconds",
    description: "AI-powered tool to create authentic X/Twitter posts that sound like you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geist.variable}`}>
      <body className={`${instrumentSans.className} ${geist.className} antialiased bg-background text-foreground overscroll-none`}>
        {/* Enhanced SVG Background with dramatic blue gradients and cloud atmosphere */}
        <div className="fixed inset-0 -z-20 h-full w-full">
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Enhanced blue gradient variations with more sophistication */}
              <radialGradient id="dramaticBlue1" cx="20%" cy="20%">
                <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.9" />
                <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.2" />
              </radialGradient>
              
              <radialGradient id="dramaticBlue2" cx="80%" cy="30%">
                <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#2563EB" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.2" />
              </radialGradient>
              
              <radialGradient id="dramaticBlue3" cx="50%" cy="80%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.1" />
              </radialGradient>

              <radialGradient id="accentCloud1" cx="70%" cy="60%">
                <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.1" />
              </radialGradient>

              <radialGradient id="accentCloud2" cx="30%" cy="70%">
                <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.05" />
              </radialGradient>

              {/* Enhanced blur filter for sophisticated depth */}
              <filter id="dramaticBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
              </filter>
              
              <filter id="subtleBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
              </filter>
            </defs>
            
            {/* Rich gradient base */}
            <rect width="100%" height="100%" fill="url(#dramaticBlue1)" className="dark:opacity-80" />
            
            {/* Primary dramatic cloud shapes */}
            <ellipse cx="25%" cy="35%" rx="45%" ry="30%" fill="url(#dramaticBlue1)" filter="url(#dramaticBlur)" transform="translate(0, 40)" />
            <ellipse cx="75%" cy="25%" rx="50%" ry="35%" fill="url(#dramaticBlue2)" filter="url(#dramaticBlur)" transform="translate(0, 60)" />
            <ellipse cx="45%" cy="65%" rx="55%" ry="40%" fill="url(#dramaticBlue3)" filter="url(#dramaticBlur)" transform="translate(0, 80)" />
            
            {/* Secondary depth layers */}
            <ellipse cx="85%" cy="55%" rx="35%" ry="25%" fill="url(#accentCloud1)" filter="url(#subtleBlur)" transform="translate(0, 100)" />
            <ellipse cx="15%" cy="75%" rx="40%" ry="30%" fill="url(#accentCloud2)" filter="url(#subtleBlur)" transform="translate(0, 120)" />
            <ellipse cx="60%" cy="85%" rx="60%" ry="35%" fill="url(#dramaticBlue3)" filter="url(#dramaticBlur)" transform="translate(0, 140)" />
            
            {/* Additional atmospheric layers for depth */}
            <ellipse cx="40%" cy="20%" rx="30%" ry="20%" fill="#1E40AF" fillOpacity="0.4" filter="url(#subtleBlur)" transform="translate(0, 160)" />
            <ellipse cx="80%" cy="80%" rx="35%" ry="25%" fill="#2563EB" fillOpacity="0.3" filter="url(#subtleBlur)" transform="translate(0, 180)" />
          </svg>
        </div>
        
        {/* Enhanced multi-layer gradient overlay for sophisticated depth */}
        <div className="fixed top-0 left-0 right-0 h-[700px] bg-gradient-to-b from-white/95 via-white/85 via-40% to-transparent dark:from-[#0F0F0F]/95 dark:via-[#0F0F0F]/85 -z-10"></div>
        <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/60 via-blue-50/30 via-60% to-transparent dark:from-blue-950/60 dark:via-blue-950/30 -z-10"></div>
        
        {children}
      </body>
    </html>
  );
}
