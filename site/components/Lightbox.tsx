'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface LightboxProps {
  images: {
    src: string
    alt: string
    description?: string
  }[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onPrev()
          break
        case 'ArrowRight':
          onNext()
          break
      }
    }

    // Bloquer le scroll du body quand le lightbox est ouvert
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = '' // Nettoyage
    }
  }, [isOpen, onClose, onPrev, onNext])

  // Fermer en cliquant en dehors de l'image
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Ne rien rendre côté serveur ou si le lightbox est fermé
  if (!isOpen || !mounted) return null

  const currentImage = images[currentIndex]

  const lightboxContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        {/* Overlay sombre avec blur */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

        {/* Contenu du lightbox */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative z-10 w-full max-w-6xl max-h-[90vh]"
        >
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 md:-right-12 z-20 text-white hover:text-gold transition-colors p-2"
            aria-label="Fermer la visionneuse"
          >
            <FaTimes size={28} />
          </button>

          {/* Navigation */}
          <button
            onClick={onPrev}
            className="absolute left-4 md:-left-12 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gold transition-colors p-3 rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Image précédente"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 md:-right-12 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gold transition-colors p-3 rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Image suivante"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Image principale */}
          <div className="relative w-full h-[70vh] md:h-[80vh] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Informations de l'image */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-white font-medium">
                {currentIndex + 1} / {images.length}
              </span>
              <div className="w-1 h-1 bg-white/50 rounded-full" />
              <p className="text-white/90">{currentImage.alt}</p>
            </div>

            {currentImage.description && (
              <p className="text-white/70 text-sm mt-2 max-w-2xl mx-auto">
                {currentImage.description}
              </p>
            )}
          </div>

          {/* Indicateurs de navigation (petits cercles) */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  // Navigation directe vers une image
                  const event = new KeyboardEvent('keydown', { key: index > currentIndex ? 'ArrowRight' : 'ArrowLeft' })
                  for (let i = 0; i < Math.abs(index - currentIndex); i++) {
                    window.dispatchEvent(event)
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-gold w-6' : 'bg-white/30 hover:bg-white/50'}`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  // Rendre via React Portal directement dans document.body
  return createPortal(lightboxContent, document.body)
}

export default Lightbox