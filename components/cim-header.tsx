"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import { AlignJustify, Minus, ArrowUpRight } from "lucide-react"
import { socialLinks as socials, whatsappHref } from "@/lib/site"

const navigation = [["PROYECTOS", "/#proyectos"], ["ESTUDIO", "/#estudio"], ["STAFF", "/staff"], ["SERVICIOS", "/#servicios"], ["CONTACTO", "/#contacto"]]

export function CimHeader({ light = false }: { light?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pendingSection = useRef<string | null>(null)
  const pendingPage = useRef<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => {
    if (light) return
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 134)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [light])
  return (
      <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <header className={`cim-header ${light || scrolled ? "on-light" : ""}`}>
          <a href="/#estudio" className="header-caption">ARQUITECTURA<br />DISEÑO Y CONSTRUCCIÓN</a>
          <Link href="/#inicio" className="cim-brand" aria-label="CIM — inicio">
            <Image src="/logos/cim-symbol.svg" alt="Logo de CIM" width={52} height={62} priority />
          </Link>
          <Dialog.Trigger className="menu-toggle" aria-label="Abrir menú">
            <AlignJustify size={28} strokeWidth={1.3} aria-hidden="true" />
          </Dialog.Trigger>
        </header>
        <Dialog.Portal>
          <Dialog.Overlay className="cim-menu-overlay" />
          <Dialog.Content className="cim-menu" aria-describedby={undefined} onCloseAutoFocus={event => {
            if (pendingPage.current) {
              event.preventDefault()
              const href = pendingPage.current
              pendingPage.current = null
              router.push(href)
              return
            }
            if (pendingSection.current) {
              event.preventDefault()
              const target = document.getElementById(pendingSection.current)
              target?.focus({ preventScroll: true })
              target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })
              pendingSection.current = null
            }
          }}>
            <Dialog.Title className="sr-only">Menú de navegación</Dialog.Title>
            <Dialog.Close className="menu-close" aria-label="Cerrar menú"><Minus size={30} strokeWidth={1.3} aria-hidden="true" /></Dialog.Close>
            <nav aria-label="Navegación principal" className="menu-navigation">
              {navigation.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/staff" && pathname === "/staff" ? "page" : undefined} onClick={event => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
                const id = href.split("#")[1]
                pendingSection.current = pathname === "/" && id && document.getElementById(id) ? id : null
                if (pendingSection.current) {
                  event.preventDefault()
                  router.push(href, { scroll: false })
                } else if (href !== pathname) {
                  event.preventDefault()
                  pendingPage.current = href
                }
                setMenuOpen(false)
              }}>{label}</Link>)}
            </nav>
            <div className="menu-bottom">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="menu-contact">Hablemos de tu proyecto <ArrowUpRight size={17} aria-hidden="true" /></a>
              <p className="tiny-label">SÍGUENOS</p>
              <div className="menu-socials">{socials.map(([label,href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}</div>
              <p className="menu-legal">© {new Date().getFullYear()} CIM DESIGN STUDIO</p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  )
}
