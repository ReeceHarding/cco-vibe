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
          
          {/* Left decorative arrow */}
          <svg 
            width="96" 
            height="115" 
            viewBox="0 0 96 115" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={`absolute left-[17%] top-[350px] hidden xl:block transition-all duration-700 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            aria-hidden="true"
            style={{ transitionDelay: "600ms" }}
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

          {/* Left box - "Grow your brand on" */}
          <div 
            className={`absolute left-[9%] top-[465px] hidden xl:block transition-all duration-700 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div 
              className="relative bg-card/50 dark:bg-card/50 border border-black/12 rounded-md shadow-sm"
              style={{
                width: "220px",
                height: "122px",
                transform: "rotate(5.65deg)",
                transformOrigin: "top left"
              }}
            >
              <div className="h-full flex flex-col items-center justify-center gap-2">
                <h5 className="w-28 text-center font-editorial italic font-normal text-[20px] leading-[20px] tracking-[-0.006em] text-[#0E5FD8]">
                  Grow your brand on
                </h5>
                <div className="flex flex-row items-center justify-center gap-4 mt-2 text-foreground/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-7 opacity-90">
                      <path d="M208,216H160L48,40H96Z" opacity="0.2"></path>
                      <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right decorative arrow */}
          <svg 
            width="90" 
            height="32" 
            viewBox="0 0 90 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={`absolute right-[21%] top-[230px] hidden xl:block transition-all duration-700 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            aria-hidden="true"
            style={{ transitionDelay: "600ms" }}
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

          {/* Right text - "Your next post" */}
          <div 
            className={`absolute right-[9%] top-[220px] hidden xl:block transition-all duration-700 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "700ms", transformOrigin: "center center", zIndex: 1 }}
          >
            <div style={{ transform: "rotate(-8.62029deg)" }}>
              <h5 className="text-center font-editorial italic font-normal text-[25px] leading-[20px] tracking-[-0.006em] text-[#0E5FD8]">
                Your next post
              </h5>
            </div>
          </div>

          {/* Right decoration image */}
          <div 
            className={`absolute right-[5%] top-[245px] hidden xl:block transition-all duration-700 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="relative bg-white p-2 rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transform rotate-[-8.62deg] border border-[#E2E8F0]">
              <svg
                width="199"
                height="115"
                viewBox="0 0 199 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[5px]"
              >
                {/* Background */}
                <rect width="199" height="115" rx="8" fill="#FAFBFC"/>
                
                {/* Header section */}
                <rect width="199" height="28" fill="#F8FAFC"/>
                <rect x="8" y="8" width="32" height="12" rx="6" fill="#3B82F6"/>
                <text x="12" y="17" fill="white" fontSize="8" fontWeight="600">Postel</text>
                
                {/* Profile section */}
                <circle cx="16" cy="44" r="8" fill="#E2E8F0"/>
                <rect x="32" y="40" width="48" height="4" rx="2" fill="#E2E8F0"/>
                <rect x="32" y="46" width="32" height="3" rx="1.5" fill="#E2E8F0" opacity="0.7"/>
                
                {/* Stats */}
                <g opacity="0.8">
                  <rect x="120" y="38" width="24" height="3" rx="1.5" fill="#10B981"/>
                  <rect x="148" y="38" width="20" height="3" rx="1.5" fill="#EF4444"/>
                  <rect x="172" y="38" width="20" height="3" rx="1.5" fill="#F59E0B"/>
                  
                  <rect x="120" y="44" width="16" height="2" rx="1" fill="#E2E8F0"/>
                  <rect x="148" y="44" width="12" height="2" rx="1" fill="#E2E8F0"/>
                  <rect x="172" y="44" width="14" height="2" rx="1" fill="#E2E8F0"/>
                </g>
                
                {/* Coming Soon badge */}
                <rect x="8" y="56" width="60" height="12" rx="6" fill="#EFF6FF"/>
                <circle cx="16" cy="62" r="2" fill="#60A5FA"/>
                <text x="22" y="65" fill="#3B82F6" fontSize="7" fontWeight="500">Coming Soon</text>
                
                {/* Repurpose Content */}
                <rect x="76" y="56" width="72" height="12" rx="6" fill="#F0FDF4"/>
                <circle cx="84" cy="62" r="2" fill="#10B981"/>
                <text x="90" y="65" fill="#10B981" fontSize="7" fontWeight="500">Repurpose Content</text>
                
                {/* Content lines */}
                <rect x="8" y="76" width="183" height="3" rx="1.5" fill="#E2E8F0"/>
                <rect x="8" y="84" width="160" height="3" rx="1.5" fill="#E2E8F0"/>
                <rect x="8" y="92" width="140" height="3" rx="1.5" fill="#E2E8F0"/>
                <rect x="8" y="100" width="120" height="3" rx="1.5" fill="#E2E8F0"/>
                
                {/* Decorative elements */}
                <g opacity="0.4">
                  <circle cx="180" cy="20" r="1.5" fill="#3B82F6"/>
                  <circle cx="186" cy="26" r="1" fill="#60A5FA"/>
                  <circle cx="174" cy="26" r="1" fill="#93C5FD"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Trust badge */}
          <div 
            className={`relative mb-1 flex justify-center transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="mx-auto flex flex-wrap items-center justify-center rounded-full border border-zinc-200 bg-white/40 dark:bg-black/40 px-3 py-1 text-xs md:text-sm shadow-sm">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#F97316]"></span>
                <span className="text-black dark:text-neutral-50">
                  Trusted by 800+ Users, try for free - no credit card
                </span>
              </span>
            </div>
          </div>

          {/* Main heading - Enhanced typography */}
          <h1 
            className={`mx-auto mb-6 max-w-md lg:max-w-[700px] text-center font-instrument font-medium text-4xl md:text-5xl lg:text-6xl text-balance xl:text-[68px] leading-[1.1] text-[#27272A] transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Write{" "}
            <span className="font-editorial italic font-normal text-[#27272A]">
              authentic
            </span>{" "}<br />
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="lg:size-16 xl:size-18 2xl:size-20 inline-block align-middle">
                <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
            -posts in 9 seconds
          </h1>

          {/* Feature pills */}
          <div 
            className={`hidden md:flex mx-auto mt-11 mb-10 w-fit flex-col justify-center items-center gap-2 sm:gap-4 transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="hidden md:flex justify-center items-center px-5 py-[15px] gap-5 w-[604px] h-[46px] bg-white/60 dark:bg-black/60 backdrop-blur-[100px] rounded-[61px] text-foreground/70 dark:text-neutral-50 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] border border-white/50">
              <span>Sounds like you</span>
              <span className="flex gap-1">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3B82F6]"></span>
              </span>
              <span>Authentic posts</span>
              <span className="flex gap-1">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3B82F6]"></span>
              </span>
              <span>Grows your following</span>
            </div>
          </div>

          {/* CTA Button - Enhanced styling */}
          <div 
            className={`flex mt-12 md:mt-0 flex-col items-center justify-center transition-all duration-500 ${
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
                  className="flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&>svg+svg]:hidden bg-transparent hover:bg-secondary/10 h-12 px-8 text-lg bg-gradient-to-b md:flex-1 from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1E40AF] border border-[#3B82F6]/20 shadow-[0_4px_14px_0_rgb(59,130,246,0.5)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.6)] text-white rounded-full font-medium"
                >
                  <div className="flex font-medium flex-row items-center">
                    Sign in with 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-5 ml-1.5">
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
                  className="flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&>svg+svg]:hidden bg-transparent hover:bg-secondary/10 h-12 px-8 text-base bg-gradient-to-b from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1E40AF] border border-[#3B82F6]/20 shadow-[0_4px_14px_0_rgb(59,130,246,0.5)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.6)] text-white rounded-full font-medium"
                >
                  <div className="flex font-medium flex-row items-center">
                    Sign in with 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-5 ml-1.5">
                        <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                    </svg>
                    /Twitter
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Video section - made larger and more prominent */}
          <div 
            className={`pointer-events-auto mt-12 md:mt-24 relative mx-auto flex w-full items-center justify-center transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="relative mt-16 max-w-screen-lg rounded-lg border shadow-lg">
              <button
                className="group relative w-full text-left cursor-pointer border-0 bg-transparent p-0"
                aria-label="Open video"
                type="button"
                onClick={handleVideoClick}
              >
                <Image
                  src="/images/postel-dashboard.svg"
                  alt="Postel Dashboard Preview"
                  width={1920}
                  height={1080}
                  className="w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                  <div className="flex size-36 items-center justify-center rounded-full bg-primary/20 shadow-md backdrop-blur-lg">
                    <div className="relative flex size-24 scale-100 items-center justify-center rounded-full shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-12 text-white scale-100 transition-transform duration-200 ease-out group-hover:scale-105" style={{filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"}}>
                          <path d="M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z" opacity="0.2"></path>
                          <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Bottom gradient fade - adjusted for new background */}
          <div className="pointer-events-none absolute left-1/2 right-1/2 bottom-0 h-[150px] md:h-[300px] w-screen -translate-x-1/2 bg-gradient-to-t from-background from-10% via-background/95 via-30% to-transparent"></div>
        </div>

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
                  title="Postel Demo Video"
                />
              </div>
              
              {/* Optional: Video Title */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-medium">
                  Watch how Postel helps you write authentic posts in seconds
                </h3>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
