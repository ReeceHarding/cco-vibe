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
        {/* Purple gradient background effect - matching goal site */}
        <div className="fixed inset-0 -z-10 h-full w-full">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50"></div>
          
          {/* Purple gradient blob - top left */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/40 via-purple-200/30 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Purple gradient blob - bottom right */}
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-300/40 via-purple-200/30 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          
          {/* Subtle dot pattern overlay */}
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
