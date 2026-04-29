import { Phone, Mail, MapPin, Instagram } from "iconoir-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">CONTACTO</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            ¿Quieres pedir un combo, reservar para un evento o solo decir hola? Escríbenos.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border-2 border-border bg-secondary p-8 text-center transition-colors hover:border-primary">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <Phone className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Teléfono</p>
              <a
                href="tel:+573105554321"
                className="text-2xl font-black text-primary transition-colors hover:text-primary/80 md:text-3xl"
              >
                +57 310 555 4321
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Llámanos directamente</p>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border-2 border-border bg-secondary p-8 text-center transition-colors hover:border-primary">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Correo electrónico</p>
              <a
                href="mailto:contacto@dominioskribe.co"
                className="break-all text-lg font-bold text-primary transition-colors hover:text-primary/80 md:text-xl"
              >
                contacto@dominioskribe.co
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Escríbenos un correo</p>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border-2 border-border bg-secondary p-8 text-center transition-colors hover:border-primary">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <Instagram className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Instagram</p>
              <a
                href="https://www.instagram.com/dominioskribe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-primary transition-colors hover:text-primary/80 md:text-xl"
              >
                @dominioskribe
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Síguenos en Instagram</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-lg border-2 border-primary/30 bg-primary/10 p-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <MapPin className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Visítanos</h3>
          </div>
          <p className="mb-2 text-lg text-foreground">
            <strong className="text-primary">Todos los días</strong> de 12:00 a 22:30 h
          </p>
          <p className="text-muted-foreground">Carrera 6A # 117-15, Usaquén, Bogotá</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Atención al cliente: <strong className="text-foreground">Andrés Ramírez</strong> (Döminiös K·Ribe S.A.S.)
          </p>
        </div>
      </div>
    </section>
  )
}
