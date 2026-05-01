"use client"

import { FastArrowRight } from "iconoir-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-40 pb-5 md:pt-40">
      <div className="absolute inset-0 z-0">
        <div className="chalk-hero h-full w-full opacity-40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.5em] text-primary sm:text-sm animate-fade-in">
            Usaquén • Bogotá
          </p>

          <h1 className="mb-8 text-6xl font-black uppercase leading-[0.9] tracking-tighter sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem]">
            <span className="block text-primary drop-shadow-[0_10px_30px_rgba(251,191,36,0.3)]">DÖMINIÖS</span>
            <span className="block text-foreground -mt-2 sm:-mt-6 md:-mt-10">K·RIBE</span>
          </h1>

          <div className="relative mt-1 mb-6 h-64 w-full sm:-mt-12 sm:mb-16 sm:h-80 md:h-hero-md lg:h-hero-lg animate-float">
            <Image
              src="/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png"
              alt="Döminiös Burger"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-contain drop-shadow-[0_30px_100px_rgba(251,191,36,0.5)]"
            />
          </div>

          <div className="max-w-2xl mb-12">
            <p className="text-lg font-medium leading-relaxed text-foreground/90 sm:text-xl md:text-2xl">
              Elevamos la comida callejera a una experiencia <span className="text-primary italic">premium</span>. Ingredientes frescos, fuego real y el auténtico sabor de Usaquén.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <Link
              href="#menu"
              className="group relative overflow-hidden rounded-full bg-primary px-10 py-5 text-sm font-black uppercase tracking-widest text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(251,191,36,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorar Carta
                <FastArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
