import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react"
import { WhatsAppIcon } from "@/components/organisms/social-dock"

import { packages } from "@/lib/config/packages"
import { Button } from "@/components/atoms"
import { BlurFade } from "@/components/atoms"
import { NeonGradientCard } from "@/components/atoms"

type PackagePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }))
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params
  const pkg = packages.find((item) => item.slug === slug)
  if (!pkg) {
    return { title: "Paquete no encontrado | Caluma Show" }
  }

  return {
    title: `${pkg.name} | Caluma Show`,
    description: pkg.description,
  }
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params
  const pkg = packages.find((item) => item.slug === slug)

  if (!pkg) {
    notFound()
  }

  return (
    <div className="relative min-h-screen bg-background pb-12 pt-20 sm:pb-20 sm:pt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:gap-12 md:gap-16">
        <BlurFade inView delay={0}>
          <div className="mb-2 sm:mb-4">
            <Button variant="ghost" asChild size="sm" className="gap-2 text-sm sm:size-lg sm:text-base">
              <Link href="/#features">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                Volver a paquetes
              </Link>
            </Button>
          </div>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                {pkg.duration}
              </div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {pkg.name}
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">{pkg.description}</p>
              <NeonGradientCard
                className="w-full max-w-xl"
                borderRadius={20}
                borderSize={3}
                neonColors={{
                  firstColor: "#FF6B00",
                  secondColor: "#B7FF00",
                }}
              >
                <div className="space-y-3 px-4 py-4 text-center text-neutral-900 dark:text-white sm:space-y-4 sm:px-6 sm:py-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/80 sm:text-sm sm:tracking-[0.4em]">
                    Inversión
                  </p>
                  <p className="text-2xl font-black sm:text-3xl">{pkg.priceLabel}</p>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    {pkg.summary}
                  </p>
                  <Button asChild size="lg" className="w-full text-sm sm:text-base">
                    <Link href={pkg.whatsappHref} target="_blank">
                      <WhatsAppIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Contáctanos por WhatsApp
                    </Link>
                  </Button>
                </div>
              </NeonGradientCard>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-muted shadow-2xl order-1 lg:order-2 sm:rounded-3xl">
              <Image
                src={pkg.heroImage}
                alt={pkg.name}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary/70 sm:text-sm sm:tracking-[0.3em]">
                  Caluma Show · Payasito Chuchin
                </p>
                <p className="text-lg font-semibold sm:text-2xl">{pkg.name}</p>
              </div>
            </div>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <div className="w-full rounded-2xl border border-border/50 bg-card/80 p-4 shadow-lg backdrop-blur sm:rounded-3xl sm:p-6">
            <div className="mb-5 sm:mb-8">
              <h2 className="text-xl font-bold sm:text-2xl mb-2">¿Qué incluye?</h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Todo lo necesario para que la fiesta tenga ritmo, luces y
                diversión sin preocuparte por nada más.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
              {pkg.includes.map((group) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-border/40 bg-background/60 p-4 sm:p-5 hover:border-primary/30 hover:bg-background/90 transition-all"
                >
                  <h3 className="flex items-center gap-2 text-sm font-semibold sm:text-base mb-3 sm:mb-4 text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 sm:h-5 sm:w-5" />
                    <span className="break-words">{group.title}</span>
                  </h3>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {group.items.map((item, idx) => (
                      <li 
                        key={`${group.title}-${idx}`} 
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0 sm:mt-1.5 sm:h-2 sm:w-2" />
                        <span className="flex-1 break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/*<BlurFade inView delay={0.3}>
          <div className="rounded-3xl border border-border/60 bg-muted/40 p-6 shadow-inner">
            <h2 className="text-2xl font-bold">Destacados</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {pkg.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-background/80 p-4 text-sm font-medium text-muted-foreground shadow"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">
                Extras recomendados
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {pkg.extras.map((extra) => (
                  <span
                    key={extra}
                    className="rounded-full border border-border/50 px-4 py-1 text-sm text-muted-foreground"
                  >
                    {extra}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>*/}

        <BlurFade inView delay={0.4}>
          <NeonGradientCard
            className="w-full"
            borderSize={3}
            borderRadius={24}
            neonColors={{ firstColor: "#B7FF00", secondColor: "#FF6B00" }}
          >
            <div className="flex flex-col gap-4 px-4 py-6 text-center text-neutral-900 dark:text-white sm:gap-6 sm:px-6 sm:py-8 md:flex-row md:items-center md:justify-between md:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary/70 sm:text-sm sm:tracking-[0.4em]">
                  ¿Listo para reservar?
                </p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{pkg.name}</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-200 sm:mt-2 sm:text-base">
                  Llevamos la magia de Caluma Show hasta tu evento. Escríbenos y
                  confirma tu fecha.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="mx-auto w-full text-sm sm:max-w-sm sm:text-base md:mx-0"
              >
                <Link href={pkg.whatsappHref} target="_blank">
                  <WhatsAppIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Reservar por WhatsApp
                </Link>
              </Button>
            </div>
          </NeonGradientCard>
        </BlurFade>
      </div>
    </div>
  )
}

