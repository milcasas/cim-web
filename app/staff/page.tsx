import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CimHeader } from "@/components/cim-header"
import { CimFooter } from "@/components/cim-footer"
import { staffAreas, staffMembers, type StaffAssignment } from "@/lib/staff"
import "./staff.css"

export const metadata: Metadata = {
  title: "Staff | CIM Design Studio",
  alternates: { canonical: "/staff" },
  description: "Conoce al staff de CIM: gerencia, administración, arquitectura, ingeniería, marketing y ventas.",
}

function StaffGrid({ members, secondary = false }: { members: readonly StaffAssignment[]; secondary?: boolean }) {
  const Heading = secondary ? "h4" : "h3"
  return <div className="staff-grid">{members.map(assignment => {
    const person = staffMembers.find(member => member.id === assignment.memberId)
    if (!person) return null
    return <article key={person.id} className="staff-member">
      <div className="staff-portrait"><Image src={person.image} alt={person.name} fill sizes="(max-width: 560px) 100vw, (max-width: 1000px) 45vw, 30vw" /></div>
      <div className="staff-member-info"><Heading>{person.name}</Heading><p className="staff-role">{assignment.role}</p><p className="staff-profession">{person.profession}</p></div>
    </article>
  })}</div>
}

export default function StaffPage() {
  return (
    <div className="editorial staff-page">
      <a className="skip-link" href="#staff-contenido">Saltar al contenido</a>
      <CimHeader light />
      <main id="staff-contenido">
        <section className="staff-intro editorial-section" aria-labelledby="staff-title">
          <div className="staff-breadcrumb"><Link href="/">CIM</Link><span>/ STAFF</span></div>
          <p className="eyebrow">EL EQUIPO</p>
          <div className="staff-intro-grid">
            <h1 id="staff-title">Las personas detrás<br />de cada proyecto.</h1>
            <div className="staff-intro-copy"><p>Distintas especialidades.<br />Una misma visión.</p><p>Conoce a quienes dan forma a cada etapa de tu proyecto, desde las primeras ideas hasta los detalles finales.</p><span>{staffMembers.length} INTEGRANTES · {staffAreas.length} ÁREAS</span></div>
          </div>
          <nav className="staff-area-nav" aria-label="Áreas del staff">
            {staffAreas.map((area, index) => <a key={area.id} href={`#${area.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{area.name}</a>)}
          </nav>
        </section>

        <div className="staff-directory">
          {staffAreas.map((area, index) => {
            const memberCount = new Set([...area.members, ...(area.groups ?? []).flatMap(group => group.members)].map(member => member.memberId)).size
            return (
              <section key={area.id} id={area.id} className="staff-area editorial-section" aria-labelledby={`${area.id}-title`}>
                <div className="staff-area-heading"><span className="eyebrow">{String(index + 1).padStart(2, "0")} / STAFF</span><h2 id={`${area.id}-title`}>{area.name}</h2><span className="staff-area-count">{String(memberCount).padStart(2, "0")}</span></div>
                <StaffGrid members={area.members} />
                {area.groups?.map(group => <section key={group.id} id={group.id} className="staff-subarea" aria-labelledby={`${group.id}-title`}><h3 id={`${group.id}-title`}>{group.name}</h3><StaffGrid members={group.members} secondary /></section>)}
              </section>
            )
          })}
        </div>

        <CimFooter />
      </main>
    </div>
  )
}
