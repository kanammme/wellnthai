'use client'

import { motion } from 'framer-motion'
import { FaStar, FaArrowRight, FaGift, FaBaby, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const categories = [
  { id: 'huiles-bio', label: 'Huiles bio' },
  { id: 'huiles-parfumees', label: 'Huiles parfumées' },
  { id: 'pierres-chaudes', label: 'Pierres chaudes' },
  { id: 'sans-huiles', label: 'Sans huiles' },
  { id: 'formules', label: 'Formules' },
  { id: '30min', label: '30 min' },
  { id: 'plantaire', label: 'Plantaire' },
  { id: 'femmes-enceintes', label: 'Femmes enceintes' },
  { id: 'coffrets', label: 'Coffrets cadeaux' },
]

const prestationsData = {
  'huiles-bio': [
    { name: 'Thaï bien-être', duration: '1h', price: '80€' },
    { name: 'Thaï bien-être', duration: '1h30', price: '105€' },
    { name: 'Huiles chaudes', duration: '1h', price: '90€' },
    { name: 'Huiles chaudes', duration: '1h30', price: '120€' },
    { name: 'Deep tissus', duration: '1h', price: '90€' },
    { name: 'Deep tissus', duration: '1h30', price: '120€' },
    { name: 'Deep tissus', duration: '2h', price: '150€' },
  ],
  'huiles-parfumees': [
    {
      name: 'Huile chaude de coco bio parfumée des huiles de "RITUALS"',
      duration: '1h',
      price: '95€',
      tags: ['Fleur de cerisier', 'Fleur de lotus', 'Eucalyptus']
    },
    {
      name: 'Huile chaude de coco bio parfumée des huiles de "RITUALS"',
      duration: '1h30',
      price: '125€',
      tags: ['Fleur de cerisier', 'Fleur de lotus', 'Eucalyptus']
    },
  ],
  'pierres-chaudes': [
    { name: 'Pierres chaudes ciblées dos', duration: '30min', price: '70€' },
    { name: 'Pierres chaudes', duration: '1h', price: '100€' },
    { name: 'Pierres chaudes', duration: '1h30', price: '140€' },
  ],
  'sans-huiles': [
    { name: 'Thaï traditionnel', duration: '1h', price: '80€' },
    { name: 'Thaï traditionnel', duration: '1h30', price: '105€' },
  ],
  'formules': [
    {
      name: 'Well&Thaï Cocooning',
      duration: '2h',
      price: '150€',
      description: 'massage aux huiles chaudes + pierres chaudes dos + massage visage'
    },
    {
      name: 'Well&Thaï Évasion',
      duration: '2h',
      price: '130€',
      description: 'massage thaï traditionnel ou bien-être + massage plantaire'
    },
    {
      name: 'Well&Thaï Ressourçant',
      duration: '1h30',
      price: '130€',
      description: 'massage aux huiles chaudes + massage aux pierres chaudes dos et épaules'
    },
    {
      name: 'Relax Time',
      duration: '1h30',
      price: '110€',
      description: 'massage thaï bien-être + massage visage'
    },
  ],
  '30min': [
    { name: 'Massage Dos', duration: '30min', price: '45€' },
    { name: 'Massage Crânien', duration: '30min', price: '45€' },
    { name: 'Massage Visage', duration: '30min', price: '45€' },
  ],
  'plantaire': [
    { name: 'Massage Plantaire', duration: '30min', price: '45€' },
    { name: 'Massage Plantaire', duration: '1h', price: '70€' },
  ],
  'femmes-enceintes': [
    { name: 'Baby Relax (huiles chaudes)', duration: '1h', price: '80€' },
    { name: 'Baby Relax (huiles chaudes)', duration: '1h30', price: '105€' },
    { name: 'Baby Cocooning (huiles chaudes + massage visage)', duration: '1h30', price: '120€' },
  ],
  'coffrets': [
    {
      name: 'Coffret Bien-être',
      duration: '1h x 5 séances au choix',
      price: '350€',
      description: 'thaï traditionnel, thaï bien-être, huiles chaudes ou deep tissus, ou selon le tarif du massage ne figurant pas sur la liste'
    },
    {
      name: 'Coffret Bien-être',
      duration: '1h30 x 5 séances au choix',
      price: '450€',
      description: 'thaï traditionnel, thaï bien-être, huiles chaudes ou deep tissus, ou selon le tarif du massage ne figurant pas sur la liste'
    },
    {
      name: 'Coffret Cadeau Bien-être',
      duration: '1h30',
      price: '135€',
      description: 'Idéal pour offrir'
    },
  ],
}

const PrestationsPage = () => {
  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-cream-section">
      {/* En-tête de page */}
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark mb-6">
            Nos Prestations
          </h1>
          <p className="text-dark/80 text-lg md:text-xl mb-8 leading-relaxed">
            Des soins sur-mesure pour votre bien-être, entre tradition thaïlandaise
            et techniques modernes de relaxation.
          </p>

          {/* Badge note */}
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
            <span className="text-dark/80">49 clients satisfaits</span>
          </div>
        </motion.div>

        {/* Barre de navigation sticky par catégories */}
        <div className="sticky top-20 z-40 mt-12 mb-8">
          <div className="bg-white/95 backdrop-blur-md border border-gold/20 rounded-xl shadow-lg px-4 py-3">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className="px-4 py-2 text-sm font-medium text-dark/70 hover:text-gold hover:bg-gold/5 rounded-full transition-all duration-200 border border-transparent hover:border-gold/30"
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sections des prestations */}
        <div className="space-y-12">
          {/* MASSAGES AUX HUILES BIO */}
          <motion.section
            id="huiles-bio"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
                Massages aux huiles bio
              </h2>
              <p className="text-dark/60">
                Des huiles 100% naturelles pour une expérience de bien-être optimale
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold/10">
              {prestationsData['huiles-bio'].map((prestation, index) => (
                <div
                  key={`${prestation.name}-${index}`}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${index !== prestationsData['huiles-bio'].length - 1 ? 'border-b border-gold/10' : ''} hover:bg-cream/30 transition-colors duration-200`}
                >
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="font-serif text-xl text-dark mb-1">
                      {prestation.name} {prestation.duration}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">{prestation.price}</div>
                      <div className="text-dark/60 text-sm">{prestation.duration}</div>
                    </div>
                    <a
                      href="https://www.planity.com/well-thai-54000-nancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* LES HUILES PARFUMÉES */}
          <motion.section
            id="huiles-parfumees"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
                Les huiles parfumées
              </h2>
              <p className="text-dark/60">
                Une expérience sensorielle unique avec les huiles RITUALS
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold/10">
              {prestationsData['huiles-parfumees'].map((prestation, index) => (
                <div
                  key={`${prestation.name}-${index}`}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${index !== prestationsData['huiles-parfumees'].length - 1 ? 'border-b border-gold/10' : ''} hover:bg-cream/30 transition-colors duration-200`}
                >
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="font-serif text-xl text-dark mb-1">
                      {prestation.name} {prestation.duration}
                    </h3>
                    {prestation.tags && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {prestation.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gold/10 text-gold-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">{prestation.price}</div>
                      <div className="text-dark/60 text-sm">{prestation.duration}</div>
                    </div>
                    <a
                      href="https://www.planity.com/well-thai-54000-nancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* MASSAGE AUX PIERRES CHAUDES */}
          <motion.section
            id="pierres-chaudes"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
                Massage aux pierres chaudes
              </h2>
              <p className="text-dark/60">
                Une chaleur apaisante pour libérer les tensions profondes
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold/10">
              {prestationsData['pierres-chaudes'].map((prestation, index) => (
                <div
                  key={`${prestation.name}-${index}`}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${index !== prestationsData['pierres-chaudes'].length - 1 ? 'border-b border-gold/10' : ''} hover:bg-cream/30 transition-colors duration-200`}
                >
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="font-serif text-xl text-dark mb-1">
                      {prestation.name} {prestation.duration}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">{prestation.price}</div>
                      <div className="text-dark/60 text-sm">{prestation.duration}</div>
                    </div>
                    <a
                      href="https://www.planity.com/well-thai-54000-nancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* MASSAGES SANS HUILES */}
          <motion.section
            id="sans-huiles"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
                Massages sans huiles
              </h2>
              <p className="text-dark/60">
                La tradition thaïlandaise dans sa forme la plus pure
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold/10">
              {prestationsData['sans-huiles'].map((prestation, index) => (
                <div
                  key={`${prestation.name}-${index}`}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${index !== prestationsData['sans-huiles'].length - 1 ? 'border-b border-gold/10' : ''} hover:bg-cream/30 transition-colors duration-200`}
                >
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="font-serif text-xl text-dark mb-1">
                      {prestation.name} {prestation.duration}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">{prestation.price}</div>
                      <div className="text-dark/60 text-sm">{prestation.duration}</div>
                    </div>
                    <a
                      href="https://www.planity.com/well-thai-54000-nancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* LES FORMULES */}
          <motion.section
            id="formules"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
                Les formules
              </h2>
              <p className="text-dark/60">
                Des combinaisons sur-mesure pour une expérience complète
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold/10">
              {prestationsData['formules'].map((prestation, index) => (
                <div
                  key={`${prestation.name}-${index}`}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${index !== prestationsData['formules'].length - 1 ? 'border-b border-gold/10' : ''} hover:bg-cream/30 transition-colors duration-200`}
                >
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="font-serif text-xl text-dark mb-1">
                      {prestation.name} {prestation.duration}
                    </h3>
                    {prestation.description && (
                      <p className="text-dark/60 italic text-sm mt-2">
                        ({prestation.description})
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">{prestation.price}</div>
                      <div className="text-dark/60 text-sm">{prestation.duration}</div>
                    </div>
                    <a
                      href="https://www.planity.com/well-thai-54000-nancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* MASSAGES DE 30MIN */}
          <motion.section
            id="30min"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
                Massages de 30min
              </h2>
              <p className="text-dark/60">
                Des pauses bien-être pour recharger vos batteries
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold/10">
              {prestationsData['30min'].map((prestation, index) => (
                <div
                  key={`${prestation.name}-${index}`}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${index !== prestationsData['30min'].length - 1 ? 'border-b border-gold/10' : ''} hover:bg-cream/30 transition-colors duration-200`}
                >
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="font-serif text-xl text-dark mb-1">
                      {prestation.name} {prestation.duration}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">{prestation.price}</div>
                      <div className="text-dark/60 text-sm">{prestation.duration}</div>
                    </div>
                    <a
                      href="https://www.planity.com/well-thai-54000-nancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* MASSAGE PLANTAIRE */}
          <motion.section
            id="plantaire"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-3">
                Massage plantaire
              </h2>
              <p className="text-dark/60">
                Un soin revitalisant pour vos pieds fatigués
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold/10">
              {prestationsData['plantaire'].map((prestation, index) => (
                <div
                  key={`${prestation.name}-${index}`}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${index !== prestationsData['plantaire'].length - 1 ? 'border-b border-gold/10' : ''} hover:bg-cream/30 transition-colors duration-200`}
                >
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="font-serif text-xl text-dark mb-1">
                      {prestation.name} {prestation.duration}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">{prestation.price}</div>
                      <div className="text-dark/60 text-sm">{prestation.duration}</div>
                    </div>
                    <a
                      href="https://www.planity.com/well-thai-54000-nancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FEMMES ENCEINTES */}
          <motion.section
            id="femmes-enceintes"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FaBaby className="text-gold text-2xl" />
                <h2 className="font-serif text-3xl md:text-4xl text-gold">
                  Femmes enceintes
                </h2>
              </div>
              <p className="text-dark/70 bg-gold/10 border-l-4 border-gold pl-4 py-2 rounded-r">
                À partir de 5 mois de grossesse et sans problèmes médicaux
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold/10">
              {prestationsData['femmes-enceintes'].map((prestation, index) => (
                <div
                  key={`${prestation.name}-${index}`}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${index !== prestationsData['femmes-enceintes'].length - 1 ? 'border-b border-gold/10' : ''} hover:bg-cream/30 transition-colors duration-200`}
                >
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="font-serif text-xl text-dark mb-1">
                      {prestation.name} {prestation.duration}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">{prestation.price}</div>
                      <div className="text-dark/60 text-sm">{prestation.duration}</div>
                    </div>
                    <a
                      href="https://www.planity.com/well-thai-54000-nancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* COFFRETS CADEAUX */}
          <motion.section
            id="coffrets"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FaGift className="text-gold text-2xl" />
                <h2 className="font-serif text-3xl md:text-4xl text-gold">
                  Coffrets cadeaux
                </h2>
              </div>
              <div className="bg-gradient-to-r from-gold/20 to-purple-accent/20 border border-gold/30 rounded-xl p-4 mb-6">
                <p className="text-dark font-medium text-center">
                  🎁 Faites plaisir à vos proches
                </p>
                <p className="text-dark/60 text-center text-sm mt-1">
                  Les coffrets sont valables 12 mois après la date d'achat
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gold/10">
              {prestationsData['coffrets'].map((prestation, index) => (
                <div
                  key={`${prestation.name}-${index}`}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 ${index !== prestationsData['coffrets'].length - 1 ? 'border-b border-gold/10' : ''} hover:bg-cream/30 transition-colors duration-200`}
                >
                  <div className="mb-4 md:mb-0 md:flex-1">
                    <h3 className="font-serif text-xl text-dark mb-1">
                      {prestation.name} {prestation.duration}
                    </h3>
                    {prestation.description && (
                      <p className="text-dark/60 text-sm mt-2">
                        {prestation.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dark">{prestation.price}</div>
                      <div className="text-dark/60 text-sm">{prestation.duration}</div>
                    </div>
                    <a
                      href="https://www.planity.com/well-thai-54000-nancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
                    >
                      Choisir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Section finale avec rappel et bouton réservation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gold/20"
        >
          <div className="bg-gradient-to-br from-gold/5 to-purple-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-gold" />
                  <span className="text-dark font-medium">16 Rue du Faubourg des Trois-Maisons, 54000 Nancy</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-gold" />
                  <span className="text-dark font-medium">Du mardi au samedi • 10h-19h</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-dark mb-6">
                Prêt à réserver votre moment de bien-être ?
              </h3>

              <a
                href="https://www.planity.com/well-thai-54000-nancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gold text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-gold-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mb-4"
              >
                Réserver en ligne
                <FaArrowRight className="ml-3" />
              </a>

              <p className="text-dark/60 text-sm mt-4">
                Réservation gratuite, confirmation immédiate, disponible 24h/24
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default PrestationsPage