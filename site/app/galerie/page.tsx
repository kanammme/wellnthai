'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Lightbox from '@/components/Lightbox'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

const galleryImages = [
  {
    src: '/images/interieur/interieur-1.jpg',
    alt: 'Coin salon avec fleurs, ambiance violette et apaisante',
    description: 'Un espace de détente chaleureux avec des fleurs décoratives',
  },
  {
    src: '/images/interieur/interieur-2.jpg',
    alt: 'Salle de massage avec lit de massage et miroir lumineux violet',
    description: 'Notre cabine principale avec éclairage violet relaxant',
  },
  {
    src: '/images/interieur/interieur-3.jpg',
    alt: 'Salle double massage, ambiance violette pour une expérience à deux',
    description: 'Cabine double idéale pour les séances en couple',
  },
  {
    src: '/images/interieur/interieur-4.jpg',
    alt: 'Bureau d\'accueil avec cygnes artistiques en serviettes',
    description: 'Notre réception avec une touche artistique thaïlandaise',
  },
  {
    src: '/images/interieur/interieur-5.jpg',
    alt: 'Entrée du salon avec portemanteaux et lanterne décorative',
    description: 'L\'entrée chaleureuse de notre salon',
  },
  {
    src: '/images/interieur/interieur-6.jpg',
    alt: 'Fauteuils verts dans le coin salon pour la détente avant et après le massage',
    description: 'Espace détente avec fauteuils confortables',
  },
]

export default function GaleriePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-purple">
      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />

      <div className="container-wide section-padding">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Notre Galerie
          </h1>
          <p className="text-cream/90 text-lg md:text-xl leading-relaxed">
            Plongez dans l&apos;ambiance chaleureuse et apaisante de notre salon,
            pensé pour votre détente absolue.
          </p>
        </motion.div>

        {/* Grille de photos - masonry effect */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => {
            // On rend certaines images plus grandes pour un effet masonry
            const isLarge = index === 1 || index === 2 // Les images 2 et 3 sont plus grandes
            const aspectClass = isLarge ? 'aspect-[4/3]' : 'aspect-[3/4]'

            return (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group break-inside-avoid mb-6 cursor-pointer ${aspectClass}`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />

                  {/* Overlay sombre au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icône loupe au centre */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FaSearch className="text-white text-2xl" />
                    </div>
                  </div>

                  {/* Description au bas */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-cream text-sm font-medium truncate">
                      {image.alt.split('—')[0].trim()}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Indications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-cream/70 text-sm">
            Cliquez sur une image pour l&apos;agrandir • Utilisez les flèches pour naviguer
          </p>
        </motion.div>

        {/* Section finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-cream/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
              Envie de découvrir notre salon en vrai ?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.planity.com/well-thai-54000-nancy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
              >
                Réserver votre moment bien-être
              </a>

              <Link
                href="/contact"
                className="btn-secondary px-8 py-4 text-lg font-semibold hover:bg-cream/10 transition-colors inline-flex items-center justify-center"
              >
                <FaMapMarkerAlt className="mr-2" />
                Nous trouver
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-cream/80">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="font-semibold text-cream mb-2">Ambiance apaisante</h3>
                <p className="text-sm">Lumières tamisées, musique douce et parfums relaxants</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="font-semibold text-cream mb-2">Équipement professionnel</h3>
                <p className="text-sm">Tables de massage ergonomiques et produits de qualité</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h3 className="font-semibold text-cream mb-2">Hygiène irréprochable</h3>
                <p className="text-sm">Nettoyage approfondi après chaque client</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}