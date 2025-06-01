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
      
      <main className="relative z-10 flex flex-col items-center justify-start pt-40 px-4">
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
          width="96" 
          height="115" 
          viewBox="0 0 96 115" 
          className={`absolute left-[10%] top-[40%] hidden lg:block transition-all duration-700 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <path 
            d="M71.1503 10.6418C67.4166 6.41411 60.1038 7.33058 58.5935 0.247859C60.1816 0.433063 61.21 0.371541 62.0894 0.683527C71.7942 4.12568 81.5053 7.55564 91.1341 11.1806C92.7113 11.7743 94.7921 13.09 95.0714 14.4341C95.5849 16.906 93.1677 17.7712 90.9963 18.4316C84.2499 20.4839 77.527 22.6184 70.7498 24.7352C70.5802 21.9917 74.0979 18.9169 81.3031 15.5108C60.3031 10.6287 40.6058 24.4974 39.3623 45.3318C41.4766 45.2698 43.578 45.144 45.6734 45.1588C51.8433 45.2025 57.3365 46.9024 61.8518 51.0628C65.1778 54.1275 66.7383 57.8218 65.2907 62.2769C63.8008 66.8622 59.9557 68.6849 55.4543 69.409C45.7029 70.9777 37.9083 66.3517 34.8295 57.2135C34.4497 56.086 33.8868 55.023 33.2404 53.5457C21.8875 58.9319 13.1283 66.5994 8.20427 77.6967C0.612309 94.8069 11.3174 106.454 23.3131 111.423C24.7961 112.037 26.4054 112.376 28.9136 113.13C25.0786 114.844 22.2514 114.075 19.5188 113.313C8.72833 110.303 0.423396 99.5148 0.254973 88.394C0.147212 81.2769 2.24023 74.7201 6.42754 68.7944C12.5875 60.0776 20.3654 53.1923 30.295 48.8263C31.2716 48.3969 32.2221 47.9072 33.4997 47.2942C34.7263 37.708 37.1511 28.4884 44.6552 21.1505C51.9824 13.9855 61.6194 12.7885 71.1503 10.6418ZM39.2415 51.396C39.9578 61.2784 46.5215 66.7721 55.0535 64.7918C57.0655 64.3247 59.4419 62.7199 60.4442 60.993C61.8716 58.5337 60.2006 56.3 58.0977 54.6381C52.6455 50.3289 46.4387 49.7486 39.2415 51.396Z" 
            fill="url(#purpleGradientArrow)"
          />
          <defs>
            <linearGradient id="purpleGradientArrow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C6ACFF" stopOpacity="0.6" />
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
          width="90" 
          height="32" 
          viewBox="0 0 90 32" 
          className={`absolute right-[15%] top-[25%] hidden lg:block transition-all duration-700 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <path 
            d="M11.6174 17.7046C15.9081 12.0807 20.1987 6.45676 24.4894 0.832787C24.2784 0.616207 24.0673 0.399622 23.8564 0.183013C22.4017 1.06207 20.5622 1.71919 19.5553 2.85668C13.4168 9.79188 7.39577 16.7978 1.49241 23.8643C-0.713995 26.5055 -0.280991 28.0428 3.0117 28.5537C10.0968 29.6529 17.2915 30.4353 24.4868 31.1706C25.5172 31.2759 27.4582 30.6108 27.8358 29.9334C28.7363 28.3183 27.033 27.6993 25.5377 27.3955C22.7859 26.8364 19.9745 26.4276 17.192 25.9452C15.4006 25.6346 13.6161 25.3046 11.7423 24.0685C14.9225 22.7666 18.0107 21.176 21.2984 20.2112C38.8792 15.0518 56.6128 13.4175 74.375 15.0499C79.8984 15.5575 85.0823 16.9091 89.5001 20.1759C90.3842 16.9424 88.6723 15.1257 86.068 14.2389C82.1205 12.8946 78.0204 11.5621 73.7519 11.0642C55.0473 8.88159 36.3941 11.0178 17.8976 16.7047C16.0507 17.2725 14.2198 17.8879 12.3815 18.4811C12.1267 18.2223 11.8721 17.9635 11.6174 17.7046Z" 
            fill="url(#purpleGradientArrow2)"
          />
          <defs>
            <linearGradient id="purpleGradientArrow2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C6ACFF" stopOpacity="0.6" />
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
