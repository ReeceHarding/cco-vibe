"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  console.log("Navigation component mounted")
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="font-semibold text-2xl text-gray-900">Postel</span>
        </Link>

        {/* Navigation links */}
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

        {/* CTA Button */}
        <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-2 font-medium shadow-md transition-all hover:scale-105">
          Dashboard
        </Button>
      </nav>
    </header>
  )
} 