import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata = {
  title: "Política de privacidad",
  description: `Política de tratamiento de datos personales de ${SITE_CONFIG.name} S.A.S.`,
}

export default function PrivacidadPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Política de privacidad</h1>
            <p className="text-muted-foreground">Tratamiento de datos personales — Ley 1581 de 2012.</p>
          </div>

          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable del tratamiento</h2>
              <div className="space-y-1 text-muted-foreground text-sm">
                <p>{SITE_CONFIG.name} S.A.S.</p>
                <p>{SITE_CONFIG.contact.fullAddress}</p>
                <p>
                  Correo:{" "}
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-primary hover:underline">
                    {SITE_CONFIG.contact.email}
                  </a>
                </p>
                <p>
                  Teléfono:{" "}
                  <a href={SITE_CONFIG.links.phone} className="text-primary hover:underline">{SITE_CONFIG.contact.phone}</a>
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Datos que podemos tratar</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Podemos tratar datos de contacto, datos de pedidos y datos técnicos generados al visitar el sitio.</p>
                <p>Esto incluye nombre, teléfono, correo electrónico, contenido de mensajes, dirección IP, fecha y hora de acceso y datos básicos del navegador.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidades del tratamiento</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Usamos los datos para responder consultas, gestionar pedidos, coordinar servicios de catering, cumplir obligaciones legales y mejorar la seguridad del sitio.</p>
                <p>Los datos no se venden ni se utilizan para fines ajenos a la actividad de {SITE_CONFIG.name}.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Base legal</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>El tratamiento se basa en la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes sobre protección de datos personales en Colombia.</p>
                <p>Cuando el tratamiento dependa de tu autorización, podrás revocarla en cualquier momento con efecto futuro.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contacto por teléfono, correo o redes sociales</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Si nos contactas, almacenaremos la información necesaria para responder tu solicitud y darle seguimiento.</p>
                <p>Los enlaces a Instagram u otras plataformas externas se rigen por las políticas de privacidad de cada proveedor.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Analítica y servicios externos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>El sitio puede usar Vercel Analytics para obtener métricas técnicas y agregadas sobre el uso de la página, sin identificar usuarios individuales.</p>
                <p>También se cargan recursos públicos como mapas (OpenStreetMap), imágenes de la carta y archivos de manifest.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Conservación de datos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Conservamos los datos solo durante el tiempo necesario para la finalidad correspondiente o mientras exista una obligación legal.</p>
                <p>Los datos de comunicación se eliminan cuando ya no son necesarios, salvo que deban conservarse por motivos contractuales o legales.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Destinatarios</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Solo compartimos datos cuando sea necesario para prestar el servicio, cumplir obligaciones legales o trabajar con proveedores técnicos autorizados.</p>
                <p>Estos proveedores están obligados contractualmente a tratar los datos conforme a las normas aplicables.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Tus derechos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Tienes derecho a conocer, actualizar, rectificar y suprimir tus datos personales, así como a revocar la autorización de tratamiento.</p>
                <p>También puedes presentar quejas ante la Superintendencia de Industria y Comercio (SIC) si consideras que tus derechos han sido vulnerados.</p>
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
                <p>Podemos actualizar esta política para reflejar cambios legales, técnicos u operativos. La versión vigente estará siempre disponible en esta página.</p>
              </div>
            </section>

            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Más información</h2>
              <div className="space-y-2">
                <Link href="/aviso-legal" className="block text-primary hover:underline">→ Aviso legal</Link>
                <Link href="/terminos-y-condiciones" className="block text-primary hover:underline">→ Términos y condiciones</Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
