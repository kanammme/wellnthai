'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

// Site de démonstration : aucun avis réel ni inventé n'est affiché.
// La section montre l'emplacement où un vrai site afficherait les avis du commerce.
const placeholders = [
  { id: 1, lines: ['w-full', 'w-11/12', 'w-4/5', 'w-2/3'] },
  { id: 2, lines: ['w-full', 'w-5/6', 'w-3/4'] },
  { id: 3, lines: ['w-full', 'w-11/12', 'w-full', 'w-1/2'] },
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
            Vos avis clients, mis en valeur
          </h2>
          <p className="text-dark/70 text-lg leading-relaxed">
            Sur votre site, cette section affiche automatiquement vos vrais avis Google,
            ceux que vos clients ont déjà laissés.
          </p>
        </motion.div>

        {/* Emplacements d'avis (démonstration) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {placeholders.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
              aria-hidden="true"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gold/15" />
                <div className="space-y-2">
                  <div className="h-3 w-28 rounded-full bg-dark/10" />
                  <div className="h-2.5 w-16 rounded-full bg-dark/5" />
                </div>
              </div>
              <FaQuoteLeft className="text-gold/30 mb-3" />
              <div className="space-y-2.5">
                {card.lines.map((width, i) => (
                  <div key={i} className={`h-2.5 ${width} rounded-full bg-dark/10`} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-dark/60 text-sm">
          Démonstration : aucun avis réel n&apos;est affiché sur ce site fictif.
        </p>
      </div>
    </section>
  )
}

export default Testimonials
