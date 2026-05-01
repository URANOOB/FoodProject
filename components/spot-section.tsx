"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Camera, NavArrowLeft, NavArrowRight } from "iconoir-react"

const spotImages = [
  {
    src: "/graphics/screenshot_final_review.png",
    label: "Nuestra Fachada",
    description: "El punto de encuentro en el corazón de Usaquén."
  },
  {
    src: "/graphics/screenshot_navbar_review.png",
    label: "Ambiente Interior",
    description: "Estética urbana con un toque premium."
  },
  {
    src: "/graphics/screenshot_reference_2.png",
    label: "El Fuego",
    description: "Donde ocurre la magia de la parrilla."
  },
  {
    src: "/graphics/screenshot_reference_3.png",
    label: "Detalles",
    description: "Cada rincón cuenta nuestra historia."
  }
]

export function SpotSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === spotImages.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentIndex((prev) => (prev === spotImages.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? spotImages.length - 1 : prev - 1))

  return (
    <section id="spot" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 h-glow w-glow rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">El Ambiente</p>
          <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-tighter text-foreground sm:text-8xl md:text-9xl">
            EL <span className="text-primary italic">SPOT</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-muted-foreground">
            Vive la experiencia Döminiös. Un espacio diseñado para disfrutar del auténtico sabor callejero.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-5xl group">
          <div className="relative aspect-video overflow-hidden rounded-[2.5rem] border border-white/10 bg-card shadow-2xl">
            {spotImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay Information */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between sm:bottom-12 sm:left-12 sm:right-12">
                    <div className="max-w-md">
                      <div className="mb-4 flex items-center gap-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-1.5 w-fit">
                        <Camera className="h-4 w-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">{image.label}</span>
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white sm:text-4xl">{image.description}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons - visible on hover on desktop */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 opacity-0 transition-all hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
              aria-label="Anterior"
            >
              <NavArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 opacity-0 transition-all hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
              aria-label="Siguiente"
            >
              <NavArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Progress Indicators (Dots) */}
          <div className="mt-8 flex justify-center gap-3">
            {spotImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  index === currentIndex ? "w-12 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
