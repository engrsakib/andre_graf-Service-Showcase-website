"use client"
import { useLanguage } from "@/context/language-context"

export default function HeroSection() {
  const { currentLanguage } = useLanguage()

  const heroContent = {
    en: {
      title: "Book Your Next Service in Seconds with",
      aiText: "AI Assistance",
      subtitle: "– Fast, Easy, and Hassle-Free!",
      description: "Instantly Reserve Your Favorite Services—No Hassle, Just Results!",
      getStarted: "Get Started",
      contactUs: "Contact Us",
    },
    de: {
      title: "Buchen Sie Ihren nächsten Service in Sekunden mit",
      aiText: "KI-Unterstützung",
      subtitle: "– Schnell, Einfach und Problemlos!",
      description: "Reservieren Sie sofort Ihre Lieblingsdienste—Kein Ärger, nur Ergebnisse!",
      getStarted: "Loslegen",
      contactUs: "Kontakt",
    },
  }

  const content = heroContent[currentLanguage]

  return (
    <section className="relative bg-[#F5F3F8] overflow-hidden">
      {/* Gradient lighting effect from navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-100/50 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-100/35 to-transparent"></div>
      
      {/* Left side vertical gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-200/60 via-pink-100/45 to-transparent"></div>
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-100/40 to-transparent"></div>
      
      {/* Right side vertical gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-200/60 via-pink-100/45 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-100/40 to-transparent"></div>
      {/* Top left corner decoration */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-30">
        <div className="absolute top-4 left-4 w-3 h-3 bg-purple-300 rounded-full"></div>
        <div className="absolute top-8 left-12 w-2 h-2 bg-blue-300 rounded-full"></div>
        <div className="absolute top-12 left-8 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
        <div className="absolute top-6 left-20 w-1 h-1 bg-purple-400 rounded-full"></div>
        <div className="absolute top-16 left-16 w-4 h-0.5 bg-purple-200 rounded-full transform rotate-45"></div>
        <div className="absolute top-20 left-6 w-3 h-0.5 bg-blue-200 rounded-full transform rotate-12"></div>
      </div>

      {/* Top right corner decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-30">
        <div className="absolute top-6 right-6 w-2.5 h-2.5 bg-pink-300 rounded-full"></div>
        <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
        <div className="absolute top-8 right-20 w-2 h-2 bg-blue-300 rounded-full"></div>
        <div className="absolute top-16 right-8 w-1 h-1 bg-purple-400 rounded-full"></div>
        <div className="absolute top-4 right-16 w-3 h-0.5 bg-pink-200 rounded-full transform -rotate-45"></div>
        <div className="absolute top-20 right-14 w-4 h-0.5 bg-purple-200 rounded-full transform rotate-30"></div>
      </div>

      {/* Bottom left corner decoration */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
        <div className="absolute bottom-6 left-8 w-2 h-2 bg-purple-300 rounded-full"></div>
        <div className="absolute bottom-12 left-4 w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-8 left-16 w-1 h-1 bg-pink-300 rounded-full"></div>
        <div className="absolute bottom-4 left-12 w-3 h-0.5 bg-purple-200 rounded-full transform rotate-60"></div>
      </div>

      {/* Bottom right corner decoration */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
        <div className="absolute bottom-8 right-6 w-2 h-2 bg-pink-300 rounded-full"></div>
        <div className="absolute bottom-4 right-12 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
        <div className="absolute bottom-12 right-8 w-1 h-1 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-6 right-16 w-3 h-0.5 bg-purple-200 rounded-full transform -rotate-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Mobile: Robot image first */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <img src="/robot.png" alt="AI Robot Assistant" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[40px] font-[500] leading-tight mb-6">
              <span className="text-gray-900">{content.title} </span>
              <span className="bg-gradient-to-r from-[#4D7AFF] to-[#A15AFE] bg-clip-text text-transparent">
                {content.aiText}
              </span>
              <span className="text-gray-900"> {content.subtitle}</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">{content.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-[#5E8CFF] via-[#7B81FF] to-[#C78EFF] text-white font-semibold rounded-full h-[58px] w-[180px] transition-all duration-300 shadow-lg hover:shadow-xl">
                {content.getStarted}
              </button>
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold h-[58px] w-[180px] rounded-full hover:bg-purple-50 transition-all duration-300">
                {content.contactUs}
              </button>
            </div>
          </div>

          {/* Desktop: Robot image */}
          <div className="hidden lg:block flex-1">
            <div className="relative w-full max-w-lg mx-auto">
              <img src="/robot.png" alt="AI Robot Assistant" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}