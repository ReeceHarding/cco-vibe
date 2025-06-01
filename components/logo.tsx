"use client"

import React from "react"

export const PostelLogo = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    width="175" 
    height="40" 
    viewBox="0 0 175 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Define gradient */}
    <defs>
      <linearGradient id="postelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    
    {/* Logo icon - simplified version */}
    <g>
      {/* P icon shape */}
      <path 
        d="M8 8C8 8 8 32 8 32M8 8H20C26.627 8 32 13.373 32 20C32 26.627 26.627 32 20 32H8M8 20H20" 
        stroke="url(#postelGradient)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </g>
    
    {/* Text: Postel */}
    <text 
      x="45" 
      y="28" 
      fontFamily="system-ui, -apple-system, sans-serif" 
      fontSize="28" 
      fontWeight="600" 
      fill="#27272A"
    >
      Postel
    </text>
  </svg>
) 