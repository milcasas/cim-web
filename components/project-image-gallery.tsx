"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

type ProjectImageGalleryProps = {
  images: string[]
  title: string
}

function imageLabel(index: number) {
  if (index === 0) return "Vista principal"
  if (index === 1) return "Vista complementaria"
  if (index === 2) return "Detalle / interior"
  return "Revisión visual"
}

export function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!activeImage) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeImage])

  const openImage = (image: string, index: number) => {
    setActiveImage(image)
    setActiveIndex(index)
  }

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {images.map((image, index) => (
          <article key={`${image}-${index}`} className={index === 0 ? "md:col-span-2" : ""}>
            <button
              type="button"
              onClick={() => openImage(image, index)}
              className={`group relative block w-full overflow-hidden rounded-[8px] border border-[#d8d3cc] bg-white text-left shadow-[0_25px_80px_rgba(37,35,32,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(37,35,32,0.14)] ${
                index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
              }`}
              aria-label={`Ver imagen completa ${index + 1} de ${title}`}
            >
              <Image
                src={image}
                alt={`${title} imagen ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
              />
              <span className="absolute bottom-4 right-4 rounded-full bg-black/58 px-4 py-2 text-xs font-bold uppercase text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                Ver completo
              </span>
            </button>
            <p className="mt-3 text-xs font-bold uppercase text-[#7b4a39]">
              {String(index + 1).padStart(2, "0")} / {imageLabel(index)}
            </p>
          </article>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen completa de ${title}`}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            aria-label="Cerrar imagen"
            onClick={(event) => {
              event.stopPropagation()
              setActiveImage(null)
            }}
          >
            <X size={22} />
          </button>

          <div className="relative h-[88vh] w-[94vw]" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage}
              alt={`${title} imagen completa ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="94vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
