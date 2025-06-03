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
    
    {/* Twitter bird icon - purple gradient */}
    <g transform="translate(4, 4)">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
        fill="url(#postifyLogoGradient)" 
        transform="scale(0.9)"
      />
    </g>
    
    {/* Text: Postify using font-geist */}
    <text x="30" y="22" fill="#1F2937" fontSize="18" fontWeight="600" className="font-geist" style={{ fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}>
      Postify
    </text>
  </svg>
) 