import { MapPin, Clock, Calendar } from "iconoir-react"

export function LocationSection() {
  return (
    <section id="location" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-6 flex items-center justify-center gap-4">
            <img src="/graphics/truck.svg" alt="Food truck" className="h-16 w-16 object-contain" />
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">UBICACIÓN</h2>
            <img
              src="/graphics/truck.svg"
              alt="Food truck"
              className="h-16 w-16 scale-x-[-1] object-contain"
            />
          </div>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Encuéntranos en pleno corazón de Usaquén, Bogotá. Comida callejera con sabor, todos los días.
          </p>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-[#5f4b19] bg-secondary lg:aspect-square">
            <iframe
              title="Mapa de ubicación - Usaquén, Bogotá"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.040%2C4.690%2C-74.020%2C4.710&amp;layer=mapnik&amp;marker=4.6973%2C-74.0306"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">Local principal</h3>
                  <p className="text-lg text-muted-foreground">
                    Carrera 6A # 117-15
                    <br />
                    Usaquén, Bogotá D.C.
                    <br />
                    Colombia
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">Abierto todos los días</h3>
                  <p className="text-muted-foreground">
                    Pásate cuando quieras, no necesitas reservar para una salchipapa bien servida.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">Horario</h3>
                  <p className="text-muted-foreground">Lunes a domingo: 12:00 - 22:30 h</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-primary/30 bg-primary/10 p-6">
              <h4 className="mb-2 text-xl font-bold text-primary">Eventos, fiestas y catering</h4>
              <p className="text-foreground">
                ¿Cumpleaños, oficina o festival? Llevamos la parrilla a tu evento. Escríbenos y armamos un combo a tu medida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
