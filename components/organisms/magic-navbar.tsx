"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { WhatsAppIcon } from "@/components/organisms/social-dock"

import { Button } from "@/components/atoms"
import { ThemeToggle } from "@/components/atoms"
import { NavItem } from "@/components/molecules"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Inicio", href: "#home" },
  { label: "Experiencia", href: "#stats" },
  { label: "Paquetes", href: "#features" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Payasitos", href: "#about" },
  { label: "Shows", href: "#shows" },
  { label: "Contacto", href: "#contact" },
]

type NavItemsProps = {
  className?: string
  activeHref: string
  scrollToSection: (href: string) => void
}

const NavItems = ({ className = "", activeHref, scrollToSection }: NavItemsProps) => (
  <div className={cn("flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4", className)}>
    {NAV_ITEMS.map((item) => (
      <NavItem
        key={item.href}
        label={item.label}
        href={item.href}
        isActive={activeHref === item.href}
        onClick={scrollToSection}
      />
    ))}
  </div>
)

export function MagicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(NAV_ITEMS[0]?.href ?? "#home")

  const handleScrollSpy = useCallback(() => {
    const scrollPosition = window.scrollY + 160
    let current = NAV_ITEMS[0]?.href ?? "#home"

    NAV_ITEMS.forEach((item) => {
      const sectionId = item.href.replace("#", "")
      const section = document.getElementById(sectionId)
      if (section && section.offsetTop <= scrollPosition) {
        current = item.href
      }
    })

    setActiveHref(current)
  }, [])

  useEffect(() => {
    // Defer initial call to avoid synchronous setState in effect
    const timeoutId = setTimeout(() => {
      handleScrollSpy()
    }, 0)
    window.addEventListener("scroll", handleScrollSpy, { passive: true })
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("scroll", handleScrollSpy)
    }
  }, [handleScrollSpy])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToSection = useCallback((href: string) => {
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="rounded-3xl border border-border/50 bg-background/80 shadow-lg backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 px-6 py-3">
            <Link
              href="#home"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection("#home")
              }}
              className="flex items-baseline gap-1 text-2xl font-black tracking-tight text-foreground"
            >
              <span className="text-primary">Caluma</span>
              <span>Show</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <NavItems activeHref={activeHref} scrollToSection={scrollToSection} />
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle className="relative z-auto" />
              <Button
                size="sm"
                className="hidden md:inline-flex"
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection("#contact")
                }}
              >
                <WhatsAppIcon className="mr-2 h-4 w-4" />
                Reservar
              </Button>
              <button
                className="rounded-full border border-border/60 p-2 lg:hidden"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden overflow-hidden px-4 pb-4"
              >
                <NavItems 
                  className="rounded-2xl border border-border/60 bg-background/70 p-4 shadow-inner" 
                  activeHref={activeHref} 
                  scrollToSection={scrollToSection} 
                />
                <Button
                  size="lg"
                  className="mt-4 w-full"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection("#contact")
                  }}
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Reservar por WhatsApp
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

