"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Menu, X } from "lucide-react"
import { useState } from "react"
import { NAV_LINKS, RIGHT_NAV_LINKS } from "@/lib/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-4 inset-x-4 z-50 pointer-events-none">
      {/* Desktop: floating white bar, 3-column grid */}
      <div className="top-0 left-0 right-0 h-14 bg-white flex items-center justify-between px-4 pointer-events-auto grid grid-cols-[1fr_auto_1fr] items-center">
        <div className="flex items-center gap-6 min-w-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[#111] font-medium text-sm transition-colors ${
                isActive(link.href)
                  ? "text-primary border-b-2 border-primary pb-[3px]"
                  : "hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/" className="text-[30px] font-semibold text-primary tracking-tight">
          Wanderlast
        </Link>

        <div className="flex items-center gap-6 min-w-0 justify-end">
          {RIGHT_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-[#111] font-medium text-sm transition-colors hover:text-primary"
            >
              {link.label === "Profile" ? (
                <>
                  <User className="w-4 h-4" />
                  {link.label}
                </>
              ) : (
                link.label
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile: hamburger menu */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <Link href="/" className="text-[24px] font-semibold text-primary tracking-tight">
          Wanderlast
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-[#111]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-[#111] font-medium text-sm py-2 transition-colors ${
                  isActive(link.href)
                    ? "text-primary border-r-2 border-primary pr-3"
                    : "hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              {RIGHT_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#111] font-medium text-sm py-2 transition-colors hover:text-primary"
                >
                  {link.label === "Profile" ? (
                    <>
                      <User className="w-4 h-4 mr-2" />
                      {link.label}
                    </>
                  ) : (
                    link.label
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
