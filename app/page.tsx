"use client"

import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { XIcon, PlayIcon, ChevronDown, Check, X } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [activeFeatureTab, setActiveFeatureTab] = useState("ideas")
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly")
  const [openFaqItem, setOpenFaqItem] = useState<string | null>(null)
  const [isInView, setIsInView] = useState(false)
  const benefitsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    console.log("Page mounted - animations starting")
  }, [])

  // Intersection Observer for Benefits Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          console.log("Benefits section in view - triggering animations")
        }
      },
      { threshold: 0.2 }
    )

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current)
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current)
      }
    }
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

  // Features data
  const features = [
    {
      id: "ideas",
      title: "Create Post Ideas",
      description: "Create post ideas that are authentic to your brand and writing style. Based on the best performing formats on X.",
      icon: "✏️",
      video: "/videos/feature-ideas.mp4"
    },
    {
      id: "voice",
      title: "Voice to Post",
      description: "Speak your thoughts or write them down and Postify will turn your ideas into 6 optimized posts ready to share on X.",
      icon: "🎙️",
      video: "/videos/feature-voice.mp4"
    },
    {
      id: "youtube",
      title: "Youtube Video to Posts",
      description: "Paste any YouTube link and Postify will turn it into 6 optimized posts that match your voice and be authentic to you.",
      icon: "📹",
      video: "/videos/feature-youtube.mp4"
    },
    {
      id: "knowledge",
      title: "Build your Knowledge Base",
      description: "Create and store any information in your knowledge base and turn it into valuable content that will grow your audience.",
      icon: "🧠",
      video: "/videos/feature-knowledge.mp4"
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

        {/* Testimonials Section - Enhanced with better animations */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
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

            {/* Desktop: Scrolling testimonials */}
            <div className="hidden md:block">
              {/* First row - scrolls right to left */}
              <div className="testimonials-container mb-6">
                <div className="flex gap-4 animate-scroll-right-to-left">
                  {/* Testimonial cards for first row - duplicated for seamless loop */}
                  {[...Array(2)].map((_, setIndex) => (
                    <React.Fragment key={setIndex}>
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
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Second row - scrolls left to right */}
              <div className="testimonials-container">
                <div className="flex gap-4 animate-scroll-left-to-right">
                  {/* Testimonial cards for second row - duplicated for seamless loop */}
                  {[...Array(2)].map((_, setIndex) => (
                    <React.Fragment key={setIndex}>
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
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: Horizontal scroll with snap */}
            <div className="md:hidden overflow-x-auto testimonials-mobile-scroll pb-4">
              <div className="flex gap-4 px-4" style={{ width: "max-content" }}>
                <div className="flex-shrink-0 w-[300px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-gray-100 testimonial-card-mobile">
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

                <div className="flex-shrink-0 w-[300px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-gray-100 testimonial-card-mobile">
                  <div className="mb-3.5">
                    <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                      <span className="font-semibold text-gray-900">Postify got me back in the flow with tweet ideas that actually match my vibe and timeline.</span> <span className="font-semibold text-blue-600">Almost +100 followers in 2 days.</span>
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

                <div className="flex-shrink-0 w-[300px] bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-gray-100 testimonial-card-mobile">
                  <div className="mb-3.5">
                    <p className="text-gray-700 leading-relaxed whitespace-normal text-[14px]">
                      <span className="font-semibold text-gray-900">Postify is a game changer.</span> The best feature is the "Topics", they help me get fresh ideas for specific themes.
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
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section ref={benefitsRef} className="relative py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                  BENEFITS
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                Grow with authentic content the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                  algorithm loves
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* No generic AI content */}
              <div className={`bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "100ms" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg border-2 border-white mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-3">No Expertise Required</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Imagine working with an experienced Content Creator that knows you inside out and will guide you to your next perfect post.
                </p>
              </div>

              {/* Turn thoughts into posts */}
              <div className={`bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "200ms" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg border-2 border-white mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-3">Turn your thoughts into 6 perfect ready-to-publish posts</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Tell Postify what's on your mind or write down your thoughts. Postify unites them with your background and expertise to craft personalized content that sounds exactly like you.
                </p>
              </div>

              {/* Personalized post ideas */}
              <div className={`bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "300ms" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg border-2 border-white mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-3">Personalized post ideas in 9 seconds</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Create 6 post ideas with one click with proven hooks and formats.
                </p>
              </div>

              {/* Grow faster with proven formats */}
              <div className={`bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "400ms" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg border-2 border-white mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-3">Grow faster with proven post formats</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Anything you create will be optimized for X by using our proven post formats which we derived from the best performing content on X.
                </p>
              </div>

              {/* Don't waste time */}
              <div className={`bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "500ms" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg border-2 border-white mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl mb-3">Don't waste time coming up with your next post idea</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  Never be inconsistent with your content again. Turn YouTube videos or any information in your knowledge base into content that is authentic to you with one click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                  FEATURES
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">Supercharge</span> your content creation
              </h2>
            </div>

            {/* Feature tabs */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="flex flex-wrap justify-center gap-4 relative">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeatureTab(feature.id)}
                    className={`px-6 py-3 rounded-full font-medium text-[14px] transition-all duration-200 ${
                      activeFeatureTab === feature.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="mr-2">{feature.icon}</span>
                    {feature.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Feature content */}
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`transition-all duration-300 ${
                  activeFeatureTab === feature.id ? "block" : "hidden"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    <Button
                      onClick={handleSignIn}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl px-6 py-3 font-medium shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Get Started Free
                    </Button>
                  </div>
                  <div className="feature-video-container shadow-xl">
                    <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                      <p className="text-gray-500">Feature video placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Post Examples Carousel */}
        <section className="relative py-20 px-4 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                  POSTS CREATED WITH POSTIFY
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                Create human-quality posts{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                  that sound like you
                </span>
              </h2>
            </div>

            {/* Posts carousel */}
            <div className="posts-container">
              <div className="flex gap-6 animate-infinite-scroll">
                {/* Triple the posts for seamless infinite scroll */}
                {[...Array(3)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    {/* Example posts */}
                    <div className="flex-shrink-0 w-[320px]">
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                            J
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Julia</div>
                            <div className="text-[12px] text-gray-600">Indie Maker</div>
                            <div className="text-[12px] text-blue-600 font-medium">@clwassy</div>
                          </div>
                        </div>
                        <p className="text-gray-800 text-[14px] leading-relaxed mb-4">
                          Owning your time = owning any fancy title.
                        </p>
                        <p className="text-gray-800 text-[14px] leading-relaxed mb-4">
                          I left my dev job to wake up and own my schedule.
                        </p>
                        <p className="text-gray-600 text-[14px]">
                          Don't think I'm missing out 👀
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-[320px]">
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                            A
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Adam Barta</div>
                            <div className="text-[12px] text-gray-600">Designer</div>
                            <div className="text-[12px] text-blue-600 font-medium">@AdamBartas</div>
                          </div>
                        </div>
                        <p className="text-gray-800 text-[14px] leading-relaxed mb-4">
                          This completely blows my mind
                        </p>
                        <p className="text-gray-800 text-[14px] leading-relaxed mb-4">
                          two months ago, I quit my dev job to start a design agency
                        </p>
                        <p className="text-gray-600 text-[14px]">
                          set myself a 12 week plan to have solid goals
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-[320px]">
                      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                            J
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Joscha Bulets</div>
                            <div className="text-[12px] text-gray-600">Indie Maker</div>
                            <div className="text-[12px] text-blue-600 font-medium">@JoschuaBulets</div>
                          </div>
                        </div>
                        <p className="text-gray-800 text-[14px] leading-relaxed mb-4">
                          I started 6 months ago with:
                        </p>
                        <p className="text-gray-800 text-[14px] leading-relaxed mb-2">
                          0 followers<br />
                          0 skills
                        </p>
                        <p className="text-gray-800 text-[14px] leading-relaxed">
                          Finally committing was life changing.
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Stack Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 mb-6 text-[16px]">
              Used by Freelancers, Creators and Founders to grow their personal brands
            </p>
            <div className="flex justify-center items-center -space-x-4">
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
                  className={`relative w-12 h-12 bg-gradient-to-br ${avatar.bg} rounded-full flex items-center justify-center text-white font-semibold shadow-lg border-2 border-white avatar-stack-item cursor-pointer`}
                  style={{ zIndex: 10 - index }}
                >
                  {avatar.initial}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                Pricing
              </h2>
              <p className="text-gray-600 text-[16px] mb-8">
                The yearly plan includes a growth strategy call with the founders
              </p>
              <div className="inline-flex items-center justify-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-[14px] font-medium">
                �� 50% off with code: EARLY100
              </div>
            </div>

            {/* Billing toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-1 shadow-sm border border-gray-200">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                    billingPeriod === "monthly"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("yearly")}
                  className={`px-6 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                    billingPeriod === "yearly"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Pricing cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-lg ${
                    plan.recommended
                      ? "border-blue-600 scale-105"
                      : "border-gray-200"
                  }`}
                >
                  {plan.recommended && (
                    <div className="recommended-badge">Recommended</div>
                  )}
                  <div className="p-8">
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-[14px] mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-8">
                      <span className="text-4xl font-bold text-gray-900">
                        ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600 text-[14px]">
                        /{billingPeriod === "monthly" ? "month" : "month"}
                      </span>
                      {billingPeriod === "yearly" && (
                        <div className="text-gray-500 text-[12px] line-through mt-1">
                          ${plan.monthlyPrice}/month
                        </div>
                      )}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-[14px]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={handleSignIn}
                      className={`w-full rounded-xl py-3 font-medium transition-all duration-200 ${
                        plan.recommended
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg"
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
        <section id="faq" className="relative py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-5">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 tracking-tight">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenFaqItem(openFaqItem === item.id ? null : item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                  >
                    <h3 className="font-medium text-gray-900 text-[16px]">{item.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 chevron-rotate ${
                        openFaqItem === item.id ? "chevron-rotate-open" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 pb-4 transition-all duration-200 ${
                      openFaqItem === item.id ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-gray-600 text-[14px] leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-5">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-[12px] font-semibold rounded-full uppercase tracking-wider">
                CONTENT CREATION
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-8 tracking-tight">
              Finally unlock your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
                content creation
              </span>
              <br />
              by saying what's on your mind
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">No Expertise Required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Authentic Posts In Seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">No Generic AI Fluff</span>
              </div>
            </div>

            <Button
              onClick={handleSignIn}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl px-8 py-4 font-medium text-[16px] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start For Free →
            </Button>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Logo column */}
              <div className="col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="font-semibold text-xl text-gray-900">Postify</span>
                </div>
                <p className="text-gray-600 text-[14px]">
                  © 2025 Postify. All rights reserved.
                </p>
              </div>

              {/* Blog column */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Blog</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 text-[14px] hover:text-blue-600 transition-colors">
                      Join our Discord
                    </a>
                  </li>
                </ul>
              </div>

              {/* Imprint column */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Imprint</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 text-[14px] hover:text-blue-600 transition-colors">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 text-[14px] hover:text-blue-600 transition-colors">
                      Terms and conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Empty column for spacing */}
              <div></div>
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
