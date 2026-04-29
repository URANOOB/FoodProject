import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://dominioskribe.co/#restaurant",
        name: "Döminiös K·Ribe",
        description:
          "Comida callejera en Usaquén, Bogotá: hamburguesas, perros calientes, salchipapas, parrilla y pizza artesanal.",
        url: "https://dominioskribe.co",
        telephone: "+57-310-555-4321",
        servesCuisine: ["Comida callejera", "Hamburguesas", "Pizza", "Parrilla", "Colombiana"],
        priceRange: "$$",
        logo: "https://dominioskribe.co/graphics/dominios-kribe-logo.svg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Carrera 6A # 117-15",
          addressLocality: "Bogotá",
          addressRegion: "Cundinamarca",
          addressCountry: "CO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "4.6973",
          longitude: "-74.0306",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "12:00",
            closes: "22:30",
          },
        ],
        paymentAccepted: "Efectivo, tarjeta, transferencia",
        currenciesAccepted: "COP",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://dominioskribe.co/#localbusiness",
        name: "Döminiös K·Ribe",
        description: "Carta callejera con carácter en Usaquén, Bogotá.",
        slogan: "Donde la calle se vuelve sabor",
      },
      {
        "@type": "WebSite",
        "@id": "https://dominioskribe.co/#website",
        url: "https://dominioskribe.co",
        name: "Döminiös K·Ribe",
        description: "Comida callejera con sabor en Bogotá.",
        publisher: {
          "@id": "https://dominioskribe.co/#restaurant",
        },
        inLanguage: "es-CO",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <MenuSection />
        <LocationSection />
        <ContactSection />
        <Footer />
        <StickyCTA />
      </main>
    </>
  )
}
