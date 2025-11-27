"use client"

import React from "react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { content } from "@/lib/config/content"

export function AboutUsCarousel() {
  const cards = content.aboutUs.members.map((member, index) => (
    <Card 
      key={member.name} 
      card={{
        src: member.image,
        title: member.name,
        category: member.category,
        content: (
          <div className="space-y-6">
            <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                {member.content.title}
              </h3>
              {member.content.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ),
      }} 
      index={index} 
    />
  ))

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {content.aboutUs.title}
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

