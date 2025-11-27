"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { content } from "@/lib/config/content"
import { Button } from "@/components/ui/button"

type LatestShow = (typeof content.latestShows.items)[number]

export function LatestShowsCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selectedShow, setSelectedShow] = useState<LatestShow | null>(null)

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      if (document.hidden) return
      api.scrollNext()
    }, 4500)
    return () => clearInterval(interval)
  }, [api])

  return (
    <>
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {content.latestShows.items.map((show) => (
              <CarouselItem
                key={show.id}
                className="pl-2 sm:pl-4 md:basis-3/4 lg:basis-1/2"
              >
                <article className="space-y-4">
                  <button
                    type="button"
                    onClick={() => setSelectedShow(show)}
                    className="group relative block w-full overflow-hidden rounded-3xl border border-border/40 bg-muted shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={show.thumbnail}
                        alt={show.title}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 640px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                        priority={show.id === content.latestShows.items[0].id}
                      />
                    </div>
                  </button>
                  <div className="space-y-2 px-1 text-center sm:text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                      {show.date}
                    </p>
                    <h3 className="text-2xl font-bold sm:text-3xl">
                      {show.title}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {show.description}
                    </p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden -left-6 lg:flex" />
          <CarouselNext className="hidden -right-6 lg:flex" />
        </Carousel>
      </div>

      {selectedShow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4"
          onClick={() => setSelectedShow(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto h-[80vh] w-full overflow-hidden rounded-2xl bg-black sm:h-[90vh] sm:w-[90vw] sm:rounded-3xl">
              <Image
                src={selectedShow.thumbnail}
                alt={selectedShow.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                className="object-contain"
                priority
              />
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="absolute -right-3 -top-3 h-10 w-10 rounded-full"
              onClick={() => setSelectedShow(null)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar vista ampliada</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

