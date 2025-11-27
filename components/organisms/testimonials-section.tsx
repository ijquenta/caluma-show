"use client"

import { BlurFade } from "@/components/atoms"
import { Marquee } from "@/components/atoms"
import { TestimonialCard } from "@/components/molecules"
import { content } from "@/lib/config/content"

export function TestimonialsSection() {
  return (
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
          delay={0.3}
          duration={0.8}
          direction="up"
        >
          <Marquee pauseOnHover className="[--duration:40s]">
            {content.testimonials.items.map((testimonial, idx) => (
              <div key={idx} className="mx-4 w-[300px] sm:w-[350px]">
                <TestimonialCard
                  name={testimonial.name}
                  message={testimonial.message}
                  image={testimonial.image}
                />
              </div>
            ))}
            {/* Duplicar para efecto continuo */}
            {content.testimonials.items.map((testimonial, idx) => (
              <div key={`duplicate-${idx}`} className="mx-4 w-[300px] sm:w-[350px]">
                <TestimonialCard
                  name={testimonial.name}
                  message={testimonial.message}
                  image={testimonial.image}
                />
              </div>
            ))}
          </Marquee>
        </BlurFade>
      </div>
    </section>
  )
}

