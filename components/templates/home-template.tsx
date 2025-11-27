"use client"

import { MagicNavbar, SocialDock, HeroSection, StatsSection, FeaturesSection, TestimonialsSection, AboutUsSection, LatestShowsSection, VideosSection, CTASection, Footer } from "@/components/organisms"

export function HomeTemplate() {
  return (
    <div className="relative min-h-screen w-full">
      <MagicNavbar />
      <SocialDock />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutUsSection />
      <LatestShowsSection />
      <VideosSection />
      <CTASection />
      <Footer />
    </div>
  )
}

