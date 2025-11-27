"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Mail, Send, Loader2 } from "lucide-react"

import { Button, Input, Textarea, Card, CardContent, CardDescription, CardHeader, CardTitle, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/atoms"

type ContactFormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true)
    
    // Simulando envío del formulario
    // Aquí puedes reemplazar con tu lógica de envío real
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      console.log("Formulario enviado:", values)
      
      setIsSubmitted(true)
      form.reset()
      
      // Resetear el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error al enviar formulario:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Formulario de Contacto
        </CardTitle>
        <CardDescription>
          Completa el formulario y nos pondremos en contacto contigo pronto.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              rules={{
                required: "El nombre es obligatorio.",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres.",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "El email es obligatorio.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Por favor ingresa un email válido.",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Nunca compartiremos tu email con terceros.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              rules={{
                required: "El asunto es obligatorio.",
                minLength: {
                  value: 5,
                  message: "El asunto debe tener al menos 5 caracteres.",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asunto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="¿Sobre qué quieres contactarnos?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              rules={{
                required: "El mensaje es obligatorio.",
                minLength: {
                  value: 10,
                  message: "El mensaje debe tener al menos 10 caracteres.",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escribe tu mensaje aquí..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Cuéntanos en detalle cómo podemos ayudarte.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isSubmitted && (
              <div className="p-4 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  ¡Mensaje enviado exitosamente! Te responderemos pronto.
                </p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

