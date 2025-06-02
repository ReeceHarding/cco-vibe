"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { XIcon, PlayIcon } from "@/components/icons"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("Page mounted - animations starting")
  }, [])

  const handleVideoClick = () => {
    console.log("Video button clicked - opening Vimeo video modal")
    setShowVideo(true)
  }

  const handleCloseVideo = () => {
    console.log("Closing video modal")
    setShowVideo(false)
  }

  const handleSignIn = () => {
    console.log("Sign in button clicked")
    // In a real implementation, this would initiate OAuth flow
    alert("Sign in with X/Twitter functionality would be implemented here!")
  }

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen overflow-hidden">
        {/* Main container with animations */}
        <div className="container relative h-full z-10 text-center pt-[180px]">
          
          {/* Left decorative arrow with enhanced animation */}
          <svg 
            width="96" 
            height="115" 
            viewBox="0 0 96 115" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={`absolute left-[17%] top-[350px] hidden xl:block transition-all duration-700 float-animation ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            aria-hidden="true"
            style={{ transitionDelay: "600ms", animationDelay: "1s" }}
          >
            <title>Decorative arrow</title>
            <path d="M71.1503 10.6418C67.4166 6.41411 60.1038 7.33058 58.5935 0.247859C60.1816 0.433063 61.21 0.371541 62.0894 0.683527C71.7942 4.12568 81.5053 7.55564 91.1341 11.1806C92.7113 11.7743 94.7921 13.09 95.0714 14.4341C95.5849 16.906 93.1677 17.7712 90.9963 18.4316C84.2499 20.4839 77.527 22.6184 70.7498 24.7352C70.5802 21.9917 74.0979 18.9169 81.3031 15.5108C60.3031 10.6287 40.6058 24.4974 39.3623 45.3318C41.4766 45.2698 43.578 45.144 45.6734 45.1588C51.8433 45.2025 57.3365 46.9024 61.8518 51.0628C65.1778 54.1275 66.7383 57.8218 65.2907 62.2769C63.8008 66.8622 59.9557 68.6849 55.4543 69.409C45.7029 70.9777 37.9083 66.3517 34.8295 57.2135C34.4497 56.086 33.8868 55.023 33.2404 53.5457C21.8875 58.9319 13.1283 66.5994 8.20427 77.6967C0.612309 94.8069 11.3174 106.454 23.3131 111.423C24.7961 112.037 26.4054 112.376 28.9136 113.13C25.0786 114.844 22.2514 114.075 19.5188 113.313C8.72833 110.303 0.423396 99.5148 0.254973 88.394C0.147212 81.2769 2.24023 74.7201 6.42754 68.7944C12.5875 60.0776 20.3654 53.1923 30.295 48.8263C31.2716 48.3969 32.2221 47.9072 33.4997 47.2942C34.7263 37.708 37.1511 28.4884 44.6552 21.1505C51.9824 13.9855 61.6194 12.7885 71.1503 10.6418ZM39.2415 51.396C39.9578 61.2784 46.5215 66.7721 55.0535 64.7918C57.0655 64.3247 59.4419 62.7199 60.4442 60.993C61.8716 58.5337 60.2006 56.3 58.0977 54.6381C52.6455 50.3289 46.4387 49.7486 39.2415 51.396Z" fill="url(#paint0_radial_284_236)"></path>
            <defs>
              <radialGradient id="paint0_radial_284_236" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68.9748 77.3505) rotate(-139.083) scale(56.0144 81.933)">
                <stop stopColor="#0E5FD8"></stop>
                <stop offset="1" stopColor="#60A5FA"></stop>
              </radialGradient>
            </defs>
          </svg>

          {/* Left box - "Grow your brand on" with enhanced styling */}
          <div 
            className={`absolute left-[9%] top-[465px] hidden xl:block transition-all duration-700 hover-lift ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div 
              className="relative bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-black/60 dark:to-blue-950/60 border border-blue-200/60 rounded-lg shadow-depth-2 backdrop-blur-md"
              style={{
                width: "220px",
                height: "122px",
                transform: "rotate(5.65deg)",
                transformOrigin: "top left"
              }}
            >
              <div className="h-full flex flex-col items-center justify-center gap-2">
                <h5 className="w-28 text-center font-editorial italic font-normal text-[20px] leading-[20px] tracking-[-0.006em] text-blue-700">
                  Grow your brand on
                </h5>
                <div className="flex flex-row items-center justify-center gap-4 mt-2 text-blue-600/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-7 opacity-90">
                      <path d="M208,216H160L48,40H96Z" opacity="0.2"></path>
                      <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right decorative arrow with enhanced animation */}
          <svg 
            width="90" 
            height="32" 
            viewBox="0 0 90 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={`absolute right-[21%] top-[230px] hidden xl:block transition-all duration-700 float-animation ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            aria-hidden="true"
            style={{ transitionDelay: "600ms", animationDelay: "1.5s" }}
          >
            <title>Decorative right arrow</title>
            <path d="M11.6174 17.7046C15.9081 12.0807 20.1987 6.45676 24.4894 0.832787C24.2784 0.616207 24.0673 0.399622 23.8564 0.183013C22.4017 1.06207 20.5622 1.71919 19.5553 2.85668C13.4168 9.79188 7.39577 16.7978 1.49241 23.8643C-0.713995 26.5055 -0.280991 28.0428 3.0117 28.5537C10.0968 29.6529 17.2915 30.4353 24.4868 31.1706C25.5172 31.2759 27.4582 30.6108 27.8358 29.9334C28.7363 28.3183 27.033 27.6993 25.5377 27.3955C22.7859 26.8364 19.9745 26.4276 17.192 25.9452C15.4006 25.6346 13.6161 25.3046 11.7423 24.0685C14.9225 22.7666 18.0107 21.176 21.2984 20.2112C38.8792 15.0518 56.6128 13.4175 74.375 15.0499C79.8984 15.5575 85.0823 16.9091 89.5001 20.1759C90.3842 16.9424 88.6723 15.1257 86.068 14.2389C82.1205 12.8946 78.0204 11.5621 73.7519 11.0642C55.0473 8.88159 36.3941 11.0178 17.8976 16.7047C16.0507 17.2725 14.2198 17.8879 12.3815 18.4811C12.1267 18.2223 11.8721 17.9635 11.6174 17.7046Z" fill="url(#paint0_radial_284_230)"></path>
            <defs>
              <radialGradient id="paint0_radial_284_230" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47 34.5) rotate(-97.2369) scale(31.753 80.856)">
                <stop stopColor="#0E5FD8"></stop>
                <stop offset="1" stopColor="#60A5FA"></stop>
              </radialGradient>
            </defs>
          </svg>

          {/* Right text - "Your next post" with enhanced styling */}
          <div 
            className={`absolute right-[9%] top-[220px] hidden xl:block transition-all duration-700 text-shadow-soft ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "700ms", transformOrigin: "center center", zIndex: 1 }}
          >
            <div style={{ transform: "rotate(-8.62029deg)" }}>
              <h5 className="text-center font-editorial italic font-normal text-[25px] leading-[20px] tracking-[-0.006em] text-blue-700">
                Your next post
              </h5>
            </div>
          </div>

          {/* Right decoration image with enhanced styling */}
          <div 
            className={`absolute right-[5%] top-[245px] hidden xl:block transition-all duration-700 hover-lift ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="relative bg-white p-2 rounded-xl shadow-depth-3 transform rotate-[-8.62deg] border border-blue-100/60 backdrop-blur-sm">
              <svg
                width="199"
                height="115"
                viewBox="0 0 199 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[8px]"
              >
                {/* Enhanced background with subtle gradient */}
                <rect width="199" height="115" rx="8" fill="url(#dashboardBg)"/>
                
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="dashboardBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FAFBFC"/>
                    <stop offset="100%" stopColor="#F8FAFC"/>
                  </linearGradient>
                  <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F8FAFC"/>
                    <stop offset="100%" stopColor="#F1F5F9"/>
                  </linearGradient>
                  <linearGradient id="postifyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
                  </linearGradient>
                </defs>
                
                {/* Enhanced header section */}
                <rect width="199" height="28" fill="url(#headerGradient)"/>
                <rect x="8" y="8" width="38" height="12" rx="6" fill="url(#postifyGradient)" className="shadow-sm"/>
                <text x="12" y="17" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">Postify</text>
                
                {/* Navigation dots */}
                <circle cx="175" cy="14" r="2" fill="#E2E8F0"/>
                <circle cx="183" cy="14" r="2" fill="#E2E8F0"/>
                <circle cx="191" cy="14" r="2" fill="#E2E8F0"/>
                
                {/* Enhanced profile section */}
                <circle cx="16" cy="44" r="8" fill="url(#postifyGradient)"/>
                <text x="18" y="48" fill="white" fontSize="6" fontWeight="600">U</text>
                <rect x="32" y="40" width="52" height="4" rx="2" fill="#1E293B"/>
                <rect x="32" y="46" width="36" height="3" rx="1.5" fill="#64748B" opacity="0.8"/>
                
                {/* Enhanced stats with better visual hierarchy */}
                <g opacity="0.9">
                  <rect x="120" y="38" width="28" height="3" rx="1.5" fill="#10B981"/>
                  <rect x="152" y="38" width="22" height="3" rx="1.5" fill="#EF4444"/>
                  <rect x="178" y="38" width="16" height="3" rx="1.5" fill="#F59E0B"/>
                  
                  <text x="124" y="52" fill="#10B981" fontSize="5" fontWeight="600">+47%</text>
                  <text x="156" y="52" fill="#EF4444" fontSize="5" fontWeight="600">-12%</text>
                  <text x="182" y="52" fill="#F59E0B" fontSize="5" fontWeight="600">+8%</text>
                </g>
                
                {/* Enhanced badges */}
                <rect x="8" y="56" width="68" height="12" rx="6" fill="#EFF6FF" className="shadow-sm"/>
                <circle cx="16" cy="62" r="2" fill="#60A5FA"/>
                <text x="22" y="65" fill="#2563EB" fontSize="7" fontWeight="600">Coming Soon</text>
                
                <rect x="82" y="56" width="80" height="12" rx="6" fill="#F0FDF4" className="shadow-sm"/>
                <circle cx="90" cy="62" r="2" fill="#10B981"/>
                <text x="96" y="65" fill="#059669" fontSize="7" fontWeight="600">Repurpose Content</text>
                
                {/* Enhanced content lines with better spacing */}
                <rect x="8" y="76" width="183" height="3" rx="1.5" fill="#334155"/>
                <rect x="8" y="84" width="164" height="3" rx="1.5" fill="#64748B"/>
                <rect x="8" y="92" width="145" height="3" rx="1.5" fill="#94A3B8"/>
                <rect x="8" y="100" width="128" height="3" rx="1.5" fill="#CBD5E1"/>
                
                {/* Enhanced decorative elements */}
                <g opacity="0.6">
                  <circle cx="180" cy="20" r="1.5" fill="#3B82F6"/>
                  <circle cx="186" cy="26" r="1" fill="#60A5FA"/>
                  <circle cx="174" cy="26" r="1" fill="#93C5FD"/>
                  <rect x="170" y="78" width="24" height="2" rx="1" fill="#E2E8F0"/>
                  <rect x="170" y="86" width="20" height="2" rx="1" fill="#E2E8F0"/>
                </g>
                
                {/* Subtle shadow overlay */}
                <rect x="0" y="28" width="199" height="1" fill="#E2E8F0" opacity="0.5"/>
              </svg>
            </div>
          </div>

          {/* Enhanced trust badge with premium styling */}
          <div 
            className={`relative mb-1 flex justify-center transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="mx-auto flex flex-wrap items-center justify-center rounded-full border border-blue-200/60 bg-gradient-to-r from-white/90 to-blue-50/90 dark:from-black/60 dark:to-blue-950/60 px-4 py-2 text-xs md:text-sm shadow-lg backdrop-blur-md">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm animate-pulse"></span>
                <span className="text-gray-800 dark:text-neutral-50 font-medium">
                  Trusted by 800+ Users, try for free - no credit card
                </span>
              </span>
            </div>
          </div>

          {/* Enhanced main heading with dramatic typography */}
          <h1 
            className={`mx-auto mb-8 max-w-md lg:max-w-[700px] text-center font-serif font-normal text-4xl md:text-5xl lg:text-6xl text-balance xl:text-[72px] leading-[1.05] text-gray-900 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ 
              transitionDelay: "200ms",
              textShadow: "0 2px 4px rgba(0,0,0,0.02)"
            }}
          >
            Write{" "}
            <span className="font-editorial italic font-black text-gray-900 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              authentic
            </span>{" "}<br />
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="lg:size-16 xl:size-20 2xl:size-24 inline-block align-middle text-gray-800">
                <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
            -posts in 9 seconds
          </h1>

          {/* Enhanced feature pills with sophisticated styling */}
          <div 
            className={`hidden md:flex mx-auto mt-12 mb-12 w-fit flex-col justify-center items-center gap-2 sm:gap-4 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="hidden md:flex justify-center items-center px-6 py-4 gap-6 w-[640px] h-[52px] bg-gradient-to-r from-white/80 via-blue-50/90 to-white/80 dark:from-black/70 dark:via-blue-950/70 dark:to-black/70 backdrop-blur-xl rounded-full text-gray-700 dark:text-neutral-50 shadow-xl border border-blue-100/50 dark:border-blue-800/50">
              <span className="font-medium text-base">Sounds like you</span>
              <span className="flex gap-1">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm"></span>
              </span>
              <span className="font-medium text-base">Authentic posts</span>
              <span className="flex gap-1">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm"></span>
              </span>
              <span className="font-medium text-base">Grows your following</span>
            </div>
          </div>

          {/* Enhanced CTA Button with premium blue styling */}
          <div 
            className={`flex mt-12 md:mt-0 flex-col items-center justify-center transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex flex-row mx-auto w-full max-w-lg px-4 gap-2 items-center justify-center">
              {/* Desktop button */}
              <div className="hidden md:block">
                <Button
                  type="button"
                  onClick={handleSignIn}
                  className="group relative flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 h-14 px-10 text-lg bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 border border-blue-500/20 shadow-xl hover:shadow-2xl text-white rounded-full font-semibold transform hover:scale-105 overflow-hidden"
                >
                  {/* Enhanced gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex font-semibold flex-row items-center gap-2">
                    Sign in with 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-5 transition-transform duration-300 group-hover:scale-110">
                        <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                    </svg>
                    /Twitter
                  </div>
                </Button>
              </div>
              
              {/* Mobile button */}
              <div className="md:hidden">
                <Button
                  type="button"
                  onClick={handleSignIn}
                  className="group relative flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 h-12 px-8 text-base bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 border border-blue-500/20 shadow-xl hover:shadow-2xl text-white rounded-full font-semibold transform hover:scale-105 overflow-hidden"
                >
                  {/* Enhanced gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex font-semibold flex-row items-center gap-2">
                    Sign in with 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-5 transition-transform duration-300 group-hover:scale-110">
                        <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                    </svg>
                    /Twitter
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced video section with premium styling */}
          <div 
            className={`pointer-events-auto mt-16 md:mt-28 relative mx-auto flex w-full items-center justify-center transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="relative mt-16 max-w-screen-lg rounded-2xl border border-blue-100/60 shadow-2xl overflow-hidden">
              <button
                className="group relative w-full text-left cursor-pointer border-0 bg-transparent p-0"
                aria-label="Open video"
                type="button"
                onClick={handleVideoClick}
              >
                <Image
                  src="/images/postel-dashboard.svg"
                  alt="Postify Dashboard Preview"
                  width={1920}
                  height={1080}
                  className="w-full rounded-2xl border-0 shadow-xl transition-all duration-300 ease-out group-hover:brightness-[0.85] group-hover:scale-[1.02]"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-300 ease-out group-hover:scale-100">
                  <div className="flex size-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-blue-700/30 shadow-2xl backdrop-blur-xl border border-white/20">
                    <div className="relative flex size-28 scale-100 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-xl transition-all duration-300 ease-out group-hover:scale-[1.15] group-hover:shadow-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-14 text-white scale-100 transition-transform duration-300 ease-out group-hover:scale-110" style={{filter: "drop-shadow(0 4px 8px rgb(0 0 0 / 0.15))"}}>
                          <path d="M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z" opacity="0.2"></path>
                          <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              
              {/* Enhanced reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none rounded-2xl"></div>
            </div>
          </div>

          {/* Bottom gradient fade - adjusted for new background */}
          <div className="pointer-events-none absolute left-1/2 right-1/2 bottom-0 h-[150px] md:h-[300px] w-screen -translate-x-1/2 bg-gradient-to-t from-background from-10% via-background/95 via-30% to-transparent"></div>
        </div>

        {/* Testimonials Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 text-sm font-medium rounded-full uppercase tracking-wider">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-8">
              How our users{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                boost their X growth
              </span>
            </h2>
          </div>

          {/* First row - scrolls right to left */}
          <div className="testimonials-container mb-8">
            <div className="flex gap-6 animate-scroll-right-to-left">
              {/* Testimonial cards for first row */}
              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">Postify has really good Tweet Ideas. I don't struggle with new post ideas anymore.</span> The founders did a great job.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Methkal</div>
                    <div className="text-sm text-gray-500">Indie Maker</div>
                    <div className="text-sm text-purple-600">@methkalkhalawi</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">Postify got me back in the flow with tweet ideas that actually match my vibe and timeline, not random generic stuff. Last week went crazy.</span> <span className="font-semibold text-purple-600">Almost +100 followers in 2 days.</span> And the founders are not just shipping a tool, the team's actually there to help. 100% worth trying.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Julia</div>
                    <div className="text-sm text-gray-500">Software Engineer & Builder</div>
                    <div className="text-sm text-purple-600">@clwassy</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">Postify is a game changer.</span> The best feature is the "Topics", they help me get fresh ideas for specific themes. <span className="font-semibold">The post ideas were better than anything I've used before. Better than just using ChatGPT or Claude.</span> The voice it created is spot on.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    G
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Grant Singleton</div>
                    <div className="text-sm text-gray-500">Software Engineer & Builder</div>
                    <div className="text-sm text-purple-600">@_grantsing</div>
                  </div>
                </div>
              </div>

              {/* Duplicate cards for infinite scroll effect */}
              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">Postify has really good Tweet Ideas. I don't struggle with new post ideas anymore.</span> The founders did a great job.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Methkal</div>
                    <div className="text-sm text-gray-500">Indie Maker</div>
                    <div className="text-sm text-purple-600">@methkalkhalawi</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">Postify got me back in the flow with tweet ideas that actually match my vibe and timeline, not random generic stuff. Last week went crazy.</span> <span className="font-semibold text-purple-600">Almost +100 followers in 2 days.</span> And the founders are not just shipping a tool, the team's actually there to help. 100% worth trying.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Julia</div>
                    <div className="text-sm text-gray-500">Software Engineer & Builder</div>
                    <div className="text-sm text-purple-600">@clwassy</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">Postify is a game changer.</span> The best feature is the "Topics", they help me get fresh ideas for specific themes. <span className="font-semibold">The post ideas were better than anything I've used before. Better than just using ChatGPT or Claude.</span> The voice it created is spot on.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    G
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Grant Singleton</div>
                    <div className="text-sm text-gray-500">Software Engineer & Builder</div>
                    <div className="text-sm text-purple-600">@_grantsing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row - scrolls left to right */}
          <div className="testimonials-container">
            <div className="flex gap-6 animate-scroll-left-to-right">
              {/* Testimonial cards for second row */}
              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    The founders of Postify are crushing it. <span className="font-semibold">Been testing Postify for a while now and have started seeing awesome results. Postify helped me to push past the first 1000 followers.</span> Grab ideas from Postify and schedule them out. Now I got more time to work on my own projects and for my family.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                    N
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Nemo</div>
                    <div className="text-sm text-gray-500">Software Engineer & Indie Builder</div>
                    <div className="text-sm text-purple-600">@FakeUncleNemo</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">It feels like you created your own digital self to create content for you!!</span> Postify is something where you don't feel the guilt of generating AI content.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                    K
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Kavuru Sarath</div>
                    <div className="text-sm text-gray-500">Indie Maker</div>
                    <div className="text-sm text-purple-600">@KavuruSarath</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">I just got like 100 followers in 2000 followers</span> because of Postify advice of the founders.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adam Bartas</div>
                    <div className="text-sm text-gray-500">Designer</div>
                    <div className="text-sm text-purple-600">@AdamBartas</div>
                  </div>
                </div>
              </div>

              {/* Duplicate cards for infinite scroll effect */}
              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    The founders of Postify are crushing it. <span className="font-semibold">Been testing Postify for a while now and have started seeing awesome results. Postify helped me to push past the first 1000 followers.</span> Grab ideas from Postify and schedule them out. Now I got more time to work on my own projects and for my family.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                    N
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Nemo</div>
                    <div className="text-sm text-gray-500">Software Engineer & Indie Builder</div>
                    <div className="text-sm text-purple-600">@FakeUncleNemo</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">It feels like you created your own digital self to create content for you!!</span> Postify is something where you don't feel the guilt of generating AI content.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                    K
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Kavuru Sarath</div>
                    <div className="text-sm text-gray-500">Indie Maker</div>
                    <div className="text-sm text-purple-600">@KavuruSarath</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-normal">
                    <span className="font-semibold">I just got like 100 followers in 2000 followers</span> because of Postify advice of the founders.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adam Bartas</div>
                    <div className="text-sm text-gray-500">Designer</div>
                    <div className="text-sm text-purple-600">@AdamBartas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
              onClick={handleCloseVideo}
            />
            
            {/* Modal Content */}
            <div className="relative z-50 w-full max-w-5xl px-4 animate-scale-in">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={handleCloseVideo}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
                  aria-label="Close video"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                  </svg>
                </button>
                
                {/* Vimeo Embed */}
                <iframe
                  src="https://player.vimeo.com/video/901751328?h=1a8e9f0d5e&autoplay=1&title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Postify Demo Video"
                />
              </div>
              
              {/* Optional: Video Title */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-medium">
                  Watch how Postify helps you write authentic posts in seconds
                </h3>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
