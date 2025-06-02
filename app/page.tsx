"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { XIcon, PlayIcon } from "@/components/icons"
import { Navigation } from "@/components/navigation"
import { PostelLogo } from "@/components/logo"

// Custom hook for scroll-triggered animations
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

// Replicated Discord Icon SVG as a React component
const DiscordIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z" fill="currentColor"></path>
  </svg>
)

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [activeFeatureTab, setActiveFeatureTab] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState(0)
  const [isYearlyBilling, setIsYearlyBilling] = useState(false)

  const featureTabs = [
    {
      name: "Voice Training",
      title: "Train AI on your unique voice",
      description: "Import your best performing tweets and let our AI analyze your writing patterns, tone, and style. The more you use Postify, the better it gets at creating content that sounds authentically you.",
      features: [
        "Analyzes your vocabulary and sentence structure",
        "Learns your humor and personality",
        "Adapts to your audience's preferences",
        "Improves with every post you write"
      ]
    },
    {
      name: "Content Ideas",
      title: "Never run out of ideas",
      description: "Get unlimited content suggestions tailored to your niche and audience. Our AI generates relevant topics, trending angles, and engaging hooks that align with your brand voice.",
      features: [
        "Topic suggestions based on your niche",
        "Trending hashtags and keywords",
        "Engagement-optimized post formats",
        "Content calendar recommendations"
      ]
    },
    {
      name: "Analytics",
      title: "Track what works",
      description: "Understand your audience with detailed analytics. See which posts drive the most engagement, when your followers are most active, and how your growth trends over time.",
      features: [
        "Real-time engagement metrics",
        "Audience growth tracking",
        "Best posting time analysis",
        "Content performance insights"
      ]
    },
    {
      name: "Scheduling",
      title: "Post at the perfect time",
      description: "Schedule your content when your audience is most active. Our AI analyzes your followers' behavior to recommend optimal posting times for maximum reach and engagement.",
      features: [
        "Smart scheduling recommendations",
        "Bulk upload and queue management",
        "Time zone optimization",
        "Auto-posting with approval workflow"
      ]
    }
  ]

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

  useScrollAnimation()

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
                <stop stopColor="#2563EB"></stop>
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
              className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/20 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
              style={{
                width: "200px",
                height: "110px",
                transform: "rotate(5.65deg)",
                transformOrigin: "top left"
              }}
            >
              <div className="h-full flex flex-col items-center justify-center gap-2">
                <h5 className="w-28 text-center font-editorial italic font-semibold text-[18px] leading-[18px] tracking-tight bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Grow your brand on
                </h5>
                <div className="flex flex-row items-center justify-center gap-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-6 opacity-80 text-blue-600">
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
                <stop stopColor="#2563EB"></stop>
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
              <h5 className="text-center font-editorial italic font-semibold text-[22px] leading-[18px] tracking-tight bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
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
            <div className="relative bg-white/90 dark:bg-gray-900/90 p-2.5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] transform rotate-[-8.62deg] border border-gray-200/20 dark:border-gray-800/20 backdrop-blur-lg hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
              <svg
                width="220"
                height="128"
                viewBox="0 0 220 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-lg"
              >
                {/* Background */}
                <rect width="220" height="128" rx="8" fill="#FAFBFC"/>
                
                {/* Header section */}
                <rect width="220" height="28" fill="#F8FAFC"/>
                <rect x="10" y="9" width="36" height="10" rx="5" fill="url(#logoGradient)"/>
                <text x="13" y="17" fill="white" fontSize="8" fontWeight="600">Postify</text>
                
                {/* Profile section */}
                <g transform="translate(10, 40)">
                  <circle cx="18" cy="18" r="18" fill="url(#avatarGradient)"/>
                  <text x="9" y="24" fill="white" fontSize="14" fontWeight="600">J</text>
                </g>
                
                <rect x="54" y="44" width="72" height="5" rx="2.5" fill="#E2E8F0"/>
                <rect x="54" y="53" width="44" height="3" rx="1.5" fill="#E2E8F0" opacity="0.6"/>
                
                {/* Stats with clean styling */}
                <g transform="translate(10, 86)">
                  <rect width="60" height="28" rx="6" fill="#EFF6FF"/>
                  <text x="6" y="13" fill="#3B82F6" fontSize="7" fontWeight="500">Score</text>
                  <text x="6" y="23" fill="#1E40AF" fontSize="10" fontWeight="600">92%</text>
                </g>
                
                <g transform="translate(78, 86)">
                  <rect width="60" height="28" rx="6" fill="#F0FDF4"/>
                  <text x="6" y="13" fill="#10B981" fontSize="7" fontWeight="500">Growth</text>
                  <text x="6" y="23" fill="#059669" fontSize="10" fontWeight="600">+47%</text>
                </g>
                
                <g transform="translate(146, 86)">
                  <rect width="60" height="28" rx="6" fill="#FEF3C7"/>
                  <text x="6" y="13" fill="#F59E0B" fontSize="7" fontWeight="500">Reach</text>
                  <text x="6" y="23" fill="#D97706" fontSize="10" fontWeight="600">12.3K</text>
                </g>
                
                {/* Compose button */}
                <rect x="150" y="44" width="56" height="28" rx="6" fill="url(#composeGradient)"/>
                <text x="166" y="61" fill="white" fontSize="8" fontWeight="500">New Post</text>
                
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6"/>
                    <stop offset="100%" stopColor="#2563EB"/>
                  </linearGradient>
                  <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
                  </linearGradient>
                  <linearGradient id="composeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6"/>
                    <stop offset="100%" stopColor="#2563EB"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Trust badge */}
          <div 
            className={`relative mb-6 flex justify-center transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="mx-auto flex flex-wrap items-center justify-center gap-2 rounded-full border border-gray-200/40 bg-white/60 dark:bg-gray-900/60 px-3.5 py-1.5 text-[13px] backdrop-blur-md shadow-sm">
              <span className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-medium tracking-tight">
                  Trusted by 800+ Users, try for free - no credit card
                </span>
              </span>
            </div>
          </div>

          {/* Main heading - Enhanced typography */}
          <h1 
            className={`mx-auto mb-6 max-w-md lg:max-w-[720px] text-center font-serif font-normal text-4xl md:text-5xl lg:text-6xl text-balance xl:text-[68px] leading-[1.05] text-gray-900 dark:text-white transition-all duration-500 tracking-tight ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Write{" "}
            <span className="font-editorial italic font-extrabold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
              authentic
            </span>{" "}<br />
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="lg:size-[60px] xl:size-[68px] 2xl:size-[76px] inline-block align-middle text-blue-600">
                <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
            -posts in 9 seconds
          </h1>

          {/* Feature pills */}
          <div 
            className={`hidden md:flex mx-auto mt-10 mb-10 w-fit flex-col justify-center items-center gap-2 sm:gap-4 transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="hidden md:flex justify-center items-center px-5 py-2.5 gap-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl shadow-sm rounded-2xl border border-gray-200/20 dark:border-gray-800/20">
              <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium text-[14px] tracking-tight">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-blue-600 to-blue-700"></span>
                </span>
                Sounds like you
              </span>
              <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium text-[14px] tracking-tight">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-blue-600 to-blue-700"></span>
                </span>
                Authentic posts
              </span>
              <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium text-[14px] tracking-tight">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-blue-600 to-blue-700"></span>
                </span>
                Grows your following
              </span>
            </div>
          </div>

          {/* CTA Button - Enhanced styling */}
          <div 
            className={`flex mt-10 md:mt-0 flex-col items-center justify-center transition-all duration-500 ${
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
                  className="flex items-center justify-center h-12 px-8 text-[16px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-medium shadow-[0_4px_14px_rgba(59,130,246,0.2)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.25)] transform hover:-translate-y-0.5 transition-all duration-200 tracking-tight"
                >
                  <div className="flex font-medium flex-row items-center gap-2">
                    Sign in with 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-5">
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
                  className="flex items-center justify-center h-11 px-6 text-[15px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-medium shadow-[0_4px_14px_rgba(59,130,246,0.2)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.25)] transform hover:-translate-y-0.5 transition-all duration-200 tracking-tight"
                >
                  <div className="flex font-medium flex-row items-center gap-2">
                    Sign in with 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-5">
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
            className={`pointer-events-auto mt-14 md:mt-20 relative mx-auto flex w-full items-center justify-center transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="relative mt-14 max-w-screen-lg rounded-xl border border-gray-200/20 shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.06)] transition-all duration-300 group overflow-hidden">
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
                  className="w-full transition-all duration-500 ease-out group-hover:scale-105"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-28 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">
                    <div className="relative flex size-16 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="size-8 text-blue-600 ml-1">
                          <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Bottom gradient fade - adjusted for new background */}
          <div className="pointer-events-none absolute left-1/2 right-1/2 bottom-0 h-[180px] md:h-[350px] w-screen -translate-x-1/2 bg-gradient-to-t from-[#FAFBFF] via-[#FAFBFF]/70 to-transparent"></div>
        </div>

        {/* Testimonials Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-[#FAFBFF] to-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="mb-5">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
              How our users{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                boost their X growth
              </span>
            </h2>
          </div>

          {/* First row - scrolls right to left */}
          <div className="testimonials-container mb-6">
            <div className="flex gap-4 animate-scroll-right-to-left">
              {/* Testimonial cards for first row */}
              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">Postify has really good Tweet Ideas. I don't struggle with new post ideas anymore.</span> The founders did a great job.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Methkal</div>
                    <div className="text-[12px] text-gray-600">Indie Maker</div>
                    <div className="text-[12px] text-blue-600 font-medium">@methkalkhalawi</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">Postify got me back in the flow with tweet ideas that actually match my vibe and timeline, not random generic stuff. Last week went crazy.</span> <span className="font-semibold text-blue-600">Almost +100 followers in 2 days.</span> And the founders are not just shipping a tool, the team's actually there to help. 100% worth trying.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Julia</div>
                    <div className="text-[12px] text-gray-600">Software Engineer & Builder</div>
                    <div className="text-[12px] text-blue-600 font-medium">@clwassy</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">Postify is a game changer.</span> The best feature is the "Topics", they help me get fresh ideas for specific themes. <span className="font-semibold text-gray-900">The post ideas were better than anything I've used before. Better than just using ChatGPT or Claude.</span> The voice it created is spot on.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    G
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Grant Singleton</div>
                    <div className="text-[12px] text-gray-600">Software Engineer & Builder</div>
                    <div className="text-[12px] text-blue-600 font-medium">@_grantsing</div>
                  </div>
                </div>
              </div>

              {/* Duplicate cards for infinite scroll effect */}
              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">Postify has really good Tweet Ideas. I don't struggle with new post ideas anymore.</span> The founders did a great job.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Methkal</div>
                    <div className="text-[12px] text-gray-600">Indie Maker</div>
                    <div className="text-[12px] text-blue-600 font-medium">@methkalkhalawi</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">Postify got me back in the flow with tweet ideas that actually match my vibe and timeline, not random generic stuff. Last week went crazy.</span> <span className="font-semibold text-blue-600">Almost +100 followers in 2 days.</span> And the founders are not just shipping a tool, the team's actually there to help. 100% worth trying.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Julia</div>
                    <div className="text-[12px] text-gray-600">Software Engineer & Builder</div>
                    <div className="text-[12px] text-blue-600 font-medium">@clwassy</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">Postify is a game changer.</span> The best feature is the "Topics", they help me get fresh ideas for specific themes. <span className="font-semibold text-gray-900">The post ideas were better than anything I've used before. Better than just using ChatGPT or Claude.</span> The voice it created is spot on.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    G
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Grant Singleton</div>
                    <div className="text-[12px] text-gray-600">Software Engineer & Builder</div>
                    <div className="text-[12px] text-blue-600 font-medium">@_grantsing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row - scrolls left to right */}
          <div className="testimonials-container">
            <div className="flex gap-4 animate-scroll-left-to-right">
              {/* Testimonial cards for second row */}
              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    The founders of Postify are crushing it. <span className="font-semibold text-gray-900">Been testing Postify for a while now and have started seeing awesome results. Postify helped me to push past the first 1000 followers.</span> Grab ideas from Postify and schedule them out. Now I got more time to work on my own projects and for my family.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    N
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Nemo</div>
                    <div className="text-[12px] text-gray-600">Software Engineer & Indie Builder</div>
                    <div className="text-[12px] text-blue-600 font-medium">@FakeUncleNemo</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">It feels like you created your own digital self to create content for you!!</span> Postify is something where you don't feel the guilt of generating AI content.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    K
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Kavuru Sarath</div>
                    <div className="text-[12px] text-gray-600">Indie Maker</div>
                    <div className="text-[12px] text-blue-600 font-medium">@KavuruSarath</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">I just got like 100 followers in 2000 followers</span> because of Postify advice of the founders.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Adam Bartas</div>
                    <div className="text-[12px] text-gray-600">Designer</div>
                    <div className="text-[12px] text-blue-600 font-medium">@AdamBartas</div>
                  </div>
                </div>
              </div>

              {/* Duplicate cards for infinite scroll effect */}
              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    The founders of Postify are crushing it. <span className="font-semibold text-gray-900">Been testing Postify for a while now and have started seeing awesome results. Postify helped me to push past the first 1000 followers.</span> Grab ideas from Postify and schedule them out. Now I got more time to work on my own projects and for my family.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    N
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Nemo</div>
                    <div className="text-[12px] text-gray-600">Software Engineer & Indie Builder</div>
                    <div className="text-[12px] text-blue-600 font-medium">@FakeUncleNemo</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">It feels like you created your own digital self to create content for you!!</span> Postify is something where you don't feel the guilt of generating AI content.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    K
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Kavuru Sarath</div>
                    <div className="text-[12px] text-gray-600">Indie Maker</div>
                    <div className="text-[12px] text-blue-600 font-medium">@KavuruSarath</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[340px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-3.5">
                  <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                    <span className="font-semibold text-gray-900">I just got like 100 followers in 2000 followers</span> because of Postify advice of the founders.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm shadow">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-[14px]">Adam Bartas</div>
                    <div className="text-[12px] text-gray-600">Designer</div>
                    <div className="text-[12px] text-blue-600 font-medium">@AdamBartas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                  BENEFITS
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                Everything you need to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                  grow on X
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Postify gives you the tools and insights to build your audience authentically
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Voice Training Card */}
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Voice Training</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Our AI learns your unique writing style from your best tweets to create authentic content that sounds like you
                </p>
              </div>

              {/* Analytics Card */}
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Analytics</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Track your growth with detailed insights on engagement, reach, and what content resonates with your audience
                </p>
              </div>

              {/* Scheduling Card */}
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Post at the perfect time when your audience is most active for maximum engagement
                </p>
              </div>

              {/* Thread Builder Card */}
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Thread Builder</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Create engaging threads that tell your story and keep readers hooked from start to finish
                </p>
              </div>

              {/* Content Ideas Card */}
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Endless Ideas</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Never run out of content with AI-powered suggestions tailored to your niche and audience
                </p>
              </div>

              {/* Engagement Tools Card */}
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Boost Engagement</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Write posts that spark conversations and build genuine connections with your followers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Tabs */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                  FEATURES
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                Powerful features to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                  accelerate growth
                </span>
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {featureTabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveFeatureTab(index)}
                  className={`px-6 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 ${
                    index === activeFeatureTab 
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_2px_8px_rgba(59,130,246,0.25)]" 
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Feature Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {featureTabs[activeFeatureTab].title}
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                  {featureTabs[activeFeatureTab].description}
                </p>
                <ul className="space-y-3">
                  {featureTabs[activeFeatureTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-[14px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-700/5 rounded-2xl"></div>
                  <div className="relative">
                    {/* Placeholder for feature visualization */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">{featureTabs[activeFeatureTab].name} Visualization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post Examples Carousel */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                  EXAMPLES
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                Posts that{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                  drive engagement
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how Postify helps creators write authentic content that resonates
              </p>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll-right-to-left-slow">
              {/* Example Post Cards */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="flex-shrink-0 w-[320px]">
                  <div className="relative bg-black rounded-[2.5rem] p-6 shadow-2xl">
                    {/* Phone Frame */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
                    
                    {/* Post Content */}
                    <div className="bg-gray-950 rounded-[2rem] p-4 mt-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                        <div>
                          <div className="text-white font-semibold text-sm">Creator Name</div>
                          <div className="text-gray-400 text-xs">@handle</div>
                        </div>
                      </div>
                      <p className="text-white text-sm leading-relaxed mb-4">
                        Just shipped a new feature that our users have been asking for! 🚀
                        <br/><br/>
                        It took 3 weeks of late nights, but seeing the positive feedback makes it all worth it.
                        <br/><br/>
                        Building in public is the way. Who else is shipping this week?
                      </p>
                      <div className="flex items-center gap-6 text-gray-400 text-xs">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          1.2K
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          89
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          234
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 w-[320px]">
                  <div className="relative bg-black rounded-[2.5rem] p-6 shadow-2xl">
                    {/* Phone Frame */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
                    
                    {/* Post Content */}
                    <div className="bg-gray-950 rounded-[2rem] p-4 mt-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                        <div>
                          <div className="text-white font-semibold text-sm">Creator Name</div>
                          <div className="text-gray-400 text-xs">@handle</div>
                        </div>
                      </div>
                      <p className="text-white text-sm leading-relaxed mb-4">
                        Just shipped a new feature that our users have been asking for! 🚀
                        <br/><br/>
                        It took 3 weeks of late nights, but seeing the positive feedback makes it all worth it.
                        <br/><br/>
                        Building in public is the way. Who else is shipping this week?
                      </p>
                      <div className="flex items-center gap-6 text-gray-400 text-xs">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          1.2K
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          89
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          234
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.84,11.32L139.31,128Z"></path>
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

        {/* Pricing Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white" id="pricing">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                  PRICING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                Simple pricing that{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                  scales with you
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Start free and upgrade as you grow. No hidden fees.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`font-medium transition-colors duration-200 ${!isYearlyBilling ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
                <button 
                  onClick={() => setIsYearlyBilling(!isYearlyBilling)}
                  className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors duration-200 hover:bg-gray-300"
                >
                  <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${isYearlyBilling ? 'translate-x-7' : 'left-1'}`}></span>
                </button>
                <span className={`font-medium transition-colors duration-200 ${isYearlyBilling ? 'text-gray-900' : 'text-gray-500'}`}>
                  Yearly
                  <span className="ml-2 inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    Save 20%
                  </span>
                </span>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                  <p className="text-gray-600 text-[14px]">Perfect for getting started</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-600 text-[14px]">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "10 AI-generated posts per month",
                    "Basic voice training",
                    "X/Twitter integration",
                    "Basic analytics"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-[14px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-medium text-[14px] hover:bg-gray-200 transition-all duration-200">
                  Get Started
                </button>
              </div>

              {/* Pro Plan - Highlighted */}
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-[0_8px_32px_rgba(59,130,246,0.25)] transform scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  MOST POPULAR
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
                  <p className="text-blue-100 text-[14px]">For serious creators</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{isYearlyBilling ? '$23' : '$29'}</span>
                  <span className="text-blue-100 text-[14px]">/month</span>
                  {isYearlyBilling && <span className="text-blue-100 text-[12px] block">billed annually</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited AI-generated posts",
                    "Advanced voice training",
                    "All social platforms",
                    "Advanced analytics & insights",
                    "Priority support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white text-[14px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-xl bg-white text-blue-600 font-medium text-[14px] hover:bg-gray-50 transition-all duration-200 shadow-lg">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-600 text-[14px]">For teams and agencies</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Pro",
                    "Multiple team members",
                    "Custom AI training",
                    "API access",
                    "Dedicated account manager"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-[14px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-medium text-[14px] hover:bg-gray-200 transition-all duration-200">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 px-4 overflow-hidden" id="faq">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                Frequently asked{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                  questions
                </span>
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {[
                {
                  question: "How does Postify learn my writing style?",
                  answer: "Postify analyzes your best-performing tweets to understand your unique voice, tone, and writing patterns. The AI learns from your vocabulary choices, sentence structure, and the topics you typically discuss. The more you use Postify, the better it becomes at mimicking your authentic style."
                },
                {
                  question: "Can I use Postify for platforms other than X/Twitter?",
                  answer: "Yes! While Postify is optimized for X/Twitter, our Pro and Enterprise plans support multiple social media platforms including LinkedIn, Threads, and Bluesky. The AI adapts your content to fit each platform's unique style and character limits."
                },
                {
                  question: "Is my data safe and private?",
                  answer: "Absolutely. We take data privacy seriously. Your content and personal information are encrypted and stored securely. We never share your data with third parties, and you maintain full ownership of all content created with Postify."
                },
                {
                  question: "How many posts can I generate per month?",
                  answer: "Our free Starter plan includes 10 AI-generated posts per month. The Pro plan offers unlimited post generation, along with advanced features like thread creation and detailed analytics. Enterprise plans can be customized to your team's needs."
                },
                {
                  question: "Can I edit the AI-generated posts?",
                  answer: "Of course! Every post generated by Postify is fully editable. We encourage you to review and tweak the content to ensure it perfectly matches your voice. The AI provides a strong foundation that you can customize as needed."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-sm"
                >
                  <button 
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 group"
                    onClick={() => setActiveFAQ(activeFAQ === index ? -1 : index)}
                  >
                    <h3 className="text-[16px] font-semibold text-gray-900">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${activeFAQ === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="px-6 pb-4 text-gray-600 text-[14px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
              {/* Animated background particles */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-white mb-6 tracking-tight">
                  Ready to grow your{" "}
                  <span className="font-semibold">X audience?</span>
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                  Join 800+ creators who are building their personal brand with authentic, AI-powered content.
                </p>
                <button className="px-8 py-4 bg-white text-blue-600 font-medium text-[16px] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transform hover:-translate-y-0.5 transition-all duration-200">
                  Start Writing for Free
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {/* Logo and Description */}
              <div className="col-span-2 lg:col-span-2">
                <PostelLogo className="h-10 mb-4" />
                <p className="text-gray-600 text-[14px] leading-relaxed max-w-xs">
                  AI-powered tool to create authentic X/Twitter posts that sound like you. Grow your audience authentically.
                </p>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-[14px]">Product</h4>
                <ul className="space-y-2">
                  {["Features", "Pricing", "FAQ", "Blog"].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 text-[14px] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-[14px]">Company</h4>
                <ul className="space-y-2">
                  {["About", "Contact", "Privacy", "Terms"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-600 hover:text-blue-600 text-[14px] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-[14px]">Connect</h4>
                <div className="flex gap-4">
                  <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                    </svg>
                  </a>
                  <a href="https://discord.gg/vXUvyuPfBH" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <DiscordIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-[13px]">
                © {new Date().getFullYear()} Postify. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
