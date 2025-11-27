"use client"

import { BlurFade } from "@/components/atoms"
import { NeonGradientCard } from "@/components/atoms"
import { NumberTicker } from "@/components/atoms"
import { StatCard } from "@/components/molecules"
import { colors } from "@/lib/config/colors"
import { content } from "@/lib/config/content"
import { constants } from "@/lib/config/constants"

export function StatsSection() {
  return (
    <section id="stats" className="relative py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <BlurFade 
          inView={true} 
          delay={0}
          duration={0.8}
          direction="up"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
            {content.stats.items.map((stat, idx) => (
              <StatCard 
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
          
          {/* Neon Highlight Card */}
          <BlurFade 
            inView={true} 
            delay={0.3}
            duration={constants.animations.defaultDuration}
            direction="up"
          >
            <div className="md:col-span-4">
              <NeonGradientCard
                className="max-w-2xl mx-auto"
                neonColors={{
                  firstColor: colors.neon.firstColor,
                  secondColor: colors.neon.secondColor,
                }}
                borderSize={constants.neonCard.borderSize}
                borderRadius={constants.neonCard.borderRadius.stats}
              >
                <div className="text-center py-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {content.stats.highlight.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Más de <span className="font-bold text-foreground"><NumberTicker value={content.stats.highlight.years} /> años</span> llevando diversión y risas a miles de familias
                  </p>
                </div>
              </NeonGradientCard>
            </div>
          </BlurFade>
        </BlurFade>
      </div>
    </section>
  )
}

