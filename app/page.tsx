import Link from "next/link"
import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { Marquee } from "@/components/ui/marquee"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NumberTicker } from "@/components/ui/number-ticker"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { SparklesText } from "@/components/ui/sparkles-text"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { LightRays } from "@/components/ui/light-rays"
import { Highlighter } from "@/components/ui/highlighter"
import { MagicNavbar } from "@/components/magic-navbar"
import { ConfettiOnHover } from "@/components/confetti-on-hover"
import { SocialDock } from "@/components/social-dock"
import { DraggableCard } from "@/components/draggable-card"
import { AboutUsCarousel } from "@/components/about-us-carousel"
import { LatestShowsCarousel } from "@/components/latest-shows-carousel"
import { Heart, MapPin, Mail, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/social-dock"
import { colors } from "@/lib/config/colors"
import { content } from "@/lib/config/content"
import { constants } from "@/lib/config/constants"
import { cn } from "@/lib/utils"

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:items-start gap-8">
              {content.features.items.map((feature, index) => {
                const imageSrc = feature.backgroundType === "image" && "image" in feature && feature.image 
                  ? feature.image 
                  : null
                const isLastPackage = index === 4 // Show Completo (quinto paquete después de reordenar)
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
            <LatestShowsCarousel />
          </BlurFade>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative py-20 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <BlurFade inView delay={constants.animations.delays.immediate}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {content.videos.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {content.videos.subtitle}
              </p>
            </div>
          </BlurFade>

          <BlurFade
            inView
            delay={constants.animations.delays.medium}
            className="grid gap-8 lg:grid-cols-3"
          >
            {content.videos.items.map((video) => (
              <article
                key={video.id}
                className="group relative flex flex-col space-y-4 rounded-3xl border border-border/40 bg-background shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    video.orientation === "vertical"
                      ? "rounded-3xl p-3"
                      : "rounded-t-3xl"
                  )}
                >
                  <video
                    className={cn(
                      "w-full rounded-2xl object-cover",
                      video.orientation === "vertical"
                        ? "aspect-[9/16]"
                        : "aspect-video rounded-t-3xl"
                    )}
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.thumbnail}
                  >
                    <source src={video.videoUrl} />
                    Tu navegador no soporta video embebido.
                  </video>
                </div>
                <div className="space-y-2 px-6 pb-6 text-center">
                  
                  <h3 className="text-2xl font-bold">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </article>
            ))}
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
