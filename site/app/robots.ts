import type { MetadataRoute } from 'next'

// Exploration autorisée pour que Google lise le noindex (site de démonstration).
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' } }
}
