# Postel Clone Frontend Code

This document contains all the relevant frontend code for the Postel clone project built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Table of Contents
1. [Main Page Component](#main-page-component)
2. [Layout Component](#layout-component)
3. [Global Styles](#global-styles)
4. [Navigation Component](#navigation-component)
5. [UI Components](#ui-components)
6. [Utility Functions](#utility-functions)
7. [Configuration Files](#configuration-files)

---

## Main Page Component

### `app/page.tsx`
```tsx
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
            className={`mx-auto mb-6 max-w-md lg:max-w-[700px] text-center font-serif font-normal text-4xl md:text-5xl lg:text-6xl text-balance xl:text-[68px] leading-[1.1] text-[#27272A] transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Write{" "}
            <span className="font-editorial italic font-bold text-[#27272A]">
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
```

---

## Layout Component

### `app/layout.tsx`
```tsx
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
        {/* SVG Background with Leadify blue gradient theme */}
        <div className="fixed inset-0 -z-20 h-full w-full">
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Blue gradient variations */}
              <radialGradient id="cloudGradient1" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#BFDBFE" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.3" />
              </radialGradient>
              
              <radialGradient id="cloudGradient2" cx="70%" cy="40%">
                <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#C7D2FE" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#A5B4FC" stopOpacity="0.2" />
              </radialGradient>
              
              <radialGradient id="cloudGradient3" cx="50%" cy="70%">
                <stop offset="0%" stopColor="#EFF6FF" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#DBEAFE" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.2" />
              </radialGradient>

              {/* Blur filter for soft clouds */}
              <filter id="cloudBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
              </filter>
            </defs>
            
            {/* Base gradient */}
            <rect width="100%" height="100%" fill="#FAFAFA" className="dark:fill-[#0a0a0a]" />
            
            {/* Cloud shapes */}
            <ellipse cx="20%" cy="40%" rx="35%" ry="25%" fill="url(#cloudGradient1)" filter="url(#cloudBlur)" transform="translate(0, 50)" />
            <ellipse cx="70%" cy="30%" rx="40%" ry="30%" fill="url(#cloudGradient2)" filter="url(#cloudBlur)" transform="translate(0, 80)" />
            <ellipse cx="50%" cy="60%" rx="45%" ry="35%" fill="url(#cloudGradient3)" filter="url(#cloudBlur)" transform="translate(0, 100)" />
            
            {/* Additional cloud layers for depth */}
            <ellipse cx="85%" cy="50%" rx="30%" ry="20%" fill="#DBEAFE" fillOpacity="0.3" filter="url(#cloudBlur)" transform="translate(0, 120)" />
            <ellipse cx="15%" cy="70%" rx="35%" ry="25%" fill="#BFDBFE" fillOpacity="0.3" filter="url(#cloudBlur)" transform="translate(0, 140)" />
            <ellipse cx="60%" cy="80%" rx="50%" ry="30%" fill="#93C5FD" fillOpacity="0.2" filter="url(#cloudBlur)" transform="translate(0, 160)" />
          </svg>
        </div>
        
        {/* Enhanced gradient overlay */}
        <div className="fixed top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#FAFAFB] via-[#FAFAFB]/95 via-30% to-transparent dark:from-[#0F0F0F] dark:via-[#0F0F0F]/95 -z-10"></div>
        
        {children}
      </body>
    </html>
  );
}
```

---

## Global Styles

### `app/globals.css`
```css
/* Import custom fonts - must be at the very top */
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

/* Import Editorial fonts for decorative text */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Leadify Color Scheme - Light Mode */
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 213 93% 38%; /* Leadify Blue */
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 3.9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.9%;
    --accent: 213 93% 38%; /* Same as primary */
    --accent-foreground: 0 0% 98%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 213 93% 38%;
    --radius: 0.5rem;
    
    /* Custom properties for gradients and accents */
    --gradient-primary: linear-gradient(to bottom, hsl(213 93% 38%), hsl(213 93% 28%));
    --gradient-accent: linear-gradient(to right, hsl(213 93% 48%), hsl(213 93% 38%));
  }

  .dark {
    /* Leadify Color Scheme - Dark Mode */
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 7%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 7%;
    --popover-foreground: 0 0% 98%;
    --primary: 213 93% 38%; /* Leadify Blue */
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 16.1%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 16.1%;
    --muted-foreground: 0 0% 64.7%;
    --accent: 213 93% 38%; /* Same as primary */
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 16.1%;
    --input: 0 0% 16.1%;
    --ring: 213 93% 38%;
  }
}

@layer base {
  body {
    @apply bg-background text-foreground;
  }
}

/* Custom font face for PP Editorial Old - using fallback for now */
@font-face {
  font-family: 'PP_Editorial_Old';
  src: local('Georgia'), local('Times New Roman');
  font-style: italic;
  font-weight: 400;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom utility classes */
.animate-delay-100 {
  animation-delay: 100ms;
}

.animate-delay-200 {
  animation-delay: 200ms;
}

.animate-delay-300 {
  animation-delay: 300ms;
}

.animate-delay-400 {
  animation-delay: 400ms;
}

.animate-delay-500 {
  animation-delay: 500ms;
}

.animate-delay-600 {
  animation-delay: 600ms;
}

.animate-delay-700 {
  animation-delay: 700ms;
}

.animate-delay-800 {
  animation-delay: 800ms;
}

/* Gradient text - Updated for Leadify blue theme */
.gradient-text {
  background: linear-gradient(to bottom right, hsl(213 93% 38%), hsl(213 93% 48%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Navigation Component

### `components/navigation.tsx`
```tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { PostelLogo } from "@/components/logo"

// Replicated Discord Icon SVG as a React component
const DiscordIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z" fill="currentColor"></path>
  </svg>
)

export function Navigation() {
  // Placeholder for mobile menu state
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      className="fixed top-[34.77px] left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-[1049.95px] min-w-[320px] h-[58px] px-3 sm:px-[14px] py-[5.63px] bg-[rgba(255,255,255,0.23)] border-[0.993332px] border-solid border-[rgba(14,95,216,0.36)] shadow-[inset_0px_8.60888px_25.4624px_rgba(255,255,255,0.5)] backdrop-blur-[7px] rounded-[33.1111px] transition-all duration-200"
      data-test="navigation"
    >
      <div className="w-[120px] sm:w-[175px] h-[40px]">
        <Link href="/" className="block hover:no-underline active:no-underline hover:scale-105 transition-transform">
          <PostelLogo className="h-[40px] w-auto max-w-full" />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-[26px]">
        <Link href="/#pricing" className="font-geist text-base text-[#1E40AF]/75 leading-[104.3%] hover:text-[#1E40AF] transition-colors">Pricing</Link>
        <Link href="/#faq" className="font-geist text-base text-[#1E40AF]/75 leading-[104.3%] hover:text-[#1E40AF] transition-colors">FAQ</Link>
        <Link href="/blog" className="font-geist text-base text-[#1E40AF]/75 leading-[104.3%] hover:text-[#1E40AF] transition-colors">Blog</Link>
        <Link href="/contact" className="font-geist text-base text-[#1E40AF]/75 leading-[104.3%] hover:text-[#1E40AF] transition-colors">Contact</Link>
        <a href="https://discord.gg/vXUvyuPfBH" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-[#1E40AF]/75 hover:text-[#1E40AF] transition-colors" aria-label="Join our Discord">
          <DiscordIcon />
        </a>
        <Link href="/app" className="flex items-center justify-center font-semibold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&>svg+svg]:hidden border-secondary hover:bg-secondary/90 shadow-[inset_0_0.5px_2px_rgba(255,255,255,0.3)] h-9 text-sm bg-[#27272A] text-white rounded-full px-5 py-2.5">
            <span className="font-geist font-normal text-base leading-5">Dashboard</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <Button 
        variant="outline"
        size="icon"
        className="flex items-center justify-center font-semibold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&>svg+svg]:hidden border-secondary/15 bg-transparent text-secondary hover:bg-secondary/10 size-9 rounded-md md:hidden"
        aria-label="Menu"
        // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Add state management for this
      >
        <Menu className="size-4" />
      </Button>

      {/* Mobile Menu (Actual implementation would require state and conditional rendering) */}
      {/* 
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 md:hidden bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-4">
          <Link href="/#pricing" className="block py-2 text-[#1E40AF]/75">Pricing</Link>
          <Link href="/#faq" className="block py-2 text-[#1E40AF]/75">FAQ</Link>
          <Link href="/blog" className="block py-2 text-[#1E40AF]/75">Blog</Link>
          <Link href="/contact" className="block py-2 text-[#1E40AF]/75">Contact</Link>
          <a href="https://discord.gg/vXUvyuPfBH" target="_blank" rel="noopener noreferrer" className="flex items-center py-2 text-[#1E40AF]/75">
            <DiscordIcon /> <span className="ml-2">Discord</span>
          </a>
          <Button asChild className="w-full mt-2 bg-[#27272A] text-white">
            <Link href="/app">Dashboard</Link>
          </Button>
        </div>
      )}
      */}
    </nav>
  )
}
```

---

## UI Components

### `components/icons.tsx`
```tsx
import React from "react"

// X (Twitter) Icon Component
export const XIcon = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="1em" 
    height="1em" 
    fill="currentColor" 
    viewBox="0 0 256 256" 
    className={className}
    {...props}
  >
    <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
  </svg>
)

// Play Icon Component for video button
export const PlayIcon = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="1em" 
    height="1em" 
    fill="currentColor" 
    viewBox="0 0 256 256" 
    className={className}
    {...props}
  >
    <path d="M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z" opacity="0.2"></path>
    <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
  </svg>
)
```

### `components/logo.tsx`
```tsx
"use client"

import React from "react"

export const PostelLogo = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    width="140" 
    height="32" 
    viewBox="0 0 140 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Define gradient */}
    <defs>
      <linearGradient id="postelLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    
    {/* Logo icon - mail/envelope shape */}
    <g>
      <rect x="4" y="8" width="24" height="16" rx="2" stroke="url(#postelLogoGradient)" strokeWidth="2" fill="none"/>
      <path d="M6 10L16 17L26 10" stroke="url(#postelLogoGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    
    {/* Text: Postel */}
    <path d="M42.32 23V9.8H47.36C48.4533 9.8 49.3733 10.0267 50.12 10.48C50.88 10.92 51.4533 11.5333 51.84 12.32C52.2267 13.0933 52.42 13.9867 52.42 15C52.42 16.0133 52.2267 16.9133 51.84 17.7C51.4533 18.4733 50.88 19.08 50.12 19.52C49.3733 19.96 48.4533 20.18 47.36 20.18H44.52V23H42.32ZM44.52 18.22H47.2C47.84 18.22 48.3733 18.0933 48.8 17.84C49.2267 17.5733 49.5467 17.2133 49.76 16.76C49.9733 16.3067 50.08 15.7867 50.08 15.2C50.08 14.6 49.9733 14.0733 49.76 13.62C49.5467 13.1533 49.2267 12.9 47.2 12.9H44.52V18.22Z" fill="#1F2937"/>
    <path d="M57.6463 23.2C56.7263 23.2 55.9263 22.98 55.2463 22.54C54.5663 22.1 54.0396 21.4867 53.6663 20.7C53.2929 19.9133 53.1063 18.9933 53.1063 17.94C53.1063 16.8867 53.2929 15.9667 53.6663 15.18C54.0396 14.3933 54.5663 13.78 55.2463 13.34C55.9263 12.9 56.7263 12.68 57.6463 12.68C58.5663 12.68 59.3663 12.9 60.0463 13.34C60.7263 13.78 61.2529 14.3933 61.6263 15.18C61.9996 15.9667 62.1863 16.8867 62.1863 17.94C62.1863 18.9933 61.9996 19.9133 61.6263 20.7C61.2529 21.4867 60.7263 22.1 60.0463 22.54C59.3663 22.98 58.5663 23.2 57.6463 23.2ZM57.6463 21.2C58.1263 21.2 58.5396 21.08 58.8863 20.84C59.2463 20.5867 59.5196 20.2267 59.7063 19.76C59.9063 19.28 60.0063 18.7 60.0063 18.02C60.0063 17.34 59.9063 16.7667 59.7063 16.3C59.5196 15.82 59.2463 15.46 58.8863 15.22C58.5396 14.9667 58.1263 14.84 57.6463 14.84C57.1663 14.84 56.7463 14.9667 56.3863 15.22C56.0396 15.46 55.7663 15.82 55.5663 16.3C55.3796 16.7667 55.2863 17.34 55.2863 18.02C55.2863 18.7 55.3796 19.28 55.5663 19.76C55.7663 20.2267 56.0396 20.5867 56.3863 20.84C56.7463 21.08 57.1663 21.2 57.6463 21.2Z" fill="#1F2937"/>
    <path d="M67.0481 23.2C66.2881 23.2 65.6081 23.04 65.0081 22.72C64.4081 22.4 63.9281 21.9467 63.5681 21.36L65.0481 20.08C65.3148 20.48 65.6348 20.7867 66.0081 21C66.3948 21.2 66.8281 21.3 67.3081 21.3C67.7081 21.3 68.0148 21.22 68.2281 21.06C68.4548 20.8867 68.5681 20.6533 68.5681 20.36C68.5681 20.12 68.4948 19.9267 68.3481 19.78C68.2148 19.6333 68.0215 19.5133 67.7681 19.42C67.5281 19.3133 67.2481 19.2133 66.9281 19.12C66.4615 18.9733 66.0348 18.8133 65.6481 18.64C65.2615 18.4533 64.9348 18.2133 64.6681 17.92C64.4015 17.6133 64.2015 17.24 64.0681 16.8C63.9481 16.3467 63.8881 15.8 63.8881 15.16C63.8881 14.44 64.0481 13.8333 64.3681 13.34C64.6881 12.8333 65.1281 12.4533 65.6881 12.2C66.2481 11.9333 66.8881 11.8 67.6081 11.8C68.3015 11.8 68.9148 11.9333 69.4481 12.2C69.9948 12.4667 70.4548 12.8467 70.8281 13.34L69.3881 14.66C69.1348 14.3267 68.8415 14.08 68.5081 13.92C68.1881 13.76 67.8481 13.68 67.4881 13.68C67.0881 13.68 66.7748 13.7667 66.5481 13.94C66.3348 14.1 66.2281 14.32 66.2281 14.6C66.2281 14.84 66.2948 15.0333 66.4281 15.18C66.5748 15.3267 66.7681 15.4533 67.0081 15.56C67.2615 15.6533 67.5481 15.7467 67.8681 15.84C68.3348 15.9867 68.7615 16.1467 69.1481 16.32C69.5348 16.4933 69.8615 16.72 70.1281 17C70.3948 17.28 70.5948 17.6267 70.7281 18.04C70.8748 18.4533 70.9481 18.96 70.9481 19.56C70.9481 20.28 70.7815 20.8933 70.4481 21.4C70.1148 21.8933 69.6548 22.2667 69.0681 22.52C68.4815 23.08 67.8081 23.2 67.0481 23.2Z" fill="#1F2937"/>
    <path d="M75.9578 23.16C75.3445 23.16 74.8245 23.02 74.3978 22.74C73.9845 22.46 73.6711 22.08 73.4578 21.6C73.2445 21.1067 73.1378 20.5467 73.1378 19.92V14.96H71.8378V12.88H73.1378V10.28H75.3178V12.88H77.6178V14.96H75.3178V19.44C75.3178 19.9467 75.4111 20.3267 75.5978 20.58C75.7978 20.8333 76.1045 20.96 76.5178 20.96C76.7311 20.96 76.9311 20.9333 77.1178 20.88C77.3045 20.8133 77.4711 20.7267 77.6178 20.62V22.76C77.4178 22.88 77.1711 22.9733 76.8778 23.04C76.5978 23.12 76.2911 23.16 75.9578 23.16Z" fill="#1F2937"/>
    <path d="M82.4109 23.2C81.5576 23.2 80.8109 22.9867 80.1709 22.56C79.5443 22.12 79.0576 21.5067 78.7109 20.72C78.3643 19.9333 78.1909 19.0067 78.1909 17.94C78.1909 16.8733 78.3709 15.9467 78.7309 15.16C79.0909 14.3733 79.5909 13.7667 80.2309 13.34C80.8843 12.9 81.6376 12.68 82.4909 12.68C83.3309 12.68 84.0643 12.8933 84.6909 13.32C85.3176 13.7333 85.8043 14.32 86.1509 15.08C86.5109 15.8267 86.6909 16.7 86.6909 17.7C86.6909 17.8467 86.6843 18 86.6709 18.16C86.6709 18.32 86.6643 18.4667 86.6509 18.6H80.3309C80.3976 19.2667 80.5976 19.7933 80.9309 20.18C81.2776 20.5533 81.7509 20.74 82.3509 20.74C82.7643 20.74 83.1176 20.6533 83.4109 20.48C83.7176 20.2933 83.9709 20.0333 84.1709 19.7L85.8509 20.86C85.5043 21.4467 85.0176 21.9 84.3909 22.22C83.7643 22.04 83.1176 23.2 82.4109 23.2ZM82.4909 14.68C82.0109 14.68 81.6043 14.84 81.2709 15.16C80.9376 15.4667 80.7243 15.92 80.6309 16.52H84.3109C84.2443 15.9333 84.0509 15.48 83.7309 15.16C83.4109 14.84 82.9976 14.68 82.4909 14.68Z" fill="#1F2937"/>
    <path d="M88.7344 23V9.2H90.9144V23H88.7344Z" fill="#1F2937"/>
  </svg>
)
```

### `components/ui/button.tsx`
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Button variants configuration
const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-b from-[#3B82F6] to-[#1E40AF] hover:from-[#2563EB] hover:to-[#1E40AF] border border-[#1E3A8A] shadow-lg text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

## Utility Functions

### `lib/utils.ts`
```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## Configuration Files

### `package.json`
```json
{
  "name": "postel-clone",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "predev": "lsof -ti:3002 | xargs kill -9 2>/dev/null || true",
    "dev": "next dev --turbopack -p 3002",
    "build": "next build",
    "start": "next start -p 3002",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-slot": "^1.2.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.15.0",
    "geist": "^1.4.2",
    "lucide-react": "^0.511.0",
    "next": "15.3.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.3.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.4",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}
```

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        instrument: ["'Instrument Sans'", "sans-serif"],
        editorial: ["'Playfair Display'", "serif"],
        geist: ["var(--font-geist-sans)"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `postcss.config.mjs`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## Summary

This document contains all the frontend code for the Postel clone project. The project is a modern Next.js 14 application with:

- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom theme
- **Framer Motion** for animations (installed but not actively used in current code)
- **Radix UI** for accessible UI primitives
- **Custom components** for icons, navigation, and UI elements
- **Responsive design** with mobile-first approach
- **Animated entrance effects** with staggered delays
- **Video modal** functionality
- **Custom fonts** (Instrument Sans and Playfair Display)
- **Blue gradient theme** throughout the design

The main features include:
1. Animated landing page with decorative elements
2. Navigation with responsive menu
3. Video preview with modal player
4. Sign-in button with X/Twitter integration (placeholder)
5. Trust badges and feature pills
6. Beautiful gradient backgrounds and hover effects