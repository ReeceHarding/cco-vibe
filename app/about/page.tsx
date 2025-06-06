"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Code2, Brain, Rocket, Shield, Users, Zap, Check, Star, Award, Target, BookOpen, Heart } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("About page mounted - animations starting")
    
    // Add scroll listener for navigation
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowNavigation(scrollY > 100)
      console.log(`Scroll position: ${scrollY}, Navigation visible: ${scrollY > 100}`)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScheduleCall = () => {
    console.log("Schedule call button clicked from About page")
    window.open("https://calendly.com/rostam", "_blank")
  }

  // Core values data
  const coreValues = [
    {
      icon: Brain,
      title: "AI Excellence",
      description: "We're not just developers who use AI. We're AI specialists trained by the pioneers who created the technology itself.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We measure our worth by the value we create for your business, not hours billed.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Zero Risk",
      description: "We're so confident in our work that you pay nothing until you're completely satisfied. That's real accountability.",
      color: "green"
    },
    {
      icon: Rocket,
      title: "Speed & Quality",
      description: "2 weeks isn't a gimmick. It's what happens when elite developers use AI the way it was meant to be used.",
      color: "orange"
    }
  ]

  // Timeline milestones
  const milestones = [
    {
      year: "2023",
      title: "Accepted into Gauntlet AI",
      description: "Selected from thousands of applicants to join the world's most elite AI development program",
      icon: Award
    },
    {
      year: "2024",
      title: "Graduated Top of Class",
      description: "Mastered advanced AI development techniques that 99% of developers don't know exist",
      icon: Star
    },
    {
      year: "2024",
      title: "Founded CCO Vibe",
      description: "Started helping businesses stop renting software and start owning their digital assets",
      icon: Target
    },
    {
      year: "2025",
      title: "100+ Projects Delivered",
      description: "Built custom software for startups and enterprises, saving them millions in SaaS fees",
      icon: Check
    }
  ]

  return (
    <>
      <Navigation showNavigation={showNavigation} />
      <main className="relative min-h-screen overflow-hidden">
        {/* Hero Section */}
        <div className="relative py-20 md:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-[20%] w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-[20%] w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container max-w-5xl mx-auto text-center px-4">
            <div 
              className={`inline-flex items-center gap-2 mb-8 transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full border border-purple-200/30">
                <BookOpen className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-muted-foreground">
                  Our Story
                </span>
              </div>
            </div>

            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              We're not your typical{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                dev agency
              </span>
            </h1>

            <p 
              className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              We're Gauntlet AI graduates who learned from the creators of AI development itself. 
              While others talk about AI, we've mastered it at the source.
            </p>

            <div 
              className={`transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Button
                onClick={handleScheduleCall}
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span className="flex items-center gap-3">
                  Let's Build Something Amazing
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Our Mission</h2>
                <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-6">
                  Stop renting.{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                    Start owning.
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Every month, businesses waste thousands on SaaS subscriptions for generic software that 
                  barely fits their needs. We believe that's insane.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With AI development techniques that 99% of developers don't even know exist, we can build 
                  you custom software for less than 3 months of your current SaaS bills. And you'll own it forever.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">No more monthly fees:</span> One payment, lifetime ownership
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Built for you:</span> Custom features that match your exact workflow
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">AI-powered:</span> Cutting edge features your competitors don't have
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-200/20">
                  <Image
                    src="/images/agency-dashboard.svg"
                    alt="Custom software development"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Core Values</h2>
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                What drives us{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  every day
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={value.title}
                  className={`group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-100/20 hover:border-purple-300/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)] ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center`}>
                      <value.icon className={`w-6 h-6 text-purple-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Our Journey</h2>
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                From elite training to{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  your success
                </span>
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-purple-400 md:-translate-x-1/2" />

              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center shadow-lg z-10">
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/20">
                        <span className="text-purple-600 font-mono text-sm font-bold">{milestone.year}</span>
                        <h4 className="font-semibold text-xl mt-2 mb-3">{milestone.title}</h4>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Why Choose Us</h2>
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                The{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  CCO Vibe
                </span>
                {" "}difference
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Elite Training */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-xl mb-3">Elite AI Training</h4>
                <p className="text-muted-foreground">
                  Gauntlet AI graduates. Trained by the pioneers who created AI development. 
                  We don't just use AI, we understand it at its core.
                </p>
              </div>

              {/* Great Communication */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-xl mb-3">Masters of Communication</h4>
                <p className="text-muted-foreground">
                  We read the room, understand your needs, and communicate clearly. 
                  Daily updates, no jargon, just results you can see.
                </p>
              </div>

              {/* Temperature Reading */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-xl mb-3">Perfect Collaboration</h4>
                <p className="text-muted-foreground">
                  We ensure you and our developers work perfectly together. 
                  No miscommunication, no wasted time, just smooth sailing.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                  &lt;1%
                </div>
                <p className="text-muted-foreground">Gauntlet AI acceptance rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                  10x
                </div>
                <p className="text-muted-foreground">Faster than traditional dev</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p className="text-muted-foreground">Client satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                  $0
                </div>
                <p className="text-muted-foreground">Until you love it</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 bg-gradient-to-br from-purple-50 via-background to-purple-50 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-6">
              Ready to stop renting and{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                start owning?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's build something amazing together. Software that you'll own forever, 
              built by the best in the business.
            </p>
            <Button
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full px-10 py-6 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span className="flex items-center gap-3">
                Schedule Your Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              100% risk free • See daily progress • Pay only when satisfied
            </p>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </section>
      </main>
    </>
  )
} 