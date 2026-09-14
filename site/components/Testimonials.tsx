'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaStar, FaGoogle, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    author: 'Camille Renard',
    text: 'Belle découverte de cet institut, carte cadeau pour un massage bien-être et un bon moment rien que pour soi, une table chauffante, une ambiance cocooning. Merci pour votre accueil et votre savoir-faire. Je vous recommanderai sans hésitation.',
    date: 'avril',
    stars: 5,
  },
  {
    id: 2,
    author: 'Julien Weber',
    text: 'Visite chez Wellnessthaii encore cette après-midi et j\'en ressors détendu et heureux d\'y être retourné à nouveau, Aiyara est accueillante, professionnelle et très compétente. Je recommande vivement.',
    date: 'mai',
    stars: 5,
  },
  {
    id: 3,
    author: 'Nadia Faivre',
    text: 'J\'essaie d\'y aller assez régulièrement pour 1h30 à chaque fois ! C\'est un vrai bonheur, une détente absolue. Je recommande.',
    date: 'juin',
    stars: 5,
  },
  {
    id: 4,
    author: 'Thomas Grangé',
    text: 'Excellent salon, la prestation est parfaite, le cadre est cosy et chaleureux et la masseuse très professionnelle et adorable ! Je recommande fortement et reviendrai avec grand plaisir !',
    date: 'février',
    stars: 5,
  },
  {
    id: 5,
    author: 'Isabelle Perrin',
    subtitle: 'Cliente régulière',
    text: 'J\'ai 59 ans et j\'éprouve un bienfait réel pour les massages. Je me suis rendue dans cet institut, pétrie de contractions. J\'en suis ressortie complètement décontractée avec un bienfait réel.',
    date: 'février',
    stars: 5,
  },
  {
    id: 6,
    author: 'Vincent Aubry',
    text: 'Expérience au top ! Accueil chaleureux, massage deep tissu recommandé, et délicieux thé pour finir, merci !',
    date: 'avril',
    stars: 5,
  },
  {
    id: 7,
    author: 'Marc-Antoine Dumont',
    text: 'Superbe accueil, la dame est très sympa et chaleureuse. C\'est un massage du dos très intense, vous aurez l\'impression d\'avoir mal à certains moments, mais une fois fini votre dos sera complètement décongestionné. Je recommande vivement ! Merci encore',
    date: 'août 2025',
    stars: 5,
  },
  {
    id: 8,
    author: 'Claire Munier',
    text: 'Un fabuleux massage thaï bien-être. Une découverte pour moi concernant ce type de massage et ce centre. Tout d\'abord la masseuse est extrêmement gentille et à l\'écoute...',
    date: 'février 2025',
    stars: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-cream to-gold/5">
      <div className="container-wide">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark mb-6">
            Ce que disent nos clients
          </h2>

          {/* Badge de note globale */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gold/20 rounded-full px-6 py-3 space-x-3 shadow-lg">
            <div className="flex items-center space-x-1">
              <FaStar className="text-gold" />
              <FaStar className="text-gold" />
              <FaStar className="text-gold" />
              <FaStar className="text-gold" />
              <FaStar className="text-gold" />
            </div>
            <span className="text-dark font-semibold">5,0</span>
            <span className="text-dark/50">—</span>
            <span className="text-dark/80">45 avis clients</span>
            <FaGoogle className="text-gray-500" />
          </div>
        </motion.div>

        {/* Grille de témoignages - desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-serif text-lg text-dark font-bold">
                    {testimonial.author}
                  </h3>
                  {testimonial.subtitle && (
                    <p className="text-dark/60 text-sm">{testimonial.subtitle}</p>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FaStar key={i} className="text-gold text-sm" />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <FaQuoteLeft className="text-gold/30 mb-2" />
                <p className="text-dark/80 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gold/10">
                <span className="text-dark/60 text-sm">{testimonial.date}</span>
                <div className="flex items-center space-x-1 text-gray-500 text-sm">
                  <FaGoogle />
                  <span>Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel scrollable - mobile avec auto-scroll */}
        <div className="md:hidden mb-8 overflow-hidden group">
          <style jsx>{`
            @keyframes autoScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-${testimonials.length * 90}vw));
              }
            }

            .auto-scroll-container {
              display: flex;
              animation: autoScroll 40s linear infinite;
            }

            .group:hover .auto-scroll-container {
              animation-play-state: paused;
            }
          `}</style>
          <div className="overflow-x-hidden">
            <div className="auto-scroll-container">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[85vw] mx-2 bg-white rounded-2xl shadow-lg p-6 flex-shrink-0"
                >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-lg text-dark font-bold">
                      {testimonial.author}
                    </h3>
                    {testimonial.subtitle && (
                      <p className="text-dark/60 text-sm">{testimonial.subtitle}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FaStar key={i} className="text-gold text-sm" />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <FaQuoteLeft className="text-gold/30 mb-2" />
                  <p className="text-dark/80 text-sm leading-relaxed line-clamp-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gold/10">
                  <span className="text-dark/60 text-sm">{testimonial.date}</span>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <FaGoogle />
                    <span>Google</span>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        {/* Bouton "Voir tous nos avis" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/a-propos"
            className="btn-secondary px-8 py-4 text-lg font-semibold hover:bg-gold/5 transition-colors inline-flex items-center justify-center"
          >
            <FaGoogle className="mr-3" />
            Voir tous nos avis
          </Link>
        </motion.div>

        {/* Indication visuelle pour mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="md:hidden text-center mt-6"
        >
          <p className="text-dark/60 text-sm">
            <span className="inline-block animate-bounce mr-2">←</span>
            Faites glisser pour voir plus d'avis
            <span className="inline-block animate-bounce ml-2">→</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials