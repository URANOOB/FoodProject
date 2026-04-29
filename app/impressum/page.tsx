import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "Aviso legal | The Foodie Wagon",
  description: "Información legal y datos de contacto de The Foodie Wagon - FlavorBytes GmbH",
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Aviso legal</h1>
            <p className="text-muted-foreground">Información conforme al § 5 TMG (Ley alemana de telemedios).</p>
          </div>

          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Datos de la empresa</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Razón social:</strong> FlavorBytes GmbH</p>
                <p><strong className="text-foreground">Nombre comercial:</strong> The Foodie Wagon</p>
                <p><strong className="text-foreground">Forma jurídica:</strong> Sociedad de responsabilidad limitada alemana (GmbH)</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Dirección</h2>
              <div className="space-y-1 text-muted-foreground">
                <p>FlavorBytes GmbH</p>
                <p>Am Westpark 7</p>
                <p>85057 Ingolstadt</p>
                <p>Alemania</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Teléfono:</strong>{" "}
                  <a href="tel:+4917622245627" className="text-primary hover:underline">+49 176 22245627</a>
                </p>
                <p>
                  <strong className="text-foreground">Correo electrónico:</strong>{" "}
                  <a href="mailto:flavor.bytes.gmbh@gmail.com" className="text-primary hover:underline">
                    flavor.bytes.gmbh@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Representación</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Gerente:</strong> Sohaib</p>
                <p><strong className="text-foreground">Persona de contacto:</strong> Sohaib</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Registro mercantil</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Tribunal de registro:</strong> Amtsgericht Ingolstadt</p>
                <p><strong className="text-foreground">Número de registro:</strong> HRB [se añadirá posteriormente]</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Identificación fiscal</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">N.º de IVA:</strong> DE [se añadirá posteriormente]</p>
                <p className="text-sm">Número de identificación fiscal conforme al § 27a de la Ley alemana del IVA.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Autorización alimentaria</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Autoridad competente:</strong> Gesundheitsamt Ingolstadt</p>
                <p><strong className="text-foreground">Certificación:</strong> 100% halal certificado</p>
                <p className="text-sm">Registro conforme al Reglamento (CE) n.º 852/2004 sobre higiene alimentaria.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Exención de responsabilidad</h2>
              <div className="space-y-4 text-muted-foreground text-sm">
                <p>
                  Los contenidos de este sitio se han elaborado con el mayor cuidado posible. No obstante, no podemos
                  garantizar su exactitud, integridad o actualidad.
                </p>
                <p>
                  Este sitio puede contener enlaces a páginas externas de terceros. No tenemos influencia sobre esos
                  contenidos; por tanto, la responsabilidad corresponde al proveedor u operador correspondiente.
                </p>
                <p>
                  Los contenidos y obras creados por los operadores de esta página están sujetos a la legislación alemana
                  de derechos de autor. Cualquier reproducción o uso fuera de los límites legales requiere autorización por escrito.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Resolución de disputas</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  La Comisión Europea ofrece una plataforma de resolución de litigios en línea:
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>No estamos obligados ni dispuestos a participar en procedimientos de resolución de disputas ante una junta arbitral de consumo.</p>
              </div>
            </section>

            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Más información</h2>
              <div className="space-y-2">
                <Link href="/datenschutz" className="block text-primary hover:underline">→ Protección de datos</Link>
                <Link href="/agb" className="block text-primary hover:underline">→ Términos y condiciones</Link>
              </div>
            </section>

            <div className="text-sm text-muted-foreground text-center pt-8 border-t border-border">
              <p>Actualizado: diciembre de 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
