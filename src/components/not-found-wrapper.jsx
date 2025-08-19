"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"

export default function NotFoundWrapper() {
  const { currentLanguage } = useLanguage()

  const content = {
    en: {
      title: "Oops! Page not found.",
      description: "The page you're looking for doesn't exist or has been removed.",
      buttonText: "Go to Homepage",
    },
    de: {
      title: "Ups! Seite nicht gefunden.",
      description: "Die Seite, die Sie suchen, existiert nicht oder wurde entfernt.",
      buttonText: "Zur Startseite",
    },
  }

  const currentContent = content[currentLanguage] || content.en

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-8xl md:text-9xl font-bold text-red-400 mb-8 leading-none">404</div>

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{currentContent.title}</h1>

        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">{currentContent.description}</p>

        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 text-base"
        >
          {currentContent.buttonText}
        </Link>
      </div>
    </div>
  )
}
