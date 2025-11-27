"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type NavItemProps = {
  label: string
  href: string
  isActive: boolean
  onClick: (href: string) => void
}

export function NavItem({ label, href, isActive, onClick }: NavItemProps) {
  return (
    <button
      onClick={() => onClick(href)}
      className={cn(
        "relative rounded-full px-4 py-2 text-base font-medium transition-colors",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-primary/10"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      <span className="relative">{label}</span>
    </button>
  )
}

