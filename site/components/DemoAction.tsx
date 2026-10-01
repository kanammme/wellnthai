'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// Site de démonstration : les boutons « Réserver » et « Appeler » n'appellent
// aucun numéro. Ils expliquent ce que ferait le bouton sur un vrai site.
const MESSAGES = {
  reserver: {
    title: 'Ici, votre réservation en ligne',
    text: 'Sur votre site, ce bouton ouvre votre agenda en ligne (Planity, Calendly ou un formulaire sur mesure) ou appelle directement votre établissement.',
  },
  appeler: {
    title: 'Ici, votre numéro',
    text: 'Sur votre site, ce bouton appelle directement votre établissement en un geste depuis le téléphone du client.',
  },
}

type Props = {
  kind?: keyof typeof MESSAGES
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

export default function DemoAction({ kind = 'reserver', className, onClick, children }: Props) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const { title, text } = MESSAGES[kind]

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={(e) => {
          // la fenêtre peut être posée dans une carte cliquable : on ne propage pas
          e.stopPropagation()
          onClick?.()
          setOpen(true)
        }}
      >
        {children}
      </button>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/70 backdrop-blur-sm p-4"
            onClick={(e) => {
              e.stopPropagation()
              setOpen(false)
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-action-title"
              className="w-full max-w-md rounded-2xl bg-cream p-6 md:p-8 text-left shadow-2xl border border-gold/20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Site de démonstration</p>
              <h2 id="demo-action-title" className="font-serif text-2xl text-dark mb-3">
                {title}
              </h2>
              <p className="text-dark/80 leading-relaxed mb-3">{text}</p>
              <p className="text-dark/60 text-sm leading-relaxed mb-6">
                Wellnessthaii est un établissement fictif : aucun appel n&apos;est passé et aucune réservation n&apos;est enregistrée.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://al-h.fr/devis"
                  className="flex-1 text-center rounded-md bg-dark text-cream px-5 py-3 hover:bg-dark/90 transition-colors"
                >
                  Le même pour mon commerce
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-md border border-dark/20 text-dark px-5 py-3 hover:bg-dark/5 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
