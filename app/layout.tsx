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
        {/* SVG Background to match postel.app's cloudy gradient */}
        <div className="fixed inset-0 -z-20 h-full w-full">
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Purple/pink gradient */}
              <radialGradient id="cloudGradient1" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#DDD6FE" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.3" />
              </radialGradient>
              
              <radialGradient id="cloudGradient2" cx="70%" cy="40%">
                <stop offset="0%" stopColor="#F3E8FF" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#E9D5FF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.2" />
              </radialGradient>
              
              <radialGradient id="cloudGradient3" cx="50%" cy="70%">
                <stop offset="0%" stopColor="#FAE8FF" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#F3E8FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0.2" />
              </radialGradient>

              {/* Blur filter for soft clouds */}
              <filter id="cloudBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
              </filter>
            </defs>
            
            {/* Base gradient */}
            <rect width="100%" height="100%" fill="#FAFAFA" className="dark:fill-[#1a1a1a]" />
            
            {/* Cloud shapes */}
            <ellipse cx="20%" cy="40%" rx="35%" ry="25%" fill="url(#cloudGradient1)" filter="url(#cloudBlur)" transform="translate(0, 50)" />
            <ellipse cx="70%" cy="30%" rx="40%" ry="30%" fill="url(#cloudGradient2)" filter="url(#cloudBlur)" transform="translate(0, 80)" />
            <ellipse cx="50%" cy="60%" rx="45%" ry="35%" fill="url(#cloudGradient3)" filter="url(#cloudBlur)" transform="translate(0, 100)" />
            
            {/* Additional cloud layers for depth */}
            <ellipse cx="85%" cy="50%" rx="30%" ry="20%" fill="#E9D5FF" fillOpacity="0.3" filter="url(#cloudBlur)" transform="translate(0, 120)" />
            <ellipse cx="15%" cy="70%" rx="35%" ry="25%" fill="#DDD6FE" fillOpacity="0.3" filter="url(#cloudBlur)" transform="translate(0, 140)" />
            <ellipse cx="60%" cy="80%" rx="50%" ry="30%" fill="#C4B5FD" fillOpacity="0.2" filter="url(#cloudBlur)" transform="translate(0, 160)" />
          </svg>
        </div>
        
        {/* Enhanced gradient overlay */}
        <div className="fixed top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#FAFAFB] via-[#FAFAFB]/95 via-30% to-transparent dark:from-[#1F2129] dark:via-[#1F2129]/95 -z-10"></div>
        
        {children}
      </body>
    </html>
  );
}
