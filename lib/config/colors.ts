/**
 * Colores reutilizables de Caluma Show
 * Aquí puedes cambiar fácilmente todos los colores del proyecto
 */

export const colors = {
  // Colores principales de la paleta
  primary: "#FF6B00",        // Naranja Brillante (CTA)
  secondary: "#B7FF00",      // Verde Neón (Acentos)
  
  // Colores para modo oscuro
  secondaryDark: "#C4FF33",  // Verde Neón más brillante en oscuro
  
  // Colores con transparencia para efectos
  primaryWithAlpha: (alpha: number = 1) => `rgba(255, 107, 0, ${alpha})`,
  secondaryWithAlpha: (alpha: number = 1) => `rgba(183, 255, 0, ${alpha})`,
  
  // Para Highlighter
  highlighter: {
    primary: "#FF6B00",
    secondary: "#B7FF00",
  },
  
  // Para NeonGradientCard
  neon: {
    firstColor: "#FF6B00",
    secondColor: "#B7FF00",
  },
  
  // Para LightRays
  lightRays: {
    hero: "rgba(255, 107, 0, 0.25)",
    cta: "rgba(255, 107, 0, 0.2)",
  },
} as const

