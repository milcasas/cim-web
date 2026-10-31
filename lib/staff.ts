export type StaffAssignment = { memberId: string; role: string }
export type StaffGroup = { id: string; name: string; members: readonly StaffAssignment[] }
export type StaffArea = StaffGroup & { groups?: readonly StaffGroup[] }

export const staffAreas: readonly StaffArea[] = [
  {
    "id": "gerencia",
    "name": "Gerencia",
    "members": [
      {
        "memberId": "alejandro-mejia",
        "role": "Gerente general y fundador"
      },
      {
        "memberId": "luis-salinas",
        "role": "Subgerente general"
      }
    ]
  },
  {
    "id": "administrativa",
    "name": "Área administrativa",
    "members": [
      {
        "memberId": "jaruth-salas",
        "role": "Administradora"
      },
      {
        "memberId": "gloria-chavez",
        "role": "Asistente administrativa"
      }
    ]
  },
  {
    "id": "arquitectura",
    "name": "Área de Arquitectura",
    "members": [
      {
        "memberId": "christian-cruz",
        "role": "Arquitecto sénior"
      },
      {
        "memberId": "ana-vega",
        "role": "Arquitecta asistente"
      },
      {
        "memberId": "gianella-perez",
        "role": "Arquitecta asistente"
      },
      {
        "memberId": "paola-pereda",
        "role": "Arquitecta asistente"
      },
      {
        "memberId": "rubi-roldan",
        "role": "Arquitecta asistente"
      },
      {
        "memberId": "valeria-pacheco",
        "role": "Practicante de arquitectura"
      },
      {
        "memberId": "valentina-reyes",
        "role": "Practicante de arquitectura"
      }
    ]
  },
  {
    "id": "ingenieria",
    "name": "Área de Ingeniería",
    "members": [
      {
        "memberId": "kenny-casamayor",
        "role": "Ingeniero sénior"
      },
      {
        "memberId": "aaron-carbajal",
        "role": "Ingeniero asistente"
      },
      {
        "memberId": "imanol-anampa",
        "role": "Ingeniero asistente"
      },
      {
        "memberId": "jorge-montanez",
        "role": "Estructurista"
      },
      {
        "memberId": "angel-urbano",
        "role": "Practicante de ingeniería"
      }
    ]
  },
  {
    "id": "marketing",
    "name": "Área de Marketing",
    "members": [
      {
        "memberId": "fabian-avalos",
        "role": "Analista de marketing"
      }
    ]
  },
  {
    "id": "ventas",
    "name": "Área de Ventas",
    "members": [
      {
        "memberId": "gustavo-mora",
        "role": "Ejecutivo de ventas"
      }
    ]
  }
]

