"use client"

import { lazy, Suspense } from "react"
import { MagicNavbar, SocialDock, HeroSection, StatsSection, FeaturesSection, TestimonialsSection, Footer } from "@/components/organisms"

// Lazy load componentes pesados que no están en el viewport inicial
const AboutUsSection = lazy(() => import("@/components/organisms/about-us-section").then(m => ({ default: m.AboutUsSection })))
const LatestShowsSection = lazy(() => import("@/components/organisms/latest-shows-section").then(m => ({ default: m.LatestShowsSection })))
const VideosSection = lazy(() => import("@/components/organisms/videos-section").then(m => ({ default: m.VideosSection })))
const CTASection = lazy(() => import("@/components/organisms/cta-section").then(m => ({ default: m.CTASection })))

// Componente de carga simple
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

export function HomeTemplate() {
  return (
    <div className="relative min-h-screen w-full">
      <MagicNavbar />
      <SocialDock />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Suspense fallback={<SectionLoader />}>
        <AboutUsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LatestShowsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <VideosSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
      <Footer />
    </div>
  )
}

