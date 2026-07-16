export type Project = {
  slug: string
  title: string
  subtitle: string
  category: string
  location: string
  year: string
  cover: string
  stat: string
  summary: string
  gallery: string[]
  deliverables: string[]
}

export const projects: Project[] = [
  {
    slug: "residencia-sol",
    title: "Residencia Sol",
    subtitle: "Residencia multifamiliar",
    category: "Fachada residencial",
    location: "Perú",
    year: "2026",
    cover: "/cim-projects/residencia-sol/01.jpg",
    stat: "01",
    summary:
      "Residencia contemporánea de varios niveles con fachada vertical, balcones, contraste de materiales y una imagen urbana sólida.",
    gallery: [
      "/cim-projects/residencia-sol/01.jpg",
      "/cim-projects/residencia-sol/02.jpg",
      "/cim-projects/residencia-sol/03.jpg",
      "/cim-projects/residencia-sol/04.jpg",
      "/cim-projects/residencia-sol/05.jpg",
      "/cim-projects/residencia-sol/06.jpg",
      "/cim-projects/residencia-sol/07.jpg",
    ],
    deliverables: ["Fachada 3D", "Vistas exteriores", "Materialidad", "Presentación visual"],
  },
  {
    slug: "proyecto-castillo-piura",
    title: "Proyecto Castillo Piura",
    subtitle: "Casa con patio y piscina",
    category: "Residencial",
    location: "Piura, Perú",
    year: "2026",
    cover: "/cim-projects/castillo-piura/01.jpg",
    stat: "02",
    summary:
      "Vivienda contemporánea con fachada limpia, patios interiores, terraza, piscina y ambientes sociales pensados para una experiencia residencial completa.",
    gallery: [
      "/cim-projects/castillo-piura/01.jpg",
      "/cim-projects/castillo-piura/02.jpg",
      "/cim-projects/castillo-piura/03.jpg",
      "/cim-projects/castillo-piura/04.jpg",
      "/cim-projects/castillo-piura/05.jpg",
      "/cim-projects/castillo-piura/06.jpg",
      "/cim-projects/castillo-piura/07.jpg",
      "/cim-projects/castillo-piura/08.jpg",
    ],
    deliverables: ["Fachada", "Patio interior", "Piscina", "Baños", "Interior social"],
  },
  {
    slug: "proyecto-cruz",
    title: "Proyecto Cruz",
    subtitle: "Multifamiliar con interiores",
    category: "Fachada + interiorismo",
    location: "Perú",
    year: "2026",
    cover: "/cim-projects/cruz/01.jpg",
    stat: "03",
    summary:
      "Edificio multifamiliar con fachada urbana e interiores desarrollados por niveles para visualizar recorridos, acabados y ambientes antes de construir.",
    gallery: [
      "/cim-projects/cruz/01.jpg",
      "/cim-projects/cruz/02.jpg",
      "/cim-projects/cruz/03.jpg",
      "/cim-projects/cruz/04.jpg",
      "/cim-projects/cruz/05.jpg",
      "/cim-projects/cruz/06.jpg",
      "/cim-projects/cruz/07.jpg",
      "/cim-projects/cruz/08.jpg",
    ],
    deliverables: ["Fachada", "Primer piso", "Segundo piso", "Dormitorios", "Cocina", "Baños"],
  },
  {
    slug: "proyecto-perez",
    title: "Proyecto Pérez",
    subtitle: "Vivienda residencial",
    category: "Fachada + primer piso",
    location: "Perú",
    year: "2026",
    cover: "/cim-projects/perez/01.jpg",
    stat: "04",
    summary:
      "Vivienda de dos niveles con fachada contemporánea e interiores luminosos para validar distribución, acabados y sensación espacial.",
    gallery: [
      "/cim-projects/perez/01.jpg",
      "/cim-projects/perez/02.jpg",
      "/cim-projects/perez/03.jpg",
      "/cim-projects/perez/04.jpg",
      "/cim-projects/perez/05.jpg",
      "/cim-projects/perez/06.jpg",
      "/cim-projects/perez/07.jpg",
      "/cim-projects/perez/08.jpg",
    ],
    deliverables: ["Fachada", "Sala comedor", "Cocina", "Escalera", "Patio", "Detalles exteriores"],
  },
  {
    slug: "alfonso-lilian",
    title: "Proyecto Alfonso y Lilian",
    subtitle: "Residencia con interiores",
    category: "Residencial + interiorismo",
    location: "Perú",
    year: "2026",
    cover: "/cim-projects/alfonso-lilian/01.jpg",
    stat: "05",
    summary:
      "Residencia contemporánea con fachada vertical, piscina e interiores desarrollados para visualizar materialidad, escala y confort antes de construir.",
    gallery: [
      "/cim-projects/alfonso-lilian/01.jpg",
      "/cim-projects/alfonso-lilian/02.jpg",
      "/cim-projects/alfonso-lilian/03.jpg",
      "/cim-projects/alfonso-lilian/04.jpg",
      "/cim-projects/alfonso-lilian/05.jpg",
      "/cim-projects/alfonso-lilian/06.jpg",
      "/cim-projects/alfonso-lilian/07.jpg",
      "/cim-projects/alfonso-lilian/08.jpg",
    ],
    deliverables: ["Fachada 3D", "Piscina", "Sala comedor", "Cocina", "Dormitorio", "Materialidad"],
  },
  {
    slug: "casa-romero",
    title: "Casa Romero",
    subtitle: "Vivienda con zona social",
    category: "Residencial",
    location: "Perú",
    year: "2026",
    cover: "/cim-projects/casa-romero/01.jpg",
    stat: "06",
    summary:
      "Casa de lenguaje moderno con fachada marcada, terraza, piscina y ambientes interiores preparados para evaluar acabados y experiencia de uso.",
    gallery: [
      "/cim-projects/casa-romero/01.jpg",
      "/cim-projects/casa-romero/02.jpg",
      "/cim-projects/casa-romero/03.jpg",
      "/cim-projects/casa-romero/04.jpg",
      "/cim-projects/casa-romero/05.jpg",
      "/cim-projects/casa-romero/06.jpg",
      "/cim-projects/casa-romero/07.jpg",
      "/cim-projects/casa-romero/08.jpg",
    ],
    deliverables: ["Fachada", "Piscina", "Sala doble altura", "Zona de parrillas", "Baño", "Visualización"],
  },
  {
    slug: "proyecto-salinas",
    title: "Proyecto Salinas",
    subtitle: "Residencia urbana vertical",
    category: "Residencial",
    location: "Perú",
    year: "2026",
    cover: "/cim-projects/salinas/01.jpg",
    stat: "07",
    summary:
      "Residencia vertical de fachada compacta, balcones y control solar, pensada para comunicar una presencia urbana clara y elegante.",
    gallery: [
      "/cim-projects/salinas/01.jpg",
      "/cim-projects/salinas/02.jpg",
      "/cim-projects/salinas/03.jpg",
      "/cim-projects/salinas/04.jpg",
    ],
    deliverables: ["Fachada", "Balcones", "Control solar", "Volumetría", "Presentación visual"],
  },
  {
    slug: "proyecto-castillo",
    title: "Proyecto Castillo",
    subtitle: "Residencia vertical",
    category: "Fachada + interiores",
    location: "Perú",
    year: "2026",
    cover: "/cim-projects/castillo/01.jpg",
    stat: "08",
    summary:
      "Proyecto residencial con fachada vertical, lenguaje contemporáneo e interiores diseñados para comunicar amplitud, materialidad y confort.",
    gallery: [
      "/cim-projects/castillo/01.jpg",
      "/cim-projects/castillo/02.jpg",
      "/cim-projects/castillo/03.jpg",
      "/cim-projects/castillo/04.jpg",
      "/cim-projects/castillo/05.jpg",
      "/cim-projects/castillo/06.jpg",
      "/cim-projects/castillo/07.jpg",
      "/cim-projects/castillo/08.jpg",
    ],
    deliverables: ["Fachada 3D", "Interiores", "Sala comedor", "Materialidad", "Presentación visual"],
  },
  {
    slug: "lumina-tower",
    title: "Lumina Tower",
    subtitle: "Torre residencial",
    category: "Residencial vertical",
    location: "Perú",
    year: "2026",
    cover: "/cim-projects/lumina-tower/01.jpg",
    stat: "09",
    summary:
      "Torre residencial con lenguaje vertical, balcones iluminados y una presencia urbana contemporánea pensada para destacar desde la primera vista.",
    gallery: [
      "/cim-projects/lumina-tower/01.jpg",
      "/cim-projects/lumina-tower/02.jpg",
      "/cim-projects/lumina-tower/03.jpg",
      "/cim-projects/lumina-tower/04.jpg",
      "/cim-projects/lumina-tower/05.jpg",
    ],
    deliverables: ["Fachada 3D", "Vistas exteriores", "Ingreso", "Balcones", "Presentación visual"],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
