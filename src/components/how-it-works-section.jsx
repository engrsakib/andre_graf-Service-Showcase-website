"use client"


import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export default function HowItWorksSection() {
  const { currentLanguage } = useLanguage()

  const content = {
    en: {
      title: "How It Works",
      subtitle: "Our AI-powered platform makes booking services incredibly simple and efficient",
      steps: [
        {
          number: "01",
          title: "Tell us what you need",
          description: "Let us know what service you need",
        },
        {
          number: "02",
          title: "AI Recommends the Best Options",
          description: "AI will find the best services based on your request",
        },
        {
          number: "03",
          title: "Confirm & Book",
          description: "Confirm your choice and complete booking fast",
        },
      ],
      happyCustomers: "Happy Customer",
    },
    de: {
      title: "Wie es funktioniert",
      subtitle:
        "Unsere KI-gestützte Plattform macht die Buchung von Dienstleistungen unglaublich einfach und effizient",
      steps: [
        {
          number: "01",
          title: "Sagen Sie uns, was Sie brauchen",
          description: "Lassen Sie uns wissen, welchen Service Sie benötigen",
        },
        {
          number: "02",
          title: "KI empfiehlt die besten Optionen",
          description: "KI findet die besten Services basierend auf Ihrer Anfrage",
        },
        {
          number: "03",
          title: "Bestätigen & Buchen",
          description: "Bestätigen Sie Ihre Wahl und schließen Sie die Buchung schnell ab",
        },
      ],
      happyCustomers: "Zufriedene Kunden",
    },
  }

  const currentContent = content[currentLanguage]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{currentContent.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{currentContent.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Steps with conditional number positioning */}
          <div className="space-y-8">
            {currentContent.steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex items-start gap-4 ${
                  index === 1 ? "flex-row-reverse items-center justify-center" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <span className="text-6xl font-bold text-gray-300 leading-none block">{step.number}</span>
                </div>
                <div className="flex-1 mt-2">
                  <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Images */}
          <div className="relative">
            <div className="flex gap-4">
              {/* Left Image - Robot Hand - Smaller */}
              <div className="relative overflow-hidden rounded-2xl flex-1">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1755387617031-1375c148ecd3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="AI Robot Hand"
                  width={300}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Right Image - Person with Tech - Larger with customer overlay */}
              <div className="relative overflow-hidden rounded-2xl flex-[1.3]">
                <Image
                  src="https://images.unsplash.com/photo-1751225750479-43ad27b94fa0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person in Tech Environment"
                  width={400}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />

                {/* Customer Overlay */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Customer 1"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Customer 2"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Customer 3"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">10K+</div>
                      <div className="text-xs text-gray-600">{currentContent.happyCustomers}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
