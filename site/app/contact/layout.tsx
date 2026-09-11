import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Horaires — Well & Thaï Nancy',
  description: 'Adresse, horaires d\'ouverture et accès au salon Well & Thaï à Nancy. Réservez votre massage bien-être en ligne.',
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}