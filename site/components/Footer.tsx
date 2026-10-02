import Link from 'next/link'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'
import DemoAction from '@/components/DemoAction'

const Footer = () => {
  return (
    <footer className="bg-dark-section border-t border-gold/20">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <Image
                  src="/images/logo/logo-emblem.png"
                  alt="Emblème Wellnessthaii"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-cream mb-0.5">Wellnessthaii</h2>
                <p className="text-gold/80 text-sm">Massage bien-être thaïlandais</p>
              </div>
            </div>
            <p className="text-cream/80">
              Un espace de détente et de bien-être au cœur de Nancy,
              où tradition thaïlandaise et relaxation se rencontrent.
            </p>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-gold">Contact & Horaires</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gold mt-1" />
                <div>
                  <p className="font-medium text-cream">Adresse</p>
                  <p className="text-cream/80">
                    Centre-ville<br />
                    54000 Nancy
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gold" />
                <div>
                  <p className="font-medium text-cream">Téléphone</p>
                  <DemoAction kind="appeler" className="inline-flex items-center min-h-[44px] text-cream/80 hover:text-gold transition-colors">
                    Appeler le salon
                  </DemoAction>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-gold mt-1" />
                <div>
                  <p className="font-medium text-cream">Horaires</p>
                  <p className="text-cream/80">
                    Du mardi au samedi<br />
                    10h00 - 19h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Reservation */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-gold">Navigation</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <Link
                href="/prestations"
                className="inline-flex items-center min-h-[44px] text-cream/80 hover:text-gold transition-colors"
              >
                Prestations
              </Link>
              <Link
                href="/galerie"
                className="inline-flex items-center min-h-[44px] text-cream/80 hover:text-gold transition-colors"
              >
                Galerie
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center min-h-[44px] text-cream/80 hover:text-gold transition-colors"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center min-h-[44px] text-cream/80 hover:text-gold transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/contact#faq"
                className="inline-flex items-center min-h-[44px] text-cream/80 hover:text-gold transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/mentions-legales"
                className="inline-flex items-center min-h-[44px] text-cream/80 hover:text-gold transition-colors"
              >
                Mentions légales
              </Link>
            </div>
            <div className="pt-4">
              <DemoAction
                className="btn-primary w-full text-center block"
              >
                Réserver en ligne
              </DemoAction>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm text-center md:text-left">
              Wellnessthaii est un établissement fictif : site de démonstration conçu par{' '}
              <a href="https://al-h.fr" className="text-gold/80 hover:text-gold transition-colors">
                AL H · Digital Studio
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer