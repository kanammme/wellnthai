'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    image: '/images/interieur/interieur-1.jpg',
    alt: 'Ambiance chaleureuse du salon Well & Thaï avec fleurs décoratives',
    title: 'Ambiance du salon',
  },
  {
    id: 2,
    image: '/images/interieur/interieur-2.jpg',
    alt: 'Salle de massage violette au salon Well & Thaï',
    title: 'Cabine de massage',
  },
  {
    id: 3,
    image: '/images/interieur/interieur-6.jpg',
    alt: 'Fauteuils verts dans l\'espace détente du salon',
    title: 'Espace détente',
  },
  {
    id: 4,
    image: '/images/interieur/interieur-4.jpg',
    alt: 'Zone d\'accueil du salon Well & Thaï',
    title: 'Accueil & réception',
  },
]

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-cream-section">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Un cadre pensé pour votre détente
          </h2>
          <p className="text-dark/70 text-lg max-w-2xl mx-auto">
            Plongez dans l&apos;atmosphère apaisante de notre salon de massage
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Titre visible au hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-cream font-semibold text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/galerie"
            className="btn-secondary px-8 py-4 text-lg inline-flex items-center hover:bg-gold/5 transition-colors"
          >
            Voir toute la galerie
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview