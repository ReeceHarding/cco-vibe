"use client"

import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, PlayIcon, ChevronDown, Check, X, Sparkles, Shield, Clock, Rocket, Users, Zap, Heart, MessageCircle, Repeat2, Share, Bookmark, MoreHorizontal, Verified, DollarSign, Gauge, Bot, Database, Terminal, Braces, GitBranch, Cpu } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PostelLogo } from "@/components/logo"
import { InteractiveCostSavingsCard } from "@/components/InteractiveCostSavingsCard"
import { InteractiveProgressTimeline } from "@/components/InteractiveProgressTimeline"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [activeFeatureTab, setActiveFeatureTab] = useState("internal-tools")
  const [openFaqItem, setOpenFaqItem] = useState<string | null>(null)
  const [showNavigation, setShowNavigation] = useState(true) // Always show nav
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isWordAnimating, setIsWordAnimating] = useState(false)

  // Rotating words for hero section - NEW
  const rotatingWords = [
    { text: "internal tools", color: "from-purple-600 to-purple-400" },
    { text: "AI chatbots", color: "from-blue-600 to-blue-400" },
    { text: "custom SaaS", color: "from-green-600 to-green-400" },
    { text: "data platforms", color: "from-orange-600 to-orange-400" },
    { text: "MVPs", color: "from-pink-600 to-pink-400" },
    { text: "AI agents", color: "from-indigo-600 to-indigo-400" }
  ]

  useEffect(() => {
    setMounted(true)
    console.log("Page mounted - animations starting")
  }, [])

  // Rotating words animation - NEW
  useEffect(() => {
    if (!mounted) return
    
    const interval = setInterval(() => {
      setIsWordAnimating(true)
      console.log(`Rotating to next word: ${rotatingWords[(currentWordIndex + 1) % rotatingWords.length].text}`)
      
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsWordAnimating(false)
      }, 300)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [mounted, currentWordIndex, rotatingWords.length])

  const handleVideoClick = () => {
    console.log("Video button clicked - opening project showcase video")
    setShowVideo(true)
  }

  const handleCloseVideo = () => {
    console.log("Closing video modal")
    setShowVideo(false)
  }

  const handleScheduleCall = () => {
    console.log("Schedule call button clicked")
    // Replace with actual calendar link
    window.open("https://calendly.com/rostam", "_blank")
  }

  // Features data with proper icons
  const features = [
    {
      id: "internal-tools",
      title: "Custom Internal Tools",
      description: "Replace expensive SaaS with custom built solutions. Save $20k+ annually on tools like Slack, Notion, or Jira.",
      icon: Code2,
      video: "/images/postel-screenshot.svg" // Using placeholder image
    },
    {
      id: "ai-features",
      title: "AI Powered Features",
      description: "Integrate cutting edge AI into your workflows. We're graduates of the world's best AI bootcamp.",
      icon: Sparkles,
      video: "/images/postel-dashboard.svg" // Using placeholder image
    },
    {
      id: "mvp-development",
      title: "MVP Development",
      description: "Launch your startup idea in 2 weeks, not 4 months. Start getting customer feedback immediately.",
      icon: Rocket,
      video: "/images/agency-dashboard.svg" // Using placeholder image
    },
    {
      id: "automation",
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows. Save hundreds of hours of manual work every month.",
      icon: Zap,
      video: "/images/postel-screenshot.webp" // Using placeholder image
    }
  ]

  // FAQ data
  const faqItems = [
    {
      id: "what-we-do",
      question: "What exactly do you build?",
      answer: "We build the exact same software you're currently renting from SaaS companies, but you own it forever. Internal tools like Slack, project management like Notion, analytics dashboards, automation tools, MVPs. Anything you're paying monthly for, we can build custom for less than 3 months of fees."
    },
    {
      id: "how-fast",
      question: "How can you really build in 2 weeks?",
      answer: "Traditional developers type code line by line like using a shovel. We use AI like an excavator. Our Gauntlet AI training taught us prompting techniques that 99% of developers don't know exist. We generate thousands of lines of perfect, tested code instantly. Same quality, 10x the speed."
    },
    {
      id: "satisfaction-guarantee",
      question: "What if I don't like what you build?",
      answer: "You pay nothing. Period. We show you progress every single day. You give feedback. We refine. At the end of 2 weeks, if you don't absolutely love it, you don't pay a cent. We take all the risk, not you."
    },
    {
      id: "pricing-works",
      question: "Why is it so much cheaper than agencies?",
      answer: "Agencies have massive overhead: offices, account managers, designers who don't code, developers who code slowly. We're lean: just senior developers using AI. What takes them 500 hours takes us 50. Less time = less cost. You get the savings."
    },
    {
      id: "who-are-you",
      question: "Why should I trust you?",
      answer: "We're graduates of the most elite AI program in the world. Gauntlet AI accepts less than 1% of applicants. We're not random freelancers. We're American, in your timezone, speak perfect English, and have spent years mastering both traditional development and cutting edge AI. Plus, you literally pay nothing if you're not thrilled."
    }
  ]

  // Pricing plans
  const pricingPlans = [
    {
      name: "Non-Exclusive License",
      description: "We can reuse similar solutions",
      price: "10-20k",
      industryPrice: "80-100k",
      savings: "80%",
      recommended: true,
      features: [
        "Full custom application",
        "2 week delivery",
        "Daily progress updates", 
        "100% satisfaction guarantee",
        "Source code ownership",
        "30 days of free revisions",
        "We may reuse components for other clients"
      ]
    },
    {
      name: "Exclusive License", 
      description: "Your code stays yours only",
      price: "40-50k",
      industryPrice: "80-100k",
      savings: "50%",
      features: [
        "Full custom application",
        "2 week delivery",
        "Daily progress updates",
        "100% satisfaction guarantee", 
        "Complete source code ownership",
        "60 days of free revisions",
        "We won't reuse any of your code"
      ]
    }
  ]
  
  // Testimonials data array for reuse
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO @TechStartup",
      avatar: "https://unavatar.io/twitter/elonmusk",
      verified: true,
      time: "2d",
      text: "They built our entire internal communication platform in 12 days. We're saving $50k/year compared to Slack. The AI features they added are incredible. Best decision we've made.",
      video: "/videos/testimonials/testimonial-1.mp4",
      poster: "/images/testimonials/testimonial-1-poster.jpg",
      comments: 24,
      retweets: 136,
      likes: 892
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CTO @Enterprise",
      avatar: "https://unavatar.io/twitter/sama",
      verified: false,
      time: "1w",
      text: "Replaced our $30k/year project management tool with a custom solution. It's faster, has better UX, and includes AI features we couldn't get anywhere else. Delivered in just 2 weeks!",
      video: "/videos/testimonials/testimonial-2.mp4",
      poster: "/images/testimonials/testimonial-2-poster.jpg",
      comments: 18,
      retweets: 97,
      likes: 523
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Founder @FinTech",
      avatar: "https://unavatar.io/twitter/naval",
      verified: true,
      time: "3d",
      text: "Built our MVP in 14 days. We went from idea to live product with real users. The AI powered analytics they included helped us find product market fit immediately. Worth every penny!",
      video: "/videos/testimonials/testimonial-3.mp4",
      poster: "/images/testimonials/testimonial-3-poster.jpg",
      comments: 42,
      retweets: 218,
      likes: 1243
    },
    {
      id: 4,
      name: "David Park",
      role: "Head of Ops @Logistics",
      avatar: "https://unavatar.io/twitter/balajis",
      verified: true,
      time: "5d",
      text: "Automated our entire inventory management system. What used to take 3 full time employees now runs automatically. ROI in less than 2 months. These guys are wizards!",
      video: "/videos/testimonials/testimonial-4.mp4",
      poster: "/images/testimonials/testimonial-4-poster.jpg",
      comments: 31,
      retweets: 156,
      likes: 789
    },
    {
      id: 5,
      name: "Jessica Liu",
      role: "VP Product @SaaS",
      avatar: "https://unavatar.io/twitter/esthercrawford",
      verified: false,
      time: "1w",
      text: "They rebuilt our customer portal from scratch with AI support features. Customer satisfaction up 40%, support tickets down 60%. Delivered ahead of schedule too!",
      video: "/videos/testimonials/testimonial-5.mp4",
      poster: "/images/testimonials/testimonial-5-poster.jpg",
      comments: 27,
      retweets: 89,
      likes: 456
    },
    {
      id: 6,
      name: "Robert Thompson",
      role: "CEO @Manufacturing",
      avatar: "https://unavatar.io/twitter/jason",
      verified: true,
      time: "2w",
      text: "Custom ERP system that replaced 5 different tools we were using. Saves us $200k/year in licensing fees. The AI predictions for demand forecasting are game changing.",
      video: "/videos/testimonials/testimonial-6.mp4",
      poster: "/images/testimonials/testimonial-6-poster.jpg",
      comments: 38,
      retweets: 124,
      likes: 678
    }
  ]

  return (
    <>
      <Navigation showNavigation={showNavigation} />
      <main className="relative min-h-screen overflow-hidden">
        {/* Hero Section - Complete Rewrite Following Exact Specs */}
        <section className="relative">
          {/* Background Decorations - Exact positioning from specs */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-40 right-[15%] w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          {/* Hero Container - Following exact measurements */}
          <div className="container relative z-10 pt-32 md:pt-40 pb-20 md:pb-32">
            <div className="max-w-5xl mx-auto text-center">
              
              {/* Trust Signal Badge - Exact spec implementation */}
              <div 
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full border border-purple-200/30 mb-8 transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "0ms" }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  Trusted by 100+ businesses saving millions
                </span>
              </div>

              {/* Hero Heading - Beautiful with Rotating Words */}
              <h1 
                className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                We'll build you{" "}
                <span className="relative inline-block">
                  <span 
                    className={`bg-gradient-to-r ${rotatingWords[currentWordIndex].color} bg-clip-text text-transparent transition-all duration-300 ${
                      isWordAnimating ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {rotatingWords[currentWordIndex].text}
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path 
                      d="M2 9C2 9 75 3 150 3C225 3 298 9 298 9" 
                      stroke="url(#paint0_linear)" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="2" y1="9" x2="298" y2="9">
                        <stop stopColor="#9333EA"/>
                        <stop offset="1" stopColor="#A855F7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                <span className="relative">
                  <span>that you'll own forever</span>
                  <span className="text-purple-600 font-normal"> - risk free</span>
                </span>
              </h1>

              {/* Subheading - Following layout pattern */}
              <p 
                className={`text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Stop paying monthly for generic SaaS. We build exactly what you need in 
                <span className="font-semibold text-foreground"> 2 weeks</span>, not 6 months.
              </p>

              {/* Feature Pills - Exact spec styling */}
              <div 
                className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">No monthly fees ever</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Built by AI experts</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Pay nothing until you love it</span>
                </div>
              </div>

              {/* CTA Section - Following exact button spec */}
              <div 
                className={`transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <Button
                  onClick={handleScheduleCall}
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <span className="flex items-center gap-3">
                    Start Your Risk-Free Build
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  100% satisfaction guarantee • Daily progress updates
                </p>
              </div>

              {/* Social Proof Avatars - Following exact spec */}
              <div 
                className={`flex items-center justify-center gap-6 mt-16 transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="flex -space-x-3">
                  {[
                    "https://unavatar.io/twitter/elonmusk",
                    "https://unavatar.io/twitter/sama", 
                    "https://unavatar.io/twitter/naval",
                    "https://unavatar.io/twitter/paulg",
                    "https://unavatar.io/twitter/patrickc"
                  ].map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt="User avatar"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Loved by 100+ businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video section - Project showcase */}
        <div className="relative pb-32">
          <div className="container max-w-6xl mx-auto px-4">
            <div 
              className={`relative rounded-2xl overflow-hidden shadow-2xl border border-purple-200/20 transition-all duration-700 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "600ms", boxShadow: "0 20px 50px rgba(147, 51, 234, 0.15)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-purple-900/10 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent z-10 pointer-events-none" />
              <button
                onClick={handleVideoClick}
                className="relative w-full group"
                aria-label="Play project showcase video"
              >
                <Image
                  src="/images/agency-dashboard.svg"
                  alt="Agency Project Dashboard"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(147,51,234,0.4)] transition-all duration-300">
                    <PlayIcon className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Fade to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* About Our Agency Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-7xl">
            <div className="text-center mx-auto mb-16">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">About Us</h2>
              <h3 className="mx-auto mt-4 max-w-3xl font-semibold text-3xl sm:text-4xl md:text-5xl">
                Graduates of the World's Most Elite{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  AI Program
                </span>
              </h3>
              <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto">
                While traditional developers are still coding by hand, we learned directly from the pioneers of AI development. 
                Gauntlet AI accepts less than 1% of applicants. We made it through.
              </p>
            </div>

            {/* Why we're different */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">10x Faster = 10x Cheaper</h4>
                <p className="text-muted-foreground text-sm">
                  We code at AI speed. What takes agencies 6 months, we ship in 2 weeks. 
                  Less time = less cost = your savings.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Built by Builders, Not Talkers</h4>
                <p className="text-muted-foreground text-sm">
                  Gauntlet AI graduates who've shipped to real users. We build, you own, 
                  SaaS companies cry.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Risk Free Guarantee</h4>
                <p className="text-muted-foreground text-sm">
                  We work until you love it or it's free. No contracts, no deposits, no risk. 
                  Pay only when you see it working.
                </p>
              </div>
            </div>

            {/* Our focus */}
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-100/20 max-w-4xl mx-auto text-center">
              <h4 className="font-semibold text-2xl mb-4">
                Paying monthly for software is like renting an apartment {" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  you'll never own
                </span>
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Every month you send money to Slack, Notion, Jira... and what do you have to show for it? 
                Nothing. You're building their equity, not yours. We build you custom software that you own forever. 
                One payment. No monthly fees. Ever.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Own it forever</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Built in 2 weeks</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Exactly what you need</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="pt-12 lg:py-24" id="testimonials">
          <div className="text-center mb-12">
            <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">Live Case Studies</h2>
            <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
              Watch us build{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">real software in real time</span>
            </h3>
            <p className="text-muted-foreground text-lg mt-4">
              See exactly how we use AI to build 10x faster
            </p>
          </div>

          {/* Marquee carousel for testimonial cards */}
          <div className="relative">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:80s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {/* First set of testimonials */}
                {testimonials.map((testimonial) => (
                  <article key={testimonial.id} className="mx-2 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:scale-[1.02] transition-all" style={{ width: "320px", height: "560px" }}>
                    <div className="p-4 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-10 h-10 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900 text-sm">{testimonial.name}</span>
                            {testimonial.verified && <Verified className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />}
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <span className="text-gray-500">{testimonial.role}</span>
                            <span className="text-gray-500">·</span>
                            <span className="text-gray-500">{testimonial.time}</span>
                          </div>
                        </div>
                        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                      
                      {/* Testimonial text */}
                      <div className="text-gray-900 text-sm leading-normal mb-3">
                        {testimonial.text}
                      </div>
                      
                      {/* Video attachment */}
                      <div className="rounded-xl overflow-hidden border border-gray-200 relative flex-1 mb-3">
                        <video 
                          className="w-full h-full object-cover"
                          poster={testimonial.poster}
                          controls
                          preload="metadata"
                        >
                          <source src={testimonial.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>

                      {/* Engagement buttons */}
                      <div className="flex items-center justify-between -mx-2">
                        <button className="flex items-center gap-1 p-2 hover:bg-purple-50 rounded-full transition-colors group/btn">
                          <MessageCircle className="w-4 h-4 text-gray-500 group-hover/btn:text-purple-600" />
                          <span className="text-xs text-gray-500 group-hover/btn:text-purple-600">{testimonial.comments}</span>
                        </button>
                        <button className="flex items-center gap-1 p-2 hover:bg-green-50 rounded-full transition-colors group/btn">
                          <Repeat2 className="w-4 h-4 text-gray-500 group-hover/btn:text-green-600" />
                          <span className="text-xs text-gray-500 group-hover/btn:text-green-600">{testimonial.retweets}</span>
                        </button>
                        <button className="flex items-center gap-1 p-2 hover:bg-red-50 rounded-full transition-colors group/btn">
                          <Heart className="w-4 h-4 text-gray-500 group-hover/btn:text-red-600" />
                          <span className="text-xs text-gray-500 group-hover/btn:text-red-600">{testimonial.likes}</span>
                        </button>
                        <button className="p-2 hover:bg-blue-50 rounded-full transition-colors group/btn">
                          <Share className="w-4 h-4 text-gray-500 group-hover/btn:text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-blue-50 rounded-full transition-colors group/btn">
                          <Bookmark className="w-4 h-4 text-gray-500 group-hover/btn:text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Duplicate set for seamless scrolling */}
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
                {/* Duplicate testimonials for smooth scrolling */}
                {testimonials.map((testimonial) => (
                  <article key={`dup-${testimonial.id}`} className="mx-2 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:scale-[1.02] transition-all" style={{ width: "320px", height: "560px" }}>
                    <div className="p-4 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-10 h-10 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900 text-sm">{testimonial.name}</span>
                            {testimonial.verified && <Verified className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />}
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <span className="text-gray-500">{testimonial.role}</span>
                            <span className="text-gray-500">·</span>
                            <span className="text-gray-500">{testimonial.time}</span>
                          </div>
                        </div>
                        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                      
                      {/* Testimonial text */}
                      <div className="text-gray-900 text-sm leading-normal mb-3">
                        {testimonial.text}
                      </div>
                      
                      {/* Video attachment */}
                      <div className="rounded-xl overflow-hidden border border-gray-200 relative flex-1 mb-3">
                        <video 
                          className="w-full h-full object-cover"
                          poster={testimonial.poster}
                          controls
                          preload="metadata"
                        >
                          <source src={testimonial.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>

                      {/* Engagement buttons */}
                      <div className="flex items-center justify-between -mx-2">
                        <button className="flex items-center gap-1 p-2 hover:bg-purple-50 rounded-full transition-colors group/btn">
                          <MessageCircle className="w-4 h-4 text-gray-500 group-hover/btn:text-purple-600" />
                          <span className="text-xs text-gray-500 group-hover/btn:text-purple-600">{testimonial.comments}</span>
                        </button>
                        <button className="flex items-center gap-1 p-2 hover:bg-green-50 rounded-full transition-colors group/btn">
                          <Repeat2 className="w-4 h-4 text-gray-500 group-hover/btn:text-green-600" />
                          <span className="text-xs text-gray-500 group-hover/btn:text-green-600">{testimonial.retweets}</span>
                        </button>
                        <button className="flex items-center gap-1 p-2 hover:bg-red-50 rounded-full transition-colors group/btn">
                          <Heart className="w-4 h-4 text-gray-500 group-hover/btn:text-red-600" />
                          <span className="text-xs text-gray-500 group-hover/btn:text-red-600">{testimonial.likes}</span>
                        </button>
                        <button className="p-2 hover:bg-blue-50 rounded-full transition-colors group/btn">
                          <Share className="w-4 h-4 text-gray-500 group-hover/btn:text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-blue-50 rounded-full transition-colors group/btn">
                          <Bookmark className="w-4 h-4 text-gray-500 group-hover/btn:text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </section>

        {/* Previous Projects Section */}
        <section id="projects" className="py-12 md:py-24 bg-gradient-to-b from-background to-background/50">
          <div className="container max-w-7xl">
            <div className="text-center mx-auto mb-20">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">The Mechanism</h2>
              <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
                Like using an excavator{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">instead of a shovel</span>
              </h3>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                Traditional developers code by hand. We use AI to generate thousands of lines of perfect code instantly. 
                Same result, 10x faster, 90% cheaper.
              </p>
            </div>

            {/* Project showcase grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1: Slack Clone */}
              <div className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/20 hover:border-purple-300/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)]">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/postel-dashboard.svg"
                    alt="Slack Clone Project"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">Internal Communication Platform</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Custom built alternative to Slack. Better features, owned forever, no monthly fees.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>14 days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span>One time cost</span>
                  </div>
                </div>
              </div>

              {/* Project 2: AI Analytics Dashboard */}
              <div className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/20 hover:border-purple-300/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)]">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/agency-dashboard.svg"
                    alt="AI Analytics Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">AI Powered Analytics Platform</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Custom analytics with AI insights. Stop paying monthly for features you don't need.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>18 days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span>Own forever</span>
                  </div>
                </div>
              </div>

              {/* Project 3: Startup MVP */}
              <div className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/20 hover:border-purple-300/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)]">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/postel-screenshot.svg"
                    alt="Startup MVP"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg mb-2">FinTech Startup MVP</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Full featured MVP launched in 2 weeks. Production ready from day one.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>14 days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Rocket className="w-4 h-4 text-purple-600" />
                    <span>Live in 2 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="py-12 md:py-24 bg-background">
          <div className="container max-w-7xl">
            <div className="text-center mx-auto mb-12">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">Dream Outcome</h2>
              <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
                Imagine if you{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">never paid for software again</span>
              </h3>
            </div>

            {/* Benefits grid with custom layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* 10x Faster Development - 4 columns */}
              <div className="md:col-span-4 rounded-xl bg-muted/80 p-6 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group">
                <div className="flex flex-col h-full">
                  <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Gauge className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">10x Faster Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We leverage cutting edge AI to write code 10x faster. What takes others months, we deliver in weeks.
                  </p>
                </div>
              </div>

              {/* American Team, Perfect Communication - 5 columns */}
              <div className="md:col-span-5 rounded-xl bg-muted/80 p-6 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group/card">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">All American Team</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">Perfect English, same time zones, exceptional taste in design. We're graduates of the world's best AI bootcamp with years of experience building production software.</p>
                  
                  {/* Team showcase */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["1", "2", "3", "4"].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white font-semibold border-2 border-white text-sm">
                          {i}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-foreground">20+ years combined experience</p>
                      <p className="text-muted-foreground">Senior developers only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 100% Satisfaction Guarantee - 3 columns */}
              <div className="md:col-span-3 rounded-xl bg-muted/80 p-6 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group/ideas">
                <div className="flex flex-col h-full">
                  <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">100% Risk Free</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Don't pay until you're completely satisfied. We'll refine until it's perfect.
                  </p>
                </div>
              </div>

              {/* Save Money Immediately - 6 columns - Use new interactive component */}
              <InteractiveCostSavingsCard />

              {/* Daily Updates - 6 columns - Use new interactive component */}
              <InteractiveProgressTimeline />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 bg-background">
          <div className="container max-w-7xl">
            <div className="text-center mx-auto mb-20">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">What You Get</h2>
              <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
                Everything you need. Nothing you don't.{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Built exactly for you.</span>
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
                  <Image
                    src={feature.video}
                    alt={feature.title}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    quality={100}
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
                    <Image
                      src={feature.video}
                      alt={feature.title}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                      quality={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-32 px-4 bg-gradient-to-b from-background/50 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Investment</h2>
              <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl mb-6">
                Own your software{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">forever</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-10">
                One payment. No subscriptions. No surprises.
              </p>
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-50 to-purple-100/50 text-purple-700 px-6 py-3 rounded-full text-[15px] font-medium border border-purple-200/50 shadow-sm">
                💜 Pay nothing until you love it
              </div>
            </div>



            {/* Pricing cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border transition-all duration-300 ${
                    plan.recommended
                      ? "border-primary scale-105 shadow-[0_8px_30px_rgba(168,85,247,0.12)]"
                      : "border-border/40 hover:border-primary/30"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-400 text-white px-5 py-2 rounded-full text-[13px] font-semibold shadow-lg">
                      BEST VALUE
                    </div>
                  )}
                  <div className="p-10">
                    <h3 className="font-semibold text-2xl text-foreground mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-[15px] mb-8">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-foreground">
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground text-[15px] ml-2">
                        project
                      </span>
                    </div>
                    <div className="mb-10">
                      <span className="text-muted-foreground/70 text-[14px] line-through">
                        Industry: ${plan.industryPrice}
                      </span>
                      <span className="text-green-600 text-sm ml-2 font-semibold">
                        Save {plan.savings}
                      </span>
                    </div>
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-[15px]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={handleScheduleCall}
                      className={`w-full rounded-2xl py-4 font-medium text-[16px] transition-all duration-200 ${
                        plan.recommended
                          ? "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white shadow-[0_4px_20px_rgba(168,85,247,0.15)] hover:shadow-[0_6px_30px_rgba(168,85,247,0.25)]"
                          : "bg-foreground hover:bg-foreground/90 text-white"
                      }`}
                    >
                      Schedule free consultation
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <div className="mt-20 max-w-4xl mx-auto">
              <h4 className="text-center text-xl font-semibold mb-8">How we compare</h4>
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-2 border border-purple-100/20 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(147,51,234,0.08)] transition-all duration-300">
                <div className="p-6 md:p-8 relative">
                  {/* Column headers - desktop */}
                  <div className="hidden md:grid md:grid-cols-3 gap-4 mb-8">
                    <div></div> {/* Empty space for labels column */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100/50 text-purple-700 rounded-full text-[14px] font-semibold border border-purple-200/50 shadow-sm">
                        Us
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center px-4 py-2 text-muted-foreground text-[14px] font-medium">
                        Traditional Agency
                      </div>
                    </div>
                  </div>

                  {/* Comparison items */}
                  <div className="space-y-6">
                    {/* Delivery Time */}
                    <div className="group">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 rounded-2xl hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Clock className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium text-[16px] text-foreground">Delivery Time</span>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-green-600">2 weeks</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2">
                            <X className="w-4 h-4 text-muted-foreground/50" />
                            <span className="text-muted-foreground">3 to 4 months</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cost */}
                    <div className="group">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 rounded-2xl hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <DollarSign className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium text-[16px] text-foreground">Cost</span>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-green-600">$10 to 50k</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2">
                            <X className="w-4 h-4 text-muted-foreground/50" />
                            <span className="text-muted-foreground">$80 to 100k</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI Features */}
                    <div className="group">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 rounded-2xl hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Sparkles className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium text-[16px] text-foreground">AI Features</span>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                            <Check className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-600">Included</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2">
                            <DollarSign className="w-4 h-4 text-muted-foreground/50" />
                            <span className="text-muted-foreground">Extra cost</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Satisfaction Guarantee */}
                    <div className="group">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 rounded-2xl hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Shield className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium text-[16px] text-foreground">Satisfaction Guarantee</span>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                            <Check className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-600">100% Guaranteed</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2">
                            <X className="w-4 h-4 text-red-500" />
                            <span className="text-muted-foreground">No guarantee</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column headers - mobile */}
                  <div className="md:hidden mt-8 grid grid-cols-2 gap-4 text-center pb-4 border-t border-border/20 pt-6">
                    <div className="font-semibold text-primary">Us</div>
                    <div className="text-muted-foreground">Traditional Agency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative py-32 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">FAQ</h2>
              <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Everything</span>{" "}
                you need to know
              </h3>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl border border-border/40 overflow-hidden transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-primary/30"
                >
                  <button
                    onClick={() => setOpenFaqItem(openFaqItem === item.id ? null : item.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 group"
                  >
                    <h3 className="font-medium text-foreground text-[17px] group-hover:text-primary transition-colors duration-200">{item.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-all duration-300 ${
                        openFaqItem === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openFaqItem === item.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-8 pb-6 text-muted-foreground text-[15px] leading-[1.8]">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 bg-gradient-to-br from-purple-50 via-background to-purple-50 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <span className="inline-block px-5 py-2.5 bg-primary/10 text-primary text-[13px] font-bold rounded-full uppercase tracking-wider">
                LIMITED SPOTS AVAILABLE
              </span>
            </div>
            <h2 className="mx-auto mt-4 max-w-4xl font-semibold text-3xl sm:text-4xl md:text-5xl mb-10">
              Every month you wait is money{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                thrown away
              </span>
              <br />
              on software you'll never own
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group transition-all duration-300 hover:bg-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-[16px]">2 Week Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group transition-all duration-300 hover:bg-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-[16px]">100% Risk Free</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group transition-all duration-300 hover:bg-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-[16px]">Pay After Delivery</span>
              </div>
            </div>

            <Button
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white rounded-2xl px-10 py-5 font-medium text-[17px] shadow-[0_4px_20px_rgba(168,85,247,0.15)] hover:shadow-[0_6px_30px_rgba(168,85,247,0.25)] transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Lock In Your Spot Now →
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Free consultation • We can only take 3 new clients this month
            </p>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </section>

        {/* Free Consultation Form Section */}
        <section id="consultation-form" className="relative py-24 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Apply to Work With Us</h2>
              <h3 className="mx-auto mt-4 max-w-2xl font-semibold text-3xl sm:text-4xl md:text-5xl mb-6">
                Get a{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  free consultation
                </span>
                {" "}or custom website
              </h3>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Tell us about your project and we'll show you exactly how we can help. 
                No sales pitch, just solutions.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-border/40 p-8 md:p-10">
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  console.log("Form submitted - processing consultation request")
                  const formData = new FormData(e.currentTarget)
                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    company: formData.get('company'),
                    revenue: formData.get('revenue'),
                    budget: formData.get('budget'),
                    project: formData.get('project'),
                    timeline: formData.get('timeline')
                  }
                  console.log("Form data:", data)
                  // In production, this would send to your API
                  alert("Thank you! We'll reach out within 24 hours with a custom proposal.")
                }}
                className="space-y-6"
              >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-white/50 focus:bg-white focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-white/50 focus:bg-white focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Company and Revenue Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-white/50 focus:bg-white focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-foreground mb-2">
                      Annual Revenue (Optional)
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-white/50 focus:bg-white focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    >
                      <option value="">Select range</option>
                      <option value="pre-revenue">Pre-revenue</option>
                      <option value="0-100k">$0 - $100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k-1m">$500k - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                  </div>
                </div>

                {/* Budget and Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Project Budget *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-white/50 focus:bg-white focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    >
                      <option value="">Select budget</option>
                      <option value="10k-20k">$10k - $20k</option>
                      <option value="20k-30k">$20k - $30k</option>
                      <option value="30k-50k">$30k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                      When do you need it? *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/40 bg-white/50 focus:bg-white focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (2 weeks)</option>
                      <option value="1month">Within 1 month</option>
                      <option value="2months">Within 2 months</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    What do you want to build? *
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border/40 bg-white/50 focus:bg-white focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                    placeholder="Describe your project... Are you looking to replace existing software? Build an MVP? Add AI features? The more details you share, the better we can help."
                  />
                </div>

                {/* Value Props */}
                <div className="bg-purple-50/50 rounded-2xl p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-purple-900">
                      <span className="font-semibold">AI-Powered Development:</span> We use cutting edge AI to build 10x faster
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-purple-900">
                      <span className="font-semibold">100% Risk Free:</span> Pay nothing until you love what we build
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-purple-900">
                      <span className="font-semibold">2 Week Delivery:</span> Get your custom software in just 14 days
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-xl py-4 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get Your Free Consultation →
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  We'll respond within 24 hours with a custom proposal. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/50 backdrop-blur-sm border-t border-border/40 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Logo column */}
              <div className="col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-2xl text-foreground">CCO Vibe</span>
                </div>
                <p className="text-muted-foreground text-[15px]">
                  © 2025 CCO Vibe. All rights reserved.
                </p>
              </div>

              {/* Contact column */}
              <div>
                <h4 className="font-medium text-foreground mb-5 text-[16px]">Contact</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-muted-foreground text-[15px] hover:text-primary transition-colors inline-flex items-center gap-2">
                      Schedule a call
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                      hello@ccovibe.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services column */}
              <div>
                <h4 className="font-medium text-foreground mb-5 text-[16px]">Services</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#case-studies" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal column */}
              <div>
                <h4 className="font-medium text-foreground mb-5 text-[16px]">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                      Terms of service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom section */}
            <div className="pt-8 border-t border-border/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Built with</span>
                  <span className="text-primary">💜</span>
                  <span>by AI developers, for businesses</span>
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
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
                
                {/* Vimeo Embed - Update with actual project showcase video */}
                <iframe
                  src="https://player.vimeo.com/video/901751328?h=1a8e9f0d5e&autoplay=1&title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Project Showcase Video"
                />
              </div>
              
              {/* Optional: Video Title */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-medium">
                  See how we build production-ready apps in just 2 weeks
                </h3>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
