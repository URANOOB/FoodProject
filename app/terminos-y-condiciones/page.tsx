import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de ${SITE_CONFIG.name} S.A.S.`,
}

export default function TerminosPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Términos y condiciones</h1>
            <p className="text-muted-foreground">{SITE_CONFIG.name} S.A.S.</p>
          </div>

          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Ámbito de aplicación</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Estos términos rigen la relación comercial entre {SITE_CONFIG.name} S.A.S. y sus clientes para la venta de comidas y bebidas en el local o en eventos de catering.
                </p>
                <p>Cualquier condición distinta del cliente solo será válida si la aceptamos expresamente por escrito.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Celebración del contrato</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>El pedido del cliente en el local constituye una oferta vinculante de compra.</p>
                <p>El contrato se perfecciona cuando aceptamos el pedido, incluso mediante la preparación y entrega de los productos.</p>
                <p>Para eventos o catering, la confirmación se hace por escrito, correo electrónico o WhatsApp.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Precios y pago</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Aplican los precios publicados o comunicados el día del pedido. Todos los precios están en pesos colombianos (COP) e incluyen IVA cuando corresponda.</p>
                <p>Aceptamos efectivo, tarjeta débito o crédito y transferencia electrónica (Nequi, Daviplata, PSE).</p>
                <p>En servicios de catering pueden acordarse condiciones especiales, incluyendo un anticipo al confirmar la reserva.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Productos y calidad</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Preparamos nuestros productos al momento, con ingredientes frescos y conforme a las normas sanitarias vigentes en Colombia (Resolución 2674 de 2013 del INVIMA).</p>
                <p>Las imágenes y descripciones de la carta son de referencia y pueden diferir ligeramente del producto real en presentación o tamaño.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Alérgenos e intolerancias</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>La información sobre ingredientes y posibles alérgenos está disponible bajo solicitud al momento del pedido.</p>
                <p>El cliente debe informarnos antes del pedido si tiene alergias o intolerancias específicas.</p>
                <p>Aunque trabajamos con cuidado, no podemos garantizar la ausencia total de trazas o contaminación cruzada.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Horario y ubicación</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Atendemos todos los días en {SITE_CONFIG.contact.address}, {SITE_CONFIG.contact.city}, de {SITE_CONFIG.openingHours.hours.replace(' PM', '').replace(' — ', ' a ')} h.</p>
                <p>Podemos modificar horarios o cerrar temporalmente por mantenimiento, eventos o motivos operativos, avisando con anticipación por nuestras redes.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Catering y eventos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Los servicios de catering y eventos se acuerdan de manera individual con cada cliente.</p>
                <p>Las solicitudes deben realizarse con al menos 7 días de antelación.</p>
                <p>En caso de cancelación con menos de 48 horas de aviso, podrán aplicarse cargos de hasta el 50% del valor del servicio.</p>
                <p>El cliente debe asegurar acceso al lugar, espacio suficiente y, cuando corresponda, conexiones de electricidad y agua.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Reclamaciones y garantía</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Cualquier reclamación debe comunicarse de inmediato y, a más tardar, dentro de las 2 horas posteriores a la entrega.</p>
                <p>Si la reclamación procede, podremos sustituir el producto o reembolsar el valor pagado.</p>
                <p>No respondemos por defectos derivados de manipulación o conservación inadecuada después de la entrega.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Responsabilidad</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Respondemos por daños causados por dolo o culpa grave en la prestación del servicio.</p>
                <p>En caso de culpa leve, la responsabilidad se limita al valor del pedido o servicio contratado.</p>
                <p>Lo anterior no limita los derechos del consumidor previstos en la Ley 1480 de 2011 (Estatuto del Consumidor).</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Tratamiento de datos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Tratamos los datos personales del cliente conforme a la Ley 1581 de 2012 y nuestra política de privacidad.</p>
                <p>
                  Más detalles en nuestra{" "}
                  <Link href="/politica-de-privacidad" className="text-primary hover:underline">política de privacidad</Link>.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Disposiciones finales</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Esta relación se rige por la legislación de la República de Colombia.</p>
                <p>Si alguna disposición fuera declarada inválida, las demás conservarán plena vigencia.</p>
                <p>Para cualquier controversia, las partes podrán acudir al sistema de protección al consumidor de la Superintendencia de Industria y Comercio.</p>
              </div>
            </section>

            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">¿Preguntas sobre estos términos?</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Contáctanos:</p>
                <p><strong className="text-foreground">Teléfono:</strong> <a href={SITE_CONFIG.links.phone} className="text-primary hover:underline">{SITE_CONFIG.contact.phone}</a></p>
                <p><strong className="text-foreground">Correo:</strong> <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-primary hover:underline">{SITE_CONFIG.contact.email}</a></p>
              </div>
            </section>

            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Más información</h2>
              <div className="space-y-2">
                <Link href="/aviso-legal" className="block text-primary hover:underline">→ Aviso legal</Link>
                <Link href="/politica-de-privacidad" className="block text-primary hover:underline">→ Política de privacidad</Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
