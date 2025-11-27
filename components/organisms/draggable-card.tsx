"use client"

import React from "react"
import Image from "next/image"
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/atoms/ui/draggable-card"

export function DraggableCard() {
  const items = [
    {
      title: "Show en La Paz",
      image: "/images/draggable-card/card-8.jpg",
      className:
        "top-2 left-[6%] rotate-[-8deg] md:top-10 md:left-[20%] md:rotate-[-5deg]",
    },
    {
      title: "Fotos y Videos",
      image: "/images/draggable-card/card-2.jpg",
      className:
        "top-28 left-[4%] rotate-[-5deg] md:top-40 md:left-[25%] md:rotate-[-7deg]",
    },
    {
      title: "Payasitos",
      image: "/images/draggable-card/card-3.jpg",
      className:
        "top-6 left-[46%] rotate-[6deg] md:top-5 md:left-[40%] md:rotate-[8deg]",
    },
    {
      title: "Robot Depredador LED",
      image: "/images/draggable-card/card-4.jpg",
      className:
        "top-40 left-[52%] rotate-[8deg] md:top-32 md:left-[55%] md:rotate-[10deg]",
    },
    {
      title: "Grinch",
      image: "/images/draggable-card/card-14.jpg",
      className:
        "top-24 left-[62%] rotate-[4deg] md:top-20 md:left-[65%] md:rotate-[2deg]",
    },
    {
      title: "Show Cuy",
      image: "/images/draggable-card/card-6.jpg",
      className:
        "top-36 left-[38%] rotate-[-6deg] md:top-24 md:left-[45%] md:rotate-[-7deg]",
    },
    {
      title: "Show Dinosario",
      image: "/images/draggable-card/card-1.jpg",
      className:
        "top-14 left-[22%] rotate-[3deg] md:top-8 md:left-[30%] md:rotate-[4deg]",
    },
  ]

  return (
    <DraggableCardContainer className="relative w-full">
      <div className="flex min-h-[400px] sm:min-h-[460px] md:min-h-[540px] w-full items-center justify-center overflow-visible px-2">
        <div className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full max-w-5xl scale-[0.75] sm:scale-90 md:scale-100 origin-center transition-transform duration-300 will-change-transform">
          {items.map((item, idx) => (
            <DraggableCardBody key={idx} className={`absolute ${item.className}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={320}
                height={320}
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 320px"
                priority={idx < 2}
                loading={idx < 2 ? "eager" : "lazy"}
                className="pointer-events-none relative z-10 h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-[32px] object-cover"
              />
              <h3 className="mt-3 text-center text-xl font-semibold text-neutral-800 dark:text-neutral-200 sm:text-2xl">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </div>
      </div>
    </DraggableCardContainer>
  )
}

