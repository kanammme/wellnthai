import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerie Photos — Salon Wellnessthaii Nancy',
  description: 'Découvrez en images l\'ambiance chaleureuse et apaisante du salon de massage Wellnessthaii à Nancy.',
}

export default function GalerieLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}