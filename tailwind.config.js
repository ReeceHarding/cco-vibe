/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "color(var(--border) / <alpha-value>)",
        input: "color(var(--input) / <alpha-value>)",
        ring: "color(var(--ring) / <alpha-value>)",
        background: "color(var(--background) / <alpha-value>)",
        foreground: "color(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "color(var(--primary) / <alpha-value>)",
          foreground: "color(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "color(var(--secondary) / <alpha-value>)",
          foreground: "color(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "color(var(--destructive) / <alpha-value>)",
          foreground: "color(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "color(var(--muted) / <alpha-value>)",
          foreground: "color(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "color(var(--accent) / <alpha-value>)",
          foreground: "color(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "color(var(--popover) / <alpha-value>)",
          foreground: "color(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "color(var(--card) / <alpha-value>)",
          foreground: "color(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        instrument: ["var(--font-instrument)"],
        editorial: ["PP_Editorial_Old", "serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 