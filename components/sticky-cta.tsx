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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="relative overflow-hidden rounded-full bg-black/90 p-2.5 backdrop-blur-2xl border-2 border-primary/30 shadow-[0_0_40px_rgba(251,191,36,0.15)] animate-pulse-gold">
        <div className="flex items-center justify-between gap-4 px-2">
          <div className="flex items-center gap-3 pl-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary leading-none mb-1">Usaquén</span>
              <span className="text-xs font-bold text-foreground leading-none whitespace-nowrap">Abierto ahora</span>
            </div>
          </div>

          <a
            href="tel:+573105554321"
            className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="h-4 w-4" />
            <span>Pedir ahora</span>
          </a>
        </div>
      </div>
    </div>
  )
}
