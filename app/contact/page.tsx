import { GridPattern } from "@/components/atoms/ui/grid-pattern"
import { BlurFade } from "@/components/atoms"
import { ContactForm } from "@/components/organisms/contact-form"
import { ThemeToggle } from "@/components/atoms"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ThemeToggle />
      <GridPattern className="opacity-40" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          <BlurFade 
            inView={true} 
            delay={0}
            duration={0.8}
            direction="up"
            offset={20}
          >
            <div className="text-center space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
                Contacto
              </h1>
              <p className="text-muted-foreground text-lg">
                Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.
              </p>
            </div>
          </BlurFade>
          
          <BlurFade 
            inView={true} 
            delay={0.2}
            duration={0.8}
            direction="up"
            offset={20}
          >
            <ContactForm />
          </BlurFade>
        </div>
      </div>
    </div>
  )
}

