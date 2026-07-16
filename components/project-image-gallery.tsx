"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const viewerTrackRef = useRef<HTMLDivElement>(null)
  const scrollSettleRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const activeImage = activeIndex === null ? null : images[activeIndex]

  const closeViewer = () => setActiveIndex(null)
  const showPrevious = () => setActiveIndex((index) => (index === null ? index : (index - 1 + images.length) % images.length))
  const showNext = () => setActiveIndex((index) => (index === null ? index : (index + 1) % images.length))

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer()
      if (event.key === "ArrowLeft") showPrevious()
      if (event.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeIndex])

  useEffect(() => {
    if (activeIndex === null) return

    const slide = viewerTrackRef.current?.children[activeIndex] as HTMLElement | undefined
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }, [activeIndex])

  const openImage = (index: number) => {
    setActiveIndex(index)
  }

  const updateIndexAfterScroll = () => {
    const track = viewerTrackRef.current
    if (!track) return

    if (scrollSettleRef.current) window.clearTimeout(scrollSettleRef.current)

    scrollSettleRef.current = window.setTimeout(() => {
      const nextIndex = Math.round(track.scrollLeft / track.clientWidth)
      setActiveIndex(Math.max(0, Math.min(images.length - 1, nextIndex)))
    }, 110)
  }

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {images.map((image, index) => (
          <article key={`${image}-${index}`} className={index === 0 ? "md:col-span-2" : ""}>
            <button
              type="button"
              onClick={() => openImage(index)}
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
          onClick={closeViewer}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            aria-label="Cerrar imagen"
            onClick={(event) => {
              event.stopPropagation()
              closeViewer()
            }}
          >
            <X size={22} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/8 text-white/78 backdrop-blur-md transition hover:bg-white/18 hover:text-white md:left-8 md:size-16"
                aria-label="Imagen anterior"
                onClick={(event) => {
                  event.stopPropagation()
                  showPrevious()
                }}
              >
                <ChevronLeft size={34} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/8 text-white/78 backdrop-blur-md transition hover:bg-white/18 hover:text-white md:right-8 md:size-16"
                aria-label="Imagen siguiente"
                onClick={(event) => {
                  event.stopPropagation()
                  showNext()
                }}
              >
                <ChevronRight size={34} strokeWidth={2.5} />
              </button>
            </>
          )}

          <div
            ref={viewerTrackRef}
            className="viewer-scroll flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
            onClick={(event) => event.stopPropagation()}
            onScroll={updateIndexAfterScroll}
          >
            {images.map((image, index) => (
              <div
                key={`${image}-viewer-${index}`}
                className="relative flex h-full w-full shrink-0 snap-center items-center justify-center px-4 py-16 md:px-20"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={image}
                    alt={`${title} imagen completa ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority={index === activeIndex}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80 backdrop-blur-md">
            {String((activeIndex ?? 0) + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </>
  )
}
