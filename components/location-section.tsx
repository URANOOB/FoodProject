"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Clock, Calendar } from "iconoir-react"

export function LocationSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="location" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">Visítanos</p>
          <h2 className="text-7xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-8xl md:text-9xl">
            NUESTRA <span className="text-primary italic">CASA</span>
          </h2>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/5 bg-background shadow-2xl">
            {mounted ? (
              <iframe
                title="Mapa de ubicación - Usaquén, Bogotá"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.040%2C4.690%2C-74.020%2C4.710&amp;layer=mapnik&amp;marker=4.6973%2C-74.0306"
                className="h-full w-full grayscale contrast-125 invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              </div>
            )}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/80 p-6 backdrop-blur-xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-foreground">Usaquén, Bogotá</h3>
                  <p className="text-sm font-medium text-muted-foreground">Carrera 6A # 117-15</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Horarios de Sabor</h3>
                  <p className="text-lg font-medium text-muted-foreground">
                    Lunes a Domingo
                    <br />
                    <span className="text-foreground">12:00 PM — 10:30 PM</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Sin Reservas</h3>
                  <p className="text-lg font-medium text-muted-foreground">
                    Llega cuando quieras. El sabor callejero no espera, y nosotros tampoco.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-primary p-8 shadow-2xl shadow-primary/20">
              <h4 className="mb-2 text-2xl font-black uppercase tracking-tight text-primary-foreground">¿Tienes un Evento?</h4>
              <p className="text-primary-foreground/90 font-medium mb-6">
                Llevamos la parrilla a tu fiesta. Catering personalizado con el estilo de Döminiös K·Ribe.
              </p>
              <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary-foreground border-b-2 border-primary-foreground pb-1">
                Cotizar ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
