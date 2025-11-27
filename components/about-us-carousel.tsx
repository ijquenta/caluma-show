"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Music2 } from "lucide-react"
import { WhatsAppIcon } from "@/components/social-dock"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { Button } from "@/components/ui/button"
import { content } from "@/lib/config/content"

const globalSocialLinks = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: content.socialMedia.whatsapp.url,
    icon: WhatsAppIcon,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: content.socialMedia.instagram.url,
    icon: Instagram,
  },
].filter((item) => item.href && item.href !== "#")

export function AboutUsCarousel() {
  const cards = content.aboutUs.members.map((member, index) => {
    const memberSocials = [
      member.social?.whatsapp && {
        label: "WhatsApp",
        href: member.social.whatsapp,
        icon: WhatsAppIcon,
      },
      member.social?.instagram && {
        label: "Instagram",
        href: member.social.instagram,
        icon: Instagram,
      },
      member.social?.tiktok && {
        label: member.social.tiktok.handle ?? "TikTok",
        href: member.social.tiktok.url,
        icon: Music2,
      },
    ].filter(Boolean) as {
      label: string
      href: string
      icon: React.ComponentType<{ className?: string }>
    }[]

    return (
      <Card
        key={member.name}
        card={{
          src: member.image,
          title: member.name,
          category: member.category,
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full overflow-hidden rounded-3xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 600px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="rounded-3xl bg-[#F5F5F7] p-8 font-sans text-neutral-600 shadow-inner dark:bg-neutral-800 dark:text-neutral-300 md:p-14">
                <h3 className="mb-6 text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl">
                  {member.content.title}
                </h3>
                {member.content.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-base md:text-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
              {memberSocials.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {memberSocials.map(({ label, href, icon: IconComponent }) => (
                    <Button
                      key={`${member.name}-${label}`}
                      variant="outline"
                      size="sm"
                      asChild
                      className="gap-2"
                    >
                      <Link href={href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="h-4 w-4" />
                        {label}
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ),
        }}
        index={index}
      />
    )
  })

  return (
    <div className="h-full w-full py-20">
      <div className="mx-auto max-w-7xl pl-4">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 font-sans md:text-5xl">
          {content.aboutUs.title}
        </h2>
        <p className="mt-3 max-w-3xl text-base text-muted-foreground md:text-lg">
          {content.aboutUs.subtitle}
        </p>
        {globalSocialLinks.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-6">
            {globalSocialLinks.map(({ key, label, href, icon: IconComponent }) => (
              <Button key={key} variant="ghost" size="sm" asChild className="gap-2 text-sm">
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <IconComponent className="h-4 w-4" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
      <Carousel items={cards} />
    </div>
  )
}

