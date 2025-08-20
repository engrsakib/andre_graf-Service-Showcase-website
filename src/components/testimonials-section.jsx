"use client"

import { useLanguage } from "@/context/language-context"
import { useState, useEffect } from "react"


const testimonials = [
  {
    id: 1,
    name: "Ariyan Khan",
    location: "South Korea",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      de: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "United States",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "The AI assistant has completely transformed how we handle customer bookings. It's incredibly efficient and user-friendly.",
      de: "Der KI-Assistent hat völlig verändert, wie wir Kundenbuchungen abwickeln. Es ist unglaublich effizient und benutzerfreundlich.",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Singapore",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Outstanding service! The booking process is now seamless and our customers love the instant responses.",
      de: "Hervorragender Service! Der Buchungsprozess ist jetzt nahtlos und unsere Kunden lieben die sofortigen Antworten.",
    },
  },
  {
    id: 4,
    name: "Emma Wilson",
    location: "United Kingdom",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "This platform has saved us countless hours. The AI understands our needs perfectly and delivers every time.",
      de: "Diese Plattform hat uns unzählige Stunden gespart. Die KI versteht unsere Bedürfnisse perfekt und liefert jedes Mal.",
    },
  },
  {
    id: 5,
    name: "David Rodriguez",
    location: "Spain",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Incredible automation capabilities. Our booking efficiency has increased by 300% since implementation.",
      de: "Unglaubliche Automatisierungsfähigkeiten. Unsere Buchungseffizienz ist seit der Implementierung um 300% gestiegen.",
    },
  },
  {
    id: 6,
    name: "Lisa Zhang",
    location: "Canada",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "The best investment we've made for our business. Customer satisfaction has never been higher.",
      de: "Die beste Investition, die wir für unser Unternehmen getätigt haben. Die Kundenzufriedenheit war noch nie höher.",
    },
  },
  {
    id: 7,
    name: "James Thompson",
    location: "Australia",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Simple, effective, and reliable. The AI handles complex booking scenarios with ease.",
      de: "Einfach, effektiv und zuverlässig. Die KI bewältigt komplexe Buchungsszenarien mit Leichtigkeit.",
    },
  },
  {
    id: 8,
    name: "Maria Garcia",
    location: "Mexico",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Revolutionary technology! Our team can now focus on what matters most while AI handles the bookings.",
      de: "Revolutionäre Technologie! Unser Team kann sich jetzt auf das Wichtigste konzentrieren, während die KI die Buchungen übernimmt.",
    },
  },
  {
    id: 9,
    name: "Ahmed Hassan",
    location: "UAE",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Exceptional service quality. The platform adapts to our business needs perfectly.",
      de: "Außergewöhnliche Servicequalität. Die Plattform passt sich perfekt an unsere Geschäftsbedürfnisse an.",
    },
  },
  {
    id: 10,
    name: "Sophie Martin",
    location: "France",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Fantastic results! Our booking conversion rate has improved dramatically since using this platform.",
      de: "Fantastische Ergebnisse! Unsere Buchungskonversionsrate hat sich seit der Nutzung dieser Plattform dramatisch verbessert.",
    },
  },
  {
    id: 11,
    name: "Roberto Silva",
    location: "Brazil",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "The AI assistant is like having a dedicated team member who never sleeps. Absolutely game-changing.",
      de: "Der KI-Assistent ist wie ein engagiertes Teammitglied, das nie schläft. Absolut bahnbrechend.",
    },
  },
  {
    id: 12,
    name: "Anna Petrov",
    location: "Russia",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Outstanding platform with incredible support. Our customers are happier than ever with the booking experience.",
      de: "Hervorragende Plattform mit unglaublichem Support. Unsere Kunden sind zufriedener denn je mit der Buchungserfahrung.",
    },
  },
]

export default function TestimonialsSection() {
  const { currentLanguage } = useLanguage()
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState("next")

  const cardsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  const getCardsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return cardsPerPage.mobile
      if (window.innerWidth < 1024) return cardsPerPage.tablet
      return cardsPerPage.desktop
    }
    return cardsPerPage.desktop
  }

  const [itemsPerPage, setItemsPerPage] = useState(getCardsPerPage())

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getCardsPerPage())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage)

  const handleNext = () => {
    if (isAnimating) return
    setSlideDirection("next")
    setIsAnimating(true)
    setCurrentPage((prev) => (prev + 1) % totalPages)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setSlideDirection("prev")
    setIsAnimating(true)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const content = {
    en: {
      title: "What Our Users Say",
      subtitle:
        "Join thousands of satisfied customers who have transformed their booking experience with our AI platform",
    },
    de: {
      title: "Was unsere Nutzer sagen",
      subtitle:
        "Schließen Sie sich Tausenden zufriedener Kunden an, die ihre Buchungserfahrung mit unserer KI-Plattform transformiert haben",
    },
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className="text-yellow-400 text-lg transition-all duration-200 hover:scale-125 animate-bounce-in"
        style={{ animationDelay: `${i * 50}ms` }}
      >
        ★
      </span>
    ))
  }

  return (
    <section className="bg-purple-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            {content[currentLanguage].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            {content[currentLanguage].subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative overflow-hidden">
          <div
            className={`grid gap-6 transition-all duration-600 ease-out transform ${
              isAnimating
                ? slideDirection === "next"
                  ? "opacity-0 translate-x-8 scale-95"
                  : "opacity-0 -translate-x-8 scale-95"
                : "opacity-100 translate-x-0 scale-100"
            } grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
          >
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed">{testimonial.text[currentLanguage]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-12 space-x-6">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6 text-gray-600 transition-transform duration-300 hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!isAnimating) {
                    setSlideDirection(i > currentPage ? "next" : "prev")
                    setIsAnimating(true)
                    setCurrentPage(i)
                    setTimeout(() => setIsAnimating(false), 600)
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-150 ${
                  i === currentPage ? "bg-blue-500 scale-125 shadow-lg animate-pulse" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6 text-gray-600 transition-transform duration-300 hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out both;
        }
      `}</style>
    </section>
  )
}
