"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Xmark, MapPin } from "iconoir-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { href: "#menu", label: "Carta" },
    { href: "#location", label: "Ubicación" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#292722] bg-background/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src="/graphics/dominios-kribe-logo.svg" alt="Döminiös K·Ribe" className="h-12 w-auto md:h-14" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold uppercase tracking-wider text-primary md:text-2xl">Döminiös K·Ribe</h1>
              <p className="text-xs tracking-widest text-muted-foreground">CARTA CALLEJERA · BOGOTÁ</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-[#292722] bg-black/35 px-2 py-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-bold tracking-wide text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2 flex items-center gap-2 rounded-full px-3 py-2 text-accent">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">Bogotá</span>
            </div>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground transition-colors hover:text-primary md:hidden"
            aria-label="Abrir o cerrar menú"
          >
            {isOpen ? <Xmark className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 font-medium tracking-wide text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-2 text-accent">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">Bogotá</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
