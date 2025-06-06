"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Code2, Bot, Database, Terminal, Braces, GitBranch, Cpu, Clock, DollarSign, CheckCircle, Zap, MessageCircle, Server, Sparkles, Layers, Settings, TrendingUp, Globe, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)
  const [activeCase, setActiveCase] = useState<"slack" | "zendesk">("slack")

  useEffect(() => {
    setMounted(true)
    console.log("Services page mounted - animations starting")
    
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
    console.log("Schedule call button clicked from Services page")
    window.open("https://calendly.com/rostam", "_blank")
  }

  // Tech stack items
  const techStack = [
    { name: "LangChain", icon: Layers, description: "Build powerful LLM applications", color: "purple" },
    { name: "LangGraph", icon: GitBranch, description: "Create stateful AI workflows", color: "blue" },
    { name: "FastAPI", icon: Zap, description: "Lightning fast Python APIs", color: "green" },
    { name: "Python", icon: Code2, description: "AI and data processing", color: "yellow" },
    { name: "JavaScript", icon: Braces, description: "Modern web interfaces", color: "orange" },
    { name: "AI Models", icon: Bot, description: "GPT-4, Claude, custom models", color: "pink" }
  ]

  // Service offerings
  const services = [
    {
      icon: Bot,
      title: "AI Chatbots & Agents",
      description: "Custom chatbots that understand your business. From customer support to internal knowledge bases.",
      features: [
        "Natural language understanding",
        "Multi-channel deployment",
        "Custom training on your data",
        "Real-time learning capabilities"
      ],
      examples: "Customer support bots, Internal Q&A systems, Sales assistants"
    },
    {
      icon: Database,
      title: "Data Integration Platforms",
      description: "Make sense of your data. Let people naturally chat with databases, documents, and APIs.",
      features: [
        "Natural language queries",
        "Real-time data processing",
        "Multi-source integration",
        "Visual analytics dashboards"
      ],
      examples: "Analytics chatbots, Report generators, Data exploration tools"
    },
    {
      icon: Server,
      title: "Internal Tools Replacement",
      description: "Stop paying monthly for Slack, Notion, Jira. Own custom versions built for your workflow.",
      features: [
        "Exact feature matching",
        "Custom workflows",
        "No monthly fees ever",
        "Full source code ownership"
      ],
      examples: "Team communication, Project management, Documentation systems"
    },
    {
      icon: Sparkles,
      title: "MVP Development",
      description: "Prove market demand before raising funds. Get a working product in 2 weeks.",
      features: [
        "Full-stack applications",
        "Production ready code",
        "User authentication",
        "Payment integration"
      ],
      examples: "SaaS products, Marketplaces, Mobile apps"
    },
    {
      icon: MessageCircle,
      title: "Real-time Systems",
      description: "Build systems that respond instantly. Real-time messaging, notifications, and updates.",
      features: [
        "WebSocket connections",
        "Live collaboration",
        "Instant notifications",
        "Presence indicators"
      ],
      examples: "Chat applications, Live dashboards, Collaboration tools"
    },
    {
      icon: TrendingUp,
      title: "Process Automation",
      description: "Automate repetitive tasks. Save hundreds of hours every month.",
      features: [
        "Workflow automation",
        "API integrations",
        "Scheduled tasks",
        "Error handling"
      ],
      examples: "Data pipelines, Report automation, Integration workflows"
    }
  ]

  // Case studies
  const caseStudies = {
    slack: {
      title: "Slack Alternative",
      duration: "Built in 1 week",
      savings: "$24,000/year saved",
      description: "Custom team communication platform with AI-powered features Slack doesn't offer",
      features: [
        "Real-time messaging with channels",
        "AI-powered message summarization",
        "Smart notifications based on context",
        "Integrated task management",
        "Custom workflows and automations"
      ],
      testimonial: "We're saving $2,000/month and have features perfectly tailored to our workflow. The AI summaries alone save us hours daily.",
      client: "TechStartup Inc."
    },
    zendesk: {
      title: "Zendesk Replacement",
      duration: "Built in 1 week",
      savings: "$36,000/year saved",
      description: "AI-first customer support system that actually understands customer intent",
      features: [
        "AI ticket categorization and routing",
        "Automated response suggestions",
        "Customer sentiment analysis",
        "Predictive issue resolution",
        "Multi-channel support (email, chat, social)"
      ],
      testimonial: "Response times down 80%, customer satisfaction up 45%. The AI understands our products better than most support agents.",
      client: "E-commerce Platform"
    }
  }

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
                <Settings className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-muted-foreground">
                  Our Services
                </span>
              </div>
            </div>

            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              We build the{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                impossible
              </span>
              <br />
              in 2 weeks
            </h1>

            <p 
              className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Using AI development techniques from the world's best, we deliver in weeks 
              what others quote in months. Low upfront cost, massive long-term savings.
            </p>

            <div 
              className={`transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleScheduleCall}
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <span className="flex items-center gap-3">
                    Start Your Project
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
                <Button
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-200 hover:border-purple-300 rounded-full px-8 py-6 text-lg font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  See Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Value Props Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Low Upfront Cost</h3>
                <p className="text-muted-foreground">
                  Project-based pricing. Pay less than 3 months of SaaS fees for lifetime ownership.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Done in 2 Weeks</h3>
                <p className="text-muted-foreground">
                  Not a typo. We use AI to build at 10x speed. Daily updates, full transparency.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">100% Satisfaction</h3>
                <p className="text-muted-foreground">
                  Pay nothing until you love it. We take all the risk, you get all the reward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Our Tech Stack</h2>
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-6">
                Cutting edge{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  AI technology
                </span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We use the same tools that power ChatGPT, Claude, and other breakthrough AI products
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.name}
                  className={`group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/20 hover:border-purple-300/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)] ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center shadow-lg">
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">What We Build</h2>
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                From chatbots to{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  complete platforms
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)] ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2">{service.title}</h4>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/20">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Examples:</span> {service.examples}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 md:py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Case Studies</h2>
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Real projects,{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  real results
                </span>
              </h3>
            </div>

            {/* Case study tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-purple-100/20">
                <button
                  onClick={() => setActiveCase("slack")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCase === "slack"
                      ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Slack Alternative
                </button>
                <button
                  onClick={() => setActiveCase("zendesk")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCase === "zendesk"
                      ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Zendesk Replacement
                </button>
              </div>
            </div>

            {/* Active case study content */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-border/40 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left side - Details */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="px-4 py-2 bg-green-50 rounded-full">
                        <span className="text-sm font-semibold text-green-600">
                          {caseStudies[activeCase].duration}
                        </span>
                      </div>
                      <div className="px-4 py-2 bg-purple-50 rounded-full">
                        <span className="text-sm font-semibold text-purple-600">
                          {caseStudies[activeCase].savings}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-2xl mb-4">{caseStudies[activeCase].title}</h4>
                    <p className="text-muted-foreground mb-8">{caseStudies[activeCase].description}</p>

                    <div className="space-y-3 mb-8">
                      {caseStudies[activeCase].features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-[15px]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-purple-50/50 rounded-2xl p-6">
                      <p className="text-[15px] italic mb-3">
                        "{caseStudies[activeCase].testimonial}"
                      </p>
                      <p className="text-sm font-medium text-purple-900">
                        — {caseStudies[activeCase].client}
                      </p>
                    </div>
                  </div>

                  {/* Right side - Visual */}
                  <div className="relative bg-gradient-to-br from-purple-100 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-2xl blur-xl" />
                      <Image
                        src="/images/agency-dashboard.svg"
                        alt={caseStudies[activeCase].title}
                        width={500}
                        height={400}
                        className="relative rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Focus Section - Chatbots & Data */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100/50 text-purple-700 rounded-full text-sm font-medium border border-purple-200/50 shadow-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>The Hottest Thing Right Now</span>
              </div>
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-6">
                Everyone has data.{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Make it talk.
                </span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Your customers and employees want to chat naturally with your data. 
                We build AI systems that understand context, show their thinking, and deliver insights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="font-semibold text-2xl mb-6">Real Example: Satellite Imaging Analysis</h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-purple-600">1</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">User asks: "What shops stayed open late last month?"</p>
                      <p className="text-sm text-muted-foreground">Natural language query, no SQL needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-purple-600">2</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">AI analyzes satellite data for light patterns</p>
                      <p className="text-sm text-muted-foreground">Shows its thinking: "Checking nighttime imagery from..."</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Delivers actionable insights</p>
                      <p className="text-sm text-muted-foreground">"7 shops extended hours, 3 closed earlier than usual..."</p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleScheduleCall}
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <span className="flex items-center gap-3">
                    Build Your Data Chatbot
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Bot className="w-6 h-6 text-purple-600" />
                      <span className="font-semibold">AI Data Assistant</span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        <p className="text-gray-700">What were our peak usage hours last week?</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 text-sm">
                        <p className="text-purple-900 mb-2">Analyzing usage patterns...</p>
                        <p className="text-purple-700">Peak hours were Tuesday 2-4 PM (847 users) and Thursday 3-5 PM (923 users). Weekend usage was 60% lower.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider mb-4">Our Process</h2>
              <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                From idea to{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  production
                </span>
                {" "}in 2 weeks
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-xl mb-2">We Create Your PRD Together</h4>
                    <p className="text-muted-foreground mb-4">
                      You and I get on a call. We iron out exactly what you need, document every feature, 
                      and create a Product Requirements Document. No surprises, total clarity.
                    </p>
                    <div className="bg-purple-50/50 rounded-lg p-4 text-sm">
                      <p className="font-medium text-purple-900 mb-1">What you get:</p>
                      <p className="text-purple-700">Complete feature list, UI mockups, timeline, exact pricing</p>
                    </div>
                  </div>
                </div>

                {/* Connector line */}
                <div className="ml-6 h-8 w-0.5 bg-gradient-to-b from-purple-600 to-purple-400" />

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-xl mb-2">AI-Powered Development Sprint</h4>
                    <p className="text-muted-foreground mb-4">
                      We use advanced AI techniques to generate thousands of lines of perfect, tested code daily. 
                      You get updates every single day. Watch your product come to life in real-time.
                    </p>
                    <div className="bg-green-50/50 rounded-lg p-4 text-sm">
                      <p className="font-medium text-green-900 mb-1">Daily updates include:</p>
                      <p className="text-green-700">Screenshots, videos, live demos, progress reports</p>
                    </div>
                  </div>
                </div>

                {/* Connector line */}
                <div className="ml-6 h-8 w-0.5 bg-gradient-to-b from-purple-600 to-purple-400" />

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-xl mb-2">You Own Everything</h4>
                    <p className="text-muted-foreground mb-4">
                      Once you're happy (and only then), you pay and receive complete ownership. 
                      Source code, documentation, deployment guides. It's yours forever. No recurring fees.
                    </p>
                    <div className="bg-blue-50/50 rounded-lg p-4 text-sm">
                      <p className="font-medium text-blue-900 mb-1">Includes:</p>
                      <p className="text-blue-700">Full IP rights, source code, 30-60 days of free revisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 bg-gradient-to-br from-purple-50 via-background to-purple-50 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <span className="inline-block px-5 py-2.5 bg-primary/10 text-primary text-[13px] font-bold rounded-full uppercase tracking-wider">
                LIMITED AVAILABILITY
              </span>
            </div>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-6">
              Still paying monthly for{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                software you could own?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's build your custom solution in 2 weeks. Low upfront cost, no monthly fees ever, 
              100% satisfaction guaranteed.
            </p>
            <Button
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full px-10 py-6 text-lg font-medium shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_50px_rgba(147,51,234,0.4)] transform hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span className="flex items-center gap-3">
                Get Your Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Free website included • Pay nothing until you love it • Only 3 spots this month
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
