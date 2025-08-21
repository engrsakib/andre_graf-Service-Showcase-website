"use client";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

export default function HeroSection() {
  const { currentLanguage } = useLanguage();

  const heroContent = {
    en: {
      title: "Book Your Next Service in Seconds with",
      aiText: "AI Assistance",
      subtitle: "– Fast, Easy, and Hassle-Free!",
      description:
        "Instantly Reserve Your Favorite Services—No Hassle, Just Results!",
      getStarted: "Get Started",
      contactUs: "Contact Us",
    },
    de: {
      title: "Buchen Sie Ihren nächsten Service in Sekunden mit",
      aiText: "KI-Unterstützung",
      subtitle: "– Schnell, Einfach und Problemlos!",
      description:
        "Reservieren Sie sofort Ihre Lieblingsdienste—Kein Ärger, nur Ergebnisse!",
      getStarted: "Loslegen",
      contactUs: "Kontakt",
    },
  };

  const content = heroContent[currentLanguage];

  return (
    <section className="relative -top-20 -mb-20  overflow-hidden ">
      {/* Top left corner decoration */}
      <div className="absolute -top-[173px] -left-[-159px] w-40 h-40 opacity-30">
        <div className="absolute top-4 left-4 w-3 h-3 bg-purple-300 rounded-full"></div>
        <div className="absolute top-8 left-12 w-2 h-2 bg-blue-300 rounded-full"></div>
        <div className="absolute top-12 left-8 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
        <div className="absolute top-6 left-20 w-1 h-1 bg-purple-400 rounded-full"></div>
        <div className="absolute top-16 left-16 w-4 h-0.5 bg-purple-200 rounded-full transform rotate-45"></div>
        <div className="absolute top-20 left-6 w-3 h-0.5 bg-blue-200 rounded-full transform rotate-12"></div>
      </div>

      {/* Top right corner decoration */}
      <div className="absolute -top-[173px] left-[1202px] w-40 h-40 opacity-30">
        <div className="absolute top-6 right-6 w-2.5 h-2.5 bg-pink-300 rounded-full"></div>
        <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
        <div className="absolute top-8 right-20 w-2 h-2 bg-blue-300 rounded-full"></div>
        <div className="absolute top-16 right-8 w-1 h-1 bg-purple-400 rounded-full"></div>
        <div className="absolute top-4 right-16 w-3 h-0.5 bg-pink-200 rounded-full transform -rotate-45"></div>
        <div className="absolute top-20 right-14 w-4 h-0.5 bg-purple-200 rounded-full transform rotate-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Mobile: Robot image first */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <img
                src="/robot.png"
                alt="AI Robot Assistant"
                className="w-full h-full object-contain"
              />
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

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 max-sm:w-full bg-gradient-to-r from-[#5E8CFF] via-[#7B81FF] to-[#C78EFF] text-white font-semibold rounded-full h-[58px] w-[180px] transition-all duration-300 shadow-lg hover:shadow-xl">
                {content.getStarted}
              </button>
              <Link
                href="/contact"
                className="px-8 py-4 max-sm:w-full border-2 border-purple-600 text-purple-600 font-semibold h-[58px] w-[180px] rounded-full hover:bg-purple-50 transition-all duration-300"
              >
                {content.contactUs}
              </Link>
            </div>
          </div>

          {/* Desktop: Robot image */}
          <div className="hidden lg:block flex-1">
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src="/robot.png"
                alt="AI Robot Assistant"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[1136px] bg-[url('/linier.png')] absolute top-0 left-0 bg-no-repeat"></div>
     <div className="w-[1440px] h-[1136px] bg-[url('/linier.png')] absolute top-0 right-0 bg-no-repeat bg-right scale-x-[-1]"></div>

    </section>
  );
}
