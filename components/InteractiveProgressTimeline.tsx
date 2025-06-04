"use client"

import React, { useState } from "react"
import { Calendar, MessageSquare, Code, Palette, Cpu, CheckCircle, FileText, Database, Users, Zap } from "lucide-react"

interface Milestone {
  day: number
  title: string
  phase: string
  description: string
  deliverables: string[]
  icon: React.ElementType
  color: string
  bgColor: string
  position: { x: number; y: number }
}

export const InteractiveProgressTimeline = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null)
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null)
  
  // Define milestones with detailed information
  const milestones: Milestone[] = [
    {
      day: 1,
      title: "Project Kickoff",
      phase: "Planning",
      description: "We align on project goals, requirements, and expectations",
      deliverables: [
        "Requirements document drafted",
        "Design preferences collected",
        "Database schema proposed",
        "Tech stack confirmed",
        "Timeline and milestones set"
      ],
      icon: FileText,
      color: "#22c55e",
      bgColor: "bg-green-500/10 border-green-500/20",
      position: { x: 0, y: 72 }
    },
    {
      day: 3,
      title: "Foundation Complete",
      phase: "Planning",
      description: "Core infrastructure and planning phase wrapped up",
      deliverables: [
        "Database schema finalized",
        "Authentication system ready",
        "Basic project structure",
        "Development environment setup",
        "Initial mockups approved"
      ],
      icon: Database,
      color: "#22c55e",
      bgColor: "bg-green-500/10 border-green-500/20",
      position: { x: 127.5, y: 56 }
    },
    {
      day: 5,
      title: "Backend Ready",
      phase: "Core Development",
      description: "All server-side functionality implemented and tested",
      deliverables: [
        "API endpoints complete",
        "Business logic implemented",
        "Database operations optimized",
        "Security measures in place",
        "Backend performance tested"
      ],
      icon: Code,
      color: "#3b82f6",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      position: { x: 212.5, y: 40 }
    },
    {
      day: 7,
      title: "Frontend Complete",
      phase: "Core Development",
      description: "User interface built with your feedback incorporated",
      deliverables: [
        "All UI components built",
        "Responsive design implemented",
        "User workflows complete",
        "Frontend connected to backend",
        "Initial user testing done"
      ],
      icon: Palette,
      color: "#3b82f6",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      position: { x: 297.5, y: 24 }
    },
    {
      day: 10,
      title: "AI Features Added",
      phase: "AI Integration",
      description: "Smart features and automation capabilities integrated",
      deliverables: [
        "AI models integrated",
        "Automation workflows built",
        "Smart recommendations live",
        "Natural language features",
        "Performance optimizations"
      ],
      icon: Cpu,
      color: "#a855f7",
      bgColor: "bg-purple-500/10 border-purple-500/20",
      position: { x: 425, y: 14 }
    },
    {
      day: 12,
      title: "Testing & Feedback",
      phase: "AI Integration",
      description: "Comprehensive testing and incorporating your feedback",
      deliverables: [
        "Full system testing complete",
        "Bug fixes implemented",
        "Performance optimized",
        "User feedback incorporated",
        "Documentation updated"
      ],
      icon: Users,
      color: "#a855f7",
      bgColor: "bg-purple-500/10 border-purple-500/20",
      position: { x: 510, y: 10 }
    },
    {
      day: 14,
      title: "Final Delivery",
      phase: "Polish & Delivery",
      description: "Project delivered with all requested refinements",
      deliverables: [
        "Production-ready application",
        "Complete source code",
        "Deployment instructions",
        "User documentation",
        "30-day support begins"
      ],
      icon: CheckCircle,
      color: "#9333ea",
      bgColor: "bg-gradient-to-br from-purple-600/20 to-purple-400/20 border-purple-500/30",
      position: { x: 596, y: 8 }
    }
  ]
  
  // Group milestones by phase
  const phases = [
    { 
      name: "Planning", 
      days: "Days 1-3", 
      color: "text-green-600",
      bgColor: "bg-green-500/10 border-green-500/20",
      description: "Requirements, design, and infrastructure planning"
    },
    { 
      name: "Core Development", 
      days: "Days 4-7", 
      color: "text-blue-600",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      description: "Backend and frontend implementation"
    },
    { 
      name: "AI Integration", 
      days: "Days 8-12", 
      color: "text-purple-600",
      bgColor: "bg-purple-500/10 border-purple-500/20",
      description: "Smart features and automation"
    },
    { 
      name: "Polish & Delivery", 
      days: "Days 13-14", 
      color: "text-purple-700",
      bgColor: "bg-gradient-to-br from-purple-600/20 to-purple-400/20 border-purple-500/30",
      description: "Final refinements and handoff"
    }
  ]
  
  return (
    <div className="md:col-span-6 rounded-xl bg-muted/80 p-6 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2 text-foreground">Daily Progress Updates</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Track your project's progress with daily updates. Hover over milestones to see what you'll receive at each stage.
        </p>
        
        {/* Phase overview */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {phases.map((phase) => (
            <div
              key={phase.name}
              className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                selectedPhase === phase.name ? phase.bgColor : 'hover:bg-muted/50'
              }`}
              onClick={() => setSelectedPhase(selectedPhase === phase.name ? null : phase.name)}
            >
              <div className="flex items-center justify-between mb-1">
                <p className={`text-sm font-medium ${phase.color}`}>{phase.name}</p>
                <p className="text-xs text-muted-foreground">{phase.days}</p>
              </div>
              <p className="text-xs text-muted-foreground">{phase.description}</p>
            </div>
          ))}
        </div>
        
        {/* Interactive timeline graph */}
        <div className="h-32 w-full sm:h-40 mt-auto relative">
          <svg className="h-full w-full" viewBox="0 0 596 96" preserveAspectRatio="none">
            <title>Development Progress Timeline</title>
            <desc>14-day development timeline with interactive milestones</desc>
            
            {/* Grid lines */}
            <g className="recharts-cartesian-grid">
              <g className="recharts-cartesian-grid-horizontal">
                <line className="stroke-divider stroke-1" stroke="#e5e7eb" fill="none" x1="0" y1="24" x2="596" y2="24"></line>
                <line className="stroke-divider stroke-1" stroke="#e5e7eb" fill="none" x1="0" y1="48" x2="596" y2="48"></line>
                <line className="stroke-divider stroke-1" stroke="#e5e7eb" fill="none" x1="0" y1="72" x2="596" y2="72"></line>
                <line className="stroke-divider stroke-1" stroke="#e5e7eb" fill="none" x1="0" y1="96" x2="596" y2="96"></line>
              </g>
            </g>
            
            {/* Day markers on X-axis */}
            <g className="text-xs fill-muted-foreground">
              <text x="0" y="92" textAnchor="start" className="text-[10px]">Day 1</text>
              <text x="127.5" y="92" textAnchor="middle" className="text-[10px]">Day 3</text>
              <text x="212.5" y="92" textAnchor="middle" className="text-[10px]">Day 5</text>
              <text x="297.5" y="92" textAnchor="middle" className="text-[10px]">Day 7</text>
              <text x="425" y="92" textAnchor="middle" className="text-[10px]">Day 10</text>
              <text x="510" y="92" textAnchor="middle" className="text-[10px]">Day 12</text>
              <text x="596" y="92" textAnchor="end" className="text-[10px]">Day 14</text>
            </g>
            
            <defs>
              <linearGradient id="progressFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity="0.3"></stop>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2"></stop>
                <stop offset="95%" stopColor="#a855f7" stopOpacity="0.1"></stop>
              </linearGradient>
              <linearGradient id="progressLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8"></stop>
                <stop offset="33%" stopColor="#3b82f6" stopOpacity="0.8"></stop>
                <stop offset="66%" stopColor="#a855f7" stopOpacity="0.8"></stop>
                <stop offset="100%" stopColor="#9333ea" stopOpacity="1"></stop>
              </linearGradient>
            </defs>
            
            {/* Progress area */}
            <g className="recharts-layer recharts-area">
              <g className="recharts-layer">
                <path 
                  className="recharts-curve recharts-area-area transition-all duration-700"
                  fill="url(#progressFill)"
                  stroke="none"
                  fillOpacity="0.6"
                  d="M0,72 C42.5,72 85,64 127.5,56 C170,48 212.5,40 212.5,40 C255,32 297.5,24 297.5,24 C340,20 382.5,16 425,14 C467.5,12 510,10 510,10 C552.5,8 596,8 596,8 L596,96 L0,96 Z"
                />
                <path 
                  className="recharts-curve recharts-area-curve transition-all duration-700"
                  stroke="url(#progressLine)"
                  fill="none"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  d="M0,72 C42.5,72 85,64 127.5,56 C170,48 212.5,40 212.5,40 C255,32 297.5,24 297.5,24 C340,20 382.5,16 425,14 C467.5,12 510,10 510,10 C552.5,8 596,8 596,8"
                />
              </g>
            </g>
            
            {/* Interactive milestone markers */}
            <g className="milestone-markers">
              {milestones.map((milestone, index) => {
                const isHovered = hoveredMilestone === index
                const isPhaseSelected = selectedPhase === milestone.phase
                const shouldHighlight = isHovered || (isPhaseSelected && !hoveredMilestone)
                
                return (
                  <g 
                    key={milestone.day}
                    className="milestone-group cursor-pointer"
                    onMouseEnter={() => setHoveredMilestone(index)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                  >
                    {/* Milestone circle */}
                    <circle 
                      cx={milestone.position.x} 
                      cy={milestone.position.y} 
                      r={shouldHighlight ? 8 : 5} 
                      fill={milestone.color}
                      className="transition-all duration-200"
                      opacity={shouldHighlight ? 1 : 0.8}
                    />
                    
                    {/* Pulse effect for major milestones */}
                    {(milestone.day === 1 || milestone.day === 7 || milestone.day === 14) && (
                      <circle 
                        cx={milestone.position.x} 
                        cy={milestone.position.y} 
                        r="12" 
                        fill={milestone.color} 
                        opacity="0.2"
                        className={shouldHighlight ? "animate-ping" : ""}
                      />
                    )}
                    
                    {/* Hover tooltip */}
                    {isHovered && (
                      <foreignObject 
                        x={milestone.position.x - 150} 
                        y={milestone.position.y - 220} 
                        width="300" 
                        height="200"
                        className="pointer-events-none"
                      >
                        <div className="bg-background/95 backdrop-blur-sm border rounded-lg p-4 shadow-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-8 h-8 rounded-full ${milestone.bgColor} flex items-center justify-center`}>
                              <milestone.icon className={`w-4 h-4 ${milestone.color}`} style={{ color: milestone.color }} />
                            </div>
                            <div>
                              <p className="font-semibold text-sm">{milestone.title}</p>
                              <p className="text-xs text-muted-foreground">Day {milestone.day}</p>
                            </div>
                          </div>
                          
                          <p className="text-xs text-muted-foreground mb-3">{milestone.description}</p>
                          
                          <div className="space-y-1">
                            <p className="text-xs font-medium flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              What you'll receive:
                            </p>
                            <ul className="text-xs text-muted-foreground space-y-0.5 ml-4">
                              {milestone.deliverables.map((item, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <span className="text-green-600 mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                )
              })}
            </g>
          </svg>
          
          {/* Daily update indicator */}
          <div className="absolute top-0 right-0 flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Daily updates via Slack/Email</span>
          </div>
        </div>
      </div>
    </div>
  )
} 