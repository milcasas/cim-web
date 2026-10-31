import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { socialLinks, whatsappHref } from "@/lib/site"

export function CimFooter() {
  return <footer id="contacto" tabIndex={-1} className="contact-section editorial-section">
    <p className="eyebrow">CONTACTO</p>
    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="contact-title">Hagamos realidad<br />tu próximo proyecto.<ArrowUpRight aria-hidden="true" strokeWidth={.9} /></a>
    <div className="contact-meta"><p>ARQUITECTURA, DISEÑO Y CONSTRUCCIÓN<br />Urb. El Trapecio K1 · Perú</p><a href={whatsappHref} target="_blank" rel="noopener noreferrer">+51 960 240 708</a></div>
    <div className="footer-bottom">
      <Link href="/#inicio" className="footer-brand" aria-label="CIM — volver al inicio"><Image src="/logos/cim-symbol.svg" alt="CIM" width={37} height={44} /><span>CIM<small>DESIGN STUDIO</small></span></Link>
      <div>{socialLinks.map(([label,href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}</div>
      <p>© {new Date().getFullYear()} CIM</p>
    </div>
  </footer>
}
