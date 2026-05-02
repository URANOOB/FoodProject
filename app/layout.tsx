import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SITE_CONFIG } from "@/lib/constants"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Comida callejera con sabor en Usaquén, Bogotá`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
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
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: `${SITE_CONFIG.name} S.A.S.`,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Carta callejera en Bogotá`,
    description:
      "Hamburguesas, perros, salchipapas, parrilla y pizza artesanal en Usaquén. Sabor de barrio con ingredientes frescos.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Comida callejera con sabor en Bogotá`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Carta callejera en Bogotá`,
    description: "Comida callejera con carácter en Usaquén, Bogotá.",
    images: [SITE_CONFIG.ogImage],
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
