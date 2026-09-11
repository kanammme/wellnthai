import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import PrestationsPreview from '@/components/PrestationsPreview'
import AboutPreview from '@/components/AboutPreview'
import Testimonials from '@/components/Testimonials'
import GalleryPreview from '@/components/GalleryPreview'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <PrestationsPreview />
      <AboutPreview />
      <Testimonials />
      <GalleryPreview />
    </div>
  )
}