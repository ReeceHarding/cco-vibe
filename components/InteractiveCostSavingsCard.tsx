"use client"

import React, { useState } from "react"
import { Check } from "lucide-react"

interface SaaSCost {
  name: string
  monthlyCost: number
  yearlyTotal: number
  category: string
  color: string
}

export const InteractiveCostSavingsCard = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isCardHovered, setIsCardHovered] = useState(false)
  
  // Common SaaS tools that businesses typically use
  const saasTools: SaaSCost[] = [
    { name: "Slack", monthlyCost: 1250, yearlyTotal: 15000, category: "Communication", color: "#4A154B" },
    { name: "Salesforce", monthlyCost: 3750, yearlyTotal: 45000, category: "CRM", color: "#00A1E0" },
    { name: "Jira", monthlyCost: 875, yearlyTotal: 10500, category: "Project Management", color: "#0052CC" },
    { name: "Zendesk", monthlyCost: 2500, yearlyTotal: 30000, category: "Support", color: "#03363D" },
    { name: "Intercom", monthlyCost: 2000, yearlyTotal: 24000, category: "Customer Engagement", color: "#0071F0" },
    { name: "HubSpot", monthlyCost: 3333, yearlyTotal: 40000, category: "Marketing", color: "#FF7A59" },
    { name: "Monday.com", monthlyCost: 1667, yearlyTotal: 20000, category: "Work Management", color: "#6161FF" },
    { name: "Figma", monthlyCost: 625, yearlyTotal: 7500, category: "Design", color: "#F24E1E" },
    { name: "Notion", monthlyCost: 833, yearlyTotal: 10000, category: "Documentation", color: "#000000" },
    { name: "Others", monthlyCost: 3166, yearlyTotal: 38000, category: "Various", color: "#9CA3AF" }
  ]
  
  const totalYearlyCost = saasTools.reduce((sum, tool) => sum + tool.yearlyTotal, 0)
  const customSolutionCost = 20000
  const yearlySavings = totalYearlyCost - customSolutionCost
  const savingsPercentage = Math.round((yearlySavings / totalYearlyCost) * 100)
  
  // Calculate bar heights for visualization
  const maxHeight = 200
  const saasBarHeight = maxHeight
  const customBarHeight = (customSolutionCost / totalYearlyCost) * maxHeight
  
  return (
    <div 
      className="md:col-span-6 rounded-xl bg-muted/80 p-6 shadow-md border border-border/40 relative overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg group"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2 text-foreground">Save millions on software costs</h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Replace expensive SaaS subscriptions with custom built tools that you own forever. No more monthly fees.
        </p>
        
        {/* Interactive bar chart comparison */}
        <div className="flex-1 min-h-[300px] relative">
          <div className="absolute inset-0 flex items-end justify-center gap-8 pb-8">
            {/* SaaS Stack Bar */}
            <div className="relative group/bar">
              <div 
                className="w-24 md:w-32 relative rounded-t-lg overflow-hidden transition-all duration-500 cursor-pointer"
                style={{ height: `${saasBarHeight}px` }}
                onMouseEnter={() => setHoveredItem('saas')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Stacked bars for each SaaS tool */}
                {saasTools.map((tool, index) => {
                  const height = (tool.yearlyTotal / totalYearlyCost) * saasBarHeight
                  const yOffset = saasTools.slice(0, index).reduce((sum, t) => sum + (t.yearlyTotal / totalYearlyCost) * saasBarHeight, 0)
                  
                  return (
                    <div
                      key={tool.name}
                      className="absolute left-0 right-0 transition-all duration-300 hover:scale-105"
                      style={{
                        bottom: `${yOffset}px`,
                        height: `${height}px`,
                        backgroundColor: tool.color,
                        opacity: hoveredItem === 'saas' || hoveredItem === tool.name ? 1 : 0.8
                      }}
                      onMouseEnter={(e) => {
                        e.stopPropagation()
                        setHoveredItem(tool.name)
                      }}
                    >
                      {hoveredItem === tool.name && (
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full bg-background/95 backdrop-blur-sm border rounded-lg p-3 shadow-lg z-10 whitespace-nowrap">
                          <p className="font-semibold text-sm">{tool.name}</p>
                          <p className="text-xs text-muted-foreground">{tool.category}</p>
                          <p className="text-xs font-medium mt-1">${tool.monthlyCost}/mo</p>
                          <p className="text-xs font-bold text-foreground">${tool.yearlyTotal.toLocaleString()}/year</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              
              {/* Label below bar */}
              <div className="text-center mt-3">
                <p className="text-xs text-muted-foreground">Annual SaaS Costs</p>
                <p className="text-lg font-bold text-muted-foreground/70 line-through">
                  ${(totalYearlyCost / 1000).toFixed(0)}k
                </p>
                <p className="text-xs text-muted-foreground">/year forever</p>
              </div>
              
              {/* Hover tooltip for entire bar */}
              {hoveredItem === 'saas' && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full bg-background/95 backdrop-blur-sm border rounded-lg p-3 shadow-lg z-10">
                  <p className="font-semibold text-sm mb-2">Annual SaaS Stack</p>
                  <div className="space-y-1 text-xs">
                    {saasTools.slice(0, 5).map(tool => (
                      <div key={tool.name} className="flex justify-between gap-4">
                        <span>{tool.name}:</span>
                        <span className="font-medium">${(tool.yearlyTotal / 1000).toFixed(1)}k</span>
                      </div>
                    ))}
                    <div className="flex justify-between gap-4 pt-1 border-t">
                      <span>+ 5 more tools</span>
                      <span className="font-medium">...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Custom Solution Bar */}
            <div className="relative group/bar">
              <div 
                className="w-24 md:w-32 bg-gradient-to-t from-green-600 to-green-500 rounded-t-lg transition-all duration-500 cursor-pointer relative overflow-hidden"
                style={{ 
                  height: `${isCardHovered ? customBarHeight : 20}px`,
                  transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={() => setHoveredItem('custom')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Animated checkmarks */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Check className={`w-8 h-8 text-white/20 absolute transition-all duration-500 ${
                    isCardHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`} style={{ transform: isCardHovered ? 'rotate(0deg)' : 'rotate(-180deg)' }} />
                </div>
                
                {/* Savings indicator */}
                {isCardHovered && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full">
                    <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                      Save {savingsPercentage}%
                    </div>
                  </div>
                )}
              </div>
              
              {/* Label below bar */}
              <div className="text-center mt-3">
                <p className="text-xs text-green-600 font-medium">Custom Solution</p>
                <p className={`font-bold text-green-600 transition-all duration-500 ${
                  isCardHovered ? 'text-2xl' : 'text-lg'
                }`}>
                  ${customSolutionCost / 1000}k
                </p>
                <p className="text-xs text-green-600 font-medium">one time</p>
              </div>
              
              {/* Hover tooltip */}
              {hoveredItem === 'custom' && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full bg-background/95 backdrop-blur-sm border rounded-lg p-3 shadow-lg z-10 whitespace-nowrap">
                  <p className="font-semibold text-sm mb-2">What You Get</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>All features combined</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>Custom built for you</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>Own it forever</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>No monthly fees</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-muted-foreground">
            <span>${(totalYearlyCost / 1000).toFixed(0)}k</span>
            <span>${(totalYearlyCost / 2000).toFixed(0)}k</span>
            <span>$0</span>
          </div>
          
          {/* Bottom summary */}
          {isCardHovered && (
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <p className="text-sm font-medium text-green-600">
                Save ${(yearlySavings / 1000).toFixed(0)}k in the first year alone
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 