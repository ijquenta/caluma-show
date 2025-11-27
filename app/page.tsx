import Link from "next/link"
import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { Marquee } from "@/components/ui/marquee"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NumberTicker } from "@/components/ui/number-ticker"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { SparklesText } from "@/components/ui/sparkles-text"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { LightRays } from "@/components/ui/light-rays"
import { Highlighter } from "@/components/ui/highlighter"
import { MagicNavbar } from "@/components/magic-navbar"
import { ConfettiOnHover } from "@/components/confetti-on-hover"
import { SocialDock } from "@/components/social-dock"
import { DraggableCard } from "@/components/draggable-card"
import { LayoutGrid } from "@/components/ui/layout-grid"
import { AboutUsCarousel } from "@/components/about-us-carousel"
import { Heart, Calendar, MapPin, Mail, Phone } from "lucide-react"
import { colors } from "@/lib/config/colors"
import { content } from "@/lib/config/content"
import { constants } from "@/lib/config/constants"
import { cn } from "@/lib/utils"

type FeatureItem = (typeof content.features.items)[number]
type MarqueeFeature = FeatureItem & {
  marqueeItems: { name: string; description: string }[]
}

const isMarqueeFeature = (feature: FeatureItem): feature is MarqueeFeature => {
  return Array.isArray((feature as Partial<MarqueeFeature>).marqueeItems)
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <MagicNavbar />
      <SocialDock />
      {/* Hero Section */}
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
          <div className="flex flex-col items-center lg:items-start px-4 text-center lg:text-left">
            <div className="w-full max-w-2xl space-y-8">
            <BlurFade 
              inView={true} 
              delay={constants.animations.delays.immediate}
              duration={constants.animations.defaultDuration}
              direction="up"
              offset={constants.animations.defaultOffset}
            >
              <ConfettiOnHover className="w-full">
                <SparklesText className="block w-full text-center lg:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1] text-balance break-words mx-auto lg:mx-0">
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
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-center lg:text-left text-balance">
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
              {/*<Marquee pauseOnHover={constants.marquee.pauseOnHover} className={`[--duration:${constants.marquee.duration}] max-w-full`}>
                {content.hero.marquee.map((item, idx) => (
                  <div key={idx} className="mx-4 flex items-center gap-2 whitespace-nowrap text-muted-foreground">
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </Marquee>
              */}
            </BlurFade>
            
            <BlurFade 
              inView={true} 
              delay={constants.animations.delays.long}
              duration={constants.animations.defaultDuration}
              direction="up"
              offset={constants.animations.defaultOffset}
            >
              <div className="flex justify-center lg:justify-start items-center pt-8 w-full">
                <Button asChild size="lg" className="text-lg px-8 w-full sm:w-auto">
                  <Link
                    href={content.hero.cta.primary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
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

      {/* Stats Section */}
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
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold">
                      <NumberTicker value={stat.value} />
                      {stat.suffix}
                    </CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
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

      {/* Features Section */}
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
            <BentoGrid>
              {content.features.items.map((feature) => {
                // Crear backgrounds dinámicos según el tipo
                let background: React.ReactNode

                if (isMarqueeFeature(feature)) {
                  background = (
                    <Marquee
                      pauseOnHover
                      className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
                    >
                      {feature.marqueeItems.map((item, itemIdx) => (
                        <figure
                          key={itemIdx}
                          className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
                          )}
                        >
                          <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                              <figcaption className="text-sm font-medium dark:text-white">
                                {item.name}
                              </figcaption>
                            </div>
                          </div>
                          <blockquote className="mt-2 text-xs">{item.description}</blockquote>
                        </figure>
                      ))}
                    </Marquee>
                  )
                } else {
                  // Background con gradiente simple
                  background = (
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl`} />
                  )
                }

                return (
                  <BentoCard
                    key={feature.name}
                    name={feature.name}
                    description={feature.description}
                    Icon={feature.icon}
                    className={feature.className}
                    background={background}
                    cta={feature.cta}
                    href={feature.href}
                  />
                )
              })}
            </BentoGrid>
          </BlurFade>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <BlurFade 
            inView={true} 
            delay={0}
            duration={0.8}
            direction="up"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {content.testimonials.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {content.testimonials.subtitle}
              </p>
            </div>
          </BlurFade>

          <BlurFade 
            inView={true} 
            delay={constants.animations.delays.medium}
            duration={constants.animations.defaultDuration}
            direction="up"
          >
            <Marquee pauseOnHover className="[--duration:40s]">
              {content.testimonials.items.map((testimonial, idx) => (
                <div key={idx} className="mx-4 w-[300px] sm:w-[350px]">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        {testimonial.image && (
                          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <Image 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          {testimonial.name && (
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          )}
                        </div>
                      </div>
                      {testimonial.message && (
                        <CardDescription className="text-base">
                          {testimonial.message}
                        </CardDescription>
                      )}
                    </CardHeader>
                  </Card>
                </div>
              ))}
              {/* Duplicar para efecto continuo */}
              {content.testimonials.items.map((testimonial, idx) => (
                <div key={`duplicate-${idx}`} className="mx-4 w-[300px] sm:w-[350px]">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        {testimonial.image && (
                          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <Image 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          {testimonial.name && (
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          )}
                        </div>
                      </div>
                      {testimonial.message && (
                        <CardDescription className="text-base">
                          {testimonial.message}
                        </CardDescription>
                      )}
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </Marquee>
          </BlurFade>
        </div>
      </section>

      {/* About Us Section */}
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

      {/* Latest Shows Section */}
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
            <LayoutGrid
              cards={content.latestShows.items.map((show) => ({
                id: show.id,
                className: show.className,
                thumbnail: show.thumbnail,
                content: (
                  <div className="space-y-3 text-neutral-900 dark:text-white">
                    <p className="text-sm font-medium uppercase tracking-wide text-primary/80">
                      {show.date}
                    </p>
                    <p className="text-3xl font-bold leading-tight sm:text-4xl">
                      {show.title}
                    </p>
                    <p className="text-base text-muted-foreground">
                      {show.description}
                    </p>
                  </div>
                ),
              }))}
            />
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
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
                      <Calendar className="mr-2 h-5 w-5" />
                      {content.cta.button.text}
                    </Link>
                  </Button>
                </div>
              </div>
            </NeonGradientCard>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t bg-muted/30 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{content.footer.brand.name}</h3>
              <p className="text-muted-foreground">
                {content.footer.brand.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-muted-foreground">
                {content.footer.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-foreground">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{content.footer.contact.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{content.footer.contact.email}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{content.footer.contact.address}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
