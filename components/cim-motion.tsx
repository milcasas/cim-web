"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function CimMotion() {
  const pathname = usePathname()
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return
    const scope = document.querySelector(".editorial main")
    if (!scope) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-reveal", "visible")
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" })
    const scan = () => {
      scope.querySelectorAll<HTMLElement>(".section-heading, .project-item, .studio-intro, .studio-staff-link, .service-list details, .faq-list details, .project-description, .project-gallery-item, .project-next, .staff-area-heading, .staff-member").forEach(element => {
        if (!element.hasAttribute("data-reveal")) element.setAttribute("data-reveal", element.getBoundingClientRect().top < window.innerHeight * 0.92 ? "visible" : "pending")
        if (element.getAttribute("data-reveal") === "pending") observer.observe(element)
      })
    }
    scan()
    const updates = new MutationObserver(scan)
    updates.observe(scope, { childList: true, subtree: true })
    return () => { observer.disconnect(); updates.disconnect() }
  }, [pathname])
  return null
}
