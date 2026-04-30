"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Instagram, Phone, Mail, MapPin } from "iconoir-react"

export function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentYear = mounted ? new Date().getFullYear() : ""

  return (
    <footer className="bg-background pt-32 pb-16 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-24 flex flex-col items-center justify-center text-center">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 select-none opacity-[0.03] whitespace-nowrap pointer-events-none">
            <span className="text-[15rem] font-black uppercase tracking-tighter sm:text-[20rem] md:text-[25rem]">DÖMINIÖS</span>
          </div>
          
          <Link href="/" className="relative z-10 flex flex-col items-center group">
            <img src="/graphics/logo.png" alt="Döminiös K·Ribe" className="h-20 w-auto mb-6 transition-transform duration-500 group-hover:scale-110" />
            <h2 className="text-5xl font-black uppercase tracking-tighter text-primary sm:text-6xl md:text-7xl">
              DÖMINIÖS <span className="text-foreground italic">K·RIBE</span>
            </h2>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.5em] text-muted-foreground">
              Donde la calle se vuelve sabor
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 items-start mb-24">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Navegación</p>
            <nav className="flex flex-col items-center md:items-start gap-3 text-sm font-bold uppercase tracking-widest text-foreground">
              <Link href="#menu" className="transition-colors hover:text-primary">Explorar Carta</Link>
              <Link href="#location" className="transition-colors hover:text-primary">Ubicación</Link>
              <Link href="#contact" className="transition-colors hover:text-primary">Contacto</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-center space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Social</p>
            <a 
              href="https://www.instagram.com/dominioskribe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              @dominioskribe
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Ubicación</p>
            <address className="not-italic text-sm font-bold uppercase tracking-widest text-foreground">
              Carrera 6A # 117-15<br />
              Usaquén, Bogotá
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-between gap-6 md:flex-row text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/60">
          <p>© {currentYear} Döminiös K·Ribe S.A.S. • Bogotá D.C.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/aviso-legal" className="hover:text-primary transition-colors">Aviso Legal</Link>
            <Link href="/politica-de-privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="hover:text-primary transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
