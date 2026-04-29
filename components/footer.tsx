import Link from "next/link"
import { Instagram, Phone, Mail, MapPin } from "iconoir-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/graphics/dominios-kribe-logo.svg" alt="Döminiös K·Ribe" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-primary">Döminiös K·Ribe</h3>
                <p className="text-xs tracking-widest text-muted-foreground">CARTA CALLEJERA · BOGOTÁ</p>
              </div>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">
              Comida callejera con carácter en Usaquén: hamburguesas, perros, salchipapas, parrilla y pizza.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <img src="/graphics/truck.svg" alt="Food truck" className="h-8 w-8 object-contain" />
              <span className="text-xs font-medium">Sabor de barrio, ingredientes frescos</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold tracking-wide text-foreground">ENLACES RÁPIDOS</h4>
            <nav className="space-y-2">
              <Link href="#menu" className="block text-muted-foreground transition-colors hover:text-primary">
                Carta
              </Link>
              <Link href="#location" className="block text-muted-foreground transition-colors hover:text-primary">
                Ubicación
              </Link>
              <Link href="#contact" className="block text-muted-foreground transition-colors hover:text-primary">
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-bold tracking-wide text-foreground">CONTACTO</h4>
            <div className="space-y-3">
              <a
                href="tel:+573105554321"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +57 310 555 4321
              </a>
              <a
                href="mailto:contacto@dominioskribe.co"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                contacto@dominioskribe.co
              </a>
              <p className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                Carrera 6A # 117-15, Usaquén, Bogotá
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="mb-4 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Döminiös K·Ribe S.A.S. Todos los derechos reservados.</p>
              <span className="hidden md:inline">•</span>
              <Link href="/aviso-legal" className="transition-colors hover:text-primary">
                Aviso legal
              </Link>
              <span>•</span>
              <Link href="/politica-de-privacidad" className="transition-colors hover:text-primary">
                Política de privacidad
              </Link>
              <span>•</span>
              <Link href="/terminos-y-condiciones" className="transition-colors hover:text-primary">
                Términos y condiciones
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/dominioskribe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-all hover:bg-secondary/80 hover:text-primary"
                aria-label="Instagram - Döminiös K·Ribe"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
