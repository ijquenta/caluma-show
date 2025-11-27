"use client"

import Link from "next/link"
import { BlurFade } from "@/components/atoms"
import { Highlighter } from "@/components/atoms"
import { NeonGradientCard } from "@/components/atoms"
import { RainbowButton } from "@/components/atoms"
import { WhatsAppIcon } from "@/components/organisms/social-dock"
import { colors } from "@/lib/config/colors"
import { content } from "@/lib/config/content"
import { constants } from "@/lib/config/constants"
import { cn } from "@/lib/utils"

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <BlurFade 
          inView={true} 
          delay={0}
          duration={0.8}
          direction="up"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {content.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un espectáculo completo lleno de{" "}
              <Highlighter color={content.features.highlightedWords.diversión.color} action={content.features.highlightedWords.diversión.action} isView={constants.highlighter.isView}>
                {content.features.highlightedWords.diversión.word}
              </Highlighter>
              ,{" "}
              <Highlighter color={content.features.highlightedWords.magia.color} action={content.features.highlightedWords.magia.action} isView={constants.highlighter.isView}>
                {content.features.highlightedWords.magia.word}
              </Highlighter>{" "}
              y risas para toda la familia
            </p>
          </div>
        </BlurFade>

        <BlurFade 
          inView={true} 
          delay={constants.animations.delays.medium}
          duration={constants.animations.defaultDuration}
          direction="up"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:items-start gap-8">
            {content.features.items.map((feature, index) => {
              const imageSrc = feature.backgroundType === "image" && "image" in feature && feature.image 
                ? feature.image 
                : null
              const isLastPackage = index === 4
              const isPromo = "isPromo" in feature && feature.isPromo === true

              const cardContent = (
                <>
                  {isPromo && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-lg animate-pulse">
                        🔥 PROMO
                      </span>
                    </div>
                  )}
                  {imageSrc && (
                    <div className="relative w-full overflow-hidden bg-muted/30">
                      <div className="relative w-full">
                        <img
                          src={imageSrc}
                          alt={feature.name}
                          className="h-auto w-full object-contain p-6"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col gap-4 p-6 flex-shrink-0">
                    <RainbowButton asChild size="lg" className="w-full">
                      <Link href={feature.href}>
                        <WhatsAppIcon className="mr-2 h-5 w-5" />
                        {feature.cta}
                      </Link>
                    </RainbowButton>
                  </div>
                </>
              )

              if (isPromo) {
                return (
                  <NeonGradientCard
                    key={feature.name}
                    className={cn(
                      "group relative flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02]",
                      isLastPackage && "lg:row-span-2 lg:h-full"
                    )}
                    neonColors={{
                      firstColor: colors.neon.firstColor,
                      secondColor: colors.neon.secondColor,
                    }}
                    borderSize={constants.neonCard.borderSize}
                    borderRadius={constants.neonCard.borderRadius.stats}
                  >
                    {cardContent}
                  </NeonGradientCard>
                )
              }

              return (
                <div
                  key={feature.name}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card dark:bg-card/95 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
                    isLastPackage && "lg:row-span-2 lg:h-full"
                  )}
                >
                  {cardContent}
                </div>
              )
            })}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

