"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ href, children, className = "" }) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-purple-600 ${
        isActive ? "text-purple-600 font-semibold" : "text-gray-700"
      } ${className}`}
    >
      {children}
    </Link>
  )
}

export default NavLink
