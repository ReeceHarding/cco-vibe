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
        <stop offset="0%" stopColor="#1DA1F2" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    
    {/* Twitter icon */}
    <g>
      <path d="M26 8.5C25.25 8.875 24.45 9.125 23.625 9.25C24.475 8.75 25.125 7.975 25.425 7.025C24.625 7.5 23.725 7.825 22.775 8C22 7.225 20.925 6.75 19.75 6.75C17.475 6.75 15.625 8.6 15.625 10.875C15.625 11.25 15.675 11.6 15.75 11.95C12.5 11.8 9.625 10.175 7.725 7.7C7.325 8.375 7.1 9.15 7.1 9.975C7.1 11.55 7.9 12.95 9.125 13.775C8.4 13.75 7.725 13.55 7.125 13.225V13.275C7.125 15.275 8.55 16.925 10.425 17.375C10.05 17.475 9.65 17.525 9.225 17.525C8.925 17.525 8.625 17.5 8.35 17.45C8.95 19.075 10.475 20.25 12.275 20.275C10.875 21.375 9.125 22.025 7.225 22.025C6.825 22.025 6.45 22 6.075 21.95C7.9 23.125 10.075 23.8 12.425 23.8C19.75 23.8 23.775 17.6 23.775 12.15C23.775 11.95 23.775 11.75 23.75 11.55C24.575 10.975 25.275 10.25 25.85 9.425" fill="url(#postifyLogoGradient)"/>
    </g>
    
    {/* Text: Postify */}
    <text x="36" y="22" fill="#1F2937" fontSize="18" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
      Postify
    </text>
  </svg>
) 