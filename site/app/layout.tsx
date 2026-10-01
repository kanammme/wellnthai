import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DemoRibbon from '@/components/DemoRibbon'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Wellnessthaii (démonstration) - Massage bien-être thaïlandais',
  description: 'Site de démonstration réalisé par AL H · Digital Studio pour un salon de massage thaïlandais fictif.',
  // Établissement fictif : le site ne doit pas apparaître dans Google comme un vrai salon
  robots: { index: false, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <DemoRibbon />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}