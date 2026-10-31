"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react"
import { projects } from "@/lib/projects"
import { CimHeader } from "@/components/cim-header"
import { CimFooter } from "@/components/cim-footer"
import { whatsappHref } from "@/lib/site"

const services = [
  {
    title: "Proyecto arquitectónico",
    description:
      "Diseñamos la propuesta espacial, fachada, distribución y criterios de materialidad para que el proyecto tenga una dirección clara antes de avanzar a obra.",
    detail: "Anteproyecto, volumetría, fachada y criterios de diseño.",
  },
  {
    title: "Planos y documentación técnica",
    description:
      "Preparamos planos, láminas y documentación ordenada para comunicar medidas, ambientes, recorridos y decisiones constructivas con precisión.",
    detail: "Plantas, cortes, elevaciones y expediente visual.",
  },
  {
    title: "Renders arquitectónicos",
    description:
      "Creamos imágenes interiores y exteriores con enfoque comercial para presentar, validar y vender el proyecto antes de construir.",
    detail: "Fachadas, interiores, materialidad e iluminación.",
  },
  {
    title: "Construcción de proyectos",
    description:
      "Ejecutamos proyectos con una lectura clara de planos, materiales, procesos y control en obra para cuidar la calidad del resultado final.",
    detail: "Coordinación, obra, acabados y seguimiento técnico.",
  },
]

const faqs = [
  {
    q: "¿Qué servicios ofrece CIM?",
    a: "Desarrollamos proyectos arquitectónicos, planos técnicos, visualización 3D, renders y asesoría para construir con mayor claridad.",
  },
  {
    q: "¿Pueden adaptar el proyecto a mi terreno?",
    a: "Sí. Partimos del terreno, tus objetivos, presupuesto y normativa para proponer una solución realista y funcional.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende del alcance. Una propuesta inicial puede avanzar en pocos días; un expediente integral requiere una revisión más detallada.",
  },
  {
    q: "¿También trabajan proyectos inmobiliarios?",
    a: "Sí. Podemos preparar imágenes, narrativa visual y presentaciones para que el proyecto sea más fácil de vender o financiar.",
  },
]


export default function HomePage() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 5)
  return (
    <div className="editorial">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <CimHeader />
      <main id="contenido">
        <section className="cim-hero" id="inicio" aria-label="Proyecto Miguel Villavicencio">
          <picture className="hero-picture">
            <source media="(max-width: 700px)" srcSet="/villavicencio/portada-celular-1200.webp" />
            <img src="/villavicencio/portada-escritorio-2560.webp" srcSet="/villavicencio/portada-escritorio-1920.webp 1920w, /villavicencio/portada-escritorio-2560.webp 2560w" sizes="100vw" alt="Fachada del proyecto Miguel Villavicencio: volúmenes de piedra, balcones y vegetación" fetchPriority="high" />
          </picture>
          <div className="hero-shade" />
          <div className="hero-heading">
            <div className="hero-wordmark">
              <h1 className="hero-title">CIM</h1>
              <p className="hero-subtitle" aria-label="Design Studio">
                {"DESIGN STUDIO".split("").map((letter, index) => <span key={index} aria-hidden="true">{letter === " " ? "\u00a0" : letter}</span>)}
              </p>
            </div>
          </div>
          <a className="hero-project" href="/proyectos/miguel-villavicencio"><span>PROYECTO DESTACADO</span>Miguel Villavicencio <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a href="#proyectos" className="hero-explore" aria-label="Explorar los proyectos"><ArrowDown size={26} strokeWidth={1} aria-hidden="true" /></a>
          <span className="hero-index">01 / VILLAVICENCIO</span>
        </section>

        <section id="proyectos" tabIndex={-1} className="projects-section editorial-section">
          <div className="section-heading"><p className="eyebrow">01 / PROYECTOS</p><h2>La arquitectura<br />habla por sí sola.</h2></div>
          <div className="project-grid">{visibleProjects.map((project,index) => <Link key={project.slug} href={`/proyectos/${project.slug}`} className={`project-item ${index === 0 ? "featured-project" : ""}`}>
            <div className="project-image"><Image src={project.cover} alt={project.title} fill sizes={index === 0 ? "(max-width: 700px) 100vw, 90vw" : "(max-width: 700px) 100vw, 45vw"} /></div>
            <div className="project-caption"><div><h3>{project.title}</h3><p>{project.category}</p></div><ArrowUpRight size={23} strokeWidth={1.2} aria-hidden="true" /></div>
          </Link>)}</div>
          <button className="text-button all-projects" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>{showAll ? "Ver selección" : "Explorar todos los proyectos"}<Plus size={18} aria-hidden="true" /></button>
        </section>

        <section id="estudio" tabIndex={-1} className="studio-section editorial-section">
          <p className="eyebrow">02 / EL ESTUDIO</p>
          <div className="studio-intro"><h2>Diseñamos el lugar<br />donde comienza<br />tu historia.</h2><div><p>Unimos arquitectura, visualización y construcción para dar forma a espacios pensados para vivir.</p><p>Del primer plano a los detalles finales, cada decisión construye una misma idea.</p><a href="#contacto" className="text-button">Conversemos <ArrowUpRight size={20} aria-hidden="true" /></a></div></div>
          <Link href="/staff" className="text-button studio-staff-link">Conoce a nuestro staff <ArrowUpRight size={20} aria-hidden="true" /></Link>
        </section>

        <section id="servicios" tabIndex={-1} className="services-section editorial-section"><div className="section-heading"><p className="eyebrow">03 / SERVICIOS</p><h2>Una visión integral.<br />Cada detalle cuenta.</h2></div><div className="service-list">{services.map((service,index) => <details key={service.title}><summary><span className="service-number">0{index+1}</span><h3>{service.title}</h3><Plus size={24} strokeWidth={1} aria-hidden="true" /></summary><div className="service-description"><p>{service.description}</p><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-button">Consultar este servicio <ArrowUpRight size={18} aria-hidden="true" /></a></div></details>)}</div></section>

        <section className="detail-banner" aria-label="Detalle arquitectónico de Villavicencio"><Image src="/villavicencio/detalle-fachada-1200.webp" alt="Detalle de materiales y balcones del proyecto Villavicencio" fill sizes="100vw" /><span>MATERIALIDAD, LUZ Y PROPORCIÓN.</span></section>

        <section id="faq" className="faq-section editorial-section"><p className="eyebrow">ANTES DE COMENZAR</p><h2>Tu idea, más cerca.</h2><div className="faq-list">{faqs.map(faq => <details key={faq.q}><summary>{faq.q}<Plus size={20} aria-hidden="true" /></summary><p>{faq.a}</p></details>)}</div></section>

        <CimFooter />
      </main>
    </div>
  )
}
