'use client'

import { MotionConfig } from 'framer-motion'

// Respecte le réglage « réduire les animations » du téléphone ou de l'ordinateur
const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
)

export default MotionProvider
