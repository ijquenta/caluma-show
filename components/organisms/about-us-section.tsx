"use client"

import { BlurFade } from "@/components/atoms"
import { AboutUsCarousel } from "@/components/organisms/about-us-carousel"
import { content } from "@/lib/config/content"
import { constants } from "@/lib/config/constants"

export function AboutUsSection() {
  return (
    <section id="about" className="relative py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <BlurFade 
          inView={true} 
          delay={constants.animations.delays.immediate}
          duration={constants.animations.defaultDuration}
          direction="up"
        >
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {content.aboutUs.subtitle}
            </p>
          </div>
        </BlurFade>
        <AboutUsCarousel />
      </div>
    </section>
  )
}

