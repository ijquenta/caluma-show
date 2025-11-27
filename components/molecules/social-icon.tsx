"use client"

import Link from "next/link"
import { Button } from "@/components/atoms"
import type { ComponentType } from "react"

type SocialIconProps = {
  label: string
  href: string
  icon: ComponentType<{ className?: string }>
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export function SocialIcon({ 
  label, 
  href, 
  icon: Icon, 
  variant = "outline",
  size = "sm"
}: SocialIconProps) {
  return (
    <Button variant={variant} size={size} asChild className="gap-2">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="h-4 w-4" />
        {label}
      </Link>
    </Button>
  )
}

