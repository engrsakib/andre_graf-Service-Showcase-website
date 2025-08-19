
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
    <section className="max-w-[80%] mx-auto px-6 py-12 lg:py-20">
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
    </section>
  )
}
