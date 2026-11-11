import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./editorial.css"
import "./intro.css"
import { CimMotion } from "@/components/cim-motion"
import { CimIntro } from "@/components/cim-intro"

// Run before paint: no flash of the cover and no blocked page without JavaScript.
const introBootstrap = `(function(){try{var r=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var replay=${process.env.NODE_ENV === "development" ? "new URLSearchParams(location.search).has('ver-logo')" : "false"};var seen=false;try{seen=sessionStorage.getItem('cim-intro-v2')==='1'}catch(e){}if(seen&&!replay)return;r.dataset.cimIntro='play';r.dataset.cimIntroStart=String(performance.now());try{sessionStorage.setItem('cim-intro-v2','1')}catch(e){}window.setTimeout(function(){delete r.dataset.cimIntro;delete r.dataset.cimIntroStart},2000)}catch(e){}})();`

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
    <html lang="es" className="antialiased" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: introBootstrap }} /></head>
      <body className="font-sans bg-[#f3f2ee] text-[#1b1c1b] overflow-x-hidden"><CimIntro />{children}<CimMotion /></body>
    </html>
  )
}
