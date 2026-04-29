import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "iconoir-react"

export const metadata = {
  title: "Términos y condiciones | The Foodie Wagon",
  description: "Términos y condiciones de The Foodie Wagon - FlavorBytes GmbH",
}

export default function AGBPage() {
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
            <p className="text-muted-foreground">FlavorBytes GmbH - The Foodie Wagon</p>
          </div>

          <div className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none space-y-8">
            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 1 Ámbito de aplicación</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Estos términos y condiciones se aplican a todos los contratos celebrados entre FlavorBytes GmbH,
                  que opera como The Foodie Wagon, y sus clientes para la venta de comidas y bebidas.
                </p>
                <p>Las condiciones divergentes del cliente solo serán válidas si las aceptamos expresamente por escrito.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 2 Celebración del contrato</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>El pedido realizado por el cliente en el food truck constituye una oferta vinculante de compra.</p>
                <p>El contrato se perfecciona cuando aceptamos el pedido, también mediante la preparación y entrega de los productos.</p>
                <p>Para eventos o catering, el contrato se confirma por escrito, por correo electrónico o verbalmente.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 3 Precios y pago</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Se aplican los precios publicados o comunicados el día del pedido. Todos los precios están en euros e incluyen IVA.</p>
                <p>El pago se realiza normalmente en efectivo al recoger el pedido. También se acepta pago con tarjeta cuando esté disponible.</p>
                <p>En servicios de catering pueden acordarse condiciones de pago diferentes, incluida una señal al confirmar el pedido.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 4 Productos y calidad</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Preparamos nuestros productos frescos y conforme a las normas alimentarias aplicables.</p>
                <p>Todos los productos cárnicos son 100% halal certificados y se preparan según las directrices halal.</p>
                <p>Las imágenes y descripciones pueden diferir ligeramente del producto real en tamaño, color o presentación.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 5 Alérgenos e intolerancias</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>La información sobre alérgenos e ingredientes está disponible bajo solicitud.</p>
                <p>El cliente debe informarnos antes de pedir si tiene alergias o intolerancias.</p>
                <p>Aunque trabajamos con cuidado, no podemos garantizar la ausencia total de trazas o contaminación cruzada.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 6 Horario y ubicación</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>El food truck abre habitualmente los sábados en Am Westpark 7, 85057 Ingolstadt, de 11:00 a 20:00 h.</p>
                <p>Podemos modificar horarios o ubicación por clima, eventos o necesidades operativas, avisando cuando sea posible.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 7 Catering y eventos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Los servicios de catering y eventos privados se acuerdan de forma individual.</p>
                <p>Las solicitudes deben realizarse preferiblemente con al menos 7 días de antelación.</p>
                <p>En caso de cancelación tardía, pueden aplicarse cargos de hasta el 50% del valor del encargo.</p>
                <p>El cliente debe asegurar acceso adecuado, espacio suficiente y, si corresponde, conexiones de electricidad y agua.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 8 Reclamaciones y garantía</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Las reclamaciones deben comunicarse inmediatamente, como máximo dentro de las 2 horas posteriores a la entrega.</p>
                <p>Si la reclamación procede, podremos sustituir el producto o reembolsar el precio de compra.</p>
                <p>No asumimos responsabilidad por defectos derivados de manipulación o almacenamiento incorrectos después de la entrega.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 9 Responsabilidad</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Respondemos sin limitación por daños a la vida, el cuerpo o la salud, así como por dolo o negligencia grave.</p>
                <p>En caso de negligencia leve, la responsabilidad se limita a la infracción de obligaciones contractuales esenciales.</p>
                <p>La responsabilidad conforme a la ley de responsabilidad por productos defectuosos permanece intacta.</p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 10 Protección de datos</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Tratamos datos personales únicamente para gestionar pedidos, servicios y comunicaciones necesarias.</p>
                <p>
                  Puedes encontrar más información en nuestra{" "}
                  <Link href="/datenschutz" className="text-primary hover:underline">política de protección de datos</Link>.
                </p>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">§ 11 Disposiciones finales</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Se aplica la legislación de la República Federal de Alemania, excluyendo la Convención de Viena sobre compraventa internacional.</p>
                <p>Si alguna disposición fuera inválida, las demás disposiciones seguirán siendo válidas.</p>
              </div>
            </section>

            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">¿Preguntas sobre estos términos?</h2>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Contáctanos si tienes alguna pregunta:</p>
                <p><strong className="text-foreground">Teléfono:</strong> <a href="tel:+4917622245627" className="text-primary hover:underline">+49 176 22245627</a></p>
                <p><strong className="text-foreground">Correo electrónico:</strong> <a href="mailto:flavor.bytes.gmbh@gmail.com" className="text-primary hover:underline">flavor.bytes.gmbh@gmail.com</a></p>
              </div>
            </section>

            <section className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Más información</h2>
              <div className="space-y-2">
                <Link href="/impressum" className="block text-primary hover:underline">→ Aviso legal</Link>
                <Link href="/datenschutz" className="block text-primary hover:underline">→ Protección de datos</Link>
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
