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
        {/* Hero Section - Redesigned for sleek modern look */}
        <div className="container relative z-10 pt-32 md:pt-40 pb-20 md:pb-32">
          {/* Simplified decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-40 right-[15%] w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="max-w-5xl mx-auto text-center px-4">
            {/* Trust signal - made more subtle */}
            <div 
              className={`inline-flex items-center gap-2 mb-8 transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full border border-purple-200/30">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  800+ creators growing on X
                </span>
            </div>
          </div>

            {/* Main heading - Cleaner typography */}
            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Write{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  authentic
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9C2 9 75 3 150 3C225 3 298 9 298 9" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="2" y1="9" x2="298" y2="9" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9333EA"/>
                      <stop offset="1" stopColor="#A855F7"/>
                  </linearGradient>
                </defs>
              </svg>
              </span>{" "}
              posts
              <br />
              <span className="text-muted-foreground">that grow your audience</span>
            </h1>

            {/* Subheading - More prominent */}
            <p 
              className={`text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
              AI that learns your voice, understands your expertise, and creates posts that sound exactly like you—in 9 seconds.
            </p>

            {/* Feature pills - Redesigned */}
            <div 
              className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                <Check className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-900">No generic AI content</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                <Check className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-900">Matches your writing style</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                <Check className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-900">Proven viral formats</span>
            </div>
          </div>

            {/* CTA Section - More prominent */}
          <div 
              className={`transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
                <Button
                  onClick={handleSignIn}
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span className="flex items-center gap-3">
                  Start creating for free
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </span>
                </Button>
              <p className="text-sm text-muted-foreground mt-4">
                No credit card required • 7-day free trial
              </p>
              </div>
              
            {/* Social proof avatars */}
            <div 
              className={`flex items-center justify-center gap-6 mt-16 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex -space-x-3">
                {[
                  "https://unavatar.io/twitter/CalebSmithXM",
                  "https://unavatar.io/twitter/zalkazemi",
                  "https://unavatar.io/twitter/methkalkhalawi",
                  "https://unavatar.io/twitter/clivassy",
                  "https://unavatar.io/twitter/_grantsing"
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
                  Loved by 800+ creators
                </p>
              </div>
              </div>
            </div>
          </div>

        {/* Video section - Simplified and integrated better */}
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
                aria-label="Play demo video"
              >
                <Image
                  src="/images/postel-dashboard.svg"
                  alt="Postify Dashboard"
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

        {/* Video Testimonials Section */}
        <section className="pt-12 lg:py-24" id="testimonials">
          <div className="text-center">
            <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">Video Testimonials</h2>
            <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
              Hear what our users{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">have to say</span>
            </h3>
            <p className="text-muted-foreground text-lg mt-4">
              Real stories from real creators who transformed their content strategy
            </p>
          </div>

          <div className="relative mt-12 max-w-7xl mx-auto px-4">
            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video Testimonial 1 */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-purple-200/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-purple-50">
                  <video 
                    className="w-full h-full object-cover"
                    poster="/images/testimonials/testimonial-1-poster.jpg"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/testimonials/testimonial-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Caleb Smith</h4>
                  <p className="text-muted-foreground text-sm mb-3">Coach & Indie Founder</p>
                  <p className="text-sm text-muted-foreground/80">"If you want to understand what makes a good tweet, this is the tool."</p>
                  <a href="https://x.com/CalebSmithXM" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1 mt-3">
                    @CalebSmithXM
                  </a>
                </div>
              </div>

              {/* Video Testimonial 2 */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-purple-200/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-purple-50">
                  <video 
                    className="w-full h-full object-cover"
                    poster="/images/testimonials/testimonial-2-poster.jpg"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/testimonials/testimonial-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Zaid Al Kazemi</h4>
                  <p className="text-muted-foreground text-sm mb-3">Founder & Podcast Host</p>
                  <p className="text-sm text-muted-foreground/80">"Postel gives you ideas for bangers using your own content or any YT video."</p>
                  <a href="https://x.com/zalkazemi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1 mt-3">
                    @zalkazemi
                  </a>
                </div>
              </div>

              {/* Video Testimonial 3 */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-purple-200/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-purple-50">
                  <video 
                    className="w-full h-full object-cover"
                    poster="/images/testimonials/testimonial-3-poster.jpg"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/testimonials/testimonial-3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Julia</h4>
                  <p className="text-muted-foreground text-sm mb-3">Software Engineer & Builder</p>
                  <p className="text-sm text-muted-foreground/80">"Almost +100 followers in 2 days. The team's actually there to help."</p>
                  <a href="https://x.com/clivassy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1 mt-3">
                    @clivassy
                  </a>
                </div>
              </div>

              {/* Video Testimonial 4 */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-purple-200/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-purple-50">
                  <video 
                    className="w-full h-full object-cover"
                    poster="/images/testimonials/testimonial-4-poster.jpg"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/testimonials/testimonial-4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Grant Singleton</h4>
                  <p className="text-muted-foreground text-sm mb-3">Software Engineer & Builder</p>
                  <p className="text-sm text-muted-foreground/80">"The post ideas were better than anything I've used before."</p>
                  <a href="https://x.com/_grantsing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1 mt-3">
                    @_grantsing
                  </a>
                </div>
              </div>

              {/* Video Testimonial 5 */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-purple-200/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-purple-50">
                  <video 
                    className="w-full h-full object-cover"
                    poster="/images/testimonials/testimonial-5-poster.jpg"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/testimonials/testimonial-5.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Omar</h4>
                  <p className="text-muted-foreground text-sm mb-3">Founder</p>
                  <p className="text-sm text-muted-foreground/80">"I can create posts that fit my brand in seconds."</p>
                  <a href="https://x.com/notomarsol" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1 mt-3">
                    @notomarsol
                  </a>
                </div>
              </div>

              {/* Video Testimonial 6 */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-purple-200/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-purple-50">
                  <video 
                    className="w-full h-full object-cover"
                    poster="/images/testimonials/testimonial-6-poster.jpg"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/testimonials/testimonial-6.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Nemo</h4>
                  <p className="text-muted-foreground text-sm mb-3">Software Engineer & Indie Builder</p>
                  <p className="text-sm text-muted-foreground/80">"Postel helped me to push past the first 1000 followers."</p>
                  <a href="https://x.com/FakeUncleNemo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1 mt-3">
                    @FakeUncleNemo
                  </a>
                </div>
              </div>
            </div>

            {/* Optional: Add a play icon overlay that disappears on hover */}
            <style jsx>{`
              video::-webkit-media-controls-overlay-play-button {
                display: none;
              }
              video::-webkit-media-controls-play-button {
                display: none;
              }
            `}</style>
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
        <section className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Trusted By</h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Used by Freelancers, Creators and Founders to grow their personal brands
            </p>
            <div className="flex justify-center items-center -space-x-4">
              {[
                { bg: "from-purple-500 to-purple-600", initial: "A" },
                { bg: "from-purple-400 to-purple-500", initial: "B" },
                { bg: "from-indigo-500 to-purple-600", initial: "C" },
                { bg: "from-purple-600 to-pink-600", initial: "D" },
                { bg: "from-pink-500 to-purple-600", initial: "E" },
                { bg: "from-purple-500 to-indigo-600", initial: "F" },
                { bg: "from-indigo-400 to-purple-600", initial: "G" },
                { bg: "from-purple-600 to-purple-700", initial: "H" },
                { bg: "from-purple-400 to-indigo-600", initial: "I" },
                { bg: "from-purple-700 to-purple-800", initial: "+" },
              ].map((avatar, index) => (
                <div
                  key={index}
                  className={`relative w-16 h-16 bg-gradient-to-br ${avatar.bg} rounded-full flex items-center justify-center text-white font-semibold shadow-lg border-4 border-white hover:scale-110 hover:z-20 transition-all duration-300 cursor-pointer text-lg`}
                  style={{ zIndex: 10 - index }}
                >
                  {avatar.initial}
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>800+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>50K+ Posts Created</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-32 px-4 bg-gradient-to-b from-background/50 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Pricing</h2>
              <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl mb-6">
                Choose the plan that{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">fits your needs</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-10">
                The yearly plan includes a growth strategy call with the founders
              </p>
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-50 to-purple-100/50 text-purple-700 px-6 py-3 rounded-full text-[15px] font-medium border border-purple-200/50 shadow-sm">
                💜 50% off with code: EARLY100
              </div>
            </div>

            {/* Billing toggle */}
            <div className="flex justify-center mb-16">
              <div className="bg-muted/50 rounded-2xl p-1.5 shadow-inner border border-border/20">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-8 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                    billingPeriod === "monthly"
                      ? "bg-white text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("yearly")}
                  className={`px-8 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                    billingPeriod === "yearly"
                      ? "bg-white text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                      : "text-muted-foreground hover:text-foreground"
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
                  className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border transition-all duration-300 ${
                    plan.recommended
                      ? "border-primary scale-105 shadow-[0_8px_30px_rgba(168,85,247,0.12)]"
                      : "border-border/40 hover:border-primary/30"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-400 text-white px-5 py-2 rounded-full text-[13px] font-semibold shadow-lg">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="p-10">
                    <h3 className="font-semibold text-2xl text-foreground mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-[15px] mb-8">
                      {plan.description}
                    </p>
                    <div className="mb-10">
                      <span className="text-5xl font-bold text-foreground">
                        ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-muted-foreground text-[15px] ml-2">
                        /month
                      </span>
                      {billingPeriod === "yearly" && (
                        <div className="text-muted-foreground/70 text-[14px] line-through mt-2">
                          ${plan.monthlyPrice}/month
                        </div>
                      )}
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
                      onClick={handleSignIn}
                      className={`w-full rounded-2xl py-4 font-medium text-[16px] transition-all duration-200 ${
                        plan.recommended
                          ? "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white shadow-[0_4px_20px_rgba(168,85,247,0.15)] hover:shadow-[0_6px_30px_rgba(168,85,247,0.25)]"
                          : "bg-foreground hover:bg-foreground/90 text-white"
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
                CONTENT CREATION
              </span>
            </div>
            <h2 className="mx-auto mt-4 max-w-4xl font-semibold text-3xl sm:text-4xl md:text-5xl mb-10">
              Finally unlock your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                content creation
              </span>
              <br />
              by saying what's on your mind
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group transition-all duration-300 hover:bg-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-[16px]">No Expertise Required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group transition-all duration-300 hover:bg-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-[16px]">Authentic Posts In Seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group transition-all duration-300 hover:bg-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground text-[16px]">No Generic AI Fluff</span>
              </div>
            </div>

            <Button
              onClick={handleSignIn}
              className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white rounded-2xl px-10 py-5 font-medium text-[17px] shadow-[0_4px_20px_rgba(168,85,247,0.15)] hover:shadow-[0_6px_30px_rgba(168,85,247,0.25)] transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start For Free →
            </Button>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-xl text-foreground">Postify</span>
                </div>
                <p className="text-muted-foreground text-[15px]">
                  © 2025 Postify. All rights reserved.
                </p>
              </div>

              {/* Community column */}
              <div>
                <h4 className="font-medium text-foreground mb-5 text-[16px]">Community</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-muted-foreground text-[15px] hover:text-primary transition-colors inline-flex items-center gap-2">
                      Join our Discord
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                      Twitter
                    </a>
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
                      Terms and conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources column */}
              <div>
                <h4 className="font-medium text-foreground mb-5 text-[16px]">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground text-[15px] hover:text-primary transition-colors">
                      Support
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
                  <span>by creators, for creators</span>
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.994a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
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
