import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CimHeader } from "@/components/cim-header"
import { CimFooter } from "@/components/cim-footer"

export default function NotFound() {
  return <div className="editorial"><CimHeader light /><main id="contenido"><section className="empty-state editorial-section"><p className="eyebrow">404 / PÁGINA NO ENCONTRADA</p><h1>Sigamos explorando.</h1><p>La página que buscas no está disponible. Descubre los proyectos de CIM.</p><Link href="/#proyectos" className="text-button">Ver nuestros proyectos <ArrowUpRight size={19} aria-hidden="true" /></Link></section></main><CimFooter /></div>
}
