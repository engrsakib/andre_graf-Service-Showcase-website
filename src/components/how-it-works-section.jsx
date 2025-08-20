"use client"

import { useLanguage } from "@/context/language-context"
import Image from "next/image"

/*
  Pure JSX version (no TypeScript, no shadcn).
  Tailwind utilities only.
  Goal: approximate the provided design (numbers on left, floating white cards,
  dual images on right, customer overlay card below images).
*/

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
      count: "10K+",
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
      count: "10K+",
    },
  }

  const t = content[currentLanguage] || content.en

  return (
    <section className="relative py-24 md:py-28 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] md:text-[46px] font-bold leading-tight tracking-tight text-gray-900">
            {t.title}
          </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-20 items-start">
          {/* Steps + Numbers */}
          <div className="relative">
            {/* ambient glow */}
            <div className="pointer-events-none absolute -top-8 -left-20 -right-8 -bottom-10">
              <div className="w-full h-full bg-[radial-gradient(circle_at_40%_45%,rgba(120,130,255,0.25),rgba(120,130,255,0.10)_38%,transparent_70%)]" />
            </div>

            <ul className="relative space-y-9">
              {t.steps.map((step, idx) => {
                const isMiddle = idx === 1
                return (
                  <li
                    key={step.number}
                    className={
                      "flex items-stretch " + (isMiddle ? "flex-row-reverse" : "")
                    }
                  >
                    {/* Number */}
                    <div
                      className={
                        "flex items-center " +
                        (isMiddle ? "pl-8 md:pl-12" : "pr-8 md:pr-12")
                      }
                    >
                      <span className="select-none font-semibold text-[60px] md:text-[62px] leading-none text-gray-300/90 tracking-tight">
                        {step.number}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className={
                        "w-full max-w-sm transition-transform " +
                        (isMiddle
                          ? "mr-auto -translate-x-2 md:-translate-x-4"
                          : "ml-auto translate-x-2 md:translate-x-4")
                      }
                    >
                      <div className="relative bg-white rounded-[14px] border border-gray-100 shadow-sm px-6 py-5 md:px-7 md:py-5 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_60%)]" />
                        <h3 className="relative text-[15px] font-semibold text-gray-900 mb-1.5">
                          {step.title}
                        </h3>
                        <p className="relative text-[13px] leading-relaxed text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Images + Overlay */}
          <div className="relative flex flex-col items-center">
            <div className="flex gap-6">
              {/* Left small image */}
              <div className="relative w-[190px] md:w-[200px] h-[270px] md:h-[285px] rounded-2xl overflow-hidden shadow-sm bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=600&auto=format&fit=crop"
                  alt="Robotic hand and tech visualization"
                  fill
                  sizes="200px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right large image */}
              <div className="relative w-[255px] md:w-[265px] h-[360px] md:h-[372px] rounded-2xl overflow-hidden shadow-sm bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=800&auto=format&fit=crop"
                  alt="Advanced technology lab environment"
                  fill
                  sizes="260px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Overlay stats card */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-4 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-md rounded-xl px-5 py-3">
                <div className="flex -space-x-2">
                  <Avatar src="https://i.pravatar.cc/48?img=12" alt="User A" />
                  <Avatar src="https://i.pravatar.cc/48?img=32" alt="User B" />
                  <Avatar src="https://i.pravatar.cc/48?img=56" alt="User C" />
                  <Avatar src="https://i.pravatar.cc/48?img=24" alt="User D" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-blue-600 leading-none">
                    {t.count}
                  </div>
                  <div className="text-[11px] text-gray-600 mt-1 tracking-tight">
                    {t.happyCustomers}
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

function Avatar({ src, alt }) {
  return (
    <div className="w-9 h-9 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
      <Image
        src={src}
        alt={alt}
        width={36}
        height={36}
        className="w-full h-full object-cover"
      />
    </div>
  )
}