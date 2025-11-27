"use client"

import { useRef } from "react"
import type { ReactNode } from "react"
import confetti from "canvas-confetti"
import { cn } from "@/lib/utils"

interface ConfettiOnHoverProps {
  children: ReactNode
  className?: string
}

export function ConfettiOnHover({ children, className = "" }: ConfettiOnHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasFiredRef = useRef(false)

  const handleMouseEnter = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasFiredRef.current) return

    hasFiredRef.current = true
    
    // Fire confetti from the element position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      await confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#FF6B00", "#B7FF00", "#FF6B00", "#B7FF00"],
      })
    }

    // Reset after a short delay to allow multiple hovers
    setTimeout(() => {
      hasFiredRef.current = false
    }, 500)
  }

  return (
    <div 
      ref={containerRef}
      className={cn("inline-block cursor-pointer", className)}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  )
}
