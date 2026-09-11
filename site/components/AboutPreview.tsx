'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const AboutPreview = () => {
  return (
    <section className="section-padding bg-dark-section">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="aspect-square relative">
              <Image
                src="/images/interieur/interieur-1.jpg"
                alt="Ambiance chaleureuse du salon Well & Thaï avec fleurs décoratives"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Overlay subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
            </div>

            {/* Élément décoratif */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-accent rounded-full opacity-20" />
          </motion.div>

          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream">
              Rencontrez Wannapha
            </h2>

            <div className="space-y-4">
              <p className="text-cream/90 text-lg leading-relaxed">
                Immergez-vous dans un univers de bien-être et de sérénité avec
                Wannapha, votre masseuse dévouée à Nancy.
              </p>
              <p className="text-cream/80 leading-relaxed">
                Elle consacre ses talents à l&apos;art délicat du massage thaïlandais
                et du massage des pieds, mettant au service de votre relaxation
                ses techniques millénaires héritées de la tradition thaï.
              </p>
              <p className="text-cream/80 leading-relaxed">
                Passionnée par le bien-être et formée aux méthodes traditionnelles,
                Wannapha vous accueille dans un cadre chaleureux où chaque soin
                est personnalisé selon vos besoins spécifiques.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/a-propos"
                className="btn-primary px-8 py-4 text-lg inline-flex items-center group"
              >
                En savoir plus
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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

            {/* Petit badge de certification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-dark/50 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2 mt-6"
            >
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-dark font-bold text-sm">✓</span>
              </div>
              <span className="text-cream/80 text-sm">Certifiée massage traditionnel thaï</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview