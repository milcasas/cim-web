import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./editorial.css"
import { CimMotion } from "@/components/cim-motion"

export const metadata: Metadata = {
  metadataBase: new URL("https://cim-web.vercel.app"),
  title: "CIM | Design Studio",
  description:
    "CIM Design Studio desarrolla proyectos arquitectónicos, documentación técnica y renders para construir con mayor claridad.",
  generator: "Codex",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "https://cim-web.vercel.app/",
  },
  openGraph: {
    siteName: "CIM Design Studio",
    title: "CIM | Design Studio",
    description: "Proyectos arquitectónicos y renders para decidir mejor antes de construir.",
    type: "website",
    url: "https://cim-web.vercel.app/",
    images: [
      {
        url: "/villavicencio/portada-escritorio-1920.webp",
        alt: "Render de fachada residencial de CIM Design Studio",
      },
    ],
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "CIM | Design Studio",
    description: "Proyectos arquitectónicos y renders para decidir mejor antes de construir.",
    images: [
      {
        url: "/villavicencio/portada-escritorio-1920.webp",
        alt: "Render de fachada residencial de CIM Design Studio",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="antialiased">
      <body className="font-sans bg-[#f3f2ee] text-[#1b1c1b] overflow-x-hidden">{children}<CimMotion /></body>
    </html>
  )
}
