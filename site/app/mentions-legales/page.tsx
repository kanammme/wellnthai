import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Wellnessthaii (démonstration)',
  description: 'Mentions légales du site de démonstration Wellnessthaii, réalisé par AL H · Digital Studio.',
}

const LEGAL_ROWS: { label: string; value: string }[] = [
  { label: 'Nature du site', value: 'Site de démonstration (portfolio), établissement fictif' },
  { label: 'Éditeur', value: 'Mohamed AL ACHICHI, AL H · Digital Studio' },
  { label: 'Statut', value: 'Micro-entrepreneur (entrepreneur individuel)' },
  { label: 'SIRET', value: '884 857 715 00012' },
  { label: 'Adresse du siège', value: '5 boulevard de Baudricourt, 54600 Villers-lès-Nancy' },
  { label: 'E-mail', value: 'contact@al-h.fr' },
  { label: 'Directeur de la publication', value: 'Mohamed AL ACHICHI' },
  {
    label: 'Hébergement',
    value: 'Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, États-Unis',
  },
]

export default function MentionsLegalesPage() {
  return (
    <div className="section-padding bg-cream">
      <div className="container-wide max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl text-dark mb-4">Mentions légales</h1>
        <p className="text-dark/70 text-lg leading-relaxed mb-10">
          Wellnessthaii est un <strong>établissement fictif</strong>. Ce site est un projet de
          démonstration conçu par AL H · Digital Studio pour montrer ce que peut être le site d&apos;un
          institut de massage. Le nom, la praticienne, l&apos;adresse, les coordonnées et les textes
          sont imaginaires. Aucune prestation n&apos;y est vendue et aucune réservation n&apos;y est
          enregistrée.
        </p>

        <div className="divide-y divide-gold/15 rounded-2xl border border-gold/20 bg-white">
          {LEGAL_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="shrink-0 text-xs uppercase tracking-wide text-dark/60">{row.label}</span>
              <span className="text-sm text-dark sm:text-right">{row.value}</span>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="font-serif text-2xl text-dark mb-3">Données personnelles</h2>
          <p className="text-dark/70 leading-relaxed">
            Ce site ne comporte aucun formulaire et ne collecte aucune donnée personnelle. Il ne
            dépose aucun cookie de suivi ni outil d&apos;analyse d&apos;audience. La carte de la page
            Contact est fournie par Google Maps, qui peut déposer ses propres cookies lorsque vous
            l&apos;affichez.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-dark mb-3">Crédits</h2>
          <p className="text-dark/70 leading-relaxed">
            Conception, design et développement :{' '}
            <a href="https://al-h.fr" className="text-gold hover:text-gold-600 underline underline-offset-2">
              AL H · Digital Studio
            </a>
            . Les photographies et le logo ont été générés par intelligence artificielle pour ce
            projet. Typographies : Inter et Playfair Display (Google Fonts, intégrées au site).
          </p>
        </section>
      </div>
    </div>
  )
}
