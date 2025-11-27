"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/atoms"
import { BlurFade } from "@/components/atoms"
import { Highlighter } from "@/components/atoms"
import { LightRays } from "@/components/atoms"
import { NeonGradientCard } from "@/components/atoms"
import { WhatsAppIcon } from "@/components/organisms/social-dock"
import { colors } from "@/lib/config/colors"
import { content } from "@/lib/config/content"
import { constants } from "@/lib/config/constants"

export function CTASection() {
  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <LightRays 
        count={constants.lightRays.cta.count}
        color={colors.lightRays.cta}
        blur={constants.lightRays.cta.blur}
        speed={constants.lightRays.cta.speed}
        length={constants.lightRays.cta.length}
        className="z-0"
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <BlurFade 
          inView={true} 
          delay={constants.animations.delays.immediate}
          duration={constants.animations.defaultDuration}
          direction="up"
        >
          <NeonGradientCard
            className="max-w-3xl mx-auto"
            neonColors={{
              firstColor: colors.neon.firstColor,
              secondColor: colors.neon.secondColor,
            }}
            borderSize={constants.neonCard.borderSize}
            borderRadius={constants.neonCard.borderRadius.cta}
          >
            <div className="text-center space-y-6 py-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                {content.cta.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                Reserva tu lugar ahora y disfruta de un espectáculo lleno de{" "}
                <Highlighter color={content.cta.highlightedWords.risas.color} action={content.cta.highlightedWords.risas.action} isView={constants.highlighter.isView}>
                  {content.cta.highlightedWords.risas.word}
                </Highlighter>
                ,{" "}
                <Highlighter color={content.cta.highlightedWords.magia.color} action={content.cta.highlightedWords.magia.action} isView={constants.highlighter.isView}>
                  {content.cta.highlightedWords.magia.word}
                </Highlighter>{" "}
                y{" "}
                <Highlighter color={content.cta.highlightedWords.diversión.color} action={content.cta.highlightedWords.diversión.action} isView={constants.highlighter.isView}>
                  {content.cta.highlightedWords.diversión.word}
                </Highlighter>
              </p>
              <div className="flex justify-center pt-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link
                    href={content.cta.button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                    {content.cta.button.text}
                  </Link>
                </Button>
              </div>
            </div>
          </NeonGradientCard>
        </BlurFade>
      </div>
    </section>
  )
}

