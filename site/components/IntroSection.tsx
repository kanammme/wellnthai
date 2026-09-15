'use client'

import { motion } from 'framer-motion'
import { FaLeaf, FaBalanceScale, FaHeart } from 'react-icons/fa'

const IntroSection = () => {
  const pointsFort = [
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Tradition & authenticité",
      description: "Des techniques ancestrales thaïlandaises",
      color: "text-gold",
    },
    {
      icon: <FaBalanceScale className="w-8 h-8" />,
      title: "Équilibre & harmonie",
      description: "Une approche globale corps et esprit",
      color: "text-purple-accent",
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Bien-être & sérénité",
      description: "Un moment de détente absolue",
      color: "text-dark",
    },
  ]

  return (
    <section className="section-padding bg-cream-section">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
              Un cocon de bien-être au cœur de Nancy
            </h2>
            <p className="text-dark/80 text-lg leading-relaxed">
              Chez Wellnessthaii, chaque prestation est une invitation au voyage.
              Nos massages, hérités des techniques ancestrales thaïlandaises, allient
              pressions, étirements et huiles naturelles pour une détente profonde du
              corps et de l&apos;esprit. Dans une ambiance chaleureuse et apaisante,
              laissez-vous transporter par l&apos;expertise de nos praticiennes pour
              un moment rien que pour vous.
            </p>
          </motion.div>

          {/* Points forts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {pointsFort.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`${point.color} mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {point.icon}
                </div>
                <h3 className="font-serif text-xl text-dark mb-3">
                  {point.title}
                </h3>
                <p className="text-dark/70">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Séparateur décoratif */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100%' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-dark/10 relative"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-dark/20 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection