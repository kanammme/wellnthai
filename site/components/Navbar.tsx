'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [navbarOpacity, setNavbarOpacity] = useState(0.4) // Opacité pour desktop

  // Références pour éviter les problèmes de fermeture
  const isMenuOpenRef = useRef(isMenuOpen)
  const lastScrollYRef = useRef(0)
  isMenuOpenRef.current = isMenuOpen

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isMobile = window.innerWidth < 768

      
      // Mise à jour de l'opacité pour desktop (transparent → opaque au scroll)
      if (!isMobile) {
        const opacity = Math.min(0.9, Math.max(0.4, 0.4 + (currentScrollY / 100) * 0.5))
        setNavbarOpacity(opacity)
      }

      // Gestion du masquage/réapparition uniquement sur mobile
      if (isMobile && !isMenuOpenRef.current) {
        const scrollThreshold = 100 // Seuil pour éviter un effet nerveux
        const scrollingDown = currentScrollY > lastScrollYRef.current
        const atTop = currentScrollY <= 10
        const scrolledEnough = currentScrollY > scrollThreshold

        
        if (scrollingDown && scrolledEnough) {
          // Scrolle vers le bas assez loin → masquer
          setIsNavbarVisible(false)
        } else if (!scrollingDown || atTop) {
          // Scrolle vers le haut ou en haut de page → montrer
          setIsNavbarVisible(true)
        }
      } else if (!isMobile) {
        // Toujours visible sur desktop
        setIsNavbarVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }

    // Ajouter un léger throttle pour la performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })

    // Appeler une fois au chargement pour initialiser l'état
    handleScroll()

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, []) // Pas de dépendances pour éviter les cycles

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Prestations', href: '/prestations' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ]

  // Classes conditionnelles pour la navbar
  const navbarClasses = `sticky top-0 z-50 backdrop-blur-lg border-b border-gold/10 transition-all duration-300 ${
    isNavbarVisible
      ? 'translate-y-0'
      : '-translate-y-full md:translate-y-0' // Masquer sur mobile seulement
  }`

  return (
    <nav
      className={navbarClasses}
      style={!isMenuOpen ? { backgroundColor: `rgba(28, 28, 28, ${navbarOpacity})` } : {}}
    >
      <div className="container-wide py-3">
        <div className="flex items-center justify-between">
          {/* Logo - lockup vertical compact */}
          <Link href="/" className="flex flex-col items-center justify-center group py-1">
            <div className="w-7 h-7 md:w-8 md:h-8 relative flex items-center justify-center mb-0.5">
              <Image
                src="/images/logo/logo-emblem.png"
                alt="Emblème Well & Thaï"
                width={32}
                height={17}
                className="object-contain"
              />
            </div>
            <h1 className="font-serif text-sm md:text-base font-normal text-cream tracking-wider group-hover:text-gold/90 transition-colors duration-300 leading-tight">
              Well & Thaï
            </h1>
          </Link>

          {/* Desktop Navigation - version minimaliste */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-cream/70 hover:text-gold font-light text-sm tracking-wide transition-colors duration-300 relative py-1"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold/60 group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
            <Link
              href="https://www.planity.com/well-thai-54000-nancy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light border border-gold/50 text-gold hover:bg-gold/5 hover:border-gold px-5 py-2 rounded-md transition-all duration-300 tracking-wide ml-6"
            >
              Réserver
            </Link>
          </div>

          {/* Mobile menu button - version fine */}
          <button
            className="md:hidden text-cream/80 p-2.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="w-6 h-6 flex flex-col items-center justify-center space-y-1.5">
              <span
                className={`w-5 h-px bg-gold/80 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-5 h-px bg-gold/80 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-px bg-gold/80 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation - version minimaliste */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-6 border-t border-gold/10 pt-4"
          >
            <div className="flex flex-col space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-cream/70 hover:text-gold py-2.5 font-light text-base tracking-wide transition-colors duration-300 border-b border-gold/5 hover:border-gold/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://www.planity.com/well-thai-54000-nancy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-light border border-gold/50 text-gold hover:bg-gold/5 hover:border-gold py-3 px-6 rounded-md transition-all duration-300 tracking-wide mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Réserver
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar