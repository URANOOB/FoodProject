"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin, Clock } from "iconoir-react"
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const currentYear = mounted ? new Date().getFullYear() : ""

  const marqueeText = "DÖMINIÖS K·RIBE • SABOR CALLEJERO • EL FUEGO DE USAQUÉN • "

  return (
    <footer className="relative bg-background pt-2 pb-12 overflow-hidden border-t border-white/5">
      {/* Dynamic Marquee */}
      <div className="relative border-b border-white/5 bg-primary/5 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-primary/40 inline-block px-4">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-24">
        {/* Main Brand Section */}
        <div className="relative mb-16 md:mb-32 flex flex-col items-center justify-center text-center">
          {/* Gigantic Background Text - Scaled for mobile */}
          <div className="absolute inset-0 flex items-center justify-center select-none opacity-[0.03] whitespace-nowrap pointer-events-none overflow-hidden">
            <span className="text-[10rem] sm:text-[15rem] md:text-[25rem] lg:text-[35rem] font-black uppercase tracking-tighter">DÖMINIÖS</span>
          </div>

          <Link href="/" className="relative z-10 flex flex-col items-center group">
            <div className="relative h-32 w-32 mb-4 transition-transform duration-700 sm:h-40 sm:w-40 md:h-48 md:w-48 group-hover:scale-110">
              {/* Vibrant Glow Logo */}
              <div className="absolute inset-0 bg-primary/20 blur-2xl md:blur-[60px] rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />
              <Image 
                src="/graphics/logo.png" 
                alt="Döminiös K·Ribe Logo" 
                fill 
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                className="relative object-contain" 
              />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-primary sm:text-6xl md:text-8xl">
              DÖMINIÖS <span className="text-foreground italic">K·RIBE</span>
            </h2>
            <p className="mt-2 md:mt-4 text-[10px] md:text-sm font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-muted-foreground">
              Donde la calle se vuelve sabor
            </p>
          </Link>
        </div>

        {/* Info Grid - 2 columns on mobile for compactness */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-2 lg:grid-cols-4 items-start mb-20 md:mb-32">
          {/* Navigation */}
          <div className="flex flex-col items-start space-y-4 md:space-y-6">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Explorar</p>
            <nav className="flex flex-col items-start gap-3 md:gap-4 text-xs md:text-base font-bold uppercase tracking-widest text-foreground">
              <Link href="#menu" className="transition-all hover:text-primary hover:translate-x-1">Nuestra Carta</Link>
              <Link href="#location" className="transition-all hover:text-primary hover:translate-x-1">Ubicación</Link>
              <Link href="#contact" className="transition-all hover:text-primary hover:translate-x-1">Contacto</Link>
            </nav>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-start space-y-4 md:space-y-6">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Horarios</p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col gap-0.5 md:gap-1">
                <p className="text-xs md:text-base font-black uppercase tracking-widest text-foreground">{SITE_CONFIG.openingHours.days}</p>
                <p className="text-[10px] md:text-sm font-bold text-muted-foreground">{SITE_CONFIG.openingHours.hours}</p>
              </div>
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary/80">
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                <span>Cocina abierta</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start space-y-4 md:space-y-6">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Comunidad</p>
            <a 
              href={SITE_CONFIG.links.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-1 md:gap-2 text-xs md:text-base font-bold uppercase tracking-widest text-foreground transition-all hover:text-primary"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <Instagram className="h-4 w-4 md:h-6 md:w-6 transition-transform group-hover:scale-110" />
                <span>Instagram</span>
              </div>
              <span className="text-[10px] md:text-xs text-muted-foreground group-hover:text-primary/60">@{SITE_CONFIG.links.instagram.split('/').pop()}</span>
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-start space-y-4 md:space-y-6">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Ubicación</p>
            <address className="not-italic space-y-3 md:space-y-4">
              <div className="flex flex-col gap-0.5 md:gap-1">
                <p className="text-xs md:text-base font-black uppercase tracking-widest text-foreground">{SITE_CONFIG.contact.address}</p>
                <p className="text-[10px] md:text-sm font-bold text-muted-foreground">{SITE_CONFIG.contact.city}</p>
              </div>
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary/80">
                <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                <span>Usaquén, Bogotá</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col items-center justify-between gap-6 md:gap-8 lg:flex-row text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-1 md:gap-2">
            <p>© {currentYear} {SITE_CONFIG.name} S.A.S.</p>
            <p className="opacity-60">Diseñado con fuego en Bogotá</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-3">
            <Link href="/aviso-legal" className="hover:text-primary transition-colors hover:opacity-100">Aviso Legal</Link>
            <Link href="/politica-de-privacidad" className="hover:text-primary transition-colors hover:opacity-100">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="hover:text-primary transition-colors hover:opacity-100">Términos</Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-75 md:h-hero-md w-75 md:w-hero-md bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
    </footer>
  )
}
