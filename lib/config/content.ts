/**
 * Contenido de texto de la página web page
 * Cambia aquí todos los textos sin tocar el código de los componentes
 */

import { Crown, PartyPopper, Sparkles, Star } from "lucide-react"

const WHATSAPP_NUMBER = "59169709494"
const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, vi la página web de Caluma Show y quiero reservar mi evento."
const whatsappLink = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
const INSTAGRAM_URL = "https://www.instagram.com/calumashow"

export const content = {
  // Hero Section
  hero: {
    title: "Caluma Show",
    subtitle:
      "Paquetes completos desde 150 Bs para baby showers, te piñata y cumpleaños inolvidables",
    highlightedWords: {
      payasos: {
        word: "Payasitos Caluma Show",
        action: "underline" as const,
        color: "#B7FF00",
      },
      divertido: {
        word: "diversión total",
        action: "underline" as const,
        color: "#FF6B00",
      },
      mágico: {
        word: "magia y alegría",
        action: "underline" as const,
        color: "#FF6B00",
      },
    },
    marquee: [
      "🤡 Payasos y globoflexia",
      "🪄 Magia y shows de títeres",
      "🎵 Música ambiente & hora loca",
      "🎉 Dinosaurios inflables",
      "🫧 Cañón de burbujas",
      "📱 WhatsApp 69709494",
    ],
    cta: {
      primary: {
        text: "Reservar por WhatsApp",
        href: whatsappLink(),
      },
    },
  },

  // Stats Section
  stats: {
    items: [
      { value: 500, suffix: "+", label: "Fiestas Animadas" },
      { value: 2000, suffix: "+", label: "Familias Felices" },
      { value: 8, suffix: "+", label: "Años Llevando Alegría" },
      { value: 100, suffix: "%", label: "Diversión Garantizada" },
    ],
    highlight: {
      title: "Experiencia Garantizada",
      description:
        "Más de 8 años llevando diversión y risas a baby showers, cumpleañitos y eventos familiares",
      years: 8,
    },
  },

  // Features Section
  features: {
    title: "¿Qué Ofrecemos?",
    description:
      "Paquetes hechos a medida para que tu celebración tenga Payasito Chuchin, música, magia y sorpresas para todos",
    highlightedWords: {
      diversión: { word: "diversión", action: "highlight" as const, color: "#FF6B00" },
      magia: { word: "magia", action: "highlight" as const, color: "#FF6B00" },
    },
    items: [
      {
        name: "Paquete Hora Feliz · 150 Bs",
        description:
          "1 payasito, parlante con micrófono, juegos didácticos, rayo láser, luces LED y dinámicas tipo sumo, juegos del calamar y Wally gigante.",
        icon: Crown,
        className: "col-span-3 lg:col-span-1",
        backgroundType: "marquee" as const,
        marqueeItems: [
          { name: "Payasito", description: "Animación completa" },
          { name: "Juegos", description: "Sumo, Wally, Calamar" },
          { name: "Luces", description: "LED + rayo láser" },
        ],
        gradient: "from-blue-500/20 to-purple-500/20",
        cta: "Reservar 150 Bs",
        href: whatsappLink(
          "Hola, quiero reservar el Paquete Hora Feliz de 150 Bs desde la página web de Caluma Show."
        ),
      },
      {
        name: "Paquete Premium Hora · 200 Bs",
        description:
          "Incluye todo el básico más música ambiente, cañón de burbujas, dinosaurio gigante y globoflexia para todos.",
        icon: PartyPopper,
        className: "col-span-3 lg:col-span-2",
        backgroundType: "gradient" as const,
        gradient: "from-yellow-500/20 to-orange-500/20",
        cta: "Reservar 200 Bs",
        href: whatsappLink(
          "Hola, quiero reservar el Paquete Premium Hora de 200 Bs desde la página web de Caluma Show."
        ),
      },
      {
        name: "Show Mediano · 4 hrs · 700 Bs",
        description:
          "2 payasos o pintacaritas, entrada de mariachi, máquina de humo, robot LED o máscara LED, dinosaurios inflables, cuy y mini hora loca.",
        icon: Sparkles,
        className: "col-span-3 lg:col-span-2",
        backgroundType: "gradient" as const,
        gradient: "from-pink-500/20 to-red-500/20",
        cta: "Reservar 700 Bs",
        href: whatsappLink(
          "Hola, quiero reservar el Show Mediano de 700 Bs (4 horas) desde la página web de Caluma Show."
        ),
      },
      {
        name: "Show Completo · 1300 Bs",
        description:
          "Desde la primera entrada hasta la última canastita: payasos, pintacaritas, amplificación, globoflexia, show de títeres, magia, robots, dinosaurios, mariachi y mucho más.",
        icon: Star,
        className: "col-span-3 lg:col-span-1",
        backgroundType: "gradient" as const,
        gradient: "from-green-500/20 to-teal-500/20",
        cta: "Reservar 1300 Bs",
        href: whatsappLink(
          "Hola, quiero reservar el Show Completo de 1300 Bs desde la página web de Caluma Show."
        ),
      },
    ],
  },

  // Testimonials Section
  testimonials: {
    title: "Nuestros Espectadores",
    subtitle: "Testimonios de familias que han disfrutado nuestro espectáculo",
    items: [
      {
        name: "Aldo Rodriguez",
        message: "¡Un espectáculo increíble! Mis hijos no dejaron de reír durante toda la función.",
        image: "/images/testimonials/aldo.jpg",
      },
      {
        name: "Damaris Espejo",
        message: "Perfecto para toda la familia. La interacción con el público es genial.",
        image: "/images/testimonials/dama.jpg",
      },
      {
        name: "Danilo Medina",
        message: "Los niños quedaron fascinados. Definitivamente volveremos a verlos.",
        image: "/images/testimonials/dan.jpg",
      },
      {
        name: "Miguel Ángel",
        message: "Un espectáculo increíble. Los payasos son geniales. Me encantó. Gracias por la diversión.",
        image: "/images/testimonials/miguel.jpg",
      },
      {
        name: "Roberto Lopez",
        message: "Estuvo muy bien. Los payasos son geniales. Lo recomiendo.",
        image: "/images/testimonials/roberto.jpg",
      },
    ],
  },

  // Latest Shows Section
  latestShows: {
    title: "Nuestros Últimos Shows",
    subtitle: "Descubre los momentos más divertidos de nuestras presentaciones",
    items: [
      {
        id: 1,
        title: "Show en La Paz",
        date: "Noviembre 2025",
        description: "Un espectáculo increíble lleno de risas y diversión para toda la familia.",
        thumbnail: "/images/latest-shows/show-1.jpg",
        className: "md:col-span-1",
      },
      {
        id: 2,
        title: "Show en El Alto",
        date: "Noviembre 2025",
        description: "Magia y entretenimiento que dejó a todos con ganas de más.",
        thumbnail: "/images/latest-shows/show-2.jpg",
        className: "md:col-span-1",
      },
      {
        id: 3,
        title: "Show Familiar",
        date: "Octubre 2025",
        description: "Risas garantizadas en esta presentación especial para toda la familia.",
        thumbnail: "/images/latest-shows/show-3.jpg",
        className: "md:col-span-1",
      },
      {
        id: 4,
        title: "Show de Cumpleaños",
        date: "Septiembre 2025",
        description: "Celebración especial con nuestros payasos favoritos.",
        thumbnail: "/images/latest-shows/show-4.jpg",
        className: "md:col-span-1",
      },
      {
        id: 5,
        title: "Show Nocturno",
        date: "Agosto 2025",
        description: "Una noche mágica llena de diversión y espectáculo.",
        thumbnail: "/images/latest-shows/show-5.jpg",
        className: "md:col-span-1",
      },
      {
        id: 6,
        title: "Show Especial",
        date: "Julio 2025",
        description: "Una presentación única que todos recordarán por mucho tiempo.",
        thumbnail: "/images/latest-shows/show-6.jpg",
        className: "md:col-span-1",
      },
    ],
  },

  // About Us Section
  aboutUs: {
    title: "Conócenos",
    subtitle: "Conoce a nuestro equipo de payasos profesionales",
    members: [
      {
        name: "Chuchin",
        category: "Payasito",
        description: "El líder del grupo, conocido por su humor único y su capacidad para hacer reír a grandes y pequeños.",
        image: "/images/about-us/chuchin.jpg", 
        social: {
          whatsapp: whatsappLink("Hola, quiero contratar al Payasito Chuchin desde la página web de Caluma Show."),
          instagram: INSTAGRAM_URL,
          tiktok: {
            handle: "@chuchin_jajeja",
            url: "https://www.tiktok.com/@chuchin_jajeja",
          },
        },
        content: {
          title: "Chuchin - El Payaso Principal",
          paragraphs: [
            "Chuchin es el corazón de Caluma Show. Con más de 10 años de experiencia en el mundo del entretenimiento, es conocido por su carisma y su habilidad única para conectar con el público.",
            "Especializado en magia cómica y participación del público, Chuchin siempre asegura que cada show sea una experiencia inolvidable para toda la familia.",
          ],
        },
      },
      {
        name: "Chupetin",
        category: "Payasito",
        description: "El experto en trucos mágicos que deja a todos con la boca abierta.",
        image: "/images/about-us/chupetin.jpg",
        social: {
          whatsapp: whatsappLink("Hola, quiero contratar al Payasito Chupetin desde la página web de Caluma Show."),
          instagram: INSTAGRAM_URL,
          tiktok: {
            handle: "@payasito_chupetin",
            url: "https://www.tiktok.com/@payasito_chupetin",
          },
        },
        content: {
          title: "Chupetin - El Mago Divertido",
          paragraphs: [
            "Chupetin combina la magia con el humor de una manera única. Sus trucos de magia no solo son sorprendentes, sino también increíblemente divertidos.",
            "Con su personalidad alegre y su técnica impecable, Chupetin garantiza risas y asombro en cada presentación.",
          ],
        },
      },
      {
        name: "Pelotin",
        category: "Payasito",
        description: "El animador que hace que todos participen y se diviertan.",
        image: "/images/about-us/pelotin.jpg",
        social: {
          whatsapp: whatsappLink("Hola, quiero contratar al Payasito Pelotin desde la página web de Caluma Show."),
          instagram: INSTAGRAM_URL,
          tiktok: {
            handle: "@payasito_pelotin",
            url: "https://www.tiktok.com/@payasito_pelotin",
          },
        },
        content: {
          title: "Pelotin - El Payaso",
          paragraphs: [
            "Pelotin es el experto en crear momentos interactivos. Sus juegos y actividades involucran a todo el público, haciendo que cada persona se sienta parte del espectáculo.",
            "Con energía inagotable y creatividad sin límites, Pelotin asegura que no haya un momento aburrido durante el show.",
          ],
        },
      },
      {
        name: "Frenin",
        category: "Payasito",
        description: "El especialista en chistes y situaciones cómicas que garantiza las risas.",
        image: "/images/about-us/frenin.jpg",
        social: {
          whatsapp: whatsappLink("Hola, quiero contratar al Payasito Frenin desde la página web de Caluma Show."),
          instagram: INSTAGRAM_URL,
          tiktok: {
            handle: "@payasito_frenin",
            url: "https://www.tiktok.com/@payasito_frenin",
          },
        },
        content: {
          title: "Frenin - El Payaso",
          paragraphs: [
            "Frenin tiene el don natural de hacer reír. Sus chistes y situaciones cómicas son apropiados para todas las edades, garantizando risas desde los más pequeños hasta los adultos.",
            "Con su timing perfecto y su carisma único, Frenin es el responsable de mantener la energía alta durante todo el espectáculo.",
          ],
        },
      },
    ],
  },

  // CTA Section
  cta: {
    title: "Reserva tu paquete con Payasito Chuchin",
    description:
      "WhatsApp 69709494 · Baby shower, cumpleañitos y toda ocasión con globoflexia, magia, hora loca y robots LED",
    highlightedWords: {
      risas: { word: "risas", action: "highlight" as const, color: "#B7FF005B" },
      magia: { word: "magia", action: "highlight" as const, color: "#FF6A005E" },
      diversión: { word: "diversión", action: "highlight" as const, color: "#B7FF005B" },
    },
    button: {
      text: "Reservar por WhatsApp",
      href: whatsappLink(
        "Hola, quiero reservar mi evento con Caluma Show desde la página web."
      ),
    },
  },

  // Footer
  footer: {
    brand: {
      name: "Caluma Show",
      description:
        "Payasito Chuchin y su equipo llevan magia, música y robots LED a cada fiesta.",
    },
    links: [
      { text: "Características", href: "#features" },
      { text: "Contacto", href: "/contact" },
    ],
    contact: {
      phone: "+591 69709494",
      email: "ivanjosuequentavargas.com",
      address: "Santiago II El Alto, Bolivia",
    },
    copyright: `© ${new Date().getFullYear()} Caluma Show. Todos los derechos reservados.`,
  },

  // Social Media
  socialMedia: {
    whatsapp: {
      url: whatsappLink(),
      label: "WhatsApp - Contacto",
    },
    tiktok: {
      url: "https://www.tiktok.com/@chuchin_jajeja",
      label: "TikTok",
    },
    facebook: {
      url: "https://www.facebook.com/profile.php?id=100085672272026",
      label: "Facebook",
    },
    instagram: {
      url: INSTAGRAM_URL,
      label: "Instagram",
    },
  },
} as const

