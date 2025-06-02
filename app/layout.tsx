import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { Footer } from "@/components/footer";

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
              {/* Subtle blue gradient variations */}
              <radialGradient id="subtleBlue1" cx="25%" cy="25%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.06" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
              </radialGradient>
              
              <radialGradient id="subtleBlue2" cx="75%" cy="35%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
              
              <radialGradient id="subtleBlue3" cx="50%" cy="75%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.04" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </radialGradient>

              {/* Soft blur filters */}
              <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
              </filter>
            </defs>
            
            {/* Clean base gradient */}
            <rect width="100%" height="100%" fill="#FAFBFD" className="dark:fill-[#030712]" />
            
            {/* Subtle atmospheric effects */}
            <ellipse cx="50%" cy="-10%" rx="100%" ry="60%" fill="url(#subtleBlue1)" filter="url(#softBlur)" />
            <ellipse cx="20%" cy="50%" rx="80%" ry="60%" fill="url(#subtleBlue2)" filter="url(#softBlur)" />
            <ellipse cx="80%" cy="70%" rx="90%" ry="70%" fill="url(#subtleBlue3)" filter="url(#softBlur)" />
          </svg>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFBFD]/30 dark:to-[#030712]/30 -z-10 pointer-events-none"></div>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
