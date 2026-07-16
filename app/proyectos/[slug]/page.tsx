import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { getProject, projects } from "@/lib/projects"

const whatsappHref =
  "https://wa.me/51960240708?text=Hola%20Constructora%20CIM%2C%20quiero%20cotizar%20un%20proyecto%20similar"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado | Constructora CIM",
    }
  }

  return {
    title: `${project.title} | Constructora CIM`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Constructora CIM`,
      description: project.summary,
      images: [{ url: project.cover, alt: project.title }],
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  const projectGallery = project.gallery.slice(0, 8)

  return (
    <main className="site-shell min-h-screen bg-[#f4f3f1] text-[#252320]">
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5">
        <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/38 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#252320]"
          >
            <ArrowLeft size={14} />
            Galería
          </Link>
          <Link href="/" className="relative block h-8 w-[134px]" aria-label="Constructora CIM">
            <Image src="/logos/cim-logo-white.png" alt="Constructora CIM" fill priority className="object-contain" sizes="134px" />
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#7b4a39] px-4 py-2 text-xs font-bold text-white transition hover:bg-white hover:text-[#252320]"
          >
            <MessageCircle size={14} />
            Cotizar
          </a>
        </nav>
      </header>

      <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28">
        <Image src={project.cover} alt={project.title} fill priority className="object-cover opacity-58" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/54 to-black/36" />
        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-white/82">{project.category}</p>
            <h1 className="mt-5 text-5xl font-light leading-[0.98] md:text-7xl lg:text-8xl">{project.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">{project.summary}</p>
          </div>

          <div className="rounded-[8px] border border-white/14 bg-black/42 p-6 text-white backdrop-blur-md">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="text-xs uppercase text-white/45">Tipo</p>
                <p className="mt-1 font-medium">{project.subtitle}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-white/45">Año</p>
                <p className="mt-1 font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-white/45">Ubicación</p>
                <p className="mt-1 font-medium">{project.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-white/45">Código</p>
                <p className="mt-1 font-medium">{project.stat}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.deliverables.map((item) => (
                <span key={item} className="rounded-full border border-white/16 px-3 py-2 text-xs text-white/76">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-[#7b4a39]">Renders / interiores / planos</p>
              <h2 className="mt-3 text-4xl font-light md:text-6xl">Archivo visual del proyecto.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#6b6660]">
              Esta página queda preparada para sumar planos, cortes, elevaciones y más renders del expediente cuando estén disponibles.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projectGallery.map((image, index) => (
              <article
                key={`${image}-${index}`}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <div className={`relative overflow-hidden rounded-[8px] border border-[#d8d3cc] bg-white shadow-[0_25px_80px_rgba(37,35,32,0.08)] ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <Image
                    src={image}
                    alt={`${project.title} imagen ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                </div>
                <p className="mt-3 text-xs font-bold uppercase text-[#7b4a39]">
                  {String(index + 1).padStart(2, "0")} / {index === 0 ? "Vista principal" : index === 1 ? "Vista complementaria" : index === 2 ? "Detalle / interior" : "Revisión visual"}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-5 border-t border-[#d8d3cc] pt-8 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-light">Planos y expediente</h3>
            </div>
            <p className="text-sm leading-6 text-[#6b6660]">
              La estructura de esta página permite agregar láminas de planta, cortes, elevaciones y detalles técnicos como imágenes adicionales.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#7b4a39] px-6 text-sm font-bold text-white transition hover:bg-[#252320]"
            >
              Cotizar un proyecto similar
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
