"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo - Enhanced styling */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="size-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-semibold text-xl text-gray-900">Postel</span>
        </Link>

        {/* Navigation links - Enhanced styling */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Pricing
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            FAQ
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* CTA Button - Matching original design */}
        <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 font-medium shadow-sm">
          Dashboard
        </Button>
      </nav>
    </header>
  )
} 