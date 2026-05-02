import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { SpotSection } from "@/components/spot-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { SITE_CONFIG } from "@/lib/constants"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${SITE_CONFIG.url}/#restaurant`,
        name: SITE_CONFIG.name,
        description:
          "Comida callejera en Usaquén, Bogotá: hamburguesas, perros calientes, salchipapas, parrilla y pizza artesanal.",
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.contact.phone,
        servesCuisine: ["Comida callejera", "Hamburguesas", "Pizza", "Parrilla", "Colombiana"],
        priceRange: "$$",
        logo: `${SITE_CONFIG.url}/graphics/logo.png`,
        image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.contact.address,
          addressLocality: SITE_CONFIG.contact.city,
          addressRegion: "Bogotá D.C.",
          addressCountry: "CO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.location.lat.toString(),
          longitude: SITE_CONFIG.location.lng.toString(),
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
        "@id": `${SITE_CONFIG.url}/#localbusiness`,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        slogan: "Donde la calle se vuelve sabor",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: "Comida callejera con sabor en Bogotá.",
        publisher: {
          "@id": `${SITE_CONFIG.url}/#restaurant`,
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
        <SpotSection />
        <LocationSection />
        <ContactSection />
        <Footer />
        <StickyCTA />
      </main>
    </>
  )
}
