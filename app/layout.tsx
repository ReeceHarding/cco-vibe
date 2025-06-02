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
        {/* SVG Background with enhanced blue gradient theme */}
        <div className="fixed inset-0 -z-20 h-full w-full">
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Premium blue gradient variations */}
              <radialGradient id="premiumBlue1" cx="20%" cy="20%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.02" />
              </radialGradient>
              
              <radialGradient id="premiumBlue2" cx="80%" cy="30%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.01" />
              </radialGradient>
              
              <radialGradient id="premiumBlue3" cx="50%" cy="80%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.01" />
              </radialGradient>

              <radialGradient id="accentGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
              </radialGradient>

              {/* Enhanced blur filters */}
              <filter id="premiumBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
              </filter>

              <filter id="softGlow">
                <feGaussianBlur stdDeviation="20" />
                <feColorMatrix values="0 0 0 0 0.23 0 0 0 0 0.51 0 0 0 0 0.96 0 0 0 0.7 0"/>
                <feBlend mode="screen" in2="SourceGraphic" />
              </filter>
            </defs>
            
            {/* Premium base gradient */}
            <rect width="100%" height="100%" fill="#FAFBFF" className="dark:fill-[#030712]" />
            
            {/* Layered atmospheric effects */}
            <ellipse cx="50%" cy="-20%" rx="80%" ry="50%" fill="url(#premiumBlue1)" filter="url(#premiumBlur)" opacity="0.6" />
            <ellipse cx="20%" cy="40%" rx="60%" ry="40%" fill="url(#premiumBlue2)" filter="url(#premiumBlur)" />
            <ellipse cx="70%" cy="60%" rx="70%" ry="50%" fill="url(#premiumBlue3)" filter="url(#premiumBlur)" />
            
            {/* Accent glow spots */}
            <circle cx="30%" cy="20%" r="150" fill="url(#accentGlow)" filter="url(#softGlow)" />
            <circle cx="80%" cy="50%" r="200" fill="url(#accentGlow)" filter="url(#softGlow)" opacity="0.5" />
            
            {/* Additional depth layers */}
            <ellipse cx="90%" cy="80%" rx="40%" ry="30%" fill="#3B82F6" fillOpacity="0.03" filter="url(#premiumBlur)" />
            <ellipse cx="10%" cy="90%" rx="50%" ry="35%" fill="#2563EB" fillOpacity="0.04" filter="url(#premiumBlur)" />
          </svg>
        </div>
        
        {/* Premium gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#FAFBFF]/50 to-[#FAFBFF] dark:from-transparent dark:via-[#030712]/50 dark:to-[#030712] -z-10 pointer-events-none"></div>
        
        {children}
      </body>
    </html>
  );
}
