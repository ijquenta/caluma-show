"use client"

import { useEffect } from "react"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = "fixed top-4 right-4 z-50" }: ThemeToggleProps) {
  useEffect(() => {
    // Inicializar el tema desde localStorage o preferencia del sistema
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <div className={cn(className)}>
      <AnimatedThemeToggler
        className="h-10 w-10 rounded-full border bg-background shadow-lg hover:bg-accent transition-colors flex items-center justify-center"
        aria-label="Toggle theme"
      />
    </div>
  )
}

