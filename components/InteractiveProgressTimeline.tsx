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
      position: { x: 0, y: 72 }
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
      position: { x: 127.5, y: 56 }
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
      position: { x: 212.5, y: 40 }
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
      position: { x: 297.5, y: 24 }
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
      position: { x: 425, y: 14 }
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
      position: { x: 510, y: 10 }
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
      position: { x: 596, y: 8 }
    }
  ]
  
  // Group milestones by phase
  const phases = [
    { name: "Planning", days: "Days 1-3", color: "purple-400", milestones: milestones.slice(0, 2) },
    { name: "Core Development", days: "Days 4-7", color: "purple-500", milestones: milestones.slice(2, 4) },
    { name: "AI Integration", days: "Days 8-12", color: "purple-600", milestones: milestones.slice(4, 6) },
    { name: "Polish & Delivery", days: "Days 13-14", color: "purple-700", milestones: milestones.slice(6, 7) }
  ]
  
  // Generate smooth curve path
  const generatePath = () => {
    const points = milestones.map(m => `${m.position.x},${m.position.y}`)
    return `M${points[0]} C${points[0]} ${points[1]} ${points[1]} C${points[1]} ${points[2]} ${points[2]} C${points[2]} ${points[3]} ${points[3]} C${points[3]} ${points[4]} ${points[4]} C${points[4]} ${points[5]} ${points[5]} C${points[5]} ${points[6]} ${points[6]}`
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
                  ? `bg-${phase.color}/10 border-${phase.color}` 
                  : 'hover:bg-muted/50'
              }`}
              onMouseEnter={() => setSelectedPhase(phase.name)}
              onMouseLeave={() => setSelectedPhase(null)}
            >
              <div className="flex items-center justify-between mb-1">
                <p className={`text-sm font-medium text-${phase.color}`}>{phase.name}</p>
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
        <div className="h-32 w-full sm:h-40 mt-auto relative">
          <svg className="h-full w-full" viewBox="0 0 596 96" preserveAspectRatio="none">
            <title>Development Progress Timeline</title>
            <desc>14-day development timeline with interactive milestones</desc>
            
            {/* Definitions */}
            <defs>
              {/* Purple gradient for fill */}
              <linearGradient id="progressFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity="0.3"></stop>
                <stop offset="50%" stopColor="#9333ea" stopOpacity="0.2"></stop>
                <stop offset="95%" stopColor="#7c3aed" stopOpacity="0.1"></stop>
              </linearGradient>
              
              {/* Purple gradient for line */}
              <linearGradient id="progressLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8"></stop>
                <stop offset="33%" stopColor="#a855f7" stopOpacity="0.9"></stop>
                <stop offset="66%" stopColor="#9333ea" stopOpacity="0.9"></stop>
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="1"></stop>
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Grid lines */}
            <g className="grid">
              {[24, 48, 72].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="596"
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  opacity="0.3"
                />
              ))}
              <line x1="0" y1="96" x2="596" y2="96" stroke="#e5e7eb" strokeWidth="1" opacity="0.5" />
            </g>
            
            {/* X-axis labels */}
            <g className="text-xs fill-muted-foreground">
              <text x="0" y="92" textAnchor="start" className="text-[10px]">Day 1</text>
              <text x="127.5" y="92" textAnchor="middle" className="text-[10px]">Day 3</text>
              <text x="212.5" y="92" textAnchor="middle" className="text-[10px]">Day 5</text>
              <text x="297.5" y="92" textAnchor="middle" className="text-[10px]">Day 7</text>
              <text x="425" y="92" textAnchor="middle" className="text-[10px]">Day 10</text>
              <text x="510" y="92" textAnchor="middle" className="text-[10px]">Day 12</text>
              <text x="596" y="92" textAnchor="end" className="text-[10px]">Day 14</text>
            </g>
            
            {/* Progress curve */}
            <g className="progress-curve">
              {/* Area fill */}
              <path
                className="transition-all duration-700"
                fill="url(#progressFill)"
                stroke="none"
                fillOpacity="0.6"
                d={`${generatePath()} L596,96 L0,96 Z`}
              />
              
              {/* Line */}
              <path
                className="transition-all duration-700"
                stroke="url(#progressLine)"
                fill="none"
                strokeWidth="2.5"
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
                        r="12"
                        fill={milestone.color}
                        opacity="0.2"
                        className={isHovered ? "animate-ping" : ""}
                      />
                    )}
                    
                    {/* Main marker */}
                    <circle
                      cx={milestone.position.x}
                      cy={milestone.position.y}
                      r={isHovered ? "7" : "5"}
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
                          x={milestone.position.x - 100}
                          y={milestone.position.y - 80}
                          width="200"
                          height="70"
                          rx="6"
                          fill="white"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          filter="url(#dropshadow)"
                        />
                        <text
                          x={milestone.position.x}
                          y={milestone.position.y - 60}
                          textAnchor="middle"
                          className="text-sm font-semibold fill-foreground"
                        >
                          {milestone.title}
                        </text>
                        <text
                          x={milestone.position.x}
                          y={milestone.position.y - 44}
                          textAnchor="middle"
                          className="text-xs fill-muted-foreground"
                        >
                          {milestone.phase}
                        </text>
                        <text
                          x={milestone.position.x}
                          y={milestone.position.y - 28}
                          textAnchor="middle"
                          className="text-[10px] fill-purple-600 font-medium"
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
          <div className="absolute top-0 right-0 flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Daily updates via Slack/Email</span>
          </div>
        </div>
      </div>
    </div>
  )
} 