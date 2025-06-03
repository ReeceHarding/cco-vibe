"use client"

import React from "react"

export const PostelLogo = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    width="120" 
    height="32" 
    viewBox="0 0 120 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Define gradient */}
    <defs>
      <linearGradient id="postifyLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
    </defs>
    
    {/* Shield icon - matching the footer design */}
    <g>
      <path d="M16 4L8 8.5V17.5C8 21.915 10.768 25.83 14.8 27C18.832 25.83 21.6 21.915 21.6 17.5V8.5L16 4Z" fill="url(#postifyLogoGradient)"/>
    </g>
    
    {/* Text: Postify */}
    <text x="30" y="22" fill="#1F2937" fontSize="18" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
      Postify
    </text>
  </svg>
) 