"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowLeft, ArrowRight, ArrowUpRight, Minus } from "lucide-react"
import { projectImageSizes } from "@/lib/project-image-sizes"

type ProjectImageGalleryProps = { images: string[]; title: string }

export function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const opener = useRef<HTMLButtonElement | null>(null)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const previous = () => setActiveIndex(index => (index - 1 + images.length) % images.length)
  const next = () => setActiveIndex(index => (index + 1) % images.length)
  if (!images.length) return null
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <div className="project-gallery-grid">
      {images.map((src,index) => {
        const size = projectImageSizes[src] ?? [1600,1200]
        return <figure className="project-gallery-item" key={`${src}-${index}`}><button type="button" className="project-gallery-button" aria-label={`Ampliar imagen ${index + 1} de ${title}`} onClick={event => { opener.current = event.currentTarget; setActiveIndex(index); setOpen(true) }}><Image src={src} alt={`${title}, vista ${index + 1}`} width={size[0]} height={size[1]} sizes="(max-width: 700px) 90vw, 45vw" /><span className="gallery-open"><ArrowUpRight size={23} strokeWidth={1.1} aria-hidden="true" /></span></button><figcaption><span>{String(index + 1).padStart(2,"0")}</span><span>{index === 0 ? "Vista principal" : "Vista del proyecto"}</span></figcaption></figure>
      })}
    </div>
    <Dialog.Portal>
      <Dialog.Overlay className="project-viewer-overlay" />
      <Dialog.Content className="project-viewer" aria-describedby={undefined} onCloseAutoFocus={event => { event.preventDefault(); opener.current?.focus({ preventScroll: true }) }} onKeyDown={event => {
        if (event.key === "ArrowLeft") { event.preventDefault(); previous() }
        if (event.key === "ArrowRight") { event.preventDefault(); next() }
      }}>
        <Dialog.Title className="viewer-title">{title}</Dialog.Title>
        <Dialog.Close className="viewer-close" aria-label="Cerrar imagen"><Minus size={30} strokeWidth={1.2} aria-hidden="true" /></Dialog.Close>
        <div className="viewer-image" onTouchStart={event => { const point = event.changedTouches[0]; touch.current = { x: point.clientX, y: point.clientY } }} onTouchEnd={event => {
          const point = event.changedTouches[0]
          if (touch.current && Math.abs(point.clientY - touch.current.y) < 65) {
            if (point.clientX - touch.current.x > 50) previous()
            if (point.clientX - touch.current.x < -50) next()
          }
          touch.current = null
        }}><Image key={activeIndex} src={images[activeIndex]} alt={`${title}, imagen completa ${activeIndex + 1}`} fill className="viewer-photo" sizes="90vw" priority /></div>
        {images.length > 1 && <><button className="viewer-previous" aria-label="Imagen anterior" onClick={previous}><ArrowLeft size={27} strokeWidth={1} aria-hidden="true" /></button><button className="viewer-next" aria-label="Imagen siguiente" onClick={next}><ArrowRight size={27} strokeWidth={1} aria-hidden="true" /></button></>}
        <p className="viewer-counter" aria-live="polite">{String(activeIndex + 1).padStart(2,"0")} <span>/ {String(images.length).padStart(2,"0")}</span></p>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
}
