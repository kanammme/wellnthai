import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos — Well & Thaï Nancy',
  description: 'Découvrez l\'histoire de Well & Thaï, salon de massage thaïlandais à Nancy, et rencontrez Wannapha, votre masseuse experte en techniques ancestrales thaïlandaises.',
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}