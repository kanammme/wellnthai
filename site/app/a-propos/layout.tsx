import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos — Wellnessthaii Nancy',
  description: 'Découvrez l\'histoire de Wellnessthaii, salon de massage thaïlandais à Nancy, et rencontrez Aiyara, votre masseuse experte en techniques ancestrales thaïlandaises.',
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}