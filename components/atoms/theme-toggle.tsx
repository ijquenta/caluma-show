"use client"

import { useEffect } from "react"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = "fixed top-4 right-4 z-50" }: ThemeToggleProps) {
  useEffect(() => {
    // Inicializar el tema desde localStorage
    // Solo usar dark si está explícitamente guardado como 'dark'
    // Si no hay tema guardado, siempre iniciar en modo claro
    const savedTheme = localStorage.getItem("theme")
    
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
      // Asegurar que si no hay tema guardado, se guarde como 'light'
      if (!savedTheme) {
        localStorage.setItem("theme", "light")
      }
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

