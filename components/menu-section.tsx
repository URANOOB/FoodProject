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
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Doble o mixta",
        price: "16.000",
        combo: "Combo 19.000",
        featured: true,
        description:
          "Doble carne parrillera o pollo, tocineta, doble queso cheddar, verduras, salsas y papas chips.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Especial",
        price: "15.000",
        combo: "Combo 18.000",
        description:
          "Carne o pollo, tocineta, huevo frito, chorizo, queso cheddar, verduras, salsas y papas chips.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Sandwich mixto",
        price: "13.000",
        combo: "Combo 19.000",
        description: "Pan árabe con carne y pollo salteados, pimentones, queso cheddar, verduras y salsas.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
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
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Churrasco",
        price: "23.000",
        featured: true,
        description: "Papa francesa premium, churrasco de buen corte y ensalada dulce.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Mazorcada",
        price: "16.000",
        description:
          "Base de maíz bañada con salsa, carne y pollo salteados, lechuga, tomate, queso rallado, papas chips y chorizo.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
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
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Patacón mixto",
        price: "16.000",
        description:
          "Patacón maduro con guacamole, carne y pollo salteados, queso rallado, chorizo, lechuga, salsas y papas chips.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Costillas BBQ",
        price: "22.000",
        description: "Costillas ahumadas bañadas en salsa BBQ, papa francesa premium y ensalada dulce.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
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
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Perro caliente especial",
        price: "12.500",
        combo: "Combo 15.500",
        description:
          "Salchicha americana, pollo salteado, tocineta, cebolla, queso cheddar, lechuga, salsas y papas chips.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Patacón burguer",
        price: "22.000",
        featured: true,
        description:
          "Doble patacón pintón, guacamole, doble hamburguesa, cebolla, queso rallado, cheddar, maduro, tocineta y suero costeño.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Arepa mixta",
        price: "13.000",
        combo: "Combo 14.000",
        description:
          "Arepa de maíz con carne, pollo, chorizo, proteínas salteadas, queso rallado, salsa de la casa y papas chips.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
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
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Salchipapa especial",
        price: "15.500",
        description:
          "Papa francesa corte premium, salchicha americana, carne y pollo salteados, chorizo, queso rallado, lechuga, salsas y papas chips.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Salchipapa súper",
        price: "22.000",
        featured: true,
        description:
          "Papa francesa 200 g, doble salchicha americana, carne y pollo salteados, chorizo santarrosano, queso rallado, lechuga, salsas y recorte de costilla.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Lasaña mixta",
        price: "17.000",
        description: "Salsa boloñesa, pollo, champiñón, queso y tocineta. Acompañada de pan.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
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
        price: "Personal",
        description: "Pizza de la casa con masa dorada y mezcla clásica dulce-salada.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Mexicana",
        price: "Medium",
        description: "Sabor intenso con vegetales, proteína y toque picante.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
      {
        name: "Pollo con champiñones",
        price: "Extralarge",
        description: "Pollo, champiñones y queso fundido sobre masa artesanal.",
        image: "/graphics/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png",
      },
    ],
  },
]

function MenuItemCard({ item }: { item: MenuItem }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = item.image && !imageFailed

  return (
    <article className="group relative flex flex-col bg-card/30 p-4 rounded-3xl border border-white/5 transition-all hover:bg-card/50 hover:border-primary/20">
      <div className="relative mb-6 aspect-square w-full">
        {item.featured && (
          <div className="absolute -top-2 -left-2 z-20 rounded-full bg-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary-foreground shadow-xl">
            TOP CHOICE
          </div>
        )}

        <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
          {showImage ? (
            <div className="relative h-full w-full">
              <Image
                src={item.image!}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                onError={() => setImageFailed(true)}
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-secondary/50">
              <PizzaSlice className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col text-left">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h4 className="text-2xl font-black uppercase leading-none tracking-tight text-foreground transition-colors group-hover:text-primary">
            {item.name}
          </h4>
          <span className="shrink-0 text-lg font-black text-primary">
            ${item.price}
          </span>
        </div>
        <p className="text-sm font-medium leading-relaxed text-muted-foreground mb-4">
          {item.description}
        </p>
        {item.combo && (
          <div className="mt-auto inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20">
            <Star className="h-3 w-3" />
            {item.combo}
          </div>
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
    <section id="menu" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-2">Nuestro Menú</p>
              <h2 className="text-7xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-8xl md:text-9xl">
                CARTA <span className="text-primary italic">CALLEJERA</span>
              </h2>
            </div>
            <p className="max-w-md text-sm font-medium leading-relaxed text-muted-foreground md:text-right">
              Sabor auténtico de barrio elevado a estándares premium. Cada plato es una declaración de intenciones.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="mb-16 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {menuCategories.map((category) => {
            const Icon = category.icon
            const isActive = category.id === activeCategory

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex shrink-0 items-center gap-3 rounded-full border px-8 py-4 text-xs font-black uppercase tracking-widest transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/20"
                    : "border-border bg-card/50 text-foreground hover:border-primary/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Active category title */}
        <div className="mb-12 flex items-center justify-between">
          <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground sm:text-6xl md:text-7xl">
            {activeMenu.title}
          </h3>
          <div className="h-px flex-1 mx-8 bg-border hidden sm:block"></div>
          <span className="text-xs font-black uppercase tracking-widest text-primary">
            {activeMenu.items.length} PLATOS
          </span>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {activeMenu.items.map((item) => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
