"use client"

import FAQSection from "@/components/faq-section"
import HeroSection from "@/components/hero-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import { useLanguage } from "@/context/language-context"




export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-purple-100">
      <HeroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />

    </div>
  )
}
