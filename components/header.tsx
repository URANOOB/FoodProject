"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Xmark, MapPin } from "iconoir-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src="/graphics/fooiewagen logo.svg" alt="The Foodie Wagon" className="h-12 md:h-16 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-primary font-bold text-xl md:text-2xl tracking-wider uppercase">The Foodie Wagon</h1>
              <p className="text-muted-foreground text-xs tracking-widest">DONDE EL SABOR SALE A LA CARRETERA</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#menu" className="text-foreground hover:text-primary transition-colors font-medium tracking-wide">
              Menú
            </Link>
            <Link
              href="#location"
              className="text-foreground hover:text-primary transition-colors font-medium tracking-wide"
            >
              Ubicación
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium tracking-wide">
              Contacto
            </Link>
            <div className="flex items-center gap-2 text-accent">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Ingolstadt</span>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <img src="/graphics/halal logo.svg" alt="100% halal" className="h-12 w-auto" />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Abrir o cerrar menú"
          >
            {isOpen ? <Xmark className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#menu"
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                Menú
              </Link>
              <Link
                href="#location"
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                Ubicación
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-accent">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">Ingolstadt</span>
                </div>
                <img src="/graphics/halal logo.svg" alt="100% halal" className="h-10 w-auto" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
