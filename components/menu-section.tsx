"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { CoffeeCup, FireFlame, PizzaSlice, Star, Truck } from "iconoir-react"

type MenuItem = {
  name: string
  price: string
  description: string
  combo?: string
  featured?: boolean
  image?: string
}

type MenuCategory = {
  id: string
  label: string
  title: string
  icon: typeof PizzaSlice
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgers",
    title: "Hamburguesas y Sandwichs",
    icon: PizzaSlice,
    items: [
      {
        name: "Sencilla",
        price: "12.000",
        description:
          "Pan gourmet de ajonjolí negro, carne parrillera o pollo, queso cheddar, verduras, salsas y papas chips.",
        image: "/menu-reference/menu-burgers-sandwiches.webp",
      },
      {
        name: "Doble o mixta",
        price: "16.000",
        combo: "Combo 19.000",
        featured: true,
        description:
          "Doble carne parrillera o pollo, tocineta, doble queso cheddar, verduras, salsas y papas chips.",
        image: "/menu-reference/menu-burgers-sandwiches.webp",
      },
      {
        name: "Especial",
        price: "15.000",
        combo: "Combo 18.000",
        description:
          "Carne o pollo, tocineta, huevo frito, chorizo, queso cheddar, verduras, salsas y papas chips.",
        image: "/menu-reference/menu-burgers-sandwiches.webp",
      },
      {
        name: "Sandwich mixto",
        price: "13.000",
        combo: "Combo 19.000",
        description: "Pan árabe con carne y pollo salteados, pimentones, queso cheddar, verduras y salsas.",
        image: "/menu-reference/menu-burgers-sandwiches.webp",
      },
    ],
  },
  {
    id: "parrilla",
    label: "Parrilla",
    title: "Wok, Churrasco y Mazorcada",
    icon: FireFlame,
    items: [
      {
        name: "Arroz al wok",
        price: "14.000",
        description: "Arroz salteado con carne, pollo, zanahoria, pimentón, ensalada dulce y tajadas de plátano.",
        image: "/menu-reference/menu-wok-churrasco-mazorcada.webp",
      },
      {
        name: "Churrasco",
        price: "23.000",
        featured: true,
        description: "Papa francesa premium, churrasco de buen corte y ensalada dulce.",
        image: "/menu-reference/menu-wok-churrasco-mazorcada.webp",
      },
      {
        name: "Mazorcada",
        price: "16.000",
        description:
          "Base de maíz bañada con salsa, carne y pollo salteados, lechuga, tomate, queso rallado, papas chips y chorizo.",
        image: "/menu-reference/menu-wok-churrasco-mazorcada.webp",
      },
    ],
  },
  {
    id: "bbq",
    label: "BBQ",
    title: "Alas, Patacón y Costillas",
    icon: FireFlame,
    items: [
      {
        name: "Alas en salsa búfalo",
        price: "22.000",
        featured: true,
        description: "Papa francesa premium, alas preseleccionadas bañadas en salsa búfalo y ensalada dulce.",
        image: "/menu-reference/menu-wings-patacon-ribs.webp",
      },
      {
        name: "Patacón mixto",
        price: "16.000",
        description:
          "Patacón maduro con guacamole, carne y pollo salteados, queso rallado, chorizo, lechuga, salsas y papas chips.",
        image: "/menu-reference/menu-wings-patacon-ribs.webp",
      },
      {
        name: "Costillas BBQ",
        price: "22.000",
        description: "Costillas ahumadas bañadas en salsa BBQ, papa francesa premium y ensalada dulce.",
        image: "/menu-reference/menu-wings-patacon-ribs.webp",
      },
    ],
  },
  {
    id: "street",
    label: "Street",
    title: "Salchipapas, Perros y Arepas",
    icon: Truck,
    items: [
      {
        name: "Perro caliente sencillo",
        price: "9.500",
        combo: "Combo 12.500",
        description: "Pan gourmet de ajonjolí negro, salchicha americana, queso cheddar, lechuga, cebolla y salsas.",
        image: "/menu-reference/menu-hotdogs-arepas.webp",
      },
      {
        name: "Perro caliente especial",
        price: "12.500",
        combo: "Combo 15.500",
        description:
          "Salchicha americana, pollo salteado, tocineta, cebolla, queso cheddar, lechuga, salsas y papas chips.",
        image: "/menu-reference/menu-hotdogs-arepas.webp",
      },
      {
        name: "Patacón burguer",
        price: "22.000",
        featured: true,
        description:
          "Doble patacón pintón, guacamole, doble hamburguesa, cebolla, queso rallado, cheddar, maduro, tocineta y suero costeño.",
        image: "/menu-reference/menu-hotdogs-arepas.webp",
      },
      {
        name: "Arepa mixta",
        price: "13.000",
        combo: "Combo 14.000",
        description:
          "Arepa de maíz con carne, pollo, chorizo, proteínas salteadas, queso rallado, salsa de la casa y papas chips.",
        image: "/menu-reference/menu-hotdogs-arepas.webp",
      },
    ],
  },
  {
    id: "especiales",
    label: "Especiales",
    title: "Salchipapas y Lasaña",
    icon: Star,
    items: [
      {
        name: "Salchipapa sencilla",
        price: "10.000",
        description: "Papa seleccionada, salchicha americana, queso cheddar, lechuga y salsas.",
        image: "/menu-reference/menu-salchipapas-lasagna.webp",
      },
      {
        name: "Salchipapa especial",
        price: "15.500",
        description:
          "Papa francesa corte premium, salchicha americana, carne y pollo salteados, chorizo, queso rallado, lechuga, salsas y papas chips.",
        image: "/menu-reference/menu-salchipapas-lasagna.webp",
      },
      {
        name: "Salchipapa súper",
        price: "22.000",
        featured: true,
        description:
          "Papa francesa 200 g, doble salchicha americana, carne y pollo salteados, chorizo santarrosano, queso rallado, lechuga, salsas y recorte de costilla.",
        image: "/menu-reference/menu-salchipapas-lasagna.webp",
      },
      {
        name: "Lasaña mixta",
        price: "17.000",
        description: "Salsa boloñesa, pollo, champiñón, queso y tocineta. Acompañada de pan.",
        image: "/menu-reference/menu-salchipapas-lasagna.webp",
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    title: "Sabores de pizza",
    icon: CoffeeCup,
    items: [
      {
        name: "Hawaiana",
        price: "Personal / Medium / Extralarge",
        description: "Pizza de la casa con masa dorada y mezcla clásica dulce-salada.",
        image: "/menu-reference/menu-pizza.webp",
      },
      {
        name: "Mexicana",
        price: "Personal / Medium / Extralarge",
        description: "Sabor intenso con vegetales, proteína y toque picante.",
        image: "/menu-reference/menu-pizza.webp",
      },
      {
        name: "Pollo con champiñones",
        price: "Personal / Medium / Extralarge",
        description: "Pollo, champiñones y queso fundido sobre masa artesanal.",
        image: "/menu-reference/menu-pizza.webp",
      },
      {
        name: "Especial de BBQ",
        price: "Personal / Medium / Extralarge",
        featured: true,
        description: "Costillas, salsa BBQ, tocineta y queso.",
        image: "/menu-reference/menu-pizza.webp",
      },
    ],
  },
]

function MenuItemCard({ item }: { item: MenuItem }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = item.image && !imageFailed

  return (
    <article className="group relative flex flex-col">
      <div className="relative mb-4 aspect-square w-full">
        <div className="price-sticker absolute -top-2 -right-2 z-20 transition-transform duration-300 group-hover:scale-110">
          {item.price}
        </div>

        {item.featured && (
          <div className="absolute -top-2 -left-2 z-20 rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-foreground shadow-lg">
            Top
          </div>
        )}

        <div className="relative h-full w-full transition-transform duration-500 group-hover:-translate-y-2">
          {showImage ? (
            <div className="relative h-full w-full">
              <Image
                src={item.image!}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_30px_70px_rgba(244,166,42,0.35)]"
                onError={() => setImageFailed(true)}
                style={{ filter: "drop-shadow(0 10px 30px rgba(244, 166, 42, 0.25))" }}
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-[#5f4b19] bg-gradient-to-br from-[#1a1810] to-[#0d0c09]">
              <PizzaSlice className="h-16 w-16 text-[#5f4b19]" />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 text-center">
        <h4 className="text-xl font-black uppercase leading-tight text-[#f7f1d7] transition-colors group-hover:text-primary md:text-2xl">
          {item.name}
        </h4>
        <p className="mt-2 text-sm font-medium leading-6 text-[#d9d2bd]">{item.description}</p>
        {item.combo && (
          <p className="mt-2 text-sm font-black uppercase tracking-wide text-primary">{item.combo}</p>
        )}
      </div>
    </article>
  )
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)
  const activeMenu = useMemo(
    () => menuCategories.find((category) => category.id === activeCategory) ?? menuCategories[0],
    [activeCategory],
  )

  return (
    <section id="menu" className="relative overflow-hidden bg-[#0b0b09] py-20 md:py-28">
      <div className="brush-stroke brush-stroke-left" />
      <div className="brush-stroke brush-stroke-right" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xl font-black uppercase tracking-[0.35em] text-[#f4a62a]">Menú</p>
          <h2 className="mt-3 text-5xl font-black uppercase tracking-tight text-primary sm:text-6xl md:text-7xl">
            Carta callejera
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-[#d9d2bd] md:text-lg">
            Productos con el estilo visual de la carta: fondo negro, trazos amarillos, nombres fuertes y precios directos.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-10 flex gap-4 overflow-x-auto pb-3 md:justify-center">
          {menuCategories.map((category) => {
            const Icon = category.icon
            const isActive = category.id === activeCategory

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-black uppercase tracking-wide transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_0_35px_rgba(251,191,36,0.25)]"
                    : "border-[#4a3a12] bg-[#15130d] text-[#f7f1d7] hover:border-primary hover:text-primary"
                }`}
              >
                <Icon className="h-5 w-5" />
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Active category title */}
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-[#5f4b19] pb-5">
          <h3 className="text-3xl font-black uppercase leading-none text-primary md:text-5xl">
            {activeMenu.title}
          </h3>
          <span className="rounded-sm bg-white px-3 py-1 text-xl font-black text-black shadow-[4px_4px_0_rgba(251,191,36,0.55)]">
            TOP
          </span>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
          {activeMenu.items.map((item) => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
