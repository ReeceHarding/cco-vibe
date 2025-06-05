"use client"

import React, { useState } from "react"

export const InteractiveCostSavingsCard = () => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null)
  const [isCardHovered, setIsCardHovered] = useState(false)
  
  // Cost calculations
  const saasAnnualCost = 24000 // $24k per year
  const customSolutionCost = 20000 // $20k one-time
  const years = 10
  
  // Generate data points for the chart
  const generateDataPoints = () => {
    const points = []
    for (let year = 0; year <= years; year++) {
      points.push({
        year,
        saasCumulative: year * saasAnnualCost,
        customCumulative: year === 0 ? 0 : customSolutionCost, // Custom cost kicks in at year 1
        savings: year === 0 ? 0 : (year * saasAnnualCost) - customSolutionCost
      })
    }
    return points
  }
  
  const dataPoints = generateDataPoints()
  const maxCost = dataPoints[dataPoints.length - 1].saasCumulative
  
  // Chart dimensions - more compact
  const chartWidth = 596
  const chartHeight = 200 // Reduced height for better proportions
  const padding = { top: 30, right: 30, bottom: 40, left: 60 }
  const graphWidth = chartWidth - padding.left - padding.right
  const graphHeight = chartHeight - padding.top - padding.bottom
  
  // Scale functions
  const xScale = (year: number) => (year / years) * graphWidth + padding.left
  const yScale = (cost: number) => chartHeight - padding.bottom - (cost / maxCost) * graphHeight
  
  // Generate path strings
  const saasPath = dataPoints
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${xScale(point.year)} ${yScale(point.saasCumulative)}`)
    .join(' ')
  
  const customPath = dataPoints
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${xScale(point.year)} ${yScale(point.customCumulative)}`)
    .join(' ')
  
  // Area paths (for gradient fill)
  const saasAreaPath = `${saasPath} L ${xScale(years)} ${chartHeight - padding.bottom} L ${xScale(0)} ${chartHeight - padding.bottom} Z`
  const customAreaPath = `${customPath} L ${xScale(years)} ${chartHeight - padding.bottom} L ${xScale(0)} ${chartHeight - padding.bottom} Z`
  
  return (
    <div 
      className="md:col-span-6 rounded-xl bg-muted/80 p-6 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2 text-foreground">Save millions on software costs</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Replace expensive SaaS subscriptions with custom built tools that you own forever. No more monthly fees.
        </p>
        
        {/* Cost comparison display */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-muted-foreground">SaaS costs:</span>
            <span className="text-lg font-bold text-muted-foreground/70">${(saasAnnualCost / 1000).toFixed(0)}k</span>
            <span className="text-xs text-muted-foreground">/year</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-purple-600 font-medium">Our solution:</span>
            <span className={`font-bold text-purple-600 transition-all duration-500 ${
              isCardHovered ? 'text-2xl' : 'text-lg'
            }`}>
              ${(customSolutionCost / 1000).toFixed(0)}k
            </span>
            <span className="text-xs text-purple-600 font-medium">one time</span>
          </div>
        </div>
        
        {/* Interactive SVG Chart */}
        <div className="flex-1 min-h-[240px] relative">
          <svg 
            className="w-full h-full cursor-crosshair" 
            viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
            preserveAspectRatio="xMidYMid meet"
          >
            <title>10-Year Cost Comparison</title>
            <desc>Cumulative cost comparison over 10 years between SaaS and custom solution</desc>
            
            {/* Definitions */}
            <defs>
              {/* SaaS gradient - darker purple for contrast */}
              <linearGradient id="saasGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6b21a8" stopOpacity="0.3"></stop>
                <stop offset="100%" stopColor="#6b21a8" stopOpacity="0.05"></stop>
              </linearGradient>
              
              {/* Custom solution gradient - lighter purple */}
              <linearGradient id="customGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3"></stop>
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05"></stop>
              </linearGradient>
              
              {/* Shadow filter */}
              <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="0" dy="1" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Grid lines */}
            <g className="grid">
              {/* Horizontal grid lines - fewer for cleaner look */}
              {[0, 60000, 120000, 180000, 240000].map((cost) => (
                <line
                  key={cost}
                  x1={padding.left}
                  y1={yScale(cost)}
                  x2={chartWidth - padding.right}
                  y2={yScale(cost)}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray={cost === 0 ? "0" : "2,2"}
                  opacity="0.5"
                />
              ))}
              
              {/* Vertical grid lines for years - only show even years */}
              {[0, 2, 4, 6, 8, 10].map((year) => (
                <line
                  key={year}
                  x1={xScale(year)}
                  y1={padding.top}
                  x2={xScale(year)}
                  y2={chartHeight - padding.bottom}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray={year === 0 || year === 10 ? "0" : "2,2"}
                  opacity="0.5"
                />
              ))}
            </g>
            
            {/* Area fills */}
            <g className="areas">
              {/* SaaS area */}
              <path
                d={saasAreaPath}
                fill="url(#saasGradient)"
                className="transition-all duration-700"
                opacity={hoveredYear !== null ? 0.3 : 0.6}
              />
              
              {/* Custom solution area */}
              <path
                d={customAreaPath}
                fill="url(#customGradient)"
                className="transition-all duration-700"
                opacity={hoveredYear !== null ? 0.3 : 0.6}
              />
            </g>
            
            {/* Lines */}
            <g className="lines">
              {/* SaaS line */}
              <path
                d={saasPath}
                fill="none"
                stroke="#6b21a8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
                filter="url(#dropshadow)"
              />
              
              {/* Custom solution line */}
              <path
                d={customPath}
                fill="none"
                stroke="#a855f7"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
                filter="url(#dropshadow)"
              />
            </g>
            
            {/* Interactive hover areas and dots */}
            <g className="interactive">
              {dataPoints.map((point, index) => (
                <g key={point.year}>
                  {/* Invisible hover area */}
                  <rect
                    x={index === 0 ? 0 : xScale(point.year - 0.5)}
                    y={0}
                    width={graphWidth / years}
                    height={chartHeight}
                    fill="transparent"
                    onMouseEnter={() => setHoveredYear(point.year)}
                    onMouseLeave={() => setHoveredYear(null)}
                    style={{ cursor: 'crosshair' }}
                  />
                  
                  {/* Data points */}
                  {hoveredYear === point.year && (
                    <>
                      {/* SaaS dot */}
                      <circle
                        cx={xScale(point.year)}
                        cy={yScale(point.saasCumulative)}
                        r="5"
                        fill="#6b21a8"
                        stroke="white"
                        strokeWidth="2"
                        className="animate-scale-in"
                      />
                      
                      {/* Custom solution dot */}
                      <circle
                        cx={xScale(point.year)}
                        cy={yScale(point.customCumulative)}
                        r="5"
                        fill="#a855f7"
                        stroke="white"
                        strokeWidth="2"
                        className="animate-scale-in"
                      />
                      
                      {/* Vertical line */}
                      <line
                        x1={xScale(point.year)}
                        y1={padding.top}
                        x2={xScale(point.year)}
                        y2={chartHeight - padding.bottom}
                        stroke="#a855f7"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        opacity="0.3"
                      />
                    </>
                  )}
                </g>
              ))}
            </g>
            
            {/* Axis labels */}
            <g className="labels">
              {/* Y-axis labels */}
              <text x={padding.left - 10} y={yScale(0)} textAnchor="end" className="text-xs fill-muted-foreground">$0</text>
              <text x={padding.left - 10} y={yScale(60000)} textAnchor="end" className="text-xs fill-muted-foreground">$60k</text>
              <text x={padding.left - 10} y={yScale(120000)} textAnchor="end" className="text-xs fill-muted-foreground">$120k</text>
              <text x={padding.left - 10} y={yScale(180000)} textAnchor="end" className="text-xs fill-muted-foreground">$180k</text>
              <text x={padding.left - 10} y={yScale(240000)} textAnchor="end" className="text-xs fill-muted-foreground">$240k</text>
              
              {/* X-axis labels */}
              {[0, 2, 4, 6, 8, 10].map((year) => (
                <text 
                  key={year} 
                  x={xScale(year)} 
                  y={chartHeight - padding.bottom + 20} 
                  textAnchor="middle" 
                  className="text-xs fill-muted-foreground"
                >
                  {year === 0 ? 'Now' : `Year ${year}`}
                </text>
              ))}
            </g>
            
            {/* Hover tooltip */}
            {hoveredYear !== null && (
              <g className="tooltip animate-fadeIn">
                <rect
                  x={xScale(hoveredYear) - 80}
                  y={padding.top - 10}
                  width="160"
                  height="75"
                  rx="6"
                  fill="white"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  filter="url(#dropshadow)"
                />
                <text x={xScale(hoveredYear)} y={padding.top + 8} textAnchor="middle" className="text-sm font-semibold fill-foreground">
                  {hoveredYear === 0 ? 'Starting Point' : `Year ${hoveredYear}`}
                </text>
                <text x={xScale(hoveredYear)} y={padding.top + 26} textAnchor="middle" className="text-xs fill-purple-700">
                  SaaS Total: ${(dataPoints[hoveredYear].saasCumulative / 1000).toFixed(0)}k
                </text>
                <text x={xScale(hoveredYear)} y={padding.top + 42} textAnchor="middle" className="text-xs fill-purple-600">
                  Custom Total: ${(dataPoints[hoveredYear].customCumulative / 1000).toFixed(0)}k
                </text>
                {hoveredYear > 0 && (
                  <text x={xScale(hoveredYear)} y={padding.top + 58} textAnchor="middle" className="text-xs font-semibold fill-purple-800">
                    Saved: ${(dataPoints[hoveredYear].savings / 1000).toFixed(0)}k
                  </text>
                )}
              </g>
            )}
          </svg>
          
          {/* Legend - positioned in bottom left to avoid overlap */}
          <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-border/20">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-purple-700"></div>
                <span className="text-xs text-muted-foreground">SaaS (recurring)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-purple-500"></div>
                <span className="text-xs text-muted-foreground">Custom (one-time)</span>
              </div>
            </div>
          </div>
          
          {/* Summary statistics - simplified and more elegant */}
          {isCardHovered && (
            <div className="absolute top-2 right-2 animate-fadeIn">
              <div className="bg-purple-600 text-white rounded-lg px-4 py-2 shadow-lg">
                <p className="text-sm font-semibold">Save ${(dataPoints[years].savings / 1000).toFixed(0)}k over 10 years</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 