import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prestations & Tarifs — Wellnessthaii Nancy',
  description: 'Découvrez tous nos massages thaïlandais, huiles bio, pierres chaudes et formules bien-être à Nancy. Site de démonstration.',
}

export default function PrestationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}