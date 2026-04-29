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
        "@id": "https://foodiewagon.de/#restaurant",
        name: "The Foodie Wagon",
        description:
          "Food truck de hamburguesas halal premium en Ingolstadt: carne de ternera casera, pollo frito, currywurst y auténtica comida callejera.",
        url: "https://foodiewagon.de",
        telephone: "+49-XXX-XXXXXXX",
        servesCuisine: ["Hamburguesas", "Halal", "Comida callejera", "Comida rápida", "Americana", "Alemana"],
        priceRange: "€€",
        image: "https://foodiewagon.de/graphics/tasty burger.svg",
        logo: "https://foodiewagon.de/graphics/fooiewagen logo.svg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ingolstadt",
          addressRegion: "Baviera",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "48.7665",
          longitude: "11.4257",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "11:00",
            closes: "20:00",
          },
        ],
        paymentAccepted: "Efectivo, tarjeta de crédito",
        currenciesAccepted: "EUR",
      },
      {
        "@type": "FoodEstablishment",
        "@id": "https://foodiewagon.de/#foodestablishment",
        name: "The Foodie Wagon",
        hasMenu: {
          "@type": "Menu",
          hasMenuSection: [
            {
              "@type": "MenuSection",
              name: "Hamburguesas de ternera",
              description: "Carne de ternera casera de 140 g, 100% halal",
              hasMenuItem: [
                {
                  "@type": "MenuItem",
                  name: "Cheesy Buffalo",
                  description:
                    "Pan brioche, carne de ternera de 140 g, queso, salsa de hamburguesa, pepinillo, cebolla, tomate y lechuga",
                  offers: {
                    "@type": "Offer",
                    price: "10.50",
                    priceCurrency: "EUR",
                  },
                  suitableForDiet: "https://schema.org/HalalDiet",
                },
                {
                  "@type": "MenuItem",
                  name: "Angry Bull",
                  description: "Pan brioche, carne de ternera de 140 g, queso, salsa chili cheese y jalapeño",
                  offers: {
                    "@type": "Offer",
                    price: "12.00",
                    priceCurrency: "EUR",
                  },
                  suitableForDiet: "https://schema.org/HalalDiet",
                },
              ],
            },
            {
              "@type": "MenuSection",
              name: "Hamburguesas de pollo",
              description: "Tiras de pollo crujientes, 100% halal",
              hasMenuItem: [
                {
                  "@type": "MenuItem",
                  name: "Crunchy Chicken",
                  description: "Pan brioche, tiras de pollo, queso, salsa de hamburguesa y lechuga",
                  offers: {
                    "@type": "Offer",
                    price: "8.50",
                    priceCurrency: "EUR",
                  },
                  suitableForDiet: "https://schema.org/HalalDiet",
                },
              ],
            },
            {
              "@type": "MenuSection",
              name: "Pollo frito",
              description: "Pollo frito crujiente: alitas y tiras",
              hasMenuItem: [
                {
                  "@type": "MenuItem",
                  name: "Alitas de pollo",
                  description: "Alitas de pollo crujientes: 6, 10 o 20 unidades",
                  offers: {
                    "@type": "Offer",
                    price: "7.50",
                    priceCurrency: "EUR",
                  },
                  suitableForDiet: "https://schema.org/HalalDiet",
                },
              ],
            },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://foodiewagon.de/#localbusiness",
        name: "The Foodie Wagon",
        description: "Food truck móvil de hamburguesas halal y comida callejera en Ingolstadt",
        slogan: "Donde el sabor sale a la carretera",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certificación halal",
          name: "100% halal certificado",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://foodiewagon.de/#website",
        url: "https://foodiewagon.de",
        name: "The Foodie Wagon",
        description: "Hamburguesas halal premium y comida callejera en Ingolstadt",
        publisher: {
          "@id": "https://foodiewagon.de/#restaurant",
        },
        inLanguage: "es-ES",
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
