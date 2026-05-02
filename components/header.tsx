"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { SITE_CONFIG } from "@/lib/constants"
import { Menu, Xmark, Phone } from "iconoir-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { href: "#menu", label: "Carta" },
    { href: "#location", label: "Ubicación" },
    { href: "#contact", label: "Contacto" },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // Si el menú móvil está abierto, no escondemos la navbar
        if (isOpen) return

        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY, isOpen])

  return (
    <header 
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl transition-all duration-500 ease-in-out ${
        isVisible ? "top-6" : "-top-32"
      }`}
    >
      <div className="relative rounded-3xl bg-black/70 p-1 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <div className="flex h-16 items-center justify-between gap-2 px-2 md:px-5">
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <div className="relative h-24 w-24 md:h-28 md:w-28 transition-all duration-500">
              {/* Vibrant Glow Logo - Aparece al hacer hover */}
              <Image 
                src="/graphics/logo.png" 
                alt="" 
                fill 
                sizes="(max-width: 768px) 96px, 112px"
                className="object-contain blur-2xl opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-70 group-hover:brightness-125 pointer-events-none select-none" 
                aria-hidden="true"
              />
              {/* Logo principal */}
              <Image 
                src="/graphics/logo.png" 
                alt="Döminiös" 
                fill 
                sizes="(max-width: 768px) 96px, 112px"
                className="relative object-contain transition-all duration-500 group-hover:scale-110" 
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground transition-all hover:text-primary hover:bg-white/5 rounded-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.links.phone}
              className="animate-pulse-gold flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-primary-foreground transition-all hover:scale-105 active:scale-95 sm:px-8"
            >
              <Phone className="h-3 w-3" />
              <span>Pedir ahora</span>
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-foreground transition-colors hover:text-primary md:hidden"
              aria-label="Abrir o cerrar menú"
            >
              {isOpen ? <Xmark className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Organic Mobile Menu */}
        {isOpen && (
          <nav className="mt-2 flex flex-col gap-1 p-2 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl bg-white/5 px-8 py-4 text-xs font-black uppercase tracking-widest text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
