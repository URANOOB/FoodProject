"use client"

import { Phone, Mail, MapPin, Instagram } from "iconoir-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">Hablemos</p>
          <h2 className="text-7xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-8xl md:text-9xl">
            CONTACTO <span className="text-primary italic">DIRECTO</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-medium text-muted-foreground">
            ¿Hambre de algo especial? Pide un combo, reserva para tu evento o simplemente salúdanos.
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group flex flex-col items-start space-y-6 rounded-3xl border border-white/5 bg-card/30 p-8 transition-all hover:bg-card/50 hover:border-primary/20">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Línea Caliente</p>
              <a
                href="tel:+573105554321"
                className="text-2xl font-black text-foreground transition-colors hover:text-primary md:text-3xl"
              >
                +57 310 555 4321
              </a>
            </div>
          </div>

          <div className="group flex flex-col items-start space-y-6 rounded-3xl border border-white/5 bg-card/30 p-8 transition-all hover:bg-card/50 hover:border-primary/20">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Email</p>
              <a
                href="mailto:contacto@dominioskribe.co"
                className="break-all text-xl font-black text-foreground transition-colors hover:text-primary"
              >
                contacto@dominioskribe.co
              </a>
            </div>
          </div>

          <div className="group flex flex-col items-start space-y-6 rounded-3xl border border-white/5 bg-card/30 p-8 transition-all hover:bg-card/50 hover:border-primary/20">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <Instagram className="h-6 w-6" />
            </div>
            <div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Instagram</p>
              <a
                href="https://www.instagram.com/dominioskribe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-black text-foreground transition-colors hover:text-primary md:text-3xl"
              >
                @dominioskribe
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/30"></div>
            <MapPin className="h-6 w-6 text-primary" />
            <div className="h-px w-12 bg-primary/30"></div>
          </div>
          <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-foreground">Visítanos en Usaquén</h3>
          <p className="text-xl font-medium text-muted-foreground mb-6">
            <span className="text-foreground">Carrera 6A # 117-15</span>, Bogotá D.C.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary border border-primary/20">
            Abierto todos los días de 12:00 a 22:30
          </div>
          <p className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            Atención: Andrés Ramírez • Döminiös K·Ribe S.A.S.
          </p>
        </div>
      </div>
    </section>
  )
}
