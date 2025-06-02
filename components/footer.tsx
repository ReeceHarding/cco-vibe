"use client"

import Link from "next/link"
import { PostelLogo } from "@/components/logo"

export function Footer() {
  console.log("Footer component rendering");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/70 dark:border-gray-800/70 py-12 text-sm text-gray-600 dark:text-gray-400">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 items-start px-4">
        {/* Column 1: Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <Link href="/" className="block hover:opacity-80 transition-opacity duration-200">
            <PostelLogo className="h-[36px] w-auto" />
          </Link>
          <p className="opacity-80 tracking-tight text-center md:text-left">
            © {currentYear} Postify. All rights reserved.
          </p>
          <p className="text-xs opacity-60 text-center md:text-left tracking-tight">
            Sleek content creation for modern brands.
          </p>
        </div>

        {/* Column 2: Company & Community Links */}
        <div className="flex flex-col items-center md:items-start gap-3 tracking-tight">
          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Company</h5>
          <Link href="/blog" className="hover:text-blue-600 transition-colors duration-200">Blog</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact Us</Link>
          <a href="https://discord.gg/vXUvyuPfBH" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">Join our Discord</a>
        </div>

        {/* Column 3: Legal Links */}
        <div className="flex flex-col items-center md:items-start gap-3 tracking-tight">
          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Legal</h5>
          <Link href="/legal/imprint" className="hover:text-blue-600 transition-colors duration-200">Imprint</Link>
          <Link href="/legal/privacy-policy" className="hover:text-blue-600 transition-colors duration-200">Privacy Policy</Link>
          <Link href="/legal/terms" className="hover:text-blue-600 transition-colors duration-200">Terms and Conditions</Link>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-500 tracking-tight">
        <p>Postify - AI-Powered Content Creation for X/Twitter.</p>
      </div>
    </footer>
  )
} 