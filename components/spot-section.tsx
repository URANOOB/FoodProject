"use client"

import Image from "next/image"
import { Camera, ArrowUpRight } from "iconoir-react"

const spotImages = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    label: "El Fuego",
    description: "Parrilla real y fuego directo",
    gridClass: "col-span-2 h-[350px] md:col-span-2 md:row-span-2 md:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
    label: "Ambiente",
    description: "Estética urbana premium",
    gridClass: "col-span-1 h-[200px] md:col-span-1 md:row-span-1 md:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop",
    label: "Sabor",
    description: "Ingredientes seleccionados",
    gridClass: "col-span-1 h-[200px] md:col-span-1 md:row-span-1 md:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    label: "The Spot",
    description: "El corazón de Usaquén",
    gridClass: "col-span-2 h-[250px] md:col-span-2 md:row-span-1 md:h-full",
  }
]

export function SpotSection() {
  return (
    <section id="spot" className="relative overflow-hidden bg-background py-5 md:py-16">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-glow w-glow rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center text-center justify-between gap-8 md:flex-row md:items-end md:text-left">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-4">La Experiencia</p>
            <h2 className="text-7xl font-black uppercase leading-[0.8] tracking-tighter text-foreground sm:text-8xl md:text-9xl">
              EL <span className="text-primary italic">SPOT</span>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="h-px w-24 bg-primary/30 hidden lg:block"></div>
            <p className="max-w-md text-base font-medium leading-relaxed text-muted-foreground">
              Un espacio crudo, auténtico y diseñado para los que no se conforman con lo ordinario.
            </p>
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:grid-rows-2 md:h-200">
          {spotImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-4xl border border-white/5 bg-card transition-all duration-700 hover:border-primary/40 ${image.gridClass}`}
            >
              {/* Main Image */}
              <Image
                src={image.src}
                alt={image.label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                      <Camera className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{image.label}</span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    {image.description}
                  </h3>
                </div>
                
                {/* Floating Icon appearing on hover */}
                <div className="absolute top-6 right-6 opacity-0 transition-all duration-500 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Corner accent for street look */}
              <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 rotate-45 bg-primary/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
