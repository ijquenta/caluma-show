"use client"

import { BlurFade } from "@/components/atoms"
import { LatestShowsCarousel } from "@/components/organisms/latest-shows-carousel"
import { content } from "@/lib/config/content"
import { constants } from "@/lib/config/constants"

export function LatestShowsSection() {
  return (
    <section id="shows" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <BlurFade 
          inView={true} 
          delay={constants.animations.delays.immediate}
          duration={constants.animations.defaultDuration}
          direction="up"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {content.latestShows.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {content.latestShows.subtitle}
            </p>
          </div>
        </BlurFade>

        <BlurFade 
          inView={true} 
          delay={constants.animations.delays.medium}
          duration={constants.animations.defaultDuration}
          direction="up"
        >
          <LatestShowsCarousel />
        </BlurFade>
      </div>
    </section>
  )
}

