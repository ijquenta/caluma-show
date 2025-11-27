import { whatsappLink } from "./content"

type PackageIncludeGroup = {
  title: string
  items: string[]
}

export type PackageDetail = {
  slug: string
  name: string
  priceLabel: string
  duration: string
  description: string
  heroImage: string
  summary: string
  includes: PackageIncludeGroup[]
  highlights: string[]
  extras: string[]
  whatsappHref: string
}

export const packages: PackageDetail[] = [
  {
    slug: "hora-feliz",
    name: "Paquete Hora Feliz",
    priceLabel: "150 Bs · 1 hora",
    duration: "1 hora",
    description:
      "Animación ideal para cumpleaños infantiles, baby showers o te piñata con juegos didácticos, luces y dinamismo total.",
    summary:
      "Incluye 1 payasito, parlante con micrófono, juegos didácticos, rayo láser, luces LED y dinámicas tipo sumo, juegos del calamar y Wally gigante.",
    heroImage: "/images/packages/package-1.png",
    includes: [
      {
        title: "Animación",
        items: [
          "1 Payasito anfitrión",
          "Juegos didácticos interactivos",
          "Dinámicas gigantes (Sumo, Wally, Juegos del Calamar)",
        ],
      },
      {
        title: "Equipamiento",
        items: ["Parlante con micrófono", "Rayo láser", "Luces LED portátiles"],
      },
    ],
    highlights: [
      "Ideal para eventos rápidos",
      "Equipos portátiles listos para cualquier salón",
      "Perfecto para 15 a 40 invitados",
    ],
    extras: [
      "Globoflexia adicional",
      "Cañón de burbujas",
      "Mini hora loca",
    ],
    whatsappHref: whatsappLink(
      "Hola, quiero recibir detalles del Paquete Hora Feliz de 150 Bs desde la página web."
    ),
  },
  {
    slug: "hora-premium",
    name: "Paquete Premium por Hora",
    priceLabel: "200 Bs · 1 hora",
    duration: "1 hora",
    description:
      "Todo el show base más ambientación completa con burbujas, dinosaurio gigante y globoflexia para cada invitado.",
    summary:
      "Incluye todo el básico más música ambiente, cañón de burbujas, dinosaurio gigante y globoflexia para todos.",
    heroImage: "/images/packages/package-2.png",
    includes: [
      {
        title: "Animación Premium",
        items: [
          "1 Payasito con música ambiente",
          "Historia interactiva con dinosaurio",
          "Globoflexia personalizada para todos",
        ],
      },
      {
        title: "Equipamiento y Ambiente",
        items: [
          "Parlante + micrófono",
          "Cañón de burbujas",
          "Dinosaurio gigante",
          "Luces LED + rayo láser",
        ],
      },
    ],
    highlights: [
      "Ideal para fiestas medianas",
      "Incluye personaje gigante",
      "Excelente para exteriores",
    ],
    extras: [
      "Robot LED adicional",
      "Show de títeres",
      "Hora loca extendida",
    ],
    whatsappHref: whatsappLink(
      "Hola, quiero reservar el Paquete Premium de 200 Bs desde la página web."
    ),
  },
  {
    slug: "show-mediano",
    name: "Show Mediano 4 horas",
    priceLabel: "700 Bs · 4 horas",
    duration: "4 horas",
    description:
      "Dos payasos o pintacaritas, entrada de mariachi, robot LED o máscara, dinosaurios inflables y mini hora loca.",
    summary:
      "Animación completa con 2 payasos, pintacaritas, mariachi, máquina de humo, robot/máscara LED, dinosaurios inflables y la tradicional entrada de cuy.",
    heroImage: "/images/packages/package-3.png",
    includes: [
      {
        title: "Escenario",
        items: [
          "Entrada premium con mariachi",
          "Robot LED o máscara LED",
          "Máquina de humo profesional",
        ],
      },
      {
        title: "Participación",
        items: [
          "Pintacaritas para niños",
          "Juegos dinámicos y concursos",
          "Mini hora loca con souvenirs",
        ],
      },
    ],
    highlights: [
      "Ideal para fiestas grandes",
      "Incluye show del cuy",
      "Hasta 4 horas continuas",
    ],
    extras: ["Cañón de CO₂", "Segundo robot LED", "Cobertura de video"],
    whatsappHref: whatsappLink(
      "Hola, quiero reservar el Show Mediano de 700 Bs (4 horas) desde la página web."
    ),
  },
  {
    slug: "show-completo",
    name: "Show Completo Full Day",
    priceLabel: "1300 Bs · full event",
    duration: "Hasta finalizar la fiesta",
    description:
      "Paquete estrella con 2 payasos, pintacaritas, amplificación completa, robots LED depredador, cuy doble, títeres, magia y mariachi.",
    summary:
      "Todo el equipo de Caluma Show con sonido, luces, robots, títeres, magia y animación continua hasta entregar la última canastita.",
    heroImage: "/images/packages/package-4.png",
    includes: [
      {
        title: "Escenario Premium",
        items: [
          "Amplificación profesional full",
          "Luces LED, rayos láser y máquina de humo",
          "Robots LED depredador + máscaras",
        ],
      },
      {
        title: "Shows Especiales",
        items: [
          "Show de títeres y magia",
          "Entrada de 2 cuy",
          "Mariachi + mini hora loca",
        ],
      },
    ],
    highlights: [
      "Cobertura total del evento",
      "Incluye globoflexia y figuras especiales",
      "Perfecto para más de 100 invitados",
    ],
    extras: [
      "Decoración temática",
      "Show con drones de luz",
      "Grabación profesional",
    ],
    whatsappHref: whatsappLink(
      "Hola, quiero reservar el Show Completo de 1300 Bs desde la página web."
    ),
  },
  {
    slug: "despedida-escuela",
    name: "Show Despedida de Escuela",
    priceLabel: "250 Bs · Promoción Especial",
    duration: "Turno mañana y tarde",
    description:
      "Paquete promocional especial para festejos de despedida de escuela. Incluye payasito, música ambiente, juegos didácticos, cañón de burbujas y mucho más.",
    summary:
      "Show completo para despedidas escolares con 1 payasito, parlante, música ambiente, juegos didácticos, cañón de burbujas, 10 globos flexia de regalo, juego del calamar y Wally gigante.",
    heroImage: "/images/packages/package-5.png",
    includes: [
      {
        title: "Animación",
        items: [
          "1 Payasito anfitrión",
          "Juegos didácticos interactivos",
          "Juego del calamar y Wally gigante",
        ],
      },
      {
        title: "Ambiente y Sorpresas",
        items: [
          "1 Parlante con música ambiente",
          "Cañón de burbujas",
          "10 globos flexia de regalo",
        ],
      },
    ],
    highlights: [
      "Promoción especial para despedidas escolares",
      "Ideal para turnos mañana y tarde",
      "Incluye globos flexia de regalo",
    ],
    extras: [
      "Globoflexia adicional",
      "Hora loca extendida",
      "Show de títeres",
    ],
    whatsappHref: whatsappLink(
      "Hola, quiero recibir detalles del Show para Despedida de Escuela de 250 Bs (promoción) desde la página web."
    ),
  },
  {
    slug: "show-navidad",
    name: "Paquete Navideño ",
    priceLabel: "650 Bs · 3 horas",
    duration: "3 horas",
    description:
      "Show navideño especial con dos payasitos, Santa Claus y Grinch, juegos navideños, parlante, pistola de burbujas, dinosaurio inflable y chocolate caliente.",
    summary:
      "Espectáculo navideño completo con 2 payasitos, personajes de Santa y Grinch, juegos temáticos navideños, parlante, pistola de burbujas, dinosaurio inflable y chocolate caliente para todos.",
    heroImage: "/images/packages/package-6.png",
    includes: [
      {
        title: "Personajes Navideños",
        items: [
          "2 Payasitos anfitriones",
          "Santa Claus",
          "Grinch",
        ],
      },
      {
        title: "Animación y Juegos",
        items: [
          "Juegos navideños temáticos",
          "Dinámicas interactivas",
          "Actividades para toda la familia",
        ],
      },
      {
        title: "Equipamiento y Ambiente",
        items: [
          "Parlante con micrófono",
          "Pistola de burbujas",
          "Dinosaurio inflable",
          "Luces LED navideñas",
        ],
      },
      {
        title: "Extras Especiales",
        items: [
          "Chocolate caliente para todos",
          "Ambientación navideña",
        ],
      },
    ],
    highlights: [
      "Show temático navideño completo",
      "Personajes clásicos de Navidad",
      "Ideal para celebraciones familiares",
      "Perfecto para eventos de 3 horas",
    ],
    extras: [
      "Globoflexia navideña",
      "Show de títeres navideños",
      "Decoración adicional",
    ],
    whatsappHref: whatsappLink(
      "Hola, quiero reservar el Paquete Navideño de 650 Bs (3 horas) desde la página web."
    ),
  },
]

