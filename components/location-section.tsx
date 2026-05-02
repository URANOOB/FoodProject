"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"
import { MapPin, Clock, Calendar } from "iconoir-react"

export function LocationSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  // Genera la URL de Google Maps con pin basado en las coordenadas
  const mapUrl = `https://maps.google.com/maps?q=${SITE_CONFIG.location.lat},${SITE_CONFIG.location.lng}&z=${SITE_CONFIG.location.mapZoom}&output=embed`

  return (
    <section id="location" className="bg-card py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">Visítanos</p>
          <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-8xl md:text-9xl">
            NUESTRA <span className="text-primary italic">CASA</span>
          </h2>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <div className="relative w-full aspect-3/4 overflow-hidden rounded-[2.5rem] border border-white/5 bg-background shadow-2xl sm:aspect-square lg:h-full lg:max-w-none">
            {mounted ? (
              <iframe
                title="Mapa de ubicación - Döminiös K·Ribe"
                src={mapUrl}
                className="h-full w-full grayscale contrast-125 invert-[0.9] hue-rotate-180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              </div>
            )}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/80 p-5 backdrop-blur-xl border border-primary/30 sm:bottom-6 sm:left-6 sm:right-6 sm:p-6 shadow-[0_0_30px_rgba(251,191,36,0.2)]">
              <div className="flex items-center gap-4 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-primary sm:text-xl">{SITE_CONFIG.contact.city}</h3>
                  <p className="text-xs font-medium text-white/90 sm:text-sm">{SITE_CONFIG.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12 justify-center">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 sm:h-14 sm:w-14">
                  <Clock className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-foreground sm:text-2xl">Horarios</h3>
                  <p className="text-xs font-medium text-muted-foreground sm:text-lg">
                    {SITE_CONFIG.openingHours.days}
                    <br />
                    <span className="text-foreground">{SITE_CONFIG.openingHours.hours}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 sm:h-14 sm:w-14">
                  <Calendar className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-foreground sm:text-2xl">Reservas</h3>
                  <p className="text-xs font-medium text-muted-foreground sm:text-lg">
                    Sin reservas.
                    <br />
                    <span className="text-foreground italic">¡Llega ahora!</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-primary p-8 text-center shadow-2xl shadow-primary/20 sm:text-left">
              <h4 className="mb-2 text-2xl font-black uppercase tracking-tight text-primary-foreground">¿Tienes un Evento?</h4>
              <p className="text-primary-foreground/90 font-medium mb-6">
                Llevamos la parrilla a tu fiesta. Catering personalizado con el estilo de Döminiös K·Ribe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary-foreground border-b-2 border-primary-foreground pb-1 hover:opacity-80 transition-opacity">
                  Cotizar ahora
                </Link>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${SITE_CONFIG.location.lat},${SITE_CONFIG.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary-foreground border-b-2 border-primary-foreground pb-1 hover:opacity-80 transition-opacity"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
