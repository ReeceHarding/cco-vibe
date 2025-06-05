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
  
  // Define milestones with detailed information - all using purple gradients
  const milestones: Milestone[] = [
    {
      day: 1,
      title: "Project Kickoff",
      phase: "Planning",
      description: "Initial consultation and requirements gathering",
      deliverables: ["Project scope document", "Timeline confirmation", "Tech stack decision"],
      icon: MessageSquare,
      color: "#e9d5ff", // purple-200
      bgColor: "#f3e8ff", // purple-100
      position: { x: 40, y: 120 }
    },
    {
      day: 3,
      title: "Design & Architecture",
      phase: "Planning",
      description: "System design and UI/UX mockups",
      deliverables: ["Architecture diagram", "UI mockups", "Database schema"],
      icon: Palette,
      color: "#d8b4fe", // purple-300
      bgColor: "#e9d5ff", // purple-200
      position: { x: 140, y: 100 }
    },
    {
      day: 5,
      title: "Core Backend",
      phase: "Core Development",
      description: "API and database implementation",
      deliverables: ["API endpoints", "Database setup", "Authentication"],
      icon: Database,
      color: "#c084fc", // purple-400
      bgColor: "#d8b4fe", // purple-300
      position: { x: 240, y: 80 }
    },
    {
      day: 7,
      title: "Frontend Development",
      phase: "Core Development",
      description: "UI implementation and integration",
      deliverables: ["Responsive UI", "API integration", "User flows"],
      icon: Code,
      color: "#a855f7", // purple-500
      bgColor: "#c084fc", // purple-400
      position: { x: 340, y: 60 }
    },
    {
      day: 10,
      title: "AI Integration",
      phase: "AI Integration",
      description: "Smart features and automation",
      deliverables: ["AI models integrated", "Automation workflows", "Smart recommendations"],
      icon: Cpu,
      color: "#9333ea", // purple-600
      bgColor: "#a855f7", // purple-500
      position: { x: 480, y: 40 }
    },
    {
      day: 12,
      title: "Testing & Optimization",
      phase: "AI Integration",
      description: "Performance tuning and bug fixes",
      deliverables: ["Test coverage", "Performance optimization", "Bug fixes"],
      icon: Zap,
      color: "#7c3aed", // purple-700
      bgColor: "#9333ea", // purple-600
      position: { x: 580, y: 30 }
    },
    {
      day: 14,
      title: "Launch Ready",
      phase: "Polish & Delivery",
      description: "Final deployment and handoff",
      deliverables: ["Production deployment", "Documentation", "Training session"],
      icon: CheckCircle,
      color: "#6b21a8", // purple-800
      bgColor: "#7c3aed", // purple-700
      position: { x: 680, y: 25 }
    }
  ]
  
  // Group milestones by phase with proper color classes
  const phases = [
    { 
      name: "Planning", 
      days: "Days 1-3", 
      colorClass: "text-purple-400",
      bgClass: "bg-purple-400/10 border-purple-400",
      milestones: milestones.slice(0, 2) 
    },
    { 
      name: "Core Development", 
      days: "Days 4-7", 
      colorClass: "text-purple-500",
      bgClass: "bg-purple-500/10 border-purple-500",
      milestones: milestones.slice(2, 4) 
    },
    { 
      name: "AI Integration", 
      days: "Days 8-12", 
      colorClass: "text-purple-600",
      bgClass: "bg-purple-600/10 border-purple-600",
      milestones: milestones.slice(4, 6) 
    },
    { 
      name: "Polish & Delivery", 
      days: "Days 13-14", 
      colorClass: "text-purple-700",
      bgClass: "bg-purple-700/10 border-purple-700",
      milestones: milestones.slice(6, 7) 
    }
  ]
  
  // Generate smooth curve path
  const generatePath = () => {
    let path = `M${milestones[0].position.x},${milestones[0].position.y}`
    
    for (let i = 1; i < milestones.length; i++) {
      const prev = milestones[i - 1]
      const curr = milestones[i]
      const cp1x = prev.position.x + (curr.position.x - prev.position.x) * 0.5
      const cp1y = prev.position.y
      const cp2x = prev.position.x + (curr.position.x - prev.position.x) * 0.5
      const cp2y = curr.position.y
      
      path += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${curr.position.x},${curr.position.y}`
    }
    
    return path
  }
  
  return (
    <div className="md:col-span-6 rounded-xl bg-muted/80 p-6 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2 text-foreground">Daily Progress Updates</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Track your project's progress with daily updates. Hover over milestones to see what you'll receive at each stage.
        </p>
        
        {/* Phase indicators */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {phases.map((phase) => (
            <div
              key={phase.name}
              className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                selectedPhase === phase.name 
                  ? phase.bgClass
                  : 'hover:bg-muted/50'
              }`}
              onMouseEnter={() => setSelectedPhase(phase.name)}
              onMouseLeave={() => setSelectedPhase(null)}
            >
              <div className="flex items-center justify-between mb-1">
                <p className={`text-sm font-medium ${phase.colorClass}`}>{phase.name}</p>
                <p className="text-xs text-muted-foreground">{phase.days}</p>
              </div>
              <p className="text-xs text-muted-foreground">
                {phase.name === "Planning" && "Requirements, design, and infrastructure planning"}
                {phase.name === "Core Development" && "Backend and frontend implementation"}
                {phase.name === "AI Integration" && "Smart features and automation"}
                {phase.name === "Polish & Delivery" && "Final refinements and handoff"}
              </p>
            </div>
          ))}
        </div>
        
        {/* Timeline visualization */}
        <div className="h-40 w-full mt-auto relative">
          <svg className="h-full w-full" viewBox="0 0 720 160" preserveAspectRatio="xMidYMid meet">
            <title>Development Progress Timeline</title>
            <desc>14-day development timeline with interactive milestones</desc>
            
            {/* Definitions */}
            <defs>
              {/* Purple gradient for fill */}
              <linearGradient id="progressFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2"></stop>
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05"></stop>
              </linearGradient>
              
              {/* Purple gradient for line */}
              <linearGradient id="progressLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c084fc"></stop>
                <stop offset="50%" stopColor="#9333ea"></stop>
                <stop offset="100%" stopColor="#7c3aed"></stop>
              </linearGradient>
              
              {/* Drop shadow filter */}
              <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="0" dy="1" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Grid lines */}
            <g className="grid">
              {[40, 80, 120].map((y) => (
                <line
                  key={y}
                  x1="20"
                  y1={y}
                  x2="700"
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  opacity="0.3"
                />
              ))}
              <line x1="20" y1="140" x2="700" y2="140" stroke="#e5e7eb" strokeWidth="1" opacity="0.5" />
            </g>
            
            {/* X-axis labels */}
            <g className="text-xs fill-muted-foreground">
              <text x={milestones[0].position.x} y="155" textAnchor="middle" className="text-[10px]">Day 1</text>
              <text x={milestones[1].position.x} y="155" textAnchor="middle" className="text-[10px]">Day 3</text>
              <text x={milestones[2].position.x} y="155" textAnchor="middle" className="text-[10px]">Day 5</text>
              <text x={milestones[3].position.x} y="155" textAnchor="middle" className="text-[10px]">Day 7</text>
              <text x={milestones[4].position.x} y="155" textAnchor="middle" className="text-[10px]">Day 10</text>
              <text x={milestones[5].position.x} y="155" textAnchor="middle" className="text-[10px]">Day 12</text>
              <text x={milestones[6].position.x} y="155" textAnchor="middle" className="text-[10px]">Day 14</text>
            </g>
            
            {/* Progress curve */}
            <g className="progress-curve">
              {/* Area fill */}
              <path
                className="transition-all duration-700"
                fill="url(#progressFill)"
                stroke="none"
                d={`${generatePath()} L${milestones[milestones.length - 1].position.x},140 L${milestones[0].position.x},140 Z`}
              />
              
              {/* Line */}
              <path
                className="transition-all duration-700"
                stroke="url(#progressLine)"
                fill="none"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                d={generatePath()}
                filter="url(#glow)"
              />
            </g>
            
            {/* Milestone markers */}
            <g className="milestone-markers">
              {milestones.map((milestone, index) => {
                const isHovered = hoveredMilestone === index
                const isPhaseSelected = selectedPhase === milestone.phase
                
                return (
                  <g
                    key={milestone.day}
                    className="milestone-group cursor-pointer"
                    onMouseEnter={() => setHoveredMilestone(index)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                  >
                    {/* Ripple effect for major milestones */}
                    {(index === 0 || index === 3 || index === 6) && (
                      <circle
                        cx={milestone.position.x}
                        cy={milestone.position.y}
                        r="15"
                        fill={milestone.color}
                        opacity="0.2"
                        className={isHovered ? "animate-ping" : ""}
                      />
                    )}
                    
                    {/* Main marker */}
                    <circle
                      cx={milestone.position.x}
                      cy={milestone.position.y}
                      r={isHovered ? "8" : "6"}
                      fill={milestone.color}
                      className="transition-all duration-200"
                      opacity={isHovered || isPhaseSelected ? "1" : "0.8"}
                      stroke="white"
                      strokeWidth="2"
                    />
                    
                    {/* Hover tooltip */}
                    {isHovered && (
                      <g className="animate-fadeIn">
                        <rect
                          x={milestone.position.x - 90}
                          y={milestone.position.y - 85}
                          width="180"
                          height="65"
                          rx="8"
                          fill="white"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          filter="url(#dropshadow)"
                        />
                        <text
                          x={milestone.position.x}
                          y={milestone.position.y - 65}
                          textAnchor="middle"
                          className="text-sm font-semibold fill-foreground"
                        >
                          {milestone.title}
                        </text>
                        <text
                          x={milestone.position.x}
                          y={milestone.position.y - 48}
                          textAnchor="middle"
                          className="text-xs fill-muted-foreground"
                        >
                          {milestone.phase}
                        </text>
                        <text
                          x={milestone.position.x}
                          y={milestone.position.y - 32}
                          textAnchor="middle"
                          className="text-[11px] fill-purple-600 font-medium"
                        >
                          Day {milestone.day}
                        </text>
                      </g>
                    )}
                  </g>
                )
              })}
            </g>
          </svg>
          
          {/* Info badge */}
          <div className="absolute top-0 right-0 flex items-center gap-1 text-xs text-muted-foreground bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1">
            <Calendar className="w-3 h-3" />
            <span>Daily updates via Slack/Email</span>
          </div>
        </div>
      </div>
    </div>
  )
} 