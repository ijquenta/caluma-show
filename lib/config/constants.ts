/**
 * Constantes de configuración
 * Valores numéricos y configuraciones reutilizables
 */

export const constants = {
  // Configuración de LightRays
  lightRays: {
    hero: {
      count: 8,
      blur: 40,
      speed: 12,
      length: "80vh",
    },
    cta: {
      count: 6,
      blur: 35,
      speed: 10,
      length: "60vh",
    },
  },

  // Configuración de animaciones BlurFade
  animations: {
    defaultDuration: 0.8,
    defaultOffset: 20,
    delays: {
      immediate: 0,
      short: 0.15,
      medium: 0.2,
      long: 0.4,
    },
  },

  // Configuración de NeonGradientCard
  neonCard: {
    borderSize: 3,
    borderRadius: {
      stats: 20,
      cta: 24,
    },
  },

  // Configuración de Highlighter
  highlighter: {
    strokeWidth: 1.5,
    isView: true,
  },

  // Configuración de Marquee
  marquee: {
    duration: "20s",
    pauseOnHover: true,
  },

  // Configuración de AnimatedList (testimonials)
  animatedList: {
    delay: 300,
  },

  // Tamaños y espaciados comunes
  spacing: {
    sectionPadding: "py-20 px-4",
    containerMaxWidth: {
      hero: "max-w-5xl",
      stats: "max-w-6xl",
      features: "max-w-7xl",
      testimonials: "max-w-4xl",
      cta: "max-w-4xl",
      footer: "max-w-6xl",
    },
  },
} as const

