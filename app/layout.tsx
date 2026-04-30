import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://dominioskribe.co"),
  title: {
    default: "Döminiös K·Ribe | Comida callejera con sabor en Usaquén, Bogotá",
    template: "%s | Döminiös K·Ribe",
  },
  description:
    "Döminiös K·Ribe: hamburguesas, perros calientes, salchipapas, parrilla y pizza artesanal en Usaquén, Bogotá. Carta callejera con ingredientes frescos.",
  keywords: [
    "döminiös k-ribe",
    "comida callejera bogotá",
    "hamburguesas usaquén",
    "salchipapas bogotá",
    "perros calientes bogotá",
    "pizza artesanal bogotá",
    "parrilla bogotá",
    "patacón burger",
    "arepa mixta",
    "alas búfalo",
    "lasaña bogotá",
    "carta callejera",
    "street food bogotá",
  ],
  authors: [{ name: "Döminiös K·Ribe" }],
  creator: "Döminiös K·Ribe",
  publisher: "Döminiös K·Ribe S.A.S.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Döminiös K·Ribe | Carta callejera en Bogotá",
    description:
      "Hamburguesas, perros, salchipapas, parrilla y pizza artesanal en Usaquén. Sabor de barrio con ingredientes frescos.",
    url: "https://dominioskribe.co",
    siteName: "Döminiös K·Ribe",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Döminiös K·Ribe | Carta callejera en Bogotá",
    description: "Comida callejera con carácter en Usaquén, Bogotá.",
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
    icon: "/graphics/logo.png",
    shortcut: "/graphics/logo.png",
    apple: "/graphics/logo.png",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#0b0b09",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CO" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
