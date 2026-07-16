import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://constructoracim.example"),
  title: "Constructora CIM | Arquitectura, diseño y construcción",
  description:
    "Constructora CIM desarrolla proyectos arquitectónicos, documentación técnica y renders para construir con mayor claridad.",
  generator: "Codex",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "https://constructoracim.example/",
  },
  openGraph: {
    siteName: "Constructora CIM",
    title: "Arquitectura, diseño y construcción | Constructora CIM",
    description: "Proyectos arquitectónicos y renders para decidir mejor antes de construir.",
    type: "website",
    url: "https://constructoracim.example/",
    images: [
      {
        url: "/cim-exterior-front.jpeg",
        alt: "Render de fachada residencial de Constructora CIM",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arquitectura, diseño y construcción | Constructora CIM",
    description: "Proyectos arquitectónicos y renders para decidir mejor antes de construir.",
    images: [
      {
        url: "/cim-exterior-front.jpeg",
        alt: "Render de fachada residencial de Constructora CIM",
      },
    ],
    site: "@constructoracim",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-[#f4f3f1] text-[#252320] overflow-x-hidden">{children}</body>
    </html>
  )
}
