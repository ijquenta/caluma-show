"use client"

import Link from "next/link"
import { Button, BlurFade, Marquee, SparklesText, Highlighter, LightRays, ConfettiOnHover } from "@/components/atoms"
import { WhatsAppIcon } from "@/components/organisms/social-dock"
import { DraggableCard } from "@/components/organisms"
import { colors } from "@/lib/config/colors"
import { content } from "@/lib/config/content"
import { constants } from "@/lib/config/constants"

export function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-32 pb-20 sm:pb-24">
      <LightRays 
        count={constants.lightRays.hero.count}
        color={colors.lightRays.hero}
        blur={constants.lightRays.hero.blur}
        speed={constants.lightRays.hero.speed}
        length={constants.lightRays.hero.length}
        className="z-0"
      />
      <div className="relative z-10 flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center">
        {/* Hero Content - Left Side */}
        <div className="flex flex-col items-center px-4 text-center">
          <div className="w-full max-w-2xl space-y-8">
          <BlurFade 
            inView={true} 
            delay={constants.animations.delays.immediate}
            duration={constants.animations.defaultDuration}
            direction="up"
            offset={constants.animations.defaultOffset}
          >
            <ConfettiOnHover className="w-full">
              <SparklesText className="block w-full text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1] text-balance break-words mx-auto">
                {content.hero.title}
              </SparklesText>
            </ConfettiOnHover>
          </BlurFade>
          
          <BlurFade 
            inView={true} 
            delay={constants.animations.delays.medium}
            duration={constants.animations.defaultDuration}
            direction="up"
            offset={constants.animations.defaultOffset}
          >
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-center text-balance">
              El espectáculo de{" "}
              <Highlighter action={content.hero.highlightedWords.payasos.action} color={content.hero.highlightedWords.payasos.color}>
                {content.hero.highlightedWords.payasos.word}
              </Highlighter>{" "}
              más{" "}
              <Highlighter color={content.hero.highlightedWords.divertido.color} action={content.hero.highlightedWords.divertido.action} isView={constants.highlighter.isView}>
                {content.hero.highlightedWords.divertido.word}
              </Highlighter>{" "}
              y{" "}
              <Highlighter color={content.hero.highlightedWords.mágico.color} action={content.hero.highlightedWords.mágico.action} isView={constants.highlighter.isView}>
                {content.hero.highlightedWords.mágico.word}
              </Highlighter>{" "}
              para toda la familia
            </p>
          </BlurFade>

          <BlurFade 
            inView={true} 
            delay={constants.animations.delays.short}
            duration={constants.animations.defaultDuration}
            direction="up"
            offset={constants.animations.defaultOffset}
          >
            <Marquee
              pauseOnHover={constants.marquee.pauseOnHover}
              className={`[--duration:${constants.marquee.duration}] max-w-full`}
            >
              {content.hero.marquee.map((item, idx) => (
                <div
                  key={idx}
                  className="mx-4 flex items-center gap-2 whitespace-nowrap text-muted-foreground"
                >
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </Marquee>
          </BlurFade>
          
          <BlurFade 
            inView={true} 
            delay={constants.animations.delays.long}
            duration={constants.animations.defaultDuration}
            direction="up"
            offset={constants.animations.defaultOffset}
          >
            <div className="flex justify-center items-center pt-8 w-full">
              <Button asChild size="lg" className="text-lg px-8 w-full sm:w-auto">
                <Link
                  href={content.hero.cta.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  {content.hero.cta.primary.text}
                </Link>
              </Button>
            </div>
          </BlurFade>
          </div>
        </div>
        
        {/* Draggable Cards - Right Side */}
        <div className="relative z-10 flex justify-center px-4 lg:px-0">
          <DraggableCard />
        </div>
      </div>
    </section>
  )
}

