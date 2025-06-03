"use client"

import React from "react"
import { Code2 } from "lucide-react"

export function PostelLogo({ className = "" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center shadow-sm">
        <Code2 className="w-5 h-5 text-white" />
      </div>
      <span className="font-semibold text-lg">AI Dev Agency</span>
    </div>
  )
} 