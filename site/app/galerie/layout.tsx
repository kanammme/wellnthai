import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerie Photos — Salon Well & Thaï Nancy',
  description: 'Découvrez en images l\'ambiance chaleureuse et apaisante du salon de massage Well & Thaï à Nancy.',
}

export default function GalerieLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}