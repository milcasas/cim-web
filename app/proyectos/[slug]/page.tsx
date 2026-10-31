import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { CimHeader } from "@/components/cim-header"
import { CimFooter } from "@/components/cim-footer"
import { ProjectImageGallery } from "@/components/project-image-gallery"
import { getProject, projects } from "@/lib/projects"
import { projectImageSizes } from "@/lib/project-image-sizes"
import { whatsappHref } from "@/lib/site"

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Proyecto no encontrado | CIM Design Studio" }
  return {
    title: `${project.title} | CIM Design Studio`,
    description: project.summary,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: { title: `${project.title} | CIM Design Studio`, description: project.summary, url: `/proyectos/${project.slug}`, images: [{ url: project.cover, alt: project.title }] },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  const coverSize = projectImageSizes[project.cover] ?? [1920,1280]
  const nextProject = projects[(projects.findIndex(item => item.slug === project.slug) + 1) % projects.length]
  return <div className="editorial project-page">
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <CimHeader light />
    <main id="contenido">
      <section className="project-intro editorial-section">
        <nav className="editorial-breadcrumb" aria-label="Ruta del proyecto"><Link href="/#proyectos">PROYECTOS</Link><span aria-hidden="true">/</span><span>{project.title}</span></nav>
        <div className="project-heading"><div><p className="eyebrow">{project.category}</p><h1>{project.title}</h1></div><div className="project-heading-side"><p>{project.location}<br />{project.year}</p><a href="#galeria" className="text-button">Explorar el proyecto <ArrowDown size={17} strokeWidth={1.2} aria-hidden="true" /></a></div></div>
      </section>
      <figure className="project-cover"><Image src={project.cover} alt={`Vista principal de ${project.title}`} width={coverSize[0]} height={coverSize[1]} sizes="90vw" priority /><figcaption><span>{project.title}</span><span>ARQUITECTURA CIM</span></figcaption></figure>
      <section className="project-description editorial-section" aria-labelledby="project-about">
        <div><p className="eyebrow">01 / EL PROYECTO</p><h2 id="project-about">{project.subtitle}</h2><p className="project-summary">{project.summary}</p></div>
        <div className="project-meta"><dl><div><dt>Tipología</dt><dd>{project.category}</dd></div><div><dt>Ubicación</dt><dd>{project.location}</dd></div><div><dt>Año</dt><dd>{project.year}</dd></div></dl><div className="project-scope"><p className="eyebrow">DESARROLLO DEL PROYECTO</p><ul>{project.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div><a className="text-button" href={whatsappHref} target="_blank" rel="noopener noreferrer">Conversemos sobre tu proyecto <ArrowUpRight size={18} aria-hidden="true" /></a></div>
      </section>
      <section id="galeria" className="project-gallery-section editorial-section" aria-labelledby="gallery-heading"><div className="section-heading"><p className="eyebrow">02 / GALERÍA</p><div><h2 id="gallery-heading">Una mirada<br />al diseño.</h2><p className="gallery-intro">Amplía las imágenes para descubrir los materiales, la luz y los detalles de cada espacio.</p></div></div><ProjectImageGallery key={project.slug} images={project.gallery} title={project.title} /></section>
      <section className="project-next editorial-section" aria-labelledby="next-project"><div className="project-next-heading"><p className="eyebrow">SIGUE EXPLORANDO</p><Link href="/#proyectos" className="text-button">Todos los proyectos <ArrowUpRight size={17} aria-hidden="true" /></Link></div><Link className="project-next-link" href={`/proyectos/${nextProject.slug}`}><div className="project-next-image"><Image src={nextProject.cover} alt={nextProject.title} fill sizes="90vw" /></div><div className="project-next-caption"><h2 id="next-project">{nextProject.title}</h2><ArrowUpRight size={38} strokeWidth={1} aria-hidden="true" /></div></Link></section>
    </main>
    <CimFooter />
  </div>
}
