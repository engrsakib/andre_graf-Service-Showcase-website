"use client"

import { useState } from "react"
import { useLanguage } from "../contexts/language-context"

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLanguage, changeLanguage } = useLanguage()

  const languages = [
    {
      name: "English",
      flag: "🇺🇸",
      code: "en",
    },
    {
      name: "German",
      flag: "🇩🇪",
      code: "de",
    },
  ]

  const handleLanguageSelect = (language) => {
    changeLanguage(language.code)
    setIsOpen(false)
  }

  const selectedLanguage = languages.find((lang) => lang.code === currentLanguage)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm text-gray-700 hover:text-purple-600 transition-colors"
      >
        <span className="text-lg">{selectedLanguage?.flag}</span>
        <span>{selectedLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 flex items-center space-x-2 transition-colors"
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
