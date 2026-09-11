'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaLeaf, FaBalanceScale, FaHeart, FaStar, FaHands, FaHeartbeat, FaBrain, FaArrowRight } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-section">
      {/* 1. En-tête hero léger */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-padding bg-gradient-to-br from-gold/5 to-cream/30"
      >
        <div className="container-wide text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark mb-6">
            L&apos;art du bien-être, une histoire de passion
          </h1>
          <p className="text-dark/80 text-lg md:text-xl max-w-3xl mx-auto">
            Découvrez l&apos;univers unique de Well & Thaï, où tradition thaïlandaise
            et bien-être contemporain se rencontrent pour votre épanouissement.
          </p>
        </div>
      </motion.section>

      {/* 2. Section Notre philosophie */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-padding bg-dark-section"
      >
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
                Notre philosophie
              </h2>
              <p className="text-cream/90 text-lg leading-relaxed">
                Chez Well & Thaï, chaque massage est bien plus qu&apos;un soin : c&apos;est
                une invitation au voyage. Nous puisons dans les techniques ancestrales
                thaïlandaises — pressions, étirements, mobilisations le long des
                lignes d&apos;énergie (sen) — pour rétablir l&apos;équilibre du corps et de
                l&apos;esprit. Que ce soit à travers un massage aux huiles chaudes, un
                massage thaï traditionnel ou un deep tissue ciblé, notre approche
                reste la même : vous offrir un moment rien que pour vous, dans le
                respect total de votre corps et de vos besoins.
              </p>
            </div>

            {/* 3 valeurs en colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <FaLeaf className="w-8 h-8" />,
                  title: "Tradition & authenticité",
                  description: "Des techniques transmises de génération en génération, fidèles aux méthodes ancestrales thaïlandaises.",
                  color: "text-gold"
                },
                {
                  icon: <FaBalanceScale className="w-8 h-8" />,
                  title: "Équilibre & harmonie",
                  description: "Une approche globale qui rétablit le lien entre le corps, l'esprit et les énergies vitales.",
                  color: "text-purple-accent"
                },
                {
                  icon: <FaHeart className="w-8 h-8" />,
                  title: "Bien-être & sérénité",
                  description: "Un cocon apaisant pour vous reconnecter à l'essentiel et retrouver calme intérieur.",
                  color: "text-cream"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-colors duration-300"
                >
                  <div className={`${value.color} mb-4 flex justify-center`}>
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl text-cream mb-4">
                    {value.title}
                  </h3>
                  <p className="text-cream/80">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Section Rencontrez Wannapha */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-padding bg-cream-section"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-dark">
                Rencontrez Wannapha
              </h2>

              <div className="space-y-4">
                <p className="text-dark/80 leading-relaxed">
                  Immergez-vous dans un univers de bien-être et de sérénité avec
                  Wannapha, votre masseuse dévouée à Nancy. Travaillant chez Well & Thaï,
                  Wannapha consacre ses talents à l&apos;art délicat du massage thaïlandais
                  et du massage des pieds, mettant au service de votre relaxation ses
                  techniques millénaires héritées de la tradition thaï.
                </p>
                <p className="text-dark/80 leading-relaxed">
                  Son savoir-faire singulier fait d&apos;elle une praticienne recherchée,
                  appréciée pour son professionnalisme et son attention particulière
                  aux besoins de chacun. Chez Well & Thaï, Wannapha crée une atmosphère
                  relaxante et apaisante, veillant à votre confort et à vos attentes
                  pour une expérience inoubliable.
                </p>
                <p className="text-dark/80 leading-relaxed">
                  Chaque prestation est une invitation au voyage, offrant une évasion
                  sensorielle. Passionnée, Wannapha vous accueillera avec le sourire
                  et saura vous orienter vers le traitement adéquat.
                </p>
                <p className="text-dark/80 leading-relaxed">
                  À Well & Thaï à Nancy, laissez-vous transporter par la douceur et
                  l&apos;expertise de Wannapha. Vous apprécierez ce moment privilégié de
                  bien-être et de détente.
                </p>
              </div>

              {/* Badge note */}
              <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 space-x-3 mt-4">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-gold" />
                  <FaStar className="text-gold" />
                  <FaStar className="text-gold" />
                  <FaStar className="text-gold" />
                  <FaStar className="text-gold" />
                </div>
                <span className="text-dark font-semibold">5,0</span>
                <span className="text-dark/50">—</span>
                <span className="text-dark/80">49 avis clients</span>
              </div>
            </motion.div>

            {/* Image à droite */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-square relative">
                <Image
                  src="/images/interieur/interieur-4.jpg"
                  alt="Bureau d'accueil du salon Well & Thaï avec cygnes artistiques en serviettes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
              </div>

              {/* Légende décorative */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 text-center">
                <p className="text-cream text-sm font-medium">
                  L&apos;accueil chaleureux de votre praticienne Wannapha
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4. Section Le massage thaï, une pratique millénaire */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-padding bg-gradient-to-br from-purple-accent/10 to-dark/10"
      >
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                Comment fonctionne un massage thaï ?
              </h2>
              <p className="text-dark/80 text-lg leading-relaxed">
                Le praticien utilise ses mains, ses pouces, ses coudes et
                ses pieds pour effectuer des pressions, des étirements et des
                mobilisations le long des lignes d&apos;énergie. Cette combinaison unique
                aide à rééquilibrer le flux énergétique et à stimuler les capacités
                naturelles d&apos;auto-guérison du corps.
              </p>
            </div>

            {/* 4 mini-cartes horizontales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  icon: <FaHands className="w-6 h-6" />,
                  title: "Harmonise les énergies",
                  description: "Rétablit l'équilibre énergétique du corps selon la médecine thaïlandaise",
                  color: "bg-gold/20 border-gold/30"
                },
                {
                  icon: <FaHeartbeat className="w-6 h-6" />,
                  title: "Libère les tensions",
                  description: "Soulage les tensions musculaires profondes et émotionnelles",
                  color: "bg-purple-accent/20 border-purple-accent/30"
                },
                {
                  icon: <FaHeart className="w-6 h-6" />,
                  title: "Améliore la circulation",
                  description: "Stimule la circulation sanguine et lymphatique",
                  color: "bg-dark/20 border-dark/30"
                },
                {
                  icon: <FaBrain className="w-6 h-6" />,
                  title: "Favorise calme mental",
                  description: "Induit un état de relaxation profonde et durable",
                  color: "bg-gold/20 border-gold/30"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${benefit.color} border rounded-xl p-6 hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-gold mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-serif text-lg text-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-dark/70 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Note informative */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-white/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 max-w-2xl">
                <p className="text-dark/80 italic">
                  « Le massage thaï traditionnel ne se limite pas à une simple relaxation musculaire.
                  C&apos;est une pratique holistique qui considère le corps dans sa globalité,
                  visant à restaurer l&apos;équilibre entre les énergies physiques et mentales. »
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 5. Section finale CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-padding bg-gradient-to-br from-gold/5 to-cream/30"
      >
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-dark mb-8">
              Prêt à vivre l&apos;expérience Well & Thaï ?
            </h2>
            <p className="text-dark/70 text-lg mb-10 max-w-2xl mx-auto">
              Rejoignez nos nombreux clients satisfaits et offrez-vous un moment
              de détente absolue dans notre cocon de bien-être au cœur de Nancy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.planity.com/well-thai-54000-nancy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center"
              >
                Réserver maintenant
                <FaArrowRight className="ml-3" />
              </a>

              <Link
                href="/prestations"
                className="btn-secondary px-8 py-4 text-lg font-semibold hover:bg-gold/5 transition-colors inline-flex items-center justify-center"
              >
                Voir nos prestations
              </Link>
            </div>

            {/* Informations complémentaires */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-dark/80">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold text-dark mb-2">📍 Nancy Centre</h4>
                <p className="text-sm">16 Rue du Faubourg des Trois-Maisons</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold text-dark mb-2">⏰ Horaires</h4>
                <p className="text-sm">Du mardi au samedi • 10h-19h</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold text-dark mb-2">⭐ Réputation</h4>
                <p className="text-sm">5,0/5 sur 49 avis vérifiés</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}