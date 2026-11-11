"use client"

import { useEffect, useState } from "react"

export function CimIntro() {
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (root.dataset.cimIntro !== "play") {
      setFinished(true)
      return
    }
    const started = Number(root.dataset.cimIntroStart) || performance.now()
    const finish = () => {
      delete root.dataset.cimIntro
      delete root.dataset.cimIntroStart
      setFinished(true)
    }
    const timer = window.setTimeout(finish, Math.max(0, 2000 - (performance.now() - started)))
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onMotionChange = () => { if (motion.matches) finish() }
    motion.addEventListener("change", onMotionChange)
    return () => {
      window.clearTimeout(timer)
      motion.removeEventListener("change", onMotionChange)
    }
  }, [])

  if (finished) return null

  return (
    <div className="cim-intro" role="status" aria-label="Cargando CIM">
      <svg className="cim-intro-logo" viewBox="0 0 440 522" aria-hidden="true" focusable="false">
        <defs>
          <mask id="cim-intro-trace" maskUnits="userSpaceOnUse" x="0" y="0" width="440" height="522">
            <g fill="none" stroke="white" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round">
              <path className="cim-trace cim-trace-base" pathLength="1" d="M16 472 L116 472 L113 413 L83 413 L16 472" />
              <path className="cim-trace cim-trace-left" pathLength="1" d="M116 405 L115 331 L154 151 L163 43 L187 20 L291 117 L291 163" />
              <path className="cim-trace cim-trace-centre" pathLength="1" d="M121 445 L185 445 L185 25 M185 109 L205 109 L207 448 L269 448 L270 245 L304 210" />
              <path className="cim-trace cim-trace-front" pathLength="1" d="M211 477 L285 477 L305 488 L305 203 L336 174 L354 197 L354 499 L336 507 L285 479" />
              <path className="cim-trace cim-trace-detail" pathLength="1" d="M359 444 L397 444 L397 380 L361 380 M355 459 L426 459" />
            </g>
            <rect className="cim-trace-complete" width="440" height="522" fill="white" />
          </mask>
        </defs>
        {/* The mask reveals the supplied SVG without redrawing or changing the mark. */}
        <image href="/logos/cim-symbol.svg" width="440" height="522" mask="url(#cim-intro-trace)" />
      </svg>
    </div>
  )
}
