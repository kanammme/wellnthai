'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaParking, FaBus, FaWheelchair, FaInstagram, FaFacebook, FaChevronDown, FaChevronUp, FaStar, FaGoogle } from 'react-icons/fa'

const ContactClient = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Fonction pour obtenir le jour actuel (0 = dimanche, 1 = lundi, ...)
  const getCurrentDay = () => {
    const today = new Date().getDay() // 0 = dimanche, 1 = lundi, ...
    // Convertir pour correspondre à notre tableau (lundi = 0)
    return today === 0 ? 6 : today - 1
  }

  const currentDay = getCurrentDay()

  const horaires = [
    { jour: 'Lundi', heures: '10:00 - 19:00', isClosed: false },
    { jour: 'Mardi', heures: 'Fermé', isClosed: true },
    { jour: 'Mercredi', heures: '10:00 - 19:00', isClosed: false },
    { jour: 'Jeudi', heures: '10:00 - 19:00', isClosed: false },
    { jour: 'Vendredi', heures: '10:00 - 19:00', isClosed: false },
    { jour: 'Samedi', heures: '10:00 - 19:00', isClosed: false },
    { jour: 'Dimanche', heures: '13:00 - 18:00', isClosed: false },
  ]

  const faqItems = [
    {
      question: 'Comment réserver un rendez-vous ?',
      answer: 'La réservation se fait en ligne via notre plateforme de réservation, disponible 24h/24, avec confirmation immédiate. Cliquez sur le bouton "Réserver en ligne" ci-dessus pour accéder directement à notre agenda, ou appelez-nous directement.'
    },
    {
      question: 'Puis-je annuler ou modifier mon rendez-vous ?',
      answer: 'Oui, vous pouvez annuler ou modifier votre rendez-vous directement depuis votre confirmation de réservation. Les modifications sont gratuites jusqu\'à 24h avant le rendez-vous.'
    },
    {
      question: 'Le salon propose-t-il des cartes cadeaux ?',
      answer: 'Oui, nous proposons plusieurs coffrets cadeaux qui sont parfaits pour offrir un moment de bien-être. Retrouvez toutes nos cartes cadeaux et coffrets sur notre page Prestations.'
    },
    {
      question: 'Le massage est-il adapté aux femmes enceintes ?',
      answer: 'Oui, à partir de 5 mois de grossesse et sans problèmes médicaux, avec des prestations dédiées (Baby Relax, Baby Cocooning). Nous utilisons des positions adaptées et des techniques spécifiques pour assurer votre confort et sécurité.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-cream-section">
      <div className="container-wide section-padding">
        {/* 1. En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark mb-6">
            Nous trouver & nous contacter
          </h1>
          <p className="text-dark/80 text-lg md:text-xl">
            Toutes les informations pratiques pour venir vous détendre chez Wellnessthaii.
          </p>
        </motion.div>

        {/* 2. Section principale en 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* COLONNE GAUCHE - Informations pratiques */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Adresse */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-gold text-xl" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-dark mb-2">Adresse</h2>
                  <p className="text-dark/80 text-lg">
                    Centre-ville<br />
                    54000 Nancy
                  </p>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <FaClock className="text-gold text-xl" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl text-dark mb-4">Horaires d&apos;ouverture</h2>
                  <div className="space-y-3">
                    {horaires.map((horaire, index) => (
                      <div
                        key={horaire.jour}
                        className={`flex justify-between items-center p-3 rounded-lg ${index === currentDay ? 'bg-gold/10 border border-gold/30' : ''} ${horaire.isClosed ? 'bg-gray-50 text-gray-400' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`font-medium ${index === currentDay ? 'text-gold' : horaire.isClosed ? 'text-gray-400' : 'text-dark'}`}>
                            {horaire.jour}
                          </span>
                          {index === currentDay && (
                            <span className="text-xs bg-gold text-white px-2 py-1 rounded-full">
                              Aujourd&apos;hui
                            </span>
                          )}
                        </div>
                        <span className={horaire.isClosed ? 'text-gray-400' : 'text-dark/70 font-medium'}>
                          {horaire.heures}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Réservation en ligne */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/5 to-purple-accent/5 rounded-2xl p-8 border border-gold/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <FaCalendarAlt className="text-gold text-xl" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-dark mb-2">Réservation en ligne</h2>
                  <p className="text-dark/70 mb-6">
                    Réservez votre moment de bien-être en quelques clics
                  </p>
                  <a
                    href="tel:0612345678"
                    className="btn-primary w-full text-center text-lg py-4 mb-4 hover:scale-105 transition-transform"
                  >
                    Réserver en ligne
                  </a>
                  <p className="text-center text-dark/60 text-sm">
                    Réservation gratuite • Confirmation immédiate • Disponible 24h/24
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Réseaux sociaux */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-serif text-xl text-dark mb-6">Suivez-nous</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* COLONNE DROITE - Carte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Carte Google Maps */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="font-serif text-2xl text-dark mb-4">Nous trouver sur la carte</h2>
                <p className="text-dark/60 mb-6">
                  Notre salon est situé au cœur de Nancy, facilement accessible en transports en commun.
                </p>
              </div>

              <div className="relative h-96 w-full">
                <iframe
                  src="https://www.google.com/maps?q=Nancy,+France&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du salon Wellnessthaii à Nancy"
                  className="absolute inset-0"
                />
              </div>

              <div className="p-6">
                <a
                  href="https://maps.google.com/?q=Nancy,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center inline-flex items-center justify-center"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Obtenir l&apos;itinéraire
                </a>
              </div>
            </div>

            {/* Informations de contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-serif text-xl text-dark mb-6">Contact direct</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-dark mb-1">Téléphone</h4>
                  <a href="tel:0612345678" className="text-dark/70 hover:text-gold transition-colors">
                    06 12 34 56 78
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-dark mb-1">Urgences</h4>
                  <p className="text-dark/70 text-sm">
                    Pour toute urgence concernant un rendez-vous, contactez-nous directement par téléphone.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. Section "Accès" */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-dark text-center mb-12">
            Accès & informations pratiques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaParking className="w-8 h-8" />,
                title: 'Parking à proximité',
                description: 'Plusieurs parkings publics disponibles dans un rayon de 5 minutes à pied du salon.',
                color: 'bg-gold/10 border-gold/30'
              },
              {
                icon: <FaBus className="w-8 h-8" />,
                title: 'Transports en commun',
                description: 'Accessible en bus et tramway. Arrêts "Nancy Centre" à 2 minutes de marche.',
                color: 'bg-purple-accent/10 border-purple-accent/30'
              },
              {
                icon: <FaWheelchair className="w-8 h-8" />,
                title: 'Accessibilité',
                description: 'Merci de nous contacter pour toute question d\'accessibilité ou besoin spécifique.',
                color: 'bg-dark/10 border-dark/30'
              }
            ].map((access, index) => (
              <div
                key={access.title}
                className={`${access.color} border rounded-xl p-8 hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-gold mb-4">
                  {access.icon}
                </div>
                <h3 className="font-serif text-xl text-dark mb-3">
                  {access.title}
                </h3>
                <p className="text-dark/70">
                  {access.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 4. Section FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-dark text-center mb-12">
            Questions fréquentes
          </h2>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-colors ${openFaq === index ? 'bg-gold/10 border border-gold/30' : 'bg-white hover:bg-gray-50 border border-gray-200'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-semibold">{index + 1}</span>
                    </div>
                    <h3 className="font-serif text-lg md:text-xl text-dark">
                      {faq.question}
                    </h3>
                  </div>
                  {openFaq === index ? (
                    <FaChevronUp className="text-gold" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-white border border-t-0 border-gray-200 rounded-b-xl">
                    <p className="text-dark/70">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 5. Encart des avis Google */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gold/20">
            <h3 className="font-serif text-2xl text-dark mb-6">Nos clients nous recommandent</h3>

            {/* Badge de note compact */}
            <div className="inline-flex items-center bg-gradient-to-r from-gold/5 to-purple-accent/5 border border-gold/30 rounded-full px-6 py-3 space-x-3 mb-6">
              <div className="flex items-center space-x-1">
                <FaStar className="text-gold" />
                <FaStar className="text-gold" />
                <FaStar className="text-gold" />
                <FaStar className="text-gold" />
                <FaStar className="text-gold" />
              </div>
              <span className="text-dark font-bold text-lg">5,0 ★</span>
              <span className="text-dark/50">—</span>
              <span className="text-dark/80 font-medium">45 avis clients</span>
              <FaGoogle className="text-gray-500" />
            </div>

            <p className="text-dark/70 mb-6">
              Découvrez les témoignages de nos clients satisfaits
            </p>

            <Link
              href="/a-propos"
              className="btn-secondary px-6 py-3 text-base font-semibold hover:bg-gold/5 transition-colors inline-flex items-center justify-center"
            >
              <FaGoogle className="mr-2" />
              Voir tous nos avis
            </Link>
          </div>
        </motion.section>

        {/* 6. Section finale CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gold/5 to-purple-accent/5 rounded-2xl p-12 border border-gold/20">
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6">
              Une question ? Un besoin spécifique ?
            </h2>
            <p className="text-dark/70 text-lg mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour vous orienter vers la prestation
              la plus adaptée à vos besoins.
            </p>
            <a
              href="tel:0612345678"
              className="btn-primary px-10 py-5 text-xl font-semibold hover:scale-105 transition-transform inline-flex items-center"
            >
              Réserver maintenant
            </a>
            <p className="text-dark/60 text-sm mt-6">
              Ou contactez-nous au <a href="tel:0612345678" className="text-gold hover:text-gold-600 transition-colors font-medium">06 12 34 56 78</a> pour toute question
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ContactClient