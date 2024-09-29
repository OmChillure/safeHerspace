import Header from '@/components/Header'
import React from 'react'
import { FeaturesSection } from '@/components/features'
import HeroSection from '@/components/hero-section'
import Footer from '@/components/Footer'
import SideBySide from '@/components/ui/side-by-side'

function page() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <HeroSection />
      </div>
      <div className="flex my-[8rem] w-full justify-center items-center">
        <SideBySide />
      </div>
      <div className="flex my-[8rem] w-full justify-center items-center">
      <FeaturesSection />
      </ div>
      <Footer />
    </div>
  )
}

export default page