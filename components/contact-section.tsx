"use client"

import { Phone, Mail, Instagram } from "iconoir-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">Hablemos</p>
          <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-8xl md:text-9xl">
            CONTACTO <span className="text-primary italic">DIRECTO</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-muted-foreground sm:text-lg">
            ¿Hambre de algo especial? Pide un combo, reserva para tu evento o simplemente salúdanos. Estamos listos para el fuego.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {/* Email Card - Top and Full Width on Mobile */}
          <div className="group relative col-span-2 flex flex-col items-center justify-center space-y-4 rounded-[2.5rem] border border-white/5 bg-card/30 p-8 text-center transition-all hover:bg-card/50 hover:border-primary/20 hover:-translate-y-2 lg:col-span-1 lg:p-10 lg:space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary-30 transition-transform group-hover:scale-110 lg:h-16 lg:w-16">
              <Mail className="h-7 w-7 lg:h-8 lg:w-8" />
            </div>
            <div className="w-full">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Escríbenos</p>
              <a
                href="mailto:contacto@dominioskribe.co"
                className="block break-all text-lg font-black text-foreground transition-colors hover:text-primary sm:text-2xl"
              >
                contacto@dominioskribe.co
              </a>
            </div>
          </div>

          {/* Phone Card - Left on Mobile */}
          <div className="group relative col-span-1 flex flex-col items-center justify-center space-y-4 rounded-[2.5rem] border border-white/5 bg-card/30 p-6 text-center transition-all hover:bg-card/50 hover:border-primary/20 hover:-translate-y-2 lg:p-10 lg:space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary-30 transition-transform group-hover:scale-110 lg:h-16 lg:w-16">
              <Phone className="h-6 w-6 lg:h-8 lg:w-8" />
            </div>
            <div>
              <p className="mb-1 text-[8px] font-black uppercase tracking-[0.2em] text-primary lg:mb-2 lg:text-[10px] lg:tracking-[0.3em]">Línea Caliente</p>
              <a
                href="tel:+573105554321"
                className="block text-sm font-black text-foreground transition-colors hover:text-primary sm:text-xl md:text-2xl"
              >
                +57 310 555 4321
              </a>
            </div>
          </div>

          {/* Instagram Card - Right on Mobile */}
          <div className="group relative col-span-1 flex flex-col items-center justify-center space-y-4 rounded-[2.5rem] border border-white/5 bg-card/30 p-6 text-center transition-all hover:bg-card/50 hover:border-primary/20 hover:-translate-y-2 lg:p-10 lg:space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary-30 transition-transform group-hover:scale-110 lg:h-16 lg:w-16">
              <Instagram className="h-6 w-6 lg:h-8 lg:w-8" />
            </div>
            <div>
              <p className="mb-1 text-[8px] font-black uppercase tracking-[0.2em] text-primary lg:mb-2 lg:text-[10px] lg:tracking-[0.3em]">Instagram</p>
              <a
                href="https://www.instagram.com/dominioskribe"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-black text-foreground transition-colors hover:text-primary sm:text-xl md:text-2xl"
              >
                @dominioskribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
