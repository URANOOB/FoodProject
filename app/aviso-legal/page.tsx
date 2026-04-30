import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "Aviso legal | Döminiös K·Ribe",
  description: "Información legal y datos de contacto de Döminiös K·Ribe S.A.S.",
}

export default function AvisoLegalPage() {
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
            <p className="text-muted-foreground">Información legal y contacto de acuerdo con la normativa colombiana.</p>
          </div>

          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Datos de la empresa</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Razón social:</strong> Döminiös K·Ribe S.A.S.</p>
                <p><strong className="text-foreground">Nombre comercial:</strong> Döminiös K·Ribe</p>
                <p><strong className="text-foreground">NIT:</strong> [Pendiente de asignación]</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ubicación</h2>
              <div className="space-y-1 text-muted-foreground">
                <p>Carrera 6A # 117-15</p>
                <p>Usaquén, Bogotá D.C.</p>
                <p>Colombia</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Teléfono:</strong>{" "}
                  <a href="tel:+573105554321" className="text-primary hover:underline">+57 310 555 4321</a>
                </p>
                <p>
                  <strong className="text-foreground">Correo electrónico:</strong>{" "}
                  <a href="mailto:contacto@dominioskribe.co" className="text-primary hover:underline">
                    contacto@dominioskribe.co
                  </a>
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Representación</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Representante legal:</strong> Andrés Ramírez</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Propiedad Intelectual</h2>
              <div className="space-y-4 text-muted-foreground text-sm">
                <p>
                  Los contenidos de este sitio, incluyendo textos, logotipos, imágenes y diseño, son propiedad de Döminiös K·Ribe S.A.S. o se utilizan bajo licencia.
                </p>
                <p>
                  Queda prohibida la reproducción total o parcial de cualquier contenido sin la autorización previa y por escrito de los titulares.
                </p>
              </div>
            </section>

            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Más información</h2>
              <div className="space-y-2">
                <Link href="/politica-de-privacidad" className="block text-primary hover:underline">→ Protección de datos</Link>
                <Link href="/terminos-y-condiciones" className="block text-primary hover:underline">→ Términos y condiciones</Link>
              </div>
            </section>

            <div className="text-sm text-muted-foreground text-center pt-8 border-t border-border">
              <p>Actualizado: abril de 2026</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
