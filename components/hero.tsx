"use client"

import { ArrowDown, FastArrowRight, Phone } from "iconoir-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="chalk-hero relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
      <div className="brush-stroke brush-stroke-left" />
      <div className="brush-stroke brush-stroke-right" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-1 text-center md:text-left">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.4em] text-primary">
              Sabor callejero · Bogotá
            </p>

            <h1 className="mb-4 text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-primary">DÖMINIÖS</span>
              <br />
              <span className="text-foreground">K·RIBE</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-xl font-light tracking-wide text-muted-foreground sm:text-2xl md:text-3xl">
              Donde la calle se vuelve sabor
            </p>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              Hamburguesas gourmet, perros calientes, salchipapas, parrilla y pizzas artesanales preparadas con ingredientes frescos y mucho fuego.
            </p>

            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href="tel:+573105554321"
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 font-bold tracking-wider text-primary-foreground shadow-2xl shadow-primary/30 transition-all hover:bg-primary/90 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                +57 310 555 4321
              </a>
              <Link
                href="#menu"
                className="group flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary px-8 py-4 font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:w-auto"
              >
                VER CARTA
                <FastArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mx-auto max-w-xl rounded-lg border-2 border-primary/30 bg-primary/10 p-5 backdrop-blur-sm md:mb-16 md:p-8">
              <div className="flex items-center justify-center gap-4 md:gap-6">
                <img src="/graphics/truck.svg" alt="Food truck" className="h-16 w-16 flex-shrink-0 object-contain md:h-20 md:w-20" />
                <div className="text-left">
                  <p className="mb-1 text-2xl font-black text-primary md:text-3xl lg:text-4xl">Abierto todos los días</p>
                  <p className="text-base font-bold text-foreground md:text-lg lg:text-xl">Carrera 6A # 117-15, Usaquén</p>
                  <p className="mt-1 text-sm text-muted-foreground md:text-base">12:00 - 22:30 h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-2 md:order-2">
            <div className="relative flex h-[300px] w-full items-center justify-center sm:h-[360px] md:h-[640px]">
              <div className="animate-float relative z-10 h-full w-full">
                <Image
                  src="/og-image.webp"
                  alt="Hamburguesa estrella"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_0_80px_rgba(251,191,36,0.45)]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