export const staffMembers = [
  {
    "id": "alejandro-mejia",
    "name": "Alejandro Mejía Alayo",
    "role": "Gerente general y fundador",
    "profession": "Ingeniero civil",
    "area": "direccion",
    "image": "/staff/alejandro-mejia.webp",
    "source": "20.png"
  },
  {
    "id": "luis-salinas",
    "name": "Luis Salinas Alayo",
    "role": "Subgerente general y director de marketing",
    "profession": "Ingeniero mecánico",
    "area": "direccion",
    "image": "/staff/luis-salinas.webp",
    "source": "21.png"
  },
  {
    "id": "jaruth-salas",
    "name": "Jaruth Salas Albitres",
    "role": "Coordinadora de proyectos",
    "profession": "Ingeniera civil",
    "area": "coordinacion",
    "image": "/staff/jaruth-salas.webp",
    "source": "22.png"
  },
  {
    "id": "christian-cruz",
    "name": "Christian Cruz Díaz",
    "role": "Arquitecto sénior",
    "profession": "Arquitecto",
    "area": "arquitectura",
    "image": "/staff/christian-cruz.webp",
    "source": "23.png"
  },
  {
    "id": "ana-vega",
    "name": "Ana Vega Vasquez",
    "role": "Asistente de arquitectura",
    "profession": "Arquitecta",
    "area": "arquitectura",
    "image": "/staff/ana-vega.webp",
    "source": "24.png"
  },
  {
    "id": "gianella-perez",
    "name": "Gianella Perez Gonzales",
    "role": "Arquitecta júnior",
    "profession": "Arquitecta",
    "area": "arquitectura",
    "image": "/staff/gianella-perez.webp",
    "source": "25.png"
  },
  {
    "id": "paola-pereda",
    "name": "Paola Pereda Monzon",
    "role": "Asistente de arquitectura",
    "profession": "Arquitecta",
    "area": "arquitectura",
    "image": "/staff/paola-pereda.webp",
    "source": "26.png"
  },
  {
    "id": "rubi-roldan",
    "name": "Rubi Roldan Carmona",
    "role": "Asistente de arquitectura",
    "profession": "Arquitecta",
    "area": "arquitectura",
    "image": "/staff/rubi-roldan.webp",
    "source": "27.png"
  },
  {
    "id": "jorge-montanez",
    "name": "Jorge Montañez Roque",
    "role": "Estructurista",
    "profession": "Ingeniero civil",
    "area": "ingenieria",
    "image": "/staff/jorge-montanez.webp",
    "source": "28.png"
  },
  {
    "id": "kenny-casamayor",
    "name": "Kenny Casamayor Moreno",
    "role": "Estructurista y sanitario",
    "profession": "Ingeniero civil",
    "area": "ingenieria",
    "image": "/staff/kenny-casamayor.webp",
    "source": "29.png"
  },
  {
    "id": "imanol-anampa",
    "name": "Imanol Anampa Reyes",
    "role": "Estructurista y sanitario",
    "profession": "Ingeniero civil",
    "area": "ingenieria",
    "image": "/staff/imanol-anampa.webp",
    "source": "30.png"
  },
  {
    "id": "aaron-carbajal",
    "name": "Aaron Carbajal Chavez",
    "role": "Estructurista y sanitario",
    "profession": "Ingeniero civil",
    "area": "ingenieria",
    "image": "/staff/aaron-carbajal.webp",
    "source": "31.png"
  },
  {
    "id": "fabian-avalos",
    "name": "Fabian Avalos Lázaro",
    "role": "Analista de datos",
    "profession": "Economista",
    "area": "administracion",
    "image": "/staff/fabian-avalos.webp",
    "source": "32.png"
  },
  {
    "id": "gustavo-mora",
    "name": "Gustavo Mora Muro",
    "role": "Ejecutivo comercial",
    "profession": "Ingeniero civil",
    "area": "comercial",
    "image": "/staff/gustavo-mora.webp",
    "source": "33.png"
  },
  {
    "id": "gloria-chavez",
    "name": "Gloria Chavez Moreno",
    "role": "Asistente de administración",
    "profession": "Licenciada",
    "area": "administracion",
    "image": "/staff/gloria-chavez.webp",
    "source": "34.png"
  },
  {
    "id": "valeria-pacheco",
    "name": "Valeria Pacheco Morales",
    "role": "Practicante de arquitectura",
    "profession": "Arquitecta",
    "area": "arquitectura",
    "image": "/staff/valeria-pacheco.webp",
    "source": "35.png"
  },
  {
    "id": "valentina-reyes",
    "name": "Valentina Reyes Torres",
    "role": "Practicante de arquitectura",
    "profession": "Arquitecta",
    "area": "arquitectura",
    "image": "/staff/valentina-reyes.webp",
    "source": "36.png"
  },
  {
    "id": "angel-urbano",
    "name": "Angel Urbano Hoyos",
    "role": "Practicante de ingeniería",
    "profession": "Ingeniero civil",
    "area": "ingenieria",
    "image": "/staff/angel-urbano.webp",
    "source": "37.png"
  }
] as const
