"use client"

import FAQSection from "@/components/faq-section"
import HeroSection from "@/components/hero-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import { useLanguage } from "@/context/language-context"
import Image from 'next/image';

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative">
      {/* Left Corner Image */}
      

      <HeroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  )
}
