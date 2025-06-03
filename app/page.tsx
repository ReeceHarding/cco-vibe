"use client"

import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { XIcon, PlayIcon, ChevronDown, Check, X, WandSparkles, Mic, Youtube, BrainCircuit, UserRoundPen, AudioLines, Rocket } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [activeFeatureTab, setActiveFeatureTab] = useState("youtube")
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly")
  const [openFaqItem, setOpenFaqItem] = useState<string | null>(null)

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
    window.open("https://twitter.com/i/flow/login", "_blank")
  }

  // Features data with proper icons
  const features = [
    {
      id: "ideas",
      title: "Create Post Ideas",
      description: "Create post ideas that are authentic to your brand and writing style. Based on the best performing formats on X.",
      icon: WandSparkles,
      video: "/images/feature_videos/post-ideas-lq.mp4"
    },
    {
      id: "voice",
      title: "Voice to Post",
      description: "Speak your thoughts or write them down and Postel will turn your ideas into 6 optimized posts ready to share on X.",
      icon: Mic,
      video: "/images/feature_videos/speech-to-post-lq.mp4"
    },
    {
      id: "youtube",
      title: "Youtube Video to Posts",
      description: "Paste any YouTube link and Postel will turn it into 6 optimized posts that match your voice and be authentic to you.",
      icon: Youtube,
      video: "/images/feature_videos/youtube-to-post-lq.mp4"
    },
    {
      id: "knowledge",
      title: "Build your Knowledge Base",
      description: "Create and store any information in your knowledge base and turn it into valuable content that will grow your audience.",
      icon: BrainCircuit,
      video: "/images/feature_videos/knowledge-base-lq.mp4"
    }
  ]

  // FAQ data
  const faqItems = [
    {
      id: "what-is-postify",
      question: "What is Postify and how can it help me grow my brand?",
      answer: "Postify is an AI-powered content creation tool that helps you write authentic X/Twitter posts in seconds. It learns your writing style and creates posts that sound exactly like you, helping you maintain consistency and grow your audience without spending hours on content creation."
    },
    {
      id: "better-than-chatgpt",
      question: "How is Postify better than ChatGPT or other tools for this?",
      answer: "Unlike generic AI tools, Postify is specifically trained on the best-performing content formats on X/Twitter. It analyzes your past posts to match your unique voice and style, ensuring every post sounds authentic. Plus, it offers features like voice-to-post, YouTube-to-post conversion, and a personal knowledge base."
    },
    {
      id: "free-trial",
      question: "What can try in the free trial?",
      answer: "Our free trial gives you full access to all features for 7 days. You can create unlimited posts, use voice-to-post, convert YouTube videos, build your knowledge base, and see how Postify can transform your content creation workflow. No credit card required."
    },
    {
      id: "who-for",
      question: "Who is this for?",
      answer: "Postify is perfect for creators, founders, marketers, and professionals who want to build their personal brand on X/Twitter but struggle with consistency or finding time to create content. Whether you're growing from 0 or scaling past 10K followers, Postify helps you create authentic content efficiently."
    },
    {
      id: "another-question",
      question: "I have another question",
      answer: "We're here to help! You can reach out to us at support@postify.app or join our Discord community where our team and other users are happy to answer questions and share tips for growing on X/Twitter."
    }
  ]

  // Pricing plans
  const pricingPlans = [
    {
      name: "Creator",
      description: "Perfect for solo creators",
      monthlyPrice: 29,
      yearlyPrice: 14.5,
      features: [
        "1 user seat",
        "600 personalized post ideas",
        "Personal Knowledge Base",
        "Personal Post Library",
        "Post Rephraser & Formatter",
        "Tone of Voice Analysis",
        "Creator Learning Center"
      ]
    },
    {
      name: "Team",
      description: "Perfect for small teams",
      monthlyPrice: 49,
      yearlyPrice: 24.5,
      recommended: true,
      features: [
        "3 user seats",
        "1200 personalized post ideas",
        "Personal Knowledge Base",
        "Personal Post Library",
        "Post Rephraser & Formatter",
        "Tone of Voice Analysis",
        "Creator Learning Center"
      ]
    },
    {
      name: "Agency",
      description: "For professional agencies",
      monthlyPrice: 99,
      yearlyPrice: 49.5,
      features: [
        "5 user seats",
        "Unlimited personalized post ideas",
        "Personal Knowledge Base",
        "Personal Post Library",
        "Post Rephraser & Formatter",
        "Tone of Voice Analysis",
        "Creator Learning Center"
      ]
    }
  ]

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen overflow-hidden">
        {/* Hero Section - Already implemented */}
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
        <section className="pt-12 lg:py-24" id="testimonials">
          <div className="text-center">
            <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">Testimonials</h2>
            <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
              How our users{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">boost their X growth</span>
            </h3>
          </div>
          
          <div className="relative mt-8 flex h-fit w-full flex-col items-center justify-center overflow-hidden">
            {/* Desktop: Two scrolling rows */}
            <div className="group overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row hidden [--duration:80s] md:flex">
              {/* First row - scrolls left to right */}
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {/* First set of testimonials */}
                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">If you want to understand what makes a good tweet, this is the tool. Great for generating new and original content.</span> The team at Postel studied what goes viral and made it their Sunday chore.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/CalebSmithXM" alt="Caleb Smith's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Caleb Smith</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Coach & Indie Founder</p>
                        <a href="https://x.com/CalebSmithXM" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@CalebSmithXM</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel gives you ideas for bangers using your own content or any YT video (can be yours or not).</span> It's the shortcut. Repurposing just one banger can save you time and a headache every day.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/zalkazemi" alt="Zaid Al Kazemi's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Zaid Al Kazemi</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300"><a href="https://www.zalkazemi.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Founder & Podcast Host</a></p>
                        <a href="https://x.com/zalkazemi" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@zalkazemi</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel has really good Tweet Ideas. I don't struggle with new post ideas anymore.</span> The founders did a great job.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/methkalkhalawi" alt="Methkal's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Methkal</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Indie Maker</p>
                        <a href="https://x.com/methkalkhalawi" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@methkalkhalawi</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel got me back in the flow with tweet ideas that actually match my vibe and timeline, not random generic stuff. Last week went crazy. Almost +100 followers in 2 days.</span> And the founders are not just shipping a tool, the team's actually there to help. 100% worth trying.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/clivassy" alt="Julia's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Julia</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Software Engineer & Builder</p>
                        <a href="https://x.com/clivassy" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@clivassy</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p>Postel is a game changer. The best feature is the "Topics", they help me get fresh ideas for specific themes. <span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">The post ideas were better than anything I've used before. Better than just using ChatGPT or Claude. The voice it created is spot on.</span></p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/_grantsing" alt="Grant Singleton's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Grant Singleton</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Software Engineer & Builder</p>
                        <a href="https://x.com/_grantsing" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@_grantsing</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {/* Repeat all testimonials for seamless scrolling */}
                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">If you want to understand what makes a good tweet, this is the tool. Great for generating new and original content.</span> The team at Postel studied what goes viral and made it their Sunday chore.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/CalebSmithXM" alt="Caleb Smith's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Caleb Smith</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Coach & Indie Founder</p>
                        <a href="https://x.com/CalebSmithXM" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@CalebSmithXM</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel gives you ideas for bangers using your own content or any YT video (can be yours or not).</span> It's the shortcut. Repurposing just one banger can save you time and a headache every day.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/zalkazemi" alt="Zaid Al Kazemi's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Zaid Al Kazemi</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300"><a href="https://www.zalkazemi.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Founder & Podcast Host</a></p>
                        <a href="https://x.com/zalkazemi" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@zalkazemi</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel has really good Tweet Ideas. I don't struggle with new post ideas anymore.</span> The founders did a great job.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/methkalkhalawi" alt="Methkal's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Methkal</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Indie Maker</p>
                        <a href="https://x.com/methkalkhalawi" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@methkalkhalawi</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel got me back in the flow with tweet ideas that actually match my vibe and timeline, not random generic stuff. Last week went crazy. Almost +100 followers in 2 days.</span> And the founders are not just shipping a tool, the team's actually there to help. 100% worth trying.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/clivassy" alt="Julia's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Julia</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Software Engineer & Builder</p>
                        <a href="https://x.com/clivassy" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@clivassy</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p>Postel is a game changer. The best feature is the "Topics", they help me get fresh ideas for specific themes. <span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">The post ideas were better than anything I've used before. Better than just using ChatGPT or Claude. The voice it created is spot on.</span></p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/_grantsing" alt="Grant Singleton's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Grant Singleton</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Software Engineer & Builder</p>
                        <a href="https://x.com/_grantsing" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@_grantsing</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second row - scrolls right (reverse direction) */}
            <div className="group overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row hidden [--duration:100s] md:flex">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                {/* Second row testimonials */}
                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p>Postel makes social media posting easy and quick. <br /><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">I can create posts that fit my brand in seconds, and the suggestions help me stay consistent.</span> It's been a great help in keeping my content fresh without spending too much time.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/notomarsol" alt="Omar's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Omar</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Founder</p>
                        <a href="https://x.com/notomarsol" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@notomarsol</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p>The founders of Postel are crushing it.<span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Been testing Postel for a while now and have started seeing awesome results. Postel helped me to push past the first 1000 followers.</span> Grab Ideas from Postel and schedule them out. Now I got more time to work on my own projects and for my family.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/FakeUncleNemo" alt="Nemo's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Nemo</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300"><a href="https://nemo.foo" target="_blank" rel="noopener noreferrer" className="hover:underline">Software Engineer & Indie Builder</a></p>
                        <a href="https://x.com/FakeUncleNemo" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@FakeUncleNemo</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">It feels like you created your own digital self to create content for you!!</span> Postel is something where you don't feel the guilt of generating AI content.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/KavuruSarath" alt="Kavuru Sarath's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Kavuru Sarath</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Indie Maker</p>
                        <a href="https://x.com/KavuruSarath" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@KavuruSarath</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">I just got like 100 followers in two days.</span> Reached 2000 followers because of Postel's hooks and advice of the founders.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/AdamBartas" alt="Adam Bartas's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Adam Bartas</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Designer</p>
                        <a href="https://x.com/AdamBartas" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@AdamBartas</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p>I don't even know what to post about or get fresh ideas to start to post on X.<span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel has been a great help for me and the guidance from Joshua and Robin. My profile looks better and it's getting traction!</span></p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/cardotrejos" alt="Ricardo Trejos's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Ricardo Trejos</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Software Developer</p>
                        <a href="https://x.com/cardotrejos" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@cardotrejos</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]">
                {/* Repeat all second row testimonials for seamless scrolling */}
                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p>Postel makes social media posting easy and quick. <br /><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">I can create posts that fit my brand in seconds, and the suggestions help me stay consistent.</span> It's been a great help in keeping my content fresh without spending too much time.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/notomarsol" alt="Omar's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Omar</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Founder</p>
                        <a href="https://x.com/notomarsol" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@notomarsol</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p>The founders of Postel are crushing it.<span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Been testing Postel for a while now and have started seeing awesome results. Postel helped me to push past the first 1000 followers.</span> Grab Ideas from Postel and schedule them out. Now I got more time to work on my own projects and for my family.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/FakeUncleNemo" alt="Nemo's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Nemo</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300"><a href="https://nemo.foo" target="_blank" rel="noopener noreferrer" className="hover:underline">Software Engineer & Indie Builder</a></p>
                        <a href="https://x.com/FakeUncleNemo" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@FakeUncleNemo</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">It feels like you created your own digital self to create content for you!!</span> Postel is something where you don't feel the guilt of generating AI content.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/KavuruSarath" alt="Kavuru Sarath's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Kavuru Sarath</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Indie Maker</p>
                        <a href="https://x.com/KavuruSarath" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@KavuruSarath</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">I just got like 100 followers in two days.</span> Reached 2000 followers because of Postel's hooks and advice of the founders.</p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/AdamBartas" alt="Adam Bartas's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Adam Bartas</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Designer</p>
                        <a href="https://x.com/AdamBartas" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@AdamBartas</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card text-card-foreground shadow-sm mb-2 flex w-[450px] cursor-pointer break-inside-avoid flex-col items-center rounded-xl p-6 border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg h-[280px]">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                      <p>I don't even know what to post about or get fresh ideas to start to post on X.<span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel has been a great help for me and the guidance from Joshua and Robin. My profile looks better and it's getting traction!</span></p>
                    </div>
                    <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                        <div className="h-full w-full rounded-full overflow-hidden">
                          <img src="https://unavatar.io/twitter/cardotrejos" alt="Ricardo Trejos's profile" className="h-full w-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-500 dark:text-neutral-200">Ricardo Trejos</p>
                        <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Software Developer</p>
                        <a href="https://x.com/cardotrejos" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@cardotrejos</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Horizontal scroll with snap */}
            <div className="flex w-full snap-x snap-mandatory flex-row gap-6 overflow-x-auto py-14 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="size-72 shrink-0 md:h-60 md:min-w-96"></div>
              
              {/* Mobile testimonials */}
              <div className="bg-card text-card-foreground mb-2 break-inside-avoid items-center border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg flex w-72 h-[380px] shrink-0 cursor-pointer snap-center snap-always flex-col justify-between rounded-xl p-4 shadow-black/[0.1] shadow-xl lg:min-w-96">
                <div className="flex flex-col justify-between w-full h-full">
                  <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                    <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">If you want to understand what makes a good tweet, this is the tool. Great for generating new and original content.</span> The team at Postel studied what goes viral and made it their Sunday chore.</p>
                  </div>
                  <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                      <div className="h-full w-full rounded-full overflow-hidden">
                        <img src="https://unavatar.io/twitter/CalebSmithXM" alt="Caleb Smith's profile" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-500 dark:text-neutral-200">Caleb Smith</p>
                      <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Coach & Indie Founder</p>
                      <a href="https://x.com/CalebSmithXM" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@CalebSmithXM</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card text-card-foreground mb-2 break-inside-avoid items-center border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg flex w-72 h-[380px] shrink-0 cursor-pointer snap-center snap-always flex-col justify-between rounded-xl p-4 shadow-black/[0.1] shadow-xl lg:min-w-96">
                <div className="flex flex-col justify-between w-full h-full">
                  <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                    <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel gives you ideas for bangers using your own content or any YT video (can be yours or not).</span> It's the shortcut. Repurposing just one banger can save you time and a headache every day.</p>
                  </div>
                  <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                      <div className="h-full w-full rounded-full overflow-hidden">
                        <img src="https://unavatar.io/twitter/zalkazemi" alt="Zaid Al Kazemi's profile" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-500 dark:text-neutral-200">Zaid Al Kazemi</p>
                      <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300"><a href="https://www.zalkazemi.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Founder & Podcast Host</a></p>
                      <a href="https://x.com/zalkazemi" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@zalkazemi</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card text-card-foreground mb-2 break-inside-avoid items-center border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg flex w-72 h-[380px] shrink-0 cursor-pointer snap-center snap-always flex-col justify-between rounded-xl p-4 shadow-black/[0.1] shadow-xl lg:min-w-96">
                <div className="flex flex-col justify-between w-full h-full">
                  <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                    <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel has really good Tweet Ideas. I don't struggle with new post ideas anymore.</span> The founders did a great job.</p>
                  </div>
                  <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                      <div className="h-full w-full rounded-full overflow-hidden">
                        <img src="https://unavatar.io/twitter/methkalkhalawi" alt="Methkal's profile" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-500 dark:text-neutral-200">Methkal</p>
                      <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Indie Maker</p>
                      <a href="https://x.com/methkalkhalawi" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@methkalkhalawi</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card text-card-foreground mb-2 break-inside-avoid items-center border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg flex w-72 h-[380px] shrink-0 cursor-pointer snap-center snap-always flex-col justify-between rounded-xl p-4 shadow-black/[0.1] shadow-xl lg:min-w-96">
                <div className="flex flex-col justify-between w-full h-full">
                  <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                    <p><span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">Postel got me back in the flow with tweet ideas that actually match my vibe and timeline, not random generic stuff. Last week went crazy. Almost +100 followers in 2 days.</span> And the founders are not just shipping a tool, the team's actually there to help. 100% worth trying.</p>
                  </div>
                  <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                      <div className="h-full w-full rounded-full overflow-hidden">
                        <img src="https://unavatar.io/twitter/clivassy" alt="Julia's profile" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-500 dark:text-neutral-200">Julia</p>
                      <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Software Engineer & Builder</p>
                      <a href="https://x.com/clivassy" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@clivassy</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card text-card-foreground mb-2 break-inside-avoid items-center border border-primary/60 dark:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-lg flex w-72 h-[380px] shrink-0 cursor-pointer snap-center snap-always flex-col justify-between rounded-xl p-4 shadow-black/[0.1] shadow-xl lg:min-w-96">
                <div className="flex flex-col justify-between w-full h-full">
                  <div className="select-none font-normal text-neutral-700 text-base dark:text-neutral-200">
                    <p>Postel is a game changer. The best feature is the "Topics", they help me get fresh ideas for specific themes. <span className="bg-primary/30 p-1 py-0.5 font-semibold text-neutral-900 dark:text-neutral-200">The post ideas were better than anything I've used before. Better than just using ChatGPT or Claude. The voice it created is spot on.</span></p>
                  </div>
                  <div className="flex w-full select-none items-center gap-4 pt-6 mt-auto">
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full border-[3px] border-purple-200"></div>
                      <div className="h-full w-full rounded-full overflow-hidden">
                        <img src="https://unavatar.io/twitter/_grantsing" alt="Grant Singleton's profile" className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-500 dark:text-neutral-200">Grant Singleton</p>
                      <p className="font-normal text-neutral-400 text-xs dark:text-neutral-300">Software Engineer & Builder</p>
                      <a href="https://x.com/_grantsing" target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline text-xs inline-flex items-center gap-1">@_grantsing</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="size-72 shrink-0 md:h-60 md:min-w-96"></div>
            </div>

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background/50 md:w-1/5"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background/50 md:w-1/5"></div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container max-w-7xl">
            <div className="text-center mx-auto mb-20">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">Benefits</h2>
              <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
                Grow with authentic content the{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">algorithm loves</span>
              </h3>
            </div>

            {/* Benefits grid with custom layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* No generic AI content - 4 columns */}
              <div className="md:col-span-4 rounded-xl bg-muted/80 p-8 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 w-32 h-32 relative">
                    <div className="absolute inset-0 rounded-full blur-lg bg-purple-500/40 transform scale-110 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute inset-0 rounded-full blur-md bg-purple-400/50 transform scale-100 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute inset-0 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center overflow-hidden transition-all duration-300">
                      <div className="w-24 h-24 rounded-full bg-white/80 flex items-center justify-center relative z-10">
                        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="url(#paint0_linear)" strokeWidth="1.5"></path>
                          <path d="M19.9671 20C19.9671 16.6863 16.4183 14 12.0001 14C7.58187 14 4.03308 16.6863 4.03308 20" stroke="url(#paint1_linear)" strokeWidth="1.5"></path>
                          <defs>
                            <linearGradient id="paint0_linear" x1="8" y1="4" x2="16" y2="12" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#A855F7"></stop>
                              <stop offset="1" stopColor="#EC4899"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="4" y1="14" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#A855F7"></stop>
                              <stop offset="1" stopColor="#EC4899"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">No generic AI content</h3>
                  <p className="text-muted-foreground">Imagine working with an experienced Content Creator that knows you inside out and will guide you to your next perfect post.</p>
                </div>
              </div>

              {/* Turn your thoughts into posts - 5 columns */}
              <div className="md:col-span-5 rounded-xl bg-muted/80 p-8 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group/card">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Turn your thoughts into<br />6 perfect ready-to-publish posts</h3>
                  <p className="text-muted-foreground mb-6">Tell Postel what's on your mind or write down your thoughts. Postel unites them with your background and expertise to craft personalized content that sounds exactly like you.</p>
                  
                  {/* Audio player visualization */}
                  <div className="mt-auto mx-auto w-full max-w-xl pt-6 relative">
                    <div className="absolute -inset-1 rounded-full opacity-15 blur-md bg-purple-600/30"></div>
                    <div className="relative flex h-16 flex-row items-center justify-between rounded-full bg-white px-4 py-3 shadow-lg border border-purple-400/30 transition-all duration-300 overflow-hidden">
                      {/* Play button */}
                      <div className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center bg-transparent z-10 transition-all duration-300 hover:bg-purple-50 cursor-pointer">
                        <div className="relative w-6 h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-500 ml-0.5 transition-opacity duration-300 absolute opacity-100" aria-label="Play">
                            <title>Play audio</title>
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd"></path>
                          </svg>
                          <div className="w-4 h-4 rounded-sm bg-purple-500 transition-opacity duration-300 absolute opacity-0" aria-label="Stop"></div>
                        </div>
                      </div>
                      
                      {/* Waveform visualization */}
                      <div className="absolute inset-0 flex items-center justify-center -mt-9">
                        <div className="w-[60%] mx-auto">
                          <div className="flex h-12 items-end space-x-[2px] w-full px-2">
                            {/* Generate random heights for waveform bars */}
                            {[9,5,6,7,4,9,8,7,6,7,5,5,4,5,7,4,4,7,7,5,7,5,4,6,6,9,4,6,7,6,5,7,9,7,8,8,4,6,5,7,8,9,4,7,5,9,5,9,5,9,8,4,7,9,9,5,9,6,4,5].map((height, i) => (
                              <div 
                                key={i} 
                                className="w-[2px] rounded-full transition-all duration-150 bg-gray-400/70 group-hover/card:bg-purple-400 group-hover/card:animate-pulse" 
                                style={{
                                  height: `${height}px`,
                                  animationDelay: `${i * 50}ms`
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Time display */}
                      <div className="font-medium text-purple-500 text-lg shrink-0 z-10">00:00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personalized post ideas - 3 columns */}
              <div className="md:col-span-3 rounded-xl bg-muted/80 p-8 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-foreground text-center">Personalized post ideas in 9 seconds</h3>
                  <p className="text-muted-foreground text-center mb-6">Create 6 post ideas with one click with proven hooks and formats.</p>
                  
                  {/* Example posts */}
                  <div className="mt-auto flex flex-col gap-3 relative">
                    <div className="transition-all duration-300 opacity-100">
                      <div className="rounded-md bg-primary/10 px-3 py-2 border border-primary/20 mb-3">
                        <p className="text-sm text-foreground">built my first site out of pure frustration with my job</p>
                      </div>
                      <div className="rounded-md bg-primary/10 px-3 py-2 border border-primary/20 mb-3">
                        <p className="text-sm text-foreground">most people overthink their first post</p>
                      </div>
                    </div>
                    
                    {/* Hidden alternate posts for hover effect */}
                    <div className="transition-all duration-300 opacity-0 absolute inset-0">
                      <div className="rounded-md bg-primary/10 px-3 py-2 border border-primary/20 mb-3 transform transition-all duration-300" style={{ transitionDelay: "0ms", transform: "translateY(10px) scale(0.95)", opacity: 0 }}>
                        <p className="text-sm text-foreground">how i landed 10+ clients with basically zero audience:</p>
                      </div>
                      <div className="rounded-md bg-primary/10 px-3 py-2 border border-primary/20 mb-3 transform transition-all duration-300" style={{ transitionDelay: "100ms", transform: "translateY(10px) scale(0.95)", opacity: 0 }}>
                        <p className="text-sm text-foreground">nobody cares if you mess up. literally no one</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grow faster with proven post formats - 6 columns */}
              <div className="md:col-span-6 rounded-xl bg-muted/80 p-8 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Grow faster with proven post formats</h3>
                  <p className="text-muted-foreground mb-8">Anything you create with will be optimized for X by using our proven post formats which we derived from the best performing content on X.</p>
                  
                  {/* Follower count */}
                  <div className="flex flex-col mb-2">
                    <div className="flex flex-row text-xl font-medium">
                      <p>+</p>
                      <p>97</p>
                    </div>
                    <p className="text-muted-foreground text-sm">Followers</p>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-32 w-full sm:h-40 mt-2 relative">
                    <svg className="h-full w-full" viewBox="0 0 596 256" preserveAspectRatio="none">
                      <title>Performance Chart</title>
                      <desc>Follower growth chart showing upward trend</desc>
                      
                      {/* Grid lines */}
                      <g className="recharts-cartesian-grid">
                        <g className="recharts-cartesian-grid-horizontal">
                          <line className="stroke-divider stroke-1" stroke="#e5e7eb" fill="none" x1="0" y1="49" x2="596" y2="49"></line>
                          <line className="stroke-divider stroke-1" stroke="#e5e7eb" fill="none" x1="0" y1="100.75" x2="596" y2="100.75"></line>
                          <line className="stroke-divider stroke-1" stroke="#e5e7eb" fill="none" x1="0" y1="152.5" x2="596" y2="152.5"></line>
                          <line className="stroke-divider stroke-1" stroke="#e5e7eb" fill="none" x1="0" y1="204.25" x2="596" y2="204.25"></line>
                          <line className="stroke-divider stroke-1" stroke="#e5e7eb" fill="none" x1="0" y1="256" x2="596" y2="256"></line>
                        </g>
                      </g>
                      
                      {/* Gradients */}
                      <defs>
                        <linearGradient id="indigo" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity="0.4"></stop>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="cyan" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#a855f7" stopOpacity="0.4"></stop>
                          <stop offset="95%" stopColor="#a855f7" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      
                      {/* Area charts */}
                      <g className="recharts-layer recharts-area stroke-indigo-500">
                        <g className="recharts-layer">
                          <path className="recharts-curve recharts-area-area" fill="url(#indigo)" stroke="none" fillOpacity="0.6" d="M0,173.2C39.733,173.2,79.467,173.2,119.2,173.2C158.933,173.2,198.667,167.738,238.4,159.4C278.133,151.063,317.867,126.625,357.6,123.175C397.333,119.725,437.067,121.45,476.8,118C516.533,114.55,556.267,81.775,596,49L596,256C556.267,256,516.533,256,476.8,256C437.067,256,397.333,256,357.6,256C317.867,256,278.133,256,238.4,256C198.667,256,158.933,256,119.2,256C79.467,256,39.733,256,0,256Z"></path>
                          <path className="recharts-curve recharts-area-curve" stroke="#8b5cf6" fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" d="M0,173.2C39.733,173.2,79.467,173.2,119.2,173.2C158.933,173.2,198.667,167.738,238.4,159.4C278.133,151.063,317.867,126.625,357.6,123.175C397.333,119.725,437.067,121.45,476.8,118C516.533,114.55,556.267,81.775,596,49"></path>
                        </g>
                      </g>
                      <g className="recharts-layer recharts-area stroke-purple-500">
                        <g className="recharts-layer">
                          <path className="recharts-curve recharts-area-area" fill="url(#cyan)" stroke="none" fillOpacity="0.6" d="M0,166.3C39.733,166.3,79.467,166.3,119.2,166.3C158.933,166.3,198.667,158.825,238.4,155.95C278.133,153.075,317.867,153.075,357.6,149.05C397.333,145.025,437.067,142.725,476.8,131.8C516.533,120.875,556.267,102.188,596,83.5L596,256C556.267,256,516.533,256,476.8,256C437.067,256,397.333,256,357.6,256C317.867,256,278.133,256,238.4,256C198.667,256,158.933,256,119.2,256C79.467,256,39.733,256,0,256Z"></path>
                          <path className="recharts-curve recharts-area-curve" stroke="#a855f7" fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" d="M0,166.3C39.733,166.3,79.467,166.3,119.2,166.3C158.933,166.3,198.667,158.825,238.4,155.95C278.133,153.075,317.867,153.075,357.6,149.05C397.333,145.025,437.067,142.725,476.8,131.8C516.533,120.875,556.267,102.188,596,83.5"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Don't waste time - 6 columns */}
              <div className="md:col-span-6 rounded-xl bg-muted/80 p-8 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Don't waste time coming up with your next post idea</h3>
                  <p className="text-muted-foreground mb-6">Never be inconsistent with your content again. Turn youtube videos or any information in your knowledge base into content that is authentic to you with one click.</p>
                  
                  {/* YouTube video thumbnails */}
                  <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl overflow-hidden relative group/thumb transition-all duration-300 hover:scale-105">
                      <div className="absolute bottom-3 left-3 z-10">
                        <p className="text-xs bg-black/60 text-white px-2 py-1 rounded">Works with long podcasts and normal videos</p>
                      </div>
                      <div className="relative aspect-video w-full overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:opacity-0">
                        <img src="/images/thumbnail_1.jpg" alt="Postel usage guide" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <img src="/images/thumbnail_3.jpg" alt="Postel usage results" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    <div className="rounded-xl overflow-hidden relative group/thumb transition-all duration-300 hover:scale-105">
                      <div className="absolute bottom-3 left-3 z-10">
                        <p className="text-xs bg-black/60 text-white px-2 py-1 rounded">Transform your favourite YouTube videos into content</p>
                      </div>
                      <div className="relative aspect-video w-full overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:opacity-0">
                        <img src="/images/thumbnail_2.jpg" alt="Team using Postel" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <img src="/images/thumbnail_4.jpg" alt="Team results with Postel" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 bg-background">
          <div className="container max-w-7xl">
            <div className="text-center mx-auto mb-20">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">Features</h2>
              <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Supercharge</span>{" "}
                your content creation
              </h3>
            </div>

            {/* Desktop feature tabs */}
            <div className="hidden md:flex flex-wrap justify-center gap-8 mb-24">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => {
                    setActiveFeatureTab(feature.id)
                    console.log(`Feature tab clicked: ${feature.title}`)
                  }}
                  className={`flex flex-1 flex-col items-center transition-colors pb-6 border-b-2 ${
                    activeFeatureTab === feature.id
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <div className={`flex items-center justify-center w-20 h-20 mb-4 rounded-full transition-colors ${
                    activeFeatureTab === feature.id
                      ? "bg-primary/10"
                      : "bg-muted"
                  }`}>
                    <feature.icon className={`h-10 w-10 transition-colors ${
                      activeFeatureTab === feature.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`} />
                  </div>
                  <div className="text-center">
                    <p className={`font-semibold text-lg ${
                      activeFeatureTab === feature.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}>
                      {feature.title}
                    </p>
                    <p className="text-sm text-muted-foreground text-balance mt-2 mx-auto">
                      {feature.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Desktop video display */}
            <div className="hidden md:block relative rounded-xl overflow-hidden border shadow-lg aspect-video max-w-5xl mx-auto">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`w-full h-full absolute inset-0 transition-opacity duration-300 ${
                    activeFeatureTab === feature.id
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <video
                    className="w-full h-full object-cover"
                    src={feature.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              ))}
            </div>

            {/* Mobile feature layout */}
            <div className="md:hidden space-y-16">
              {features.map((feature) => (
                <div key={feature.id} className="space-y-6">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-primary/10">
                      <feature.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary text-center">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-balance mt-2 text-center max-w-md mx-auto">
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative rounded-xl overflow-hidden border shadow-lg aspect-video max-w-md mx-auto">
                    <video
                      className="w-full h-full object-cover"
                      src={feature.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Post Examples Carousel */}
        <section id="examples" className="scroll-my-12 py-16 md:py-24 bg-background">
          <div className="container max-w-7xl">
            <div className="text-center mx-auto mb-12">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">Posts Created with Postel</h2>
              <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
                Create human-quality posts{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">that sound like you</span>
              </h3>
            </div>

            {/* Feature buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
              <button 
                type="button" 
                className="w-full text-left px-6 rounded-xl border transition-all duration-200 relative border-primary bg-primary/5 py-6 min-h-[160px]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <UserRoundPen className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 max-w-[calc(100%-80px)]">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold block">Posts that are authentic to you</span>
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      Posts will be aligned with your background, story and brand by using information from your knowledge base
                    </div>
                  </div>
                </div>
              </button>

              <button 
                type="button" 
                className="w-full text-left px-6 rounded-xl border transition-all duration-200 relative border-border/40 hover:border-primary/30 bg-white/50 md:min-h-[160px] py-4 md:py-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <AudioLines className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 max-w-[calc(100%-80px)]">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold block">Posts that sound exactly like you</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground md:hidden transition-transform" />
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed hidden md:block">
                      Postel will analyze your recent posts to create posts that sound exactly like you and are aligned to your background
                    </div>
                  </div>
                </div>
              </button>

              <button 
                type="button" 
                className="w-full text-left px-6 rounded-xl border transition-all duration-200 relative border-border/40 hover:border-primary/30 bg-white/50 md:min-h-[160px] py-4 md:py-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Rocket className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 max-w-[calc(100%-80px)]">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold block">Posts based on proven formats</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground md:hidden transition-transform" />
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed hidden md:block">
                      Any post will be optimized for engagement by using proven formats of the best performing posts on X
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Marquee carousel */}
            <div className="relative">
              <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                  {/* First set of posts */}
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 1" 
                        src="/images/posts/story1.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 2" 
                        src="/images/posts/story2.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 3" 
                        src="/images/posts/story3.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 4" 
                        src="/images/posts/story4.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                </div>

                {/* Duplicate sets for seamless scrolling */}
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 1" 
                        src="/images/posts/story1.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 2" 
                        src="/images/posts/story2.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 3" 
                        src="/images/posts/story3.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 4" 
                        src="/images/posts/story4.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                </div>

                {/* Third duplicate for extra smooth scrolling */}
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 1" 
                        src="/images/posts/story1.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 2" 
                        src="/images/posts/story2.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 3" 
                        src="/images/posts/story3.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 4" 
                        src="/images/posts/story4.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                </div>

                {/* Fourth duplicate for smooth continuous scrolling */}
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 1" 
                        src="/images/posts/story1.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 2" 
                        src="/images/posts/story2.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 3" 
                        src="/images/posts/story3.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                  <div className="mx-4 bg-white rounded-2xl overflow-hidden p-2" style={{ width: "400px", height: "auto", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                    <div className="relative w-full" style={{ height: "700px" }}>
                      <Image 
                        alt="Post example 4" 
                        src="/images/posts/story4.png"
                        fill
                        className="w-full h-full object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient overlays */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </section>

        {/* Avatar Stack Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 mb-8 text-[17px]">
              Used by Freelancers, Creators and Founders to grow their personal brands
            </p>
            <div className="flex justify-center items-center -space-x-5">
              {[
                { bg: "from-blue-500 to-blue-600", initial: "A" },
                { bg: "from-green-500 to-green-600", initial: "B" },
                { bg: "from-purple-500 to-purple-600", initial: "C" },
                { bg: "from-orange-500 to-orange-600", initial: "D" },
                { bg: "from-pink-500 to-pink-600", initial: "E" },
                { bg: "from-indigo-500 to-indigo-600", initial: "F" },
                { bg: "from-yellow-500 to-yellow-600", initial: "G" },
                { bg: "from-red-500 to-red-600", initial: "H" },
                { bg: "from-teal-500 to-teal-600", initial: "I" },
                { bg: "from-gray-500 to-gray-600", initial: "+" },
              ].map((avatar, index) => (
                <div
                  key={index}
                  className={`relative w-14 h-14 bg-gradient-to-br ${avatar.bg} rounded-full flex items-center justify-center text-white font-semibold shadow-xl border-3 border-white avatar-stack-item cursor-pointer text-lg`}
                  style={{ zIndex: 10 - index }}
                >
                  {avatar.initial}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                Pricing
              </h2>
              <p className="text-gray-600 text-[17px] mb-10">
                The yearly plan includes a growth strategy call with the founders
              </p>
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-6 py-3 rounded-full text-[15px] font-medium border border-purple-200/50">
                💜 50% off with code: EARLY100
              </div>
            </div>

            {/* Billing toggle */}
            <div className="flex justify-center mb-16">
              <div className="bg-gray-100/50 rounded-2xl p-1.5 shadow-inner">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-8 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                    billingPeriod === "monthly"
                      ? "bg-white text-gray-900 shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("yearly")}
                  className={`px-8 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                    billingPeriod === "yearly"
                      ? "bg-white text-gray-900 shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Pricing cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border transition-all duration-300 ${
                    plan.recommended
                      ? "border-blue-500 scale-105 shadow-[0_8px_30px_rgba(59,130,246,0.12)]"
                      : "border-gray-200/60"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full text-[13px] font-semibold shadow-lg">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="p-10">
                    <h3 className="font-semibold text-2xl text-gray-900 mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-[15px] mb-8">
                      {plan.description}
                    </p>
                    <div className="mb-10">
                      <span className="text-5xl font-bold text-gray-900">
                        ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600 text-[15px] ml-2">
                        /month
                      </span>
                      {billingPeriod === "yearly" && (
                        <div className="text-gray-500 text-[14px] line-through mt-2">
                          ${plan.monthlyPrice}/month
                        </div>
                      )}
                    </div>
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-[15px]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={handleSignIn}
                      className={`w-full rounded-2xl py-4 font-medium text-[16px] transition-all duration-200 ${
                        plan.recommended
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-[0_4px_20px_rgba(59,130,246,0.15)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.25)]"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative py-32 px-4 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <div className="mb-6">
                <span className="inline-block px-5 py-2.5 bg-blue-50 text-blue-700 text-[13px] font-semibold rounded-full uppercase tracking-[0.08em]">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 tracking-tight">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <button
                    onClick={() => setOpenFaqItem(openFaqItem === item.id ? null : item.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
                  >
                    <h3 className="font-medium text-gray-900 text-[17px]">{item.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 chevron-rotate ${
                        openFaqItem === item.id ? "chevron-rotate-open" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-8 pb-6 transition-all duration-200 ${
                      openFaqItem === item.id ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-gray-600 text-[15px] leading-[1.8]">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <span className="inline-block px-5 py-2.5 bg-blue-50 text-blue-700 text-[13px] font-semibold rounded-full uppercase tracking-[0.08em]">
                CONTENT CREATION
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-10 tracking-tight">
              Finally unlock your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                content creation
              </span>
              <br />
              by saying what's on your mind
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 text-[16px]">No Expertise Required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 text-[16px]">Authentic Posts In Seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 text-[16px]">No Generic AI Fluff</span>
              </div>
            </div>

            <Button
              onClick={handleSignIn}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl px-10 py-5 font-medium text-[17px] shadow-[0_4px_20px_rgba(59,130,246,0.15)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.25)] transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start For Free →
            </Button>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200/60 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Logo column */}
              <div className="col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-xl text-gray-900">Postify</span>
                </div>
                <p className="text-gray-600 text-[15px]">
                  © 2025 Postify. All rights reserved.
                </p>
              </div>

              {/* Blog column */}
              <div>
                <h4 className="font-medium text-gray-900 mb-5 text-[16px]">Community</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 text-[15px] hover:text-blue-600 transition-colors">
                      Join our Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 text-[15px] hover:text-blue-600 transition-colors">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal column */}
              <div>
                <h4 className="font-medium text-gray-900 mb-5 text-[16px]">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 text-[15px] hover:text-blue-600 transition-colors">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 text-[15px] hover:text-blue-600 transition-colors">
                      Terms and conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources column */}
              <div>
                <h4 className="font-medium text-gray-900 mb-5 text-[16px]">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 text-[15px] hover:text-blue-600 transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 text-[15px] hover:text-blue-600 transition-colors">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

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
