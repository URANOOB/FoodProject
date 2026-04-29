"use client"

import { useState, useEffect } from "react"
import { Phone, MapPin } from "iconoir-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-in border-t-4 border-amber-600 bg-primary shadow-2xl slide-in-from-bottom duration-300">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2 text-primary-foreground">
            <img src="/graphics/truck.svg" alt="Food truck" className="hidden h-8 w-8 object-contain md:block" />
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span className="font-bold">Abierto todos los días</span>
              <span className="hidden sm:inline">• Carrera 6A # 117-15, Usaquén</span>
            </div>
          </div>

          <a
            href="tel:+573105554321"
            className="group flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-2.5 font-black tracking-wider text-primary shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5 animate-pulse" />
            <span>LLAMAR AHORA</span>
          </a>
        </div>
      </div>
    </div>
  )
}
