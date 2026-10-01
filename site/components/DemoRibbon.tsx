// Bandeau fin en haut de page : signale le site de démonstration sans gâcher la démo.
export default function DemoRibbon() {
  return (
    <div className="bg-dark text-cream/80 text-xs md:text-sm text-center px-4 py-2 border-b border-gold/20">
      Site de démonstration conçu par AL H · Digital Studio, établissement fictif.{' '}
      <a
        href="https://al-h.fr/devis"
        className="text-gold underline underline-offset-2 hover:text-gold/80 whitespace-nowrap"
      >
        Le même pour votre commerce ?
      </a>
    </div>
  )
}
