'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Lightbox from './Lightbox'
import { FaSearchPlus } from 'react-icons/fa'

const prestations = [
  {
    id: 1,
    title: 'Massage Thaï traditionnel',
    subtitle: 'Thaï traditionnel 1H',
    duration: '1h',
    price: '80€',
    image: '/images/prestations/thai.jpg',
    description: 'L\'art d\'harmoniser les énergies. Pressions, étirements et mobilisations pour libérer les tensions et retrouver calme et clarté d\'esprit.',
    colorClass: 'bg-gold-500',
    textColorClass: 'text-gold-600',
  },
  {
    id: 2,
    title: 'Massage aux huiles chaudes',
    subtitle: 'Huiles chaudes 1H',
    duration: '1h',
    price: '90€',
    image: '/images/prestations/bien-etre.jpg',
    description: 'Une alliance précieuse entre toucher, huiles naturelles et relaxation profonde, pour nourrir la peau et apaiser le mental.',
    colorClass: 'bg-purple-500',
    textColorClass: 'text-purple-600',
  },
  {
    id: 3,
    title: 'Massage Deep Tissue',
    subtitle: 'Deep tissus 1H',
    duration: '1h',
    price: '90€',
    image: '/images/prestations/deep-tissu.jpg',
    description: 'Le pouvoir du toucher en profondeur. Idéal pour soulager les tensions chroniques et retrouver mobilité et vitalité.',
    colorClass: 'bg-dark-500',
    textColorClass: 'text-dark-600',
  },
]

const PrestationsPreview = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setLightboxOpen(false)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % prestations.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + prestations.length) % prestations.length)
  }

  // Préparer les images pour le lightbox
  const lightboxImages = prestations.map(prestation => ({
    src: prestation.image,
    alt: prestation.title,
    description: prestation.description
  }))

  return (
    <>
      <section className="section-padding bg-cream-section">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
              Nos formules phares
            </h2>
            <p className="text-dark/70 text-lg max-w-2xl mx-auto">
              Découvrez nos soins de massage traditionnels thaïlandais,
              adaptés à vos besoins de bien-être
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {prestations.map((prestation, index) => (
              <motion.div
                key={prestation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image - cliquable pour lightbox */}
                <div className="relative h-48 w-full overflow-hidden group cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  handleImageClick(index);
                }}>
                  <Image
                    src={prestation.image}
                    alt={prestation.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay avec icône loupe */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <FaSearchPlus className="text-dark" size={24} />
                    </div>
                  </div>
                  <div className={`absolute top-4 right-4 ${prestation.colorClass} text-white text-sm font-semibold px-3 py-1 rounded-full z-10`}>
                    {prestation.duration}
                  </div>
                </div>

                <div className="p-6">
                  {/* Titre et prix */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-serif text-xl text-dark font-bold">
                        {prestation.title}
                      </h3>
                      <p className="text-dark/60 text-sm mt-1">
                        {prestation.subtitle}
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-dark">
                      {prestation.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-dark/70 mb-6 text-sm leading-relaxed">
                    {prestation.description}
                  </p>

                  {/* Bouton */}
                  <a
                    href="https://www.planity.com/well-thai-54000-nancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full ${prestation.colorClass} text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-200 block text-center hover:-translate-y-1 hover:shadow-lg`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Choisir
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lien vers toutes les prestations */}
          <div className="text-center">
            <Link
              href="/prestations"
              className="btn-secondary px-8 py-4 text-lg inline-flex items-center hover:bg-gold/5 transition-colors"
            >
              Voir toutes nos prestations
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox pour agrandir les images - en dehors de la section pour éviter les conflits de position */}
      <Lightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </>
  )
}

export default PrestationsPreview