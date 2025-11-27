"use client"

import React from "react"
import Image from "next/image"
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card"

export function DraggableCard() {
  const items = [
    {
      title: "Show en La Paz",
      image: "/images/draggable-card/card-8.jpg",
      className: "top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Fotos y Videos",
      image: "/images/draggable-card/card-2.jpg",
      className: "top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Payasito Frenin",
      image: "/images/draggable-card/card-3.jpg",
      className: "top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Depretador Led",
      image: "/images/draggable-card/card-4.jpg",
      className: "top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Show Robot LED",
      image: "/images/draggable-card/card-5.jpg",
      className: "top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Show Cuy",
      image: "/images/draggable-card/card-6.jpg",
      className: "top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Show Dinosario",
      image: "/images/draggable-card/card-1.jpg",
      className: "top-8 left-[30%] rotate-[4deg]",
    },
  ]

  return (
    <DraggableCardContainer className="relative w-full">
      {/* Desktop / Tablet Layout */}
      <div className="hidden md:flex min-h-[540px] w-full items-center justify-center overflow-visible">
        <div className="relative h-[520px] w-full max-w-5xl">
          {items.map((item, idx) => (
            <DraggableCardBody
              key={idx}
              className={`absolute ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={320}
                height={320}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                unoptimized
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden w-full gap-4 overflow-x-auto px-4 py-6 snap-x snap-mandatory">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-60 snap-center rounded-3xl border border-border/40 bg-background/80 p-4 shadow-xl backdrop-blur-sm"
          >
            <div className="relative h-56 w-full overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="240px"
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="mt-4 text-center text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </DraggableCardContainer>
  )
}

