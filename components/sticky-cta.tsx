"use client"

import { useState, useEffect } from "react"
import { SITE_CONFIG } from "@/lib/constants"
import { Phone, Whatsapp, Xmark, Menu } from "iconoir-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Se oculta después de 300px de scroll, pero desaparece si estamos cerca del footer (últimos 450px)
      // para no tapar los textos de aviso legal y links inferiores.
      const isNearBottom = scrollY + windowHeight > documentHeight - 450
      
      setIsVisible(scrollY > 300 && !isNearBottom)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="group fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-10 duration-700">
      {/* Badge de Info / Etiqueta de Acción (Espacio compartido) */}
      <div className="relative h-10 flex items-center bg-black/80 backdrop-blur-xl border border-white/10 px-4 rounded-xl shadow-2xl min-w-cta-badge md:min-w-cta-badge-md overflow-hidden sm:h-12 sm:rounded-2xl">
        {/* Información de Ubicación (Se oculta al hacer hover sobre el botón o al abrir) */}
        <div className={`flex flex-col items-start transition-all duration-300 ${isOpen ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-10"}`}>
          <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-primary leading-none mb-0.5 sm:mb-1">{SITE_CONFIG.contact.city}</span>
          <div className="flex items-center gap-1.5">
            <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse sm:h-1.5 sm:w-1.5" />
            <span className="text-[7px] md:text-[8px] font-bold text-foreground/80 uppercase tracking-tighter">Abierto ahora</span>
          </div>
        </div>

        {/* Etiqueta "Pedir ahora" (Solo aparece cuando NO está abierto) */}
        {!isOpen && (
          <div className="absolute inset-0 flex items-center px-4 pointer-events-none">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary transition-all duration-300 opacity-0 group-hover:opacity-100">
              Pedir ahora
            </span>
          </div>
        )}

        {/* Etiqueta de "Cerrar" o "Opciones" cuando está abierto */}
        {isOpen && (
          <div className="absolute inset-0 flex items-center px-4 animate-in fade-in slide-in-from-bottom-2">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
              Opciones
            </span>
          </div>
        )}
      </div>

      {/* Contenedor de Acciones Expandible */}
      <div className="relative flex flex-col items-center">
        {/* Opciones que se despliegan arriba */}
        <div 
          className={`absolute bottom-full mb-3 transition-all duration-500 ease-out flex flex-col items-center gap-2 sm:gap-3 ${
            isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          {/* WhatsApp */}
          <a
            href={SITE_CONFIG.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 sm:h-14 sm:w-14"
            aria-label="WhatsApp"
          >
            <Whatsapp className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-7 sm:w-7" />
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
            <span className="absolute right-full mr-4 rounded-lg bg-black/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white whitespace-nowrap shadow-2xl">
              WhatsApp
            </span>
          </a>

          {/* Llamada Directa */}
          <a
            href={SITE_CONFIG.links.phone}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(251,191,36,0.4)] transition-all hover:scale-110 active:scale-95 sm:h-14 sm:w-14"
            aria-label="Llamar ahora"
          >
            <Phone className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-7 sm:w-7" />
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none" />
            <span className="absolute right-full mr-4 rounded-lg bg-black/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white whitespace-nowrap shadow-2xl">
              Llamar
            </span>
          </a>
        </div>

        {/* Botón Principal (Toggle) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-500 shadow-[0_15px_40px_rgba(251,191,36,0.4)] sm:h-16 sm:w-16 ${
            isOpen ? "bg-black text-white" : "bg-primary text-primary-foreground"
          }`}
          aria-label={isOpen ? "Cerrar opciones" : "Ver opciones de contacto"}
        >
          {isOpen ? (
            <Xmark className="h-6 w-6 transition-all animate-in zoom-in rotate-90 sm:h-8 sm:w-8" />
          ) : (
            <>
              <Menu className="h-6 w-6 transition-all group-hover:scale-110 sm:h-8 sm:w-8" />
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
