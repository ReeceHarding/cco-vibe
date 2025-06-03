"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { PostelLogo } from "@/components/logo"
import { useEffect, useState } from "react"

// Replicated Discord Icon SVG as a React component
const DiscordIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z" fill="currentColor"></path>
  </svg>
)

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Add console log for debugging
      console.log("Scroll position:", window.scrollY)
      setScrolled(window.scrollY > 20)
    }

    // Set initial state
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-[1100px] h-[60px] px-5 sm:px-7 py-2 backdrop-blur-2xl backdrop-saturate-150 rounded-2xl transition-all duration-300 ${
        scrolled 
          ? "bg-white/50 dark:bg-gray-900/50 border-purple-200/10 dark:border-purple-800/10 shadow-[0_2px_20px_rgba(168,85,247,0.02)]" 
          : "bg-white/70 dark:bg-gray-900/70 border-purple-200/20 dark:border-purple-800/20 shadow-[0_2px_20px_rgba(168,85,247,0.04)]"
      } border`}
      data-test="navigation"
    >
      <div className="w-[120px] sm:w-[140px] h-[40px]">
        <Link href="/" className="block hover:no-underline active:no-underline hover:opacity-80 transition-opacity duration-200">
          <PostelLogo className="h-[40px] w-auto max-w-full" />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/#pricing" className="font-geist text-[14px] font-medium text-gray-700 hover:text-primary transition-colors duration-200 tracking-tight">Pricing</Link>
        <Link href="/#faq" className="font-geist text-[14px] font-medium text-gray-700 hover:text-primary transition-colors duration-200 tracking-tight">FAQ</Link>
        <Link href="/blog" className="font-geist text-[14px] font-medium text-gray-700 hover:text-primary transition-colors duration-200 tracking-tight">Blog</Link>
        <Link href="/contact" className="font-geist text-[14px] font-medium text-gray-700 hover:text-primary transition-colors duration-200 tracking-tight">Contact</Link>
        <a href="https://discord.gg/vXUvyuPfBH" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-700 hover:text-primary transition-all duration-200" aria-label="Join our Discord">
          <DiscordIcon />
        </a>
        <Link href="/app" className="group relative flex items-center justify-center h-9 px-5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium text-[14px] rounded-xl shadow-[0_2px_8px_rgba(168,85,247,0.25)] hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)] transition-all duration-200 tracking-tight">
          <span className="relative z-10">Dashboard</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <Button 
        variant="ghost"
        size="icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="flex items-center justify-center md:hidden w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
        aria-label="Menu"
      >
        <Menu className="w-4 h-4 text-purple-700 dark:text-purple-300" />
      </Button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg rounded-2xl p-4 mx-4 border border-purple-200/20 dark:border-purple-800/20">
          <Link 
            href="/#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
          >
            Pricing
          </Link>
          <Link 
            href="/#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
          >
            FAQ
          </Link>
          <Link 
            href="/blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
          >
            Contact
          </Link>
          <a 
            href="https://discord.gg/vXUvyuPfBH" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors gap-3"
          >
            <DiscordIcon /> 
            <span>Discord</span>
          </a>
          <Link 
            href="/app" 
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full mt-3 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white text-center font-medium rounded-xl transition-all duration-200"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  )
} 