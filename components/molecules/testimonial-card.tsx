"use client"

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/atoms"

type TestimonialCardProps = {
  name?: string
  message?: string
  image?: string
}

export function TestimonialCard({ name, message, image }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          {image && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image 
                src={image} 
                alt={name || "Testimonio"}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            {name && (
              <CardTitle className="text-lg">{name}</CardTitle>
            )}
          </div>
        </div>
        {message && (
          <CardDescription className="text-base">
            {message}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  )
}

