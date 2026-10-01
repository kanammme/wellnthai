import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Horaires — Wellnessthaii Nancy',
  description: 'Adresse, horaires d\'ouverture et accès au salon Wellnessthaii à Nancy. Site de démonstration.',
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}