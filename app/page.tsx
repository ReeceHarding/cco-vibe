"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("Postel clone page mounted - initializing animations")
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-3xl" />
      </div>

      <Navigation />
      
      <main className="relative z-10 flex flex-col items-center justify-start pt-32 px-4">
        {/* Trust badge with star */}
        <div 
          className={`mb-8 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 px-4 py-2 text-sm">
            <span className="text-yellow-500">★</span>
            <span className="text-gray-700">Trusted by 800+ Users, try for free - no credit card</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 
          className={`text-center font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-12 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="block text-gray-900">Write</span>
          <span className="block italic text-gray-900 font-serif">authentic</span>
          <span className="flex items-center justify-center gap-2 text-gray-900">
            <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 inline-block fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>-posts in 9</span>
          </span>
          <span className="block text-gray-900">seconds</span>
        </h1>

        {/* Feature pills */}
        <div 
          className={`flex items-center gap-4 mb-12 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-sm border border-purple-100">
            <span className="text-gray-700">Sounds like you</span>
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <span className="text-gray-700">Authentic posts</span>
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            <span className="text-gray-700">Grows your following</span>
          </div>
        </div>

        {/* CTA Button */}
        <div 
          className={`mb-20 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Button className="bg-gradient-to-b from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg transition-all hover:scale-105 flex items-center gap-2">
            Sign in with
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            /Twitter
          </Button>
        </div>

        {/* Left decorative arrow */}
        <svg 
          width="120" 
          height="140" 
          viewBox="0 0 120 140" 
          className={`absolute left-[10%] top-[40%] hidden lg:block transition-all duration-700 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <path 
            d="M20 20 Q 40 40 60 30 T 100 50 Q 90 80 70 100 T 30 120" 
            stroke="url(#purpleGradient)" 
            strokeWidth="3" 
            fill="none"
          />
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#C6ACFF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left decorative box - "Grow your brand on X" */}
        <div 
          className={`absolute left-[8%] top-[55%] hidden lg:block transition-all duration-700 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "800ms", transform: "rotate(-5deg)" }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-purple-100">
            <p className="text-purple-600 italic text-xl font-serif mb-2">Grow your</p>
            <p className="text-purple-600 italic text-xl font-serif mb-3">brand on</p>
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gray-700">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </div>

        {/* Right decorative arrow */}
        <svg 
          width="150" 
          height="80" 
          viewBox="0 0 150 80" 
          className={`absolute right-[15%] top-[25%] hidden lg:block transition-all duration-700 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <path 
            d="M130 60 Q 100 40 70 50 T 20 30 Q 30 20 50 15 T 90 20" 
            stroke="url(#purpleGradient2)" 
            strokeWidth="3" 
            fill="none"
          />
          <defs>
            <linearGradient id="purpleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#C6ACFF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Right decorative text - "Your next post" */}
        <div 
          className={`absolute right-[12%] top-[20%] hidden lg:block transition-all duration-700 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "700ms", transform: "rotate(8deg)" }}
        >
          <p className="text-purple-600 italic text-2xl font-serif">Your next post</p>
        </div>

        {/* Right decorative box with post preview */}
        <div 
          className={`absolute right-[8%] top-[28%] hidden lg:block transition-all duration-700 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "800ms", transform: "rotate(8deg)" }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-purple-100 w-64">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span>username</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                <div className="h-2 bg-gray-200 rounded w-3/5"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>❤️ 240</span>
                <span>💬 23</span>
                <span>🔄 128</span>
                <span>📊 3.4K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with input */}
        <div 
          className={`w-full max-w-5xl bg-white rounded-t-3xl shadow-2xl mt-20 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="p-8 md:p-12">
            {/* Postel branding */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-semibold">Postel</span>
            </div>

            {/* User profile section */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium">robinfaraj</p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  Team
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12">
                    <path d="M5.5 2.5v7M2 6h7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </p>
              </div>
            </div>

            {/* Tab navigation */}
            <div className="flex gap-6 mb-6 border-b border-gray-200">
              <button className="pb-3 border-b-2 border-purple-600 font-medium text-purple-600">
                Start
              </button>
              <button className="pb-3 text-gray-500 hover:text-gray-700 transition-colors">
                Posts
              </button>
              <button className="pb-3 text-gray-500 hover:text-gray-700 transition-colors">
                Team
              </button>
            </div>

            {/* Main input section */}
            <h2 className="text-3xl font-bold mb-8">What's on Your Mind Today?</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Content Inspiration */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="font-semibold mb-2">Content Inspiration</h3>
                <p className="text-sm text-gray-600">Get fresh post ideas and writing prompts</p>
              </div>

              {/* Refine My Idea */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-semibold mb-2">Refine My Idea</h3>
                <p className="text-sm text-gray-600">Turn rough ideas into polished posts. Perfect...</p>
              </div>

              {/* Repurpose Content */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="font-semibold mb-2">Repurpose Content</h3>
                <p className="text-sm text-gray-600">Transform existing content into...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
