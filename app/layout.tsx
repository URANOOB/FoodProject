import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://foodiewagon.de"),
  title: {
    default: "The Foodie Wagon | Hamburguesas halal premium y pollo frito en Ingolstadt",
    template: "%s | The Foodie Wagon",
  },
  description:
    "Descubre The Foodie Wagon: tu food truck de hamburguesas halal caseras premium, pollo frito crujiente, currywurst y auténtica comida callejera en Ingolstadt. 100% halal certificado. ¡Haz tu pedido!",
  keywords: [
    "foodie wagon",
    "food truck ingolstadt",
    "hamburguesa halal ingolstadt",
    "fried chicken ingolstadt",
    "halal street food",
    "food truck de hamburguesas",
    "currywurst halal",
    "hamburguesa de ternera halal",
    "hamburguesa de pollo halal",
    "papas fritas ingolstadt",
    "comida rápida halal",
    "street food ingolstadt",
    "food truck bayern",
    "restaurante halal ingolstadt",
    "hamburguesas ingolstadt",
    "chicken wings halal",
    "onion rings",
    "chili cheese nuggets",
    "halal certificado",
    "hamburguesas caseras",
  ],
  authors: [{ name: "The Foodie Wagon" }],
  creator: "The Foodie Wagon",
  publisher: "The Foodie Wagon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "The Foodie Wagon | Hamburguesas halal premium y pollo frito",
    description:
      "Hamburguesas halal caseras premium, pollo frito crujiente y auténtica comida callejera en Ingolstadt. 100% halal certificado.",
    url: "https://foodiewagon.de",
    siteName: "The Foodie Wagon",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/graphics/tasty burger.svg",
        width: 1200,
        height: 630,
        alt: "The Foodie Wagon - Hamburguesas halal premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Foodie Wagon | Hamburguesas halal premium",
    description: "Hamburguesas halal caseras premium y pollo frito en Ingolstadt. 100% halal certificado.",
    images: ["/graphics/tasty burger.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://foodiewagon.de" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
