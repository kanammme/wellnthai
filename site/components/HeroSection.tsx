'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

// Composant de compteur animé
const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const animation = animate(count, value, {
      duration,
      ease: "easeOut"
    })

    return () => animation.stop()
  }, [value, count, duration])

  return <motion.span>{rounded}</motion.span>
}

// Position du logo callée sur le miroir de interieur-2.png (photo carrée
// 1024x1024 en object-cover : le point de rognage se déplace selon le ratio
// du Hero, donc ces valeurs sont un compromis entre 1920x1080 et 1440x900,
// calibré visuellement — à réajuster si la photo de fond change.
const MIRROR_LOGO_TOP = '11%'
const MIRROR_LOGO_LEFT = '47%'

const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background image avec overlay subtil et effet Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/interieur/interieur-2.png"
            alt="Salle de massage violette au salon Wellnessthaii"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        {/* Overlay subtil pour contraste délicat */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/50 to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-purple-accent/3" />
      </div>

      {/* Logo callé sur le miroir de la photo de fond - desktop/tablette uniquement.
          Le centrage (translate -50/-50) doit rester sur ce wrapper simple : un
          motion.div avec sa propre animation de scale gère "transform" lui-même
          et écraserait un transform de centrage posé au même endroit. */}
      <div
        className="hidden md:block absolute z-10 pointer-events-none"
        style={{ top: MIRROR_LOGO_TOP, left: MIRROR_LOGO_LEFT, transform: 'translate(-50%, -50%)' }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="relative w-[150px] h-[150px]">
            <Image
              src="/images/logo/logo-emblem.png"
              alt="Emblème Wellnessthaii - Cercle zen doré"
              fill
              className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
              sizes="150px"
            />
          </div>
        </motion.div>
      </div>

      <div className="container-wide text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10 md:space-y-16 max-w-5xl mx-auto"
        >
          {/* Logo - version mobile uniquement, simple et centrée dans le flux */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="md:hidden inline-block"
          >
            <div className="mx-auto relative flex items-center justify-center mb-4">
              <div className="relative w-[110px] h-[110px]">
                <Image
                  src="/images/logo/logo-emblem.png"
                  alt="Emblème Wellnessthaii - Cercle zen doré"
                  fill
                  className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
                  sizes="140px"
                />
              </div>
            </div>
          </motion.div>

          {/* Titre principal - version fine et élégante */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="space-y-10 md:pt-20"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold font-normal tracking-wide leading-tight">
              Wellnessthaii
            </h1>
            <div className="h-px w-24 mx-auto bg-gold/30"></div>
            <p className="font-serif text-xl md:text-2xl text-cream font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              L&apos;art du bien-être thaïlandais à Nancy
            </p>
          </motion.div>

          {/* Sous-titre - plus d'espace autour */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="pt-4"
          >
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
              Massages traditionnels, huiles bio et pierres chaudes dans un cocon
              de sérénité, au cœur de Nancy.
            </p>
          </motion.div>

          {/* Badge note clientèle - version discrète avec compteurs animés */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-dark/40 backdrop-blur-sm border border-gold/20 rounded-full px-5 py-2.5 space-x-3"
          >
            <div className="flex items-center space-x-0.5">
              <FaStar className="text-gold/80 text-sm" />
              <FaStar className="text-gold/80 text-sm" />
              <FaStar className="text-gold/80 text-sm" />
              <FaStar className="text-gold/80 text-sm" />
              <FaStar className="text-gold/80 text-sm" />
            </div>
            <span className="text-cream/90 font-light text-sm">
              5,0
            </span>
            <div className="w-px h-3 bg-gold/30"></div>
            <span className="text-cream/70 text-sm font-light tracking-wide">
              <AnimatedCounter value={45} duration={1.8} /> clients satisfaits
            </span>
          </motion.div>

          {/* Boutons CTA - version fine et sobre */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-12"
          >
            <a
              href="tel:0612345678"
              className="text-base font-light border border-gold text-gold hover:bg-gold/10 px-10 py-3.5 rounded-md transition-all duration-200 tracking-wide hover:-translate-y-1 hover:shadow-lg"
            >
              Réserver maintenant
            </a>
            <Link
              href="/prestations"
              className="text-base font-light text-cream/90 hover:text-gold border-b border-transparent hover:border-gold/50 pb-1 px-10 py-3.5 transition-all duration-200 tracking-wide hover:-translate-y-1"
            >
              Découvrir nos prestations
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - version discrète */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border border-gold/30 rounded-full flex justify-center">
          <div className="w-px h-3 bg-gold/50 mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection