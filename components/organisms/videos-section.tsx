"use client"

import { BlurFade } from "@/components/atoms"
import { content } from "@/lib/config/content"
import { constants } from "@/lib/config/constants"
import { cn } from "@/lib/utils"

export function VideosSection() {
  return (
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
  )
}

