"use client"

import type React from "react"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import {
  Building2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Box,
  ImageIcon,
  Menu,
  MessageCircle,
  ShieldCheck,
} from "lucide-react"
import { projects } from "@/lib/projects"

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
    q: "¿Qué servicios ofrece Constructora CIM?",
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

const whatsappHref =
  "https://wa.me/51960240708?text=Hola%20Constructora%20CIM%2C%20quiero%20cotizar%20mi%20proyecto"

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0)
  const [galleryPage, setGalleryPage] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const heroTextOpacity = useTransform(scrollY, [0, 420], [1, 0])
  const heroTextY = useTransform(scrollY, [0, 420], [0, 88])
  const heroPanelOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const gallerySize = 4
  const galleryPageCount = Math.ceil(projects.length / gallerySize)
  const activeProjects = projects.slice(galleryPage * gallerySize, galleryPage * gallerySize + gallerySize)

  return (
    <main className="site-shell min-h-screen bg-[#f4f3f1] text-[#252320]">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/78 px-4 py-3 text-sm font-bold text-white shadow-[0_18px_55px_rgba(0,0,0,0.42)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-black"
        aria-label="Cotizar por WhatsApp"
      >
        <span className="relative grid size-8 place-items-center rounded-full bg-white text-black">
          <MessageCircle size={16} />
          <span className="absolute -right-0.5 -top-0.5 size-3 rounded-full bg-[#25d366]" />
        </span>
        <span className="hidden sm:block">WhatsApp</span>
      </a>

      <header className="absolute left-0 right-0 top-0 z-50">
        <nav className="relative grid h-16 w-full grid-cols-3 items-center border-b border-white/14 bg-black/28 px-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:h-20 md:px-12">
          <div className="hidden items-center gap-9 text-sm font-semibold text-white/84 md:flex">
            <a className="transition hover:text-white" href="#proyectos">
              Proyectos
            </a>
            <a className="transition hover:text-white" href="#servicios">
              Servicios
            </a>
          </div>
          <a href="#inicio" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-black uppercase text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] md:text-3xl" aria-label="Constructora CIM">
            CIM
          </a>
          <div className="hidden items-center justify-end gap-9 text-sm font-semibold text-white/84 md:flex">
            <a className="transition hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="transition hover:text-white" href="#contacto">
              Contacto
            </a>
          </div>
          <button className="col-start-3 grid size-9 place-items-center justify-self-end rounded-full bg-black/35 text-white backdrop-blur-md md:hidden" aria-label="Abrir menu">
            <Menu size={16} />
          </button>
        </nav>
      </header>

      <section ref={heroRef} id="inicio" className="relative h-screen min-h-[720px] overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Image
            src="/cim-exterior-angle.jpeg"
            alt="Fachada arquitectónica de proyecto residencial CIM"
            fill
            priority
            className="object-cover object-center saturate-[0.94] contrast-[1.06]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/38" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.06),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.42),transparent_42%,rgba(0,0,0,0.46))]" />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/64 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 flex h-full items-center justify-center px-5 pb-28 pt-32 text-center text-white"
          style={{ opacity: heroTextOpacity, y: heroTextY }}
        >
          <div className="mx-auto max-w-[1080px] -translate-y-5 md:-translate-y-8">
            <motion.h1
              className="mx-auto tracking-normal"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span className="hero-title-bold block font-bold text-white">Proyectos que</span>
              <span className="hero-title-bold block font-bold text-white">se sienten reales</span>
              <span className="hero-title-italic mt-2 block font-light italic text-white/92">antes de construirse.</span>
            </motion.h1>
            <motion.p
              className="mx-auto mt-7 max-w-[780px] text-base font-medium leading-7 text-white/90 md:text-[22px] md:leading-8"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Diseño arquitectónico, renders y documentación técnica para construir con claridad, seguridad y visión antes de invertir en obra.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.82, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 min-w-[230px] items-center justify-center rounded-[8px] border border-black bg-black/88 px-7 text-base font-bold text-white shadow-[0_20px_60px_rgba(0,0,0,0.32)] transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
              >
                Solicitar cotización
              </a>
              <a
                href="#proyectos"
                className="inline-flex h-14 min-w-[230px] items-center justify-center rounded-[8px] border border-white/42 bg-white/7 px-7 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
              >
                Ver proyectos
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-9 z-20 hidden justify-center px-4 sm:flex"
          style={{ opacity: heroPanelOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.95, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="flex max-w-[760px] flex-wrap items-center justify-center gap-5 rounded-full border border-white/16 bg-black/44 px-6 py-4 text-sm font-semibold text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:gap-10 md:px-9">
            <span className="inline-flex items-center gap-2">
              <Box className="text-emerald-400" size={21} strokeWidth={1.7} /> Proyecto a medida
            </span>
            <span className="inline-flex items-center gap-2">
              <ImageIcon className="text-cyan-300" size={21} strokeWidth={1.7} /> Renders hiperrealistas
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="text-sky-300" size={21} strokeWidth={1.7} /> Asesoría técnica
            </span>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#7b4a39] px-4 py-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-4 text-sm font-semibold opacity-90">
          <span>planos</span>
          <span>renders 3D</span>
          <span>anteproyecto</span>
          <span>expediente</span>
          <span>visualización</span>
        </div>
      </section>

      <section id="proyectos" className="relative overflow-hidden bg-[#f4f3f1] px-4 pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="relative mx-auto max-w-[1120px]">
          <FadeIn>
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-[760px]">
                <span className="inline-flex rounded-full bg-[#7b4a39] px-9 py-3 text-[10px] font-medium uppercase tracking-normal text-white">
                  proyectos cim
                </span>
                <h2 className="mt-6 max-w-[680px] text-[clamp(2rem,3.7vw,3.55rem)] font-light leading-[1.14] text-[#181715]">
                  Explora nuestros proyectos arquitectónicos
                </h2>
              </div>
              <div className="mt-24 flex shrink-0 gap-3 md:mt-28">
                <button
                  className="grid size-10 place-items-center rounded-full border border-[#7b4a39] text-[#7b4a39] transition hover:bg-[#7b4a39] hover:text-white md:size-12"
                  aria-label="Proyecto anterior"
                  onClick={() => setGalleryPage((page) => (page - 1 + galleryPageCount) % galleryPageCount)}
                >
                  <ChevronLeft size={24} strokeWidth={1.7} />
                </button>
                <button
                  className="grid size-10 place-items-center rounded-full border border-[#cdbeb8] text-[#b29f98] transition hover:border-[#7b4a39] hover:bg-[#7b4a39] hover:text-white md:size-12"
                  aria-label="Proyecto siguiente"
                  onClick={() => setGalleryPage((page) => (page + 1) % galleryPageCount)}
                >
                  <ChevronRight size={24} strokeWidth={1.7} />
                </button>
              </div>
            </div>
          </FadeIn>

          <div className="pointer-events-none absolute left-1/2 top-[310px] z-0 -translate-x-1/2 whitespace-nowrap text-[92px] font-black uppercase leading-none text-[#dedbd7]/80 sm:text-[118px] md:top-[300px] md:text-[150px] lg:text-[190px]">
            proyectos
          </div>

          <div className="relative z-10 mt-20 min-h-[250px] md:mt-24 md:min-h-[430px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={galleryPage}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="grid grid-cols-4 items-start gap-3 sm:gap-5 md:gap-10"
              >
                {activeProjects.map((project, index) => {
                  const projectNumber = galleryPage * gallerySize + index + 1

                  return (
                    <Link
                      key={project.slug}
                      href={`/proyectos/${project.slug}`}
                      className={`group block min-w-0 ${index % 2 === 1 ? "mt-14 md:mt-24" : ""}`}
                      aria-label={`Ver proyecto ${project.title}`}
                    >
                      <motion.article
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                        whileHover={{ y: -8 }}
                      >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-white shadow-[0_25px_80px_rgba(37,35,32,0.08)]">
                          <Image
                            src={project.cover}
                            alt={`${project.title} - ${project.subtitle}`}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                            sizes="25vw"
                          />
                        </div>
                        <h3 className="mt-3 text-[10px] font-light leading-4 text-[#252320] sm:text-sm md:mt-5 md:text-base md:leading-6">
                          <span className="font-semibold">{String(projectNumber).padStart(2, "0")}.</span>{" "}
                          {project.title}
                        </h3>
                      </motion.article>
                    </Link>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-4 pb-20 pt-4 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.45fr] md:items-start">
          <FadeIn>
            <div className="sticky top-8">
              <span className="inline-flex rounded-full bg-[#7b4a39] px-5 py-2 text-[10px] font-bold uppercase text-white">
                nuestros servicios
              </span>
              <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
                Diseño claro para construir con seguridad.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#6b6660] md:text-base">
                Unimos arquitectura, visualización y documentación técnica para que cada decisión se entienda antes de invertir en obra.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.08}>
                <article className="group min-h-[260px] rounded-[8px] border border-[#d8d3cc] bg-white/70 p-7 shadow-[0_22px_70px_rgba(37,35,32,0.05)] transition duration-500 hover:-translate-y-1 hover:border-[#7b4a39]/40 hover:bg-white">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#7b4a39]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="grid size-9 place-items-center rounded-full border border-[#7b4a39]/25 text-[#7b4a39] transition group-hover:bg-[#7b4a39] group-hover:text-white">
                      <Check size={17} />
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium leading-tight text-[#181715]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6b6660]">{service.description}</p>
                  <p className="mt-6 border-t border-[#d8d3cc] pt-4 text-xs font-semibold uppercase leading-5 text-[#7b4a39]">
                    {service.detail}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-6 border-t border-[#d8d3cc] pt-10 md:grid-cols-4">
          {[
            ["360°", "diseño, render y expediente"],
            ["99%", "claridad en obra"],
            ["+200", "proyectos desarrollados"],
            ["4.9", "satisfacción"],
          ].map(([value, label]) => (
            <FadeIn key={value}>
              <div>
                <strong className="text-4xl font-light text-[#7b4a39] md:text-5xl">{value}</strong>
                <p className="mt-2 text-xs text-[#6b6660]">{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative min-h-[86vh] overflow-hidden bg-[#181715] px-4 py-20 text-white md:py-28">
        <Image
          src="/cim-interior.jpeg"
          alt="Render interior de sala contemporanea CIM"
          fill
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/15" />
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1fr] md:items-end">
          <FadeIn>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase text-[#252320]">
              experiencia visual
            </span>
            <h2 className="mt-6 text-5xl font-light leading-tight md:text-7xl">Cada ambiente debe explicar una decisión.</h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="max-w-xl text-lg leading-8 text-white/82">
              El render no es decoración. Es una herramienta para validar escala, materiales, luz, recorrido y sensación antes de iniciar una obra.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/30 px-4 py-2 text-xs">materialidad</span>
              <span className="rounded-full border border-white/30 px-4 py-2 text-xs">iluminación</span>
              <span className="rounded-full border border-white/30 px-4 py-2 text-xs">venta visual</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="faq" className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <FadeIn className="text-center">
            <span className="inline-flex rounded-full bg-[#7b4a39] px-4 py-2 text-[10px] font-bold uppercase text-white">
              preguntas frecuentes
            </span>
            <h2 className="mt-5 text-3xl font-light md:text-5xl">Tus dudas, nuestra asesoría.</h2>
          </FadeIn>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.q} delay={index * 0.05}>
                <button
                  className="w-full rounded-full bg-white px-6 py-5 text-left text-[#252320] shadow-[0_18px_50px_rgba(37,35,32,0.05)] transition hover:bg-[#fbfaf8]"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium md:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`shrink-0 transition ${openFaq === index ? "rotate-180" : ""}`}
                      size={18}
                    />
                  </span>
                  {openFaq === index && <span className="mt-4 block max-w-2xl text-sm leading-6 text-[#6b6660]">{faq.a}</span>}
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-6">
        <div className="mx-auto overflow-hidden rounded-[8px] bg-white">
          <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-16">
            <div className="relative z-10">
              <FadeIn>
                <h2 className="text-6xl font-black uppercase leading-none text-[#191817] md:text-8xl lg:text-9xl">Get in touch</h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-[#6b6660]">
                  Envía tu idea, terreno o referencia. Te ayudamos a convertirla en un proyecto claro para construir o vender.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-grid size-20 place-items-center rounded-full bg-[#7b4a39] text-white transition hover:bg-[#252320]"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle size={28} />
                </a>
              </FadeIn>
            </div>
            <FadeIn delay={0.12}>
              <div className="relative aspect-[16/10] min-h-[340px] overflow-hidden rounded-[8px]">
                <Image
                  src="/cim-exterior-angle.jpeg"
                  alt="Render exterior de proyecto CIM"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 780px"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <footer className="px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[#d8d3cc] pt-6 text-xs text-[#6b6660] md:flex-row">
          <p>Constructora CIM - Arquitectura, diseño y construcción</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={14} /> Perú
            </span>
            <span className="inline-flex items-center gap-2">
              <Building2 size={14} /> WhatsApp +51 960 240 708
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
