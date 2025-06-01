import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

// Configure Instrument Sans font
const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
});

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
    <html lang="en" className={instrumentSans.variable}>
      <body className={`${instrumentSans.className} antialiased`}>
        {/* Enhanced purple gradient background effect - matching original site */}
        <div className="fixed inset-0 -z-10 h-full w-full">
          {/* Bright base gradient - more vibrant */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-pink-50"></div>
          
          {/* Larger, more vibrant purple gradient blob - top left */}
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-radial from-purple-400/40 via-purple-300/20 to-transparent rounded-full blur-3xl"></div>
          
          {/* Purple gradient blob - bottom right */}
          <div className="absolute -bottom-40 -right-40 w-[1000px] h-[1000px] bg-gradient-radial from-purple-400/30 via-purple-300/15 to-transparent rounded-full blur-3xl"></div>
          
          {/* Additional center glow for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-radial from-purple-300/20 to-transparent rounded-full blur-3xl"></div>
          
          {/* Subtle dot pattern overlay */}
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
