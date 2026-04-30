"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Xmark, MapPin, Phone } from "iconoir-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { href: "#menu", label: "Carta" },
    { href: "#location", label: "Ubicación" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="relative overflow-hidden rounded-full bg-black/70 p-2 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between gap-2 px-2 md:px-6">
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 shadow-[0_0_30px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_45px_rgba(251,191,36,0.4)] border border-white/10">
              <img src="/graphics/logo.png" alt="Döminiös" className="h-12 w-auto object-contain" />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-xl font-black uppercase tracking-tighter text-primary leading-none">Döminiös</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mt-1">K·Ribe</span>
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
              href="tel:+573105554321"
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
                className="rounded-3xl bg-white/5 px-6 py-4 text-xs font-black uppercase tracking-widest text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary border-t border-white/5">
              <MapPin className="h-3 w-3" />
              <span>Usaquén, Bogotá</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
