import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "Protección de datos | The Foodie Wagon",
  description: "Política de protección de datos de The Foodie Wagon - FlavorBytes GmbH",
}

export default function DatenschutzPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Protección de datos</h1>
            <p className="text-muted-foreground">Política de privacidad de FlavorBytes GmbH - The Foodie Wagon.</p>
          </div>

          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable del tratamiento</h2>
              <div className="space-y-1 text-muted-foreground text-sm">
                <p>FlavorBytes GmbH</p>
                <p>The Foodie Wagon</p>
                <p>Am Westpark 7, 85057 Ingolstadt, Alemania</p>
                <p>
                  Correo electrónico:{" "}
                  <a href="mailto:flavor.bytes.gmbh@gmail.com" className="text-primary hover:underline">
                    flavor.bytes.gmbh@gmail.com
                  </a>
                </p>
                <p>
                  Teléfono:{" "}
                  <a href="tel:+4917622245627" className="text-primary hover:underline">+49 176 22245627</a>
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Datos que podemos tratar</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Podemos tratar datos de contacto, datos de pedidos, datos de comunicación y datos técnicos generados al visitar el sitio web.</p>
                <p>Esto puede incluir nombre, teléfono, correo electrónico, contenido de mensajes, dirección IP, fecha y hora de acceso y datos básicos del navegador.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidades del tratamiento</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Usamos los datos para responder consultas, gestionar pedidos, preparar servicios de catering, cumplir obligaciones legales y mejorar la seguridad del sitio.</p>
                <p>Los datos no se venden ni se utilizan para fines ajenos a la actividad de The Foodie Wagon.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Base jurídica</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>El tratamiento se basa en el art. 6 del RGPD: ejecución contractual, medidas precontractuales, cumplimiento legal, consentimiento o interés legítimo.</p>
                <p>Cuando el tratamiento dependa de tu consentimiento, podrás retirarlo en cualquier momento con efecto futuro.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contacto por teléfono, correo o redes sociales</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Si nos contactas, almacenaremos la información necesaria para responder tu solicitud y realizar el seguimiento correspondiente.</p>
                <p>Los enlaces externos, como Instagram, están sujetos a las políticas de privacidad de sus respectivos proveedores.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Analítica y servicios externos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>El sitio puede usar Vercel Analytics para obtener métricas técnicas y agregadas sobre el uso de la página.</p>
                <p>También se cargan recursos públicos del propio sitio, como imágenes del menú, logotipos y archivos de manifest.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Conservación de datos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Conservamos los datos solo durante el tiempo necesario para la finalidad correspondiente o mientras exista una obligación legal de conservación.</p>
                <p>Los datos de comunicación se eliminan cuando ya no son necesarios, salvo que deban conservarse por motivos contractuales o legales.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Destinatarios</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Solo compartimos datos cuando sea necesario para prestar el servicio, cumplir obligaciones legales o trabajar con proveedores técnicos autorizados.</p>
                <p>Estos proveedores están obligados a tratar los datos conforme a las normas aplicables de protección de datos.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Tus derechos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Tienes derecho de acceso, rectificación, supresión, limitación del tratamiento, oposición y portabilidad de tus datos.</p>
                <p>También puedes presentar una reclamación ante una autoridad de control competente en materia de protección de datos.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Seguridad</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Aplicamos medidas técnicas y organizativas razonables para proteger los datos contra pérdida, uso indebido o acceso no autorizado.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Actualizaciones</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Podemos actualizar esta política para reflejar cambios legales, técnicos u operativos. La versión vigente estará disponible en esta página.</p>
              </div>
            </section>

            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Más información</h2>
              <div className="space-y-2">
                <Link href="/impressum" className="block text-primary hover:underline">→ Aviso legal</Link>
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
