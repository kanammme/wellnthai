import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'

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
                  alt="Emblème Well & Thaï"
                  width={40}
                  height={21}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-cream mb-0.5">Well & Thaï</h2>
                <p className="text-gold/70 text-sm">Massage bien-être thaïlandais</p>
              </div>
            </div>
            <p className="text-cream/80">
              Un espace de détente et de bien-être au cœur de Nancy,
              où tradition thaïlandaise et relaxation se rencontrent.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-cream/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-cream/70 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
            </div>
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
                    16 Rue du Faubourg des Trois-Maisons<br />
                    54000 Nancy
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gold" />
                <div>
                  <p className="font-medium text-cream">Téléphone</p>
                  <a href="tel:0766975971" className="text-cream/80 hover:text-gold transition-colors">
                    07 66 97 59 71
                  </a>
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
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/prestations"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                Prestations
              </Link>
              <Link
                href="/galerie"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                Galerie
              </Link>
              <Link
                href="/a-propos"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/mentions-legales"
                className="text-cream/80 hover:text-gold transition-colors"
              >
                Mentions légales
              </Link>
            </div>
            <div className="pt-4">
              <Link
                href="https://www.planity.com/well-thai-54000-nancy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Réserver en ligne
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} Well & Thaï. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/politique-confidentialite"
                className="text-cream/60 hover:text-gold text-sm transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/cgv"
                className="text-cream/60 hover:text-gold text-sm transition-colors"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer