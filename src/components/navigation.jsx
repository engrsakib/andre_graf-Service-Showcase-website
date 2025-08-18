"use client"

import { usePathname } from "next/navigation"
import NavLink from "./nav-link"
import LanguageSelector from "./language-selector"
import { useLanguage } from "../contexts/language-context"

const Navigation = () => {
  const { t } = useLanguage()
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("services"), href: "/services" },
    { name: t("aboutUs"), href: "/about" },
    { name: t("team"), href: "/team" },
    { name: t("contactUs"), href: "/contact" },
  ]

  return (
    <nav className={`w-full px-6 py-4 ${isHomePage ? "bg-purple-100" : "bg-white border-b border-gray-200"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink href="/" className="flex items-center space-x-2 hover:text-gray-800">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xl font-semibold text-gray-800">Logoipsum</span>
        </NavLink>

        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <NavLink key={index} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <LanguageSelector />
      </div>
    </nav>
  )
}

export default Navigation
