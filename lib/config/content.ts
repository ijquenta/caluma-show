/**
 * Contenido de texto de la landing page
 * Cambia aquí todos los textos sin tocar el código de los componentes
 */

import { 
  Laugh, 
  Users, 
  Sparkles, 
  Music,
} from "lucide-react"

export const content = {
  // Hero Section
  hero: {
    title: "Caluma Show",
    subtitle: "El espectáculo de payasos más divertido y mágico para toda la familia",
    highlightedWords: {
      payasos: { word: "payasos", action: "underline" as const, color: "#B7FF00" },
      divertido: { word: "divertido", action: "highlight" as const, color: "#FF6B00" },
      mágico: { word: "mágico", action: "highlight" as const, color: "#FF6B00" },
    },
    marquee: [
      "🤡 Diversión",
      "✨ Magia",
      "🎭 Entretenimiento",
      "🎪 Espectáculo",
      "🎈 Alegría",
      "🎵 Música",
    ],
    cta: {
      primary: { text: "Reservar Entradas", href: "#" },
      secondary: { text: "Contacto", href: "/contact" },
    },
  },

  // Stats Section
  stats: {
    items: [
      { value: 200, suffix: "+", label: "Shows Realizados" },
      { value: 2000, suffix: "+", label: "Personas Enteradas" },
      { value: 5, suffix: "+", label: "Años de Experiencia" },
      { value: 98, suffix: "%", label: "Satisfacción" },
    ],
    highlight: {
      title: "Experiencia Garantizada",
      description: "Más de {years} años llevando diversión y risas a miles de familias",
      years: 5,
    },
  },

  // Features Section
  features: {
    title: "¿Qué Ofrecemos?",
    description: "Un espectáculo completo lleno de diversión, magia y risas para toda la familia",
    highlightedWords: {
      diversión: { word: "diversión", action: "highlight" as const, color: "#FF6B00" },
      magia: { word: "magia", action: "highlight" as const, color: "#FF6B00" },
    },
    items: [
      {
        name: "Show Interactivo",
        description: "Actuaciones que involucran a toda la familia con juegos y participación del público.",
        icon: Users,
        className: "col-span-3 lg:col-span-1",
        backgroundType: "marquee" as const,
        marqueeItems: [
          { name: "Juegos", description: "Actividades divertidas para todos" },
          { name: "Participación", description: "El público es parte del show" },
          { name: "Diversión", description: "Risas garantizadas" },
        ],
        gradient: "from-blue-500/20 to-purple-500/20",
        cta: "Ver más",
        href: "#features",
      },
      {
        name: "Magia y Diversión",
        description: "Trucos de magia que dejarán a grandes y pequeños con la boca abierta.",
        icon: Sparkles,
        className: "col-span-3 lg:col-span-2",
        backgroundType: "gradient" as const,
        gradient: "from-yellow-500/20 to-orange-500/20",
        cta: "Ver más",
        href: "#features",
      },
      {
        name: "Música en Vivo",
        description: "Canciones y bailes que harán que todos se levanten de sus asientos.",
        icon: Music,
        className: "col-span-3 lg:col-span-2",
        backgroundType: "gradient" as const,
        gradient: "from-pink-500/20 to-red-500/20",
        cta: "Ver más",
        href: "#features",
      },
      {
        name: "Risas Garantizadas",
        description: "Chistes, situaciones cómicas y mucha diversión para todas las edades.",
        icon: Laugh,
        className: "col-span-3 lg:col-span-1",
        backgroundType: "gradient" as const,
        gradient: "from-green-500/20 to-teal-500/20",
        cta: "Ver más",
        href: "#features",
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
        image: "https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/528364530_30563344449980800_8116351906768367718_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PL6kIM84ousQ7kNvwHe6RY5&_nc_oc=AdkiiMYKhAKQLNU45VkpzEvtdmLFzTVyfQZ2j_xrOvSM5-eHx-eWombEZfcgscw1kZs&_nc_zt=23&_nc_ht=scontent.flpb2-2.fna&_nc_gid=6kSEBj1g_1snu8fGmBLxDQ&oh=00_AfjwzZyiTEGH3H37m_j3S0IAjBx0XtIrlB5gOfCkgwoHtw&oe=692DB313",
      },
      {
        name: "Damaris Espejo",
        message: "Perfecto para toda la familia. La interacción con el público es genial.",
        image: "https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/457624729_2463107020548272_7275347050101788780_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BTUGrH5lfGQQ7kNvwG7ZYMp&_nc_oc=AdlCY5FgtK0nc0kj9oQQwS-m2ArSVWsVNSHWTedmrCHqFgIDp29Be03XABfrJ2UklKE&_nc_zt=23&_nc_ht=scontent.flpb2-1.fna&_nc_gid=xYhM2lF1IDrYPbr0eJDCBA&oh=00_AfgKVOxYnaABx3lCITyO0viLqwtbgO2A0LHnhSN1ePO02g&oe=692DBB99",
      },
      {
        name: "Danilo Medina",
        message: "Los niños quedaron fascinados. Definitivamente volveremos a verlos.",
        image: "https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/563448922_825967380122360_1809967917263919618_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gQO8U71cQHsQ7kNvwHAfEdx&_nc_oc=AdmYxN4RWuos_625gq1peuI9EoANQ2RQD9qfmFI1152m8pefzywOXuWOWAPg5zAuUKI&_nc_zt=23&_nc_ht=scontent.flpb2-1.fna&_nc_gid=Za1orl7b5HkWRP9ivlmYRQ&oh=00_AfhRn-OXbBVnHfCoJoxbmED1qg_bo_cPC1wSYu2IzdMWWQ&oe=692DC600",
      },
      {
        name: "Miguel Ángel",
        message: "Un espectáculo increíble. Los payasos son geniales. Me encantó. Gracias por la diversión.",
        image: "https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/438101032_996613175166725_5355146652716584733_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wec8po2lzi0Q7kNvwEnJp1h&_nc_oc=AdlHGfXVktJefK_MQGH_TYDpTul3q0l8EVsa7wa53IZMOldFQIduMM3S33fC3PjZn-0&_nc_zt=23&_nc_ht=scontent.flpb2-1.fna&_nc_gid=eY4HLGejX4fzk3FI8-XINw&oh=00_Afi5NoF9bCz-KpL9w_wecML0CFgF7RzoZcds_wCR9dGY3A&oe=692DC760",
      },
      {
        name: "Roberto Lopez",
        message: "Estuvo muy bien. Los payasos son geniales. Lo recomiendo.",
        image: "https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/427909748_3696141180630935_5130325083031267224_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2285d6&_nc_ohc=iFt06SQ1nbEQ7kNvwGg98bQ&_nc_oc=AdnTVZzfrmsvky1JQoBRpSpd948ZBrM1LacbjT47dwc653IwbodKhYmWYbFOhCMT3b8&_nc_zt=23&_nc_ht=scontent.flpb2-2.fna&_nc_gid=JRkraCOVgkKD1g4ODzpitw&oh=00_AfjjHqE8JcrNkES_7kGFTmf1ipGEEAZE5SiXrggXrxvHfg&oe=692DB61A",
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
        date: "Diciembre 2024",
        description: "Un espectáculo increíble lleno de risas y diversión para toda la familia.",
        thumbnail: "/images/latest-shows/show-1.jpg", // Reemplazar con tu foto local
        className: "md:col-span-1",
      },
      {
        id: 2,
        title: "Show en El Alto",
        date: "Noviembre 2024",
        description: "Magia y entretenimiento que dejó a todos con ganas de más.",
        thumbnail: "/images/latest-shows/show-2.jpg", // Reemplazar con tu foto local
        className: "md:col-span-1",
      },
      {
        id: 3,
        title: "Show Familiar",
        date: "Octubre 2024",
        description: "Risas garantizadas en esta presentación especial para toda la familia.",
        thumbnail: "/images/latest-shows/show-3.jpg", // Reemplazar con tu foto local
        className: "md:col-span-1",
      },
      {
        id: 4,
        title: "Show de Cumpleaños",
        date: "Septiembre 2024",
        description: "Celebración especial con nuestros payasos favoritos.",
        thumbnail: "/images/latest-shows/show-4.jpg", // Reemplazar con tu foto local
        className: "md:col-span-1",
      },
      {
        id: 5,
        title: "Show Nocturno",
        date: "Agosto 2024",
        description: "Una noche mágica llena de diversión y espectáculo.",
        thumbnail: "/images/latest-shows/show-5.jpg", // Reemplazar con tu foto local
        className: "md:col-span-1",
      },
      {
        id: 6,
        title: "Show Especial",
        date: "Julio 2024",
        description: "Una presentación única que todos recordarán por mucho tiempo.",
        thumbnail: "/images/latest-shows/show-6.jpg", // Reemplazar con tu foto local
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
        category: "Payaso Principal",
        description: "El líder del grupo, conocido por su humor único y su capacidad para hacer reír a grandes y pequeños.",
        image: "/images/about-us/chuchin.jpg", 
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
        category: "Especialista en Magia",
        description: "El experto en trucos mágicos que deja a todos con la boca abierta.",
        image: "/images/about-us/chupetin.jpg",
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
        category: "Experto en Juegos",
        description: "El animador que hace que todos participen y se diviertan.",
        image: "/images/about-us/pelotin.jpg",
        content: {
          title: "Pelotin - El Animador",
          paragraphs: [
            "Pelotin es el experto en crear momentos interactivos. Sus juegos y actividades involucran a todo el público, haciendo que cada persona se sienta parte del espectáculo.",
            "Con energía inagotable y creatividad sin límites, Pelotin asegura que no haya un momento aburrido durante el show.",
          ],
        },
      },
      {
        name: "Frenin",
        category: "Comediante",
        description: "El especialista en chistes y situaciones cómicas que garantiza las risas.",
        image: "/images/about-us/frenin.jpg",
        content: {
          title: "Frenin - El Comediante",
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
    title: "¿Listo para una Experiencia Inolvidable?",
    description: "Reserva tu lugar ahora y disfruta de un espectáculo lleno de risas, magia y diversión",
    highlightedWords: {
      risas: { word: "risas", action: "highlight" as const, color: "#B7FF00" },
      magia: { word: "magia", action: "highlight" as const, color: "#FF6B00" },
      diversión: { word: "diversión", action: "highlight" as const, color: "#B7FF00" },
    },
    buttons: {
      primary: { text: "Reservar Ahora", href: "#" },
      secondary: { text: "Contáctanos", href: "/contact" },
    },
  },

  // Footer
  footer: {
    brand: {
      name: "Caluma Show",
      description: "El espectáculo de payasos más divertido y mágico para toda la familia.",
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
      url: "https://wa.me/59169709494",
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
      url: "#",
      label: "Instagram",
    },
  },
} as const

