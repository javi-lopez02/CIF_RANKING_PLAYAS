import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

enum SpecializationAreas {
  BIOLOGIA_ECOLOGIA,
  GEOGRAFIA,
  GEOLOGIA,
  GESTION_COSTERA,
  INGENIERIA,
  OCEANOGRAFIA,
  QUIMICA,
  TURISMO,
  CIENCIAS_NATURALES,
  OTROS,
}

interface expertsType {
  name: string;
  email: string;
  institution: string;
  codeNode: string;
  specializationAreas: SpecializationAreas[] | string[];
  studyLevel:
    | "SECONDARIA_O_UNIVERSIDAD"
    | "GRADUADO_UNIVERSITARIO"
    | "ESPECIALIZACION"
    | "MASTER"
    | "DOCTORADO";
  experienceYears:
    | "MENOS_5"
    | "ENTRE_5_10"
    | "ENTRE_11_15"
    | "ENTRE_16_20"
    | "MAS_20";
}

async function main() {
  // Datos de expertos

  const experts: expertsType[] = [
    {
      name: "Aída Carolina Martínez Correa",
      email: "aidacarolinam@gmail.com",
      institution: "Alcaldía de Necoclí",
      codeNode: "E07",
      specializationAreas: ["TURISMO", "OTROS"],
      studyLevel: "ESPECIALIZACION",
      experienceYears: "MENOS_5",
    },
    {
      name: "Alba Mercadé",
      email: "mercade.alba@gmail.com",
      institution: "Beach Trotters",
      codeNode: "E37 Beach Trotters",
      specializationAreas: ["GESTION_COSTERA", "INGENIERIA", "OTROS"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MENOS_5",
    },
    {
      name: "Alfredo Jaramillo Velez",
      email: "alfredojaramillovelez@gmail.com",
      institution: "Massey University",
      codeNode: "NA",
      specializationAreas: ["OCEANOGRAFIA", "GESTION_COSTERA", "INGENIERIA"],
      studyLevel: "MASTER",
      experienceYears: "ENTRE_11_15",
    },
    {
      name: "Ana Faggi",
      email: "afaggi2003@yahoo.com.ar",
      institution: "Universidad de Flores",
      codeNode: "C 22",
      specializationAreas: ["CIENCIAS_NATURALES"],
      studyLevel: "DOCTORADO",
      experienceYears: "MAS_20",
    },
    {
      name: "Camilo M. Botero",
      email: "playascol@gmail.com",
      institution: "Grupo de Investigación en Sistemas Costeros",
      codeNode: "E07",
      specializationAreas: [
        "GESTION_COSTERA",
        "GEOGRAFIA",
        "INGENIERIA",
        "TURISMO",
      ],
      studyLevel: "DOCTORADO",
      experienceYears: "MAS_20",
    },
    {
      name: "CARLOS ENRIQUE ROJAS GUTIERREZ",
      email: "carlosrojas138@gmail.com",
      institution: "Alcaldia de Necocli",
      codeNode: "E07 SISTEMAS COSTEROS",
      specializationAreas: ["TURISMO"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MENOS_5",
    },
    {
      name: "Chadit serrano vergara",
      email: "chaditserranovergara@gmail.com",
      institution: "Cif playas",
      codeNode: "E 07sistemas costeros",
      specializationAreas: ["GESTION_COSTERA"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MENOS_5",
    },
    {
      name: "Cornejo Zúñiga José Ricardo",
      email: "jjosecornejo@gmail.com",
      institution: "Eccos INGENIERIA Sostenible",
      codeNode: "A13 - Ecoplayas",
      specializationAreas: ["INGENIERIA"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "ENTRE_5_10",
    },
    {
      name: "Darlin serrano vergara",
      email: "serranovergaradarlin24@gmail.com",
      institution: "Cifplayas",
      codeNode: "E07",
      specializationAreas: ["GESTION_COSTERA"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MENOS_5",
    },
    {
      name: "Dayana García Ortríz",
      email: "dayanagarciaortiz6@gmail.com",
      institution:
        "Centro de Servicios Ambientales Sancti Spíritus, Agencia de Medioambiente, Cuba",
      codeNode: "Nodo E 07",
      specializationAreas: [
        "GESTION_COSTERA",
        "QUIMICA",
        "INGENIERIA",
        "TURISMO",
      ],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MENOS_5",
    },
    {
      name: "Dick All Acuña Hereira",
      email: "DICK.3020@HOTMAIL.COM",
      institution: "Clúster de TURISMO del Atlántico",
      codeNode: "EO7",
      specializationAreas: ["TURISMO", "OTROS"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MENOS_5",
    },
    {
      name: "Dolores Astudillo",
      email: "diastudillob@gmail.com",
      institution: "Universidad del Pacífico",
      codeNode: "G49 ECUPAC",
      specializationAreas: ["INGENIERIA"],
      studyLevel: "MASTER",
      experienceYears: "MENOS_5",
    },
    {
      name: "Duván Esteban Cárdenas Sepúlveda",
      email: "duvan.cardenass@udea.edu.co",
      institution: "Cifplayas",
      codeNode: "E07",
      specializationAreas: ["OCEANOGRAFIA"],
      studyLevel: "SECONDARIA_O_UNIVERSIDAD",
      experienceYears: "MENOS_5",
    },
    {
      name: "Edelkis Rodríguez Moya",
      email: "edelkisrm1971@gmail.com",
      institution: "Centro de Estudios y Servicios Ambientales",
      codeNode: "E-27",
      specializationAreas: ["GESTION_COSTERA"],
      studyLevel: "MASTER",
      experienceYears: "ENTRE_16_20",
    },
    {
      name: "Elier Alexander Córdova García",
      email: "cordovaelier7@gmail.com",
      institution:
        "Centro de Investigaciones y Servicios Ambientales (Cisat-AMA-CITMA-Cuba)",
      codeNode: "E07",
      specializationAreas: ["GESTION_COSTERA", "GEOGRAFIA"],
      studyLevel: "MASTER",
      experienceYears: "MAS_20",
    },
    {
      name: "Félix A. Correa Álvarez",
      email: "felixacorrea93@gmail.com",
      institution:
        "Centro de Estudios y Servicios Ambientales de Villa Clara (CESAMVC)",
      codeNode: "E-27",
      specializationAreas: ["GESTION_COSTERA", "GEOGRAFIA"],
      studyLevel: "MASTER",
      experienceYears: "ENTRE_5_10",
    },
    {
      name: "Francisco Alcocer y Lozano",
      email: "caboscoastkeeper2@gmail.com",
      institution: "Los Cabos Coastkeeper, A.C.",
      codeNode: "A30",
      specializationAreas: ["GESTION_COSTERA", "TURISMO", "OTROS"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MAS_20",
    },
    {
      name: "Frank Huerta López",
      email: "frankhl2014@gmail.com",
      institution: "Formatur Varadero",
      codeNode: "Costatenas",
      specializationAreas: ["TURISMO"],
      studyLevel: "MASTER",
      experienceYears: "ENTRE_16_20",
    },
    {
      name: "Gladys Pérez de la Fuente",
      email: "gpfuente2@gmail.com",
      institution: "PROPLAYAS Riviera Maya",
      codeNode: "Nodo Local 02 PROPLAYAS Riviera Maya",
      specializationAreas: ["OTROS"],
      studyLevel: "MASTER",
      experienceYears: "MAS_20",
    },
    {
      name: "Gleini Gallardo",
      email: "gleini@gmail.com",
      institution: "Universidad Autónoma del Caribe",
      codeNode: "Colombia",
      specializationAreas: ["BIOLOGIA_ECOLOGIA", "TURISMO"],
      studyLevel: "DOCTORADO",
      experienceYears: "ENTRE_16_20",
    },
    {
      name: "GUSTAVO EUGENIO ECHEVERRI JARAMILLO",
      email: "gustavo.echeverri@gmail.com",
      institution: "UNIVERSIDAD DE SAN BUENAVENTURA CARTAGENA",
      codeNode: "GRUPO GIMA C 06",
      specializationAreas: ["OTROS"],
      studyLevel: "DOCTORADO",
      experienceYears: "ENTRE_5_10",
    },
    {
      name: "Hugo Hidalgo Colindres",
      email: "integramar@yahoo.es",
      institution: "IICI-Cunizab",
      codeNode: "Cariguat46",
      specializationAreas: [
        "GESTION_COSTERA",
        "QUIMICA",
        "CIENCIAS_NATURALES",
        "TURISMO",
      ],
      studyLevel: "MASTER",
      experienceYears: "MAS_20",
    },
    {
      name: "Idania Hernández Ramos",
      email: "idaniahr1972@gmail.com",
      institution:
        "Centro de Servicios Ambientales, Sancti Spíritus, Agencia de Medioambiente Cuba",
      codeNode: "Nodo E 07",
      specializationAreas: [
        "GESTION_COSTERA",
        "QUIMICA",
        "INGENIERIA",
        "TURISMO",
      ],
      studyLevel: "MASTER",
      experienceYears: "MAS_20",
    },
    {
      name: "JAISER CARDONA",
      email: "jaiser01@gmail.com",
      institution: "PARTICULAR",
      codeNode: "E67 ICONOPLAYA",
      specializationAreas: ["OTROS"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "ENTRE_5_10",
    },
    {
      name: "John Edison Usuga Jaramillo",
      email: "edison.usuga@udea.edu.co",
      institution: "Universidad De Antioquia",
      codeNode: "E07 Sistemas Costeros",
      specializationAreas: [
        "OCEANOGRAFIA",
        "GESTION_COSTERA",
        "INGENIERIA",
        "TURISMO",
      ],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MENOS_5",
    },
    {
      name: "Juan Alfredo Cabrera Hernández",
      email: "alfredojuan1956@gmail.com",
      institution: "Universidad de Matanzas",
      codeNode: "Nodo 14 COSTATENAS",
      specializationAreas: ["GEOGRAFIA"],
      studyLevel: "DOCTORADO",
      experienceYears: "MAS_20",
    },
    {
      name: "Liliam Rojas López",
      email: "meli.annily@gmail.com",
      institution: "Centro de Servicios Ambientales de Matanzas (CSAM)",
      codeNode: "Costatenas-ofiplaya (matanzas-cuba)",
      specializationAreas: ["GESTION_COSTERA", "OTROS"],
      studyLevel: "SECONDARIA_O_UNIVERSIDAD",
      experienceYears: "MAS_20",
    },
    {
      name: "Luis Cesar Herrera",
      email: "iconoplaya.ne@gmail.com",
      institution: "Particular",
      codeNode: "E67 iconoplaya",
      specializationAreas: ["GESTION_COSTERA"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "ENTRE_5_10",
    },
    {
      name: "Manuel García Castro",
      email: "manuelgarciacastro84@gmail.com",
      institution: "Centro de Estudios y Servicios Ambientales",
      codeNode: "E-27",
      specializationAreas: ["GEOGRAFIA"],
      studyLevel: "ESPECIALIZACION",
      experienceYears: "MAS_20",
    },
    {
      name: "Manuela Rendón Osorio",
      email: "manuela.rendon2@udea.edu.co",
      institution: "Universidad de Antioquia",
      codeNode: "E-07",
      specializationAreas: ["OCEANOGRAFIA"],
      studyLevel: "SECONDARIA_O_UNIVERSIDAD",
      experienceYears: "MENOS_5",
    },
    {
      name: "Mario Alberto Palacios Moreno",
      email: "mario.palacios@upacifico.edu.ec",
      institution: "Universidad Del Pacífico",
      codeNode: "C49 ECUPAC",
      specializationAreas: ["BIOLOGIA_ECOLOGIA", "GESTION_COSTERA"],
      studyLevel: "MASTER",
      experienceYears: "MAS_20",
    },
    {
      name: "Maritza Barreto",
      email: "maritza.barreto@upr.edu",
      institution:
        "Escuela Graduada de Planificación Universidad de Puerto Rico",
      codeNode: "25",
      specializationAreas: ["GEOLOGIA"],
      studyLevel: "DOCTORADO",
      experienceYears: "MAS_20",
    },
    {
      name: "PALOMA ARIAS ORDIALES",
      email: "palomaguaiano@gmail.com",
      institution: "INSTITUTO ESCOLA DO MAR",
      codeNode: "A61 IEMAR",
      specializationAreas: ["GESTION_COSTERA", "TURISMO", "OTROS"],
      studyLevel: "ESPECIALIZACION",
      experienceYears: "MAS_20",
    },
    {
      name: "Patricia Guadarrama",
      email: "pguadarrama@ciencias.unam.mx",
      institution: "UNAM",
      codeNode: "A79 Reciclando Dunas",
      specializationAreas: ["BIOLOGIA_ECOLOGIA", "CIENCIAS_NATURALES"],
      studyLevel: "DOCTORADO",
      experienceYears: "MAS_20",
    },
    {
      name: "Sofia Torres",
      email: "sofiatorresid@unimagdalena.edu.co",
      institution: "Sistemas Costeros",
      codeNode: "E07",
      specializationAreas: ["CIENCIAS_NATURALES", "INGENIERIA"],
      studyLevel: "SECONDARIA_O_UNIVERSIDAD",
      experienceYears: "MENOS_5",
    },
    {
      name: "Teresa Vera San Martín",
      email: "teresa_vera@hotmail.com",
      institution: "Universidad de la Costa",
      codeNode: "C49 Ecupac",
      specializationAreas: ["OCEANOGRAFIA", "GEOGRAFIA"],
      studyLevel: "MASTER",
      experienceYears: "ENTRE_5_10",
    },
    {
      name: "Yunior Ramón Velázquez Labrada",
      email: "yvlabrada@gmail.com",
      institution:
        "Centro de Estudios Multidisciplinarios de Zonas Costeras, Universidad de Oriente, Santiago de Cuba",
      codeNode: "C44- CEMZOC-UO",
      specializationAreas: ["BIOLOGIA_ECOLOGIA"],
      studyLevel: "DOCTORADO",
      experienceYears: "ENTRE_11_15",
    },
    {
      name: "Zulema Mir Frutos",
      email: "zulemir85@gmail.com",
      institution:
        "Centro de Investigaciones y Servicios Ambientales (CISAT, AMA, CITMA, CUBA)",
      codeNode: "E07",
      specializationAreas: ["GESTION_COSTERA", "OTROS"],
      studyLevel: "MASTER",
      experienceYears: "MENOS_5",
    },
    {
      name: "Danilo Souza Santana",
      email: "danilo130295@gmail.com",
      institution: "UFBA",
      codeNode: "Nodo C34 - Paranoá",
      specializationAreas: ["GEOGRAFIA"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MENOS_5",
    },
    {
      name: "Flavia Lins de Barros",
      email: "flaviamlb@gmail.com",
      institution: "UFRJ",
      codeNode: "C33 Geografia Marinha",
      specializationAreas: ["GEOGRAFIA"],
      studyLevel: "DOCTORADO",
      experienceYears: "ENTRE_16_20",
    },
    {
      name: "Hugo Diniz Brandão",
      email: "hugodbo@gmail.com",
      institution: "Avaliador",
      codeNode: "C33 GEOGRAFIA",
      specializationAreas: ["GEOGRAFIA"],
      studyLevel: "SECONDARIA_O_UNIVERSIDAD",
      experienceYears: "MENOS_5",
    },
    {
      name: "José Rodrigues de Souza Filho",
      email: "jrsouzaGEOGRAFIA@gmail.com",
      institution: "Instituto Federal Baiano - IF Baiano",
      codeNode: "C34 - Paranoá",
      specializationAreas: ["GESTION_COSTERA"],
      studyLevel: "DOCTORADO",
      experienceYears: "MAS_20",
    },
    {
      name: "Júlia Macêdo",
      email: "juliammc01@gmail.com",
      institution: "IFBA",
      codeNode: "Red Proplayas Nodo C34 - Paranoá",
      specializationAreas: ["GEOGRAFIA"],
      studyLevel: "GRADUADO_UNIVERSITARIO",
      experienceYears: "MENOS_5",
    },
    {
      name: "Junia Kacenelenbogen Guimarães",
      email: "juniakg@gmail.com",
      institution: "Universidade Federal da Bahia",
      codeNode: "C34 - Paranoá",
      specializationAreas: ["GEOLOGIA"],
      studyLevel: "DOCTORADO",
      experienceYears: "ENTRE_16_20",
    },
    {
      name: "Lívia Garcia Prado",
      email: "liviagarciaprado@gmail.com",
      institution: "Universidade do Vale do Itajaí (UNIVALI)",
      codeNode: "E07",
      specializationAreas: ["GESTION_COSTERA"],
      studyLevel: "DOCTORADO",
      experienceYears: "MENOS_5",
    },
  ];

  // Insertar expertos y mapear names a IDs
  const expertsMap: Record<string, string> = {};

  for (const expertData of experts) {
    const exper = await prisma.expert.create({
      data: {
        name: expertData.name,
        email: expertData.email,
        institution: expertData.institution,
        codeNode: expertData.codeNode,
        specializationAreas: expertData.specializationAreas as any, // Asegúrate de que estos valores coincidan con tu enum en Prisma
        studyLevel: expertData.studyLevel,
        experienceYears: expertData.experienceYears,
      },
    });
    expertsMap[exper.name] = exper.id;
  }

  // Datos de playas

  interface beachType {
    name: string;
    city: string;
    state: string;
    country: string;
    region: string;
    beachType: "URBANA" | "DE_POBLADO" | "RURAL" | "NATURAL";
    BQV: number;
  }

  const playas: beachType[] = [
    {
      name: "Varadero (Meliá Antillas)",
      city: "Varadero",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.951,
    },
    {
      name: "Itauna",
      city: "Saquarema",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.943,
    },
    {
      name: "Varadero Histórico",
      city: "Varadero",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.937,
    },
    {
      name: "Varadero (Hotel Internacional)",
      city: "Varadero",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.928,
    },
    {
      name: "Ponta de Nossa Senhora de Guadalupe",
      city: "Salvador",
      state: "Bahia",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.915,
    },
    {
      name: "Praia de Grumari",
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "RURAL",
      BQV: 0.906,
    },
    {
      name: "La Estrella (Santa Maria)",
      city: "Cayo Santa María",
      state: "Villa Clara",
      country: "Cuba",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.905,
    },
    {
      name: "Perla Blanca (Sector Paradissus)",
      city: "Cayo Santa María",
      state: "Villa Clara",
      country: "Cuba",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.904,
    },
    {
      name: "Praia do Forno",
      city: "Búzios",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.9,
    },
    {
      name: "Praia Azeda",
      city: "Búzios",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "RURAL",
      BQV: 0.9,
    },
    {
      name: "Praia do Forte (Porto)",
      city: "Mata de São João",
      state: "Bahia",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.893,
    },
    {
      name: "Praia de Ubás",
      city: "Iguaba Grande",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.89,
    },
    {
      name: "Santa Fe",
      city: "Tulum",
      state: "Quintana Roo",
      country: "México",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.89,
    },
    {
      name: "Piedra Movida (Sector Gran Muthu)",
      city: "Cayo Santa María",
      state: "Villa Clara",
      country: "Cuba",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.889,
    },
    {
      name: "Piscina Natural Costa Sur",
      city: "Trinidad",
      state: "Trinidad",
      country: "Cuba",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.887,
    },
    {
      name: "Morro de São Paulo (Segunda Praia)",
      city: "Cairú",
      state: "Bahia",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.877,
    },
    {
      name: "La Paella",
      city: "Torredembarra",
      state: "Cataluña",
      country: "España",
      region: "Mediterraneo",
      beachType: "URBANA",
      BQV: 0.865,
    },
    {
      name: "Varadero (Iberostar Tainos)",
      city: "Varadero",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.863,
    },
    {
      name: "Prainha",
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "RURAL",
      BQV: 0.862,
    },
    {
      name: "Costa do Sauípe (Oca)",
      city: "Mata de São João",
      state: "Bahia",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.851,
    },
    {
      name: "Praia de Itacoatiara",
      city: "Niterói",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.844,
    },
    {
      name: "Punta Astilleros",
      city: "Piojo",
      state: "Atlántico",
      country: "Colombia",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.838,
    },
    {
      name: "Ponta da Farinha",
      city: "Iguaba Grande",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "RURAL",
      BQV: 0.837,
    },
    {
      name: "Escambron",
      city: "San Juan",
      state: "San Juan",
      country: "Puerto Rico",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.833,
    },
    {
      name: "Faro de Maya",
      city: "Matanzas",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.833,
    },
    {
      name: "Delfines",
      city: "Cancún",
      state: "Quintana Roo",
      country: "México",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.831,
    },
    {
      name: "Praia do Peró",
      city: "Cabo Frio",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.824,
    },
    {
      name: "Punta Esmeralda",
      city: "Playa del Carmen",
      state: "Quintana Roo",
      country: "México",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.82,
    },
    {
      name: "Pontal do Peró",
      city: "Cabo frio",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.82,
    },
    {
      name: "Ancón",
      city: "Trinidad",
      state: "Villa Clara",
      country: "Cuba",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.814,
    },
    {
      name: "Botavara",
      city: "Pinamar",
      state: "Buenos Aires",
      country: "Argentina",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.812,
    },
    {
      name: "Stoney Island",
      city: "Barrington",
      state: "Nueva Escocia",
      country: "Canada",
      region: "Atlantico Norte",
      beachType: "DE_POBLADO",
      BQV: 0.812,
    },
    {
      name: "Makara",
      city: "Wellington",
      state: "Wellington",
      country: "New Zealand",
      region: "Pacífico",
      beachType: "DE_POBLADO",
      BQV: 0.809,
    },
    {
      name: "Flamenco",
      city: "Culebra",
      state: "Culebra",
      country: "Puerto Rico",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.803,
    },
    {
      name: "El Cristo",
      city: "Mayarí",
      state: "Holguín",
      country: "Cuba",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.797,
    },
    {
      name: "Farol de Itapuã",
      city: "Salvador",
      state: "Bahia",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.794,
    },
    {
      name: "Sevilla",
      city: "Guamá",
      state: "Santiago de Cuba",
      country: "Cuba",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.789,
    },
    {
      name: "Palmilla",
      city: "San José del Cabo",
      state: "Baja California Sur",
      country: "México",
      region: "Pacífico",
      beachType: "URBANA",
      BQV: 0.784,
    },
    {
      name: "Playuela",
      city: "Cabo Rojo",
      state: "Mayaguez",
      country: "Puerto Rico",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.783,
    },
    {
      name: "Boipeba (Boca da Barra)",
      city: "Cairú",
      state: "Bahia",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.781,
    },
    {
      name: "Villa Gesell",
      city: "Villa Gesell",
      state: "Buenos Aires",
      country: "Argentina",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.776,
    },
    {
      name: "Playa del Canyadell",
      city: "Torredembarra",
      state: "Cataluña",
      country: "España",
      region: "Mediterraneo",
      beachType: "DE_POBLADO",
      BQV: 0.776,
    },
    {
      name: "Santa María",
      city: "Cabo San Lucas",
      state: "Baja California Sur",
      country: "México",
      region: "Pacífico",
      beachType: "URBANA",
      BQV: 0.775,
    },
    {
      name: "Malecón de Playas",
      city: "Playas (General Villamil)",
      state: "Guayaquil",
      country: "Ecuador",
      region: "Pacífico",
      beachType: "URBANA",
      BQV: 0.766,
    },
    {
      name: "La Barceloneta",
      city: "Barcelona",
      state: "Cataluña",
      country: "España",
      region: "Mediterraneo",
      beachType: "URBANA",
      BQV: 0.763,
    },
    {
      name: "Praia de Ipanema",
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.763,
    },
    {
      name: "Turipana",
      city: "Tubara",
      state: "Atlántico",
      country: "Colombia",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.762,
    },
    {
      name: "El Peñón",
      city: "Mayarí",
      state: "Holguín",
      country: "Cuba",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.759,
    },
    {
      name: "Black Duck Cove",
      city: "Guysborough",
      state: "Nueva Escocia",
      country: "Canada",
      region: "Atlantico Norte",
      beachType: "DE_POBLADO",
      BQV: 0.759,
    },
    {
      name: "Cazonal",
      city: "Santiago de Cuba",
      state: "Santiago de Cuba",
      country: "Cuba",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.749,
    },
    {
      name: "Culebrita",
      city: "Culebra",
      state: "Culebra",
      country: "Puerto Rico",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.745,
    },
    {
      name: "Las Viudas",
      city: "Cabo San Lucas",
      state: "Baja California Sur",
      country: "México",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.744,
    },
    {
      name: "Chileno",
      city: "San Jose del Cabo",
      state: "Baja California Sur",
      country: "México",
      region: "Pacífico",
      beachType: "URBANA",
      BQV: 0.742,
    },
    {
      name: "Praia do Leblon",
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.74,
    },
    {
      name: "Simona del Mar",
      city: "Turbo",
      state: "Antioquia",
      country: "Colombia",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.735,
    },
    {
      name: "Varadero",
      city: "Data de Posorja",
      state: "Guayaquil",
      country: "Ecuador",
      region: "Pacífico",
      beachType: "DE_POBLADO",
      BQV: 0.733,
    },
    {
      name: "Guayacán",
      city: "Guayacán",
      state: "Isla Margarita",
      country: "Venezuela",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.728,
    },
    {
      name: "Acapulquito",
      city: "San José del Cabo",
      state: "Baja California Sur",
      country: "México",
      region: "Pacífico",
      beachType: "URBANA",
      BQV: 0.727,
    },
    {
      name: "Rainbow Heaven",
      city: "Halifax Metro",
      state: "Nueva Escocia",
      country: "Canada",
      region: "Atlantico Norte",
      beachType: "DE_POBLADO",
      BQV: 0.724,
    },
    {
      name: "Praia de Taquaras",
      city: "Balneário Camboriú",
      state: "Santa Catarina",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.723,
    },
    {
      name: "Guardalavaca",
      city: "Banes",
      state: "Holguín",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.723,
    },
    {
      name: "El Morrillo",
      city: "Matanzas",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.719,
    },
    {
      name: "Ayangue",
      city: "Santa Elena",
      state: "Guayaquil",
      country: "Ecuador",
      region: "Pacífico",
      beachType: "DE_POBLADO",
      BQV: 0.719,
    },
    {
      name: "Chivirico",
      city: "Guamá",
      state: "Santiago de Cuba",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.719,
    },
    {
      name: "La Pared",
      city: "La Pared",
      state: "Isla Margarita",
      country: "Venezuela",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.718,
    },
    {
      name: "Inverness",
      city: "Inverness",
      state: "Nueva Escocia",
      country: "Canada",
      region: "Atlantico Norte",
      beachType: "DE_POBLADO",
      BQV: 0.718,
    },
    {
      name: "Praia de Placaford",
      city: "Salvador",
      state: "Bahia",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.714,
    },
    {
      name: "Praia do Estaleirinho",
      city: "Balneário Camboriú",
      state: "Santa Catarina",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.709,
    },
    {
      name: "Puerto Engabao",
      city: "Playas Villamil",
      state: "Guayaquil",
      country: "Ecuador",
      region: "Pacífico",
      beachType: "DE_POBLADO",
      BQV: 0.708,
    },
    {
      name: "Sardinera",
      city: "Hatillo",
      state: "Hatillo",
      country: "Puerto Rico",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.703,
    },
    {
      name: "Playa Dulce",
      city: "Turbo",
      state: "Antioquia",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.699,
    },
    {
      name: "San Pablo",
      city: "Santa Elena",
      state: "Guayaquil",
      country: "Ecuador",
      region: "Pacífico",
      beachType: "DE_POBLADO",
      BQV: 0.697,
    },
    {
      name: "Praia do Estaleiro",
      city: "Balneário Camboriú",
      state: "Santa Catarina",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.697,
    },
    {
      name: "La Primavera",
      city: "Necoclí",
      state: "Antioquia",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.697,
    },
    {
      name: "Siboney",
      city: "Santiago de Cuba",
      state: "Santiago de Cuba",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.695,
    },
    {
      name: "Bello Horizonte (Sector Zuana)",
      city: "Santa Marta",
      state: "Magdalena",
      country: "Colombia",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.692,
    },
    {
      name: "Ballenita",
      city: "Santa Elena",
      state: "Guayaquil",
      country: "Ecuador",
      region: "Pacífico",
      beachType: "DE_POBLADO",
      BQV: 0.689,
    },
    {
      name: "Coca Cola",
      city: "Puerto Cortez",
      state: "Honduras",
      country: "Guatemala",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.689,
    },
    {
      name: "Paraíso de Engabao",
      city: "Engabao",
      state: "Guayaquil",
      country: "Ecuador",
      region: "Pacífico",
      beachType: "RURAL",
      BQV: 0.688,
    },
    {
      name: "Porto da Barra",
      city: "Salvador",
      state: "Bahia",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.685,
    },
    {
      name: "Juventud",
      city: "Pampatar",
      state: "Isla Margarita",
      country: "Venezuela",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.685,
    },
    {
      name: "El Descanso",
      city: "Ciénaga de Zapata",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.684,
    },
    {
      name: "EL Mamey",
      city: "Matanzas",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.678,
    },
    {
      name: "Buey Vaca",
      city: "Matanzas",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.678,
    },
    {
      name: "Puerto Colombia (Muelle-Malecón)",
      city: "Puerto Colombia",
      state: "Atlántico",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.677,
    },
    {
      name: "Chabelita",
      city: "Playas Villamil",
      state: "Guayaquil",
      country: "Ecuador",
      region: "Pacífico",
      beachType: "URBANA",
      BQV: 0.676,
    },
    {
      name: "Praia de Taquarinhas",
      city: "Balneário Camboriú",
      state: "Santa Catarina",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "DE_POBLADO",
      BQV: 0.675,
    },
    {
      name: "Praia Brava",
      city: "Itajaí",
      state: "Santa Catarina",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.667,
    },
    {
      name: "Mendoza",
      city: "Tubará",
      state: "Atlántico",
      country: "Colombia",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.667,
    },
    {
      name: "Ribeira (Penha)",
      city: "Salvador",
      state: "Bahia",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.666,
    },
    {
      name: "Alcatraz",
      city: "Puerto Colombia",
      state: "Atlántico",
      country: "Colombia",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.666,
    },
    {
      name: "La Estrella",
      city: "Santiago de Cuba",
      state: "Santiago de Cuba",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.66,
    },
    {
      name: "Sabanilla",
      city: "Puerto Colombia",
      state: "Atlántico",
      country: "Colombia",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.654,
    },
    {
      name: "Praia do Arpoador",
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.643,
    },
    {
      name: "Guacuco",
      city: "Guacuco",
      state: "Isla Margarita",
      country: "Venezuela",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.64,
    },
    {
      name: "Chulluype",
      city: "Santa Elena",
      state: "Guayaquil",
      country: "Ecuador",
      region: "Pacífico",
      beachType: "DE_POBLADO",
      BQV: 0.633,
    },
    {
      name: "Playa Larga",
      city: "Ciénaga de Zapata",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.628,
    },
    {
      name: "Playa del Caimán",
      city: "Cienaga",
      state: "Magdalena",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.624,
    },
    {
      name: "Caletones",
      city: "Gibara",
      state: "Holguín",
      country: "Cuba",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.623,
    },
    {
      name: "Playa Grande",
      city: "Santa Marta",
      state: "Magdalena",
      country: "Colombia",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.617,
    },
    {
      name: "Los Yuyos",
      city: "Barranco",
      state: "Lima metropolitana",
      country: "Perú",
      region: "Pacífico",
      beachType: "URBANA",
      BQV: 0.617,
    },
    {
      name: "Faro de Puerto Colombia",
      city: "Puerto Colombia",
      state: "Atlántico",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.614,
    },
    {
      name: "Playa Blanca",
      city: "Rafael Freyre",
      state: "Holguín",
      country: "Cuba",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.613,
    },
    {
      name: "Sisal",
      city: "Hunucma",
      state: "Yucatan",
      country: "México",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.611,
    },
    {
      name: "Bocagrande (Sector Hotelero)",
      city: "Cartagena de Indias",
      state: "Bolivar",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.61,
    },
    {
      name: "La Martina",
      city: "Turbo",
      state: "Antioquia",
      country: "Colombia",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.608,
    },
    {
      name: "Máquina",
      city: "Ciénaga de Zapata",
      state: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.598,
    },
    {
      name: "Marbella (Sector Ibis)",
      city: "Cartagena de Indias",
      state: "Bolivar",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.598,
    },
    {
      name: "Praia Central",
      city: "Balneário Camboriú",
      state: "Santa Catarina",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.592,
    },
    {
      name: "El Rodadero",
      city: "Santa Marta",
      state: "Magdalena",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.59,
    },
    {
      name: "El Turista",
      city: "Necoclí",
      state: "Antioquia",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.59,
    },
    {
      name: "Pozos Colorados (Sierra Laguna)",
      city: "Santa Marta",
      state: "Magdalena",
      country: "Colombia",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.598,
    },
    {
      name: "Bahia de Santa Marta",
      city: "Santa Marta",
      state: "Magdalena",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.598,
    },
    {
      name: "El Pescador",
      city: "Necoclí",
      state: "Antioquia",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.592,
    },
    {
      name: "El Faro",
      city: "Gibara",
      state: "Holguín",
      country: "Cuba",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.59,
    },
    {
      name: "Bella Vista",
      city: "Porlamar",
      state: "Isla Margarita",
      country: "Venezuela",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.59,
    },
    {
      name: "Playa Blanca",
      city: "Cartagena",
      state: "Bolivar",
      country: "Colombia",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.589,
    },
    {
      name: "Copacabana",
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      country: "Brasil",
      region: "Atlantico Sur",
      beachType: "URBANA",
      BQV: 0.587,
    },
    {
      name: "Malecón de Las Americas",
      city: "Necoclí",
      state: "Antioquia",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.584,
    },
    {
      name: "Pozos Colorados (Santamar)",
      city: "Santa Marta",
      state: "Magdalena",
      country: "Colombia",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.579,
    },
    {
      name: "Punta de Palma",
      city: "Puerto Barrios",
      state: "Izabal.",
      country: "Guatemala",
      region: "Caribe",
      beachType: "URBANA",
      BQV: 0.578,
    },
    {
      name: "Taganga",
      city: "Santa Marta",
      state: "Magdalena",
      country: "Colombia",
      region: "Caribe",
      beachType: "RURAL",
      BQV: 0.578,
    },
    {
      name: "Celestun",
      city: "Celestun",
      state: "Yucatan",
      country: "México",
      region: "Caribe",
      beachType: "DE_POBLADO",
      BQV: 0.533,
    },
  ];

  // Insertar playas y mapear nombres a IDs
  const beachMap: Record<string, string> = {};

  for (const beachData of playas) {
    const playa = await prisma.beach.create({
      data: beachData,
    });
    beachMap[playa.name] = playa.id;
  }

  console.log("Playas y expertos guardados exitosamente.");

  const evaluaciones = [
    {
      name: "Aída Carolina Martínez Correa",
      playas: [
        {
          name: "La Primavera",
          creditibilyIndex: 0.6,
        },
      ],
    },
    {
      name: "Alba Mercadé",
      playas: [
        {
          name: "La Barceloneta",
          creditibilyIndex: 0.5,
        },
        {
          name: "La Paella",
          creditibilyIndex: 0.5,
        },
        {
          name: "Playa del Canyadell",
          creditibilyIndex: 0.5,
        },
      ],
    },
    {
      name: "Alfredo Jaramillo Velez",
      playas: [
        {
          name: "Makara",
          creditibilyIndex: 0.65,
        },
      ],
    },
    {
      name: "Ana Faggi",
      playas: [
        {
          name: "Botavara",
          creditibilyIndex: 1.0,
        },
        {
          name: "Villa Gesell",
          creditibilyIndex: 1.0,
        },
      ],
    },
    {
      name: "Camilo M. Botero",
      playas: [
        {
          name: "Black Duck Cove",
          creditibilyIndex: 0.95,
        },
        {
          name: "Inverness",
          creditibilyIndex: 0.95,
        },
        {
          name: "Rainbow Heaven",
          creditibilyIndex: 0.95,
        },
        {
          name: "Stoney Island",
          creditibilyIndex: 0.95,
        },
        {
          name: "Bello Horizonte (Sector Zuana)",
          creditibilyIndex: 1.0,
        },
        {
          name: "El Rodadero",
          creditibilyIndex: 1.0,
        },
        {
          name: "Playa del Caimán",
          creditibilyIndex: 0.9,
        },
        {
          name: "Playa Grande",
          creditibilyIndex: 1.0,
        },
        {
          name: "Pozos Colorados (Santamar)",
          creditibilyIndex: 0.9,
        },
        {
          name: "Pozos Colorados (Sierra Laguna)",
          creditibilyIndex: 0.9,
        },
      ],
    },
    {
      name: "CARLOS ENRIQUE ROJAS GUTIERREZ",
      playas: [
        {
          name: "El Pescador",
          creditibilyIndex: 0.6,
        },
      ],
    },
    {
      name: "Chadit serrano vergara",
      playas: [
        {
          name: "Malecón de Las Americas",
          creditibilyIndex: 0.5,
        },
      ],
    },
    {
      name: "Danilo Souza Santana",
      playas: [
        {
          name: "Farol de Itapuã",
          creditibilyIndex: 0.5,
        },
        {
          name: "Praia de Placaford",
          creditibilyIndex: 0.55,
        },
      ],
    },
    {
      name: "Darlin serrano vergara",
      playas: [
        {
          name: "El Turista",
          creditibilyIndex: 0.5,
        },
      ],
    },
    {
      name: "Dayana García Ortríz",
      playas: [
        {
          name: "Piscina Natural Costa Sur",
          creditibilyIndex: 0.6,
        },
      ],
    },
    {
      name: "Dick All Acuña Hereira",
      playas: [
        {
          name: "Alcatraz",
          creditibilyIndex: 0.65,
        },
        {
          name: "Punta Astilleros",
          creditibilyIndex: 0.65,
        },
        {
          name: "Sabanilla",
          creditibilyIndex: 0.65,
        },
      ],
    },
    {
      name: "Dolores Astudillo",
      playas: [
        {
          name: "Chulluype",
          creditibilyIndex: 0.65,
        },
        {
          name: "Ballenita",
          creditibilyIndex: 0.65,
        },
      ],
    },
    {
      name: "Duván Esteban Cárdenas Sepúlveda",
      playas: [
        {
          name: "Playa Blanca",
          creditibilyIndex: 0.45,
        },
        {
          name: "Playa Dulce",
          creditibilyIndex: 0.5,
        },
        {
          name: "Simona del Mar",
          creditibilyIndex: 0.3,
        },
      ],
    },
    {
      name: "Edelkis Rodríguez Moya",
      playas: [
        {
          name: "La Estrella (Santa Maria)",
          creditibilyIndex: 0.9,
        },
      ],
    },
    {
      name: "Elier Alexander Córdova García",
      playas: [
        {
          name: "Caletones",
          creditibilyIndex: 0.65,
        },
        {
          name: "El Cristo",
          creditibilyIndex: 0.7,
        },
        {
          name: "El Faro",
          creditibilyIndex: 0.65,
        },
        {
          name: "El Peñón",
          creditibilyIndex: 0.65,
        },
        {
          name: "Guardalavaca",
          creditibilyIndex: 0.7,
        },
      ],
    },
    {
      name: "Félix A. Correa Álvarez",
      playas: [
        {
          name: "Piedra Movida (Sector Gran Muthu)",
          creditibilyIndex: 0.8,
        },
      ],
    },
    {
      name: "Flavia Lins de Barros",
      playas: [
        {
          name: "Copacabana",
          creditibilyIndex: 0.65,
        },
        {
          name: "Praia do Peró",
          creditibilyIndex: 0.7,
        },
      ],
    },
    {
      name: "Francisco Alcocer y Lozano",
      playas: [
        {
          name: "Las Viudas",
          creditibilyIndex: 0.7,
        },
        {
          name: "Santa María",
          creditibilyIndex: 0.7,
        },
        {
          name: "Acapulquito",
          creditibilyIndex: 0.7,
        },
        {
          name: "Chileno",
          creditibilyIndex: 0.7,
        },
        {
          name: "Palmilla",
          creditibilyIndex: 0.7,
        },
      ],
    },
    {
      name: "Frank Huerta López",
      playas: [
        {
          name: "Varadero (Iberostar Tainos)",
          creditibilyIndex: 0.9,
        },
        {
          name: "Varadero (Hotel Internacional)",
          creditibilyIndex: 0.9,
        },
      ],
    },
    {
      name: "Gladys Pérez de la Fuente",
      playas: [
        {
          name: "Delfines",
          creditibilyIndex: 0.75,
        },
        {
          name: "Punta Esmeralda",
          creditibilyIndex: 0.95,
        },
        {
          name: "Santa Fe",
          creditibilyIndex: 0.95,
        },
      ],
    },
    {
      name: "Gleini Gallardo",
      playas: [
        {
          name: "El Faro",
          creditibilyIndex: 0.8,
        },
        {
          name: "Mendoza",
          creditibilyIndex: 0.65,
        },
        {
          name: "Puerto Colombia (Muelle-Malecón)",
          creditibilyIndex: 0.65,
        },
        {
          name: "Sabanilla",
          creditibilyIndex: 0.75,
        },
        {
          name: "Turipana",
          creditibilyIndex: 0.65,
        },
      ],
    },
    {
      name: "GUSTAVO EUGENIO ECHEVERRI JARAMILLO",
      playas: [
        {
          name: "Bocagrande (Sector Hotelero)",
          creditibilyIndex: 0.7,
        },
        {
          name: "Marbella (Sector Ibis)",
          creditibilyIndex: 0.7,
        },
      ],
    },
    {
      name: "Hugo Diniz Brandão",
      playas: [
        {
          name: "Praia de Grumari",
          creditibilyIndex: 0.35,
        },
        {
          name: "Praia de Ipanema",
          creditibilyIndex: 0.5,
        },
        {
          name: "Praia do Arpoador",
          creditibilyIndex: 0.35,
        },
        {
          name: "Prainha",
          creditibilyIndex: 0.4,
        },
        {
          name: "Praia de Itacoatiara",
          creditibilyIndex: 0.45,
        },
        {
          name: "Praia do Leblon",
          creditibilyIndex: 0.55,
        },
      ],
    },
    {
      name: "Hugo Hidalgo Colindres",
      playas: [
        {
          name: "Coca Cola",
          creditibilyIndex: 0.75,
        },
        {
          name: "Punta de Palma",
          creditibilyIndex: 0.85,
        },
      ],
    },
    {
      name: "Idania Hernández Ramos",
      playas: [
        {
          name: "Ancón",
          creditibilyIndex: 0.9,
        },
      ],
    },
    {
      name: "JAISER CARDONA",
      playas: [
        {
          name: "Bella Vista",
          creditibilyIndex: 0.7,
        },
        {
          name: "Guacuco",
          creditibilyIndex: 0.65,
        },
        {
          name: "La Pared",
          creditibilyIndex: 0.55,
        },
      ],
    },
    {
      name: "John Edison Usuga Jaramillo",
      playas: [
        {
          name: "Playa Dulce",
          creditibilyIndex: 0.6,
        },
        {
          name: "El Pescador",
          creditibilyIndex: 0.6,
        },
        {
          name: "El Turista",
          creditibilyIndex: 0.6,
        },
        {
          name: "La Primavera",
          creditibilyIndex: 0.5,
        },
      ],
    },
    {
      name: "Cornejo Zúñiga José Ricardo",
      playas: [
        {
          name: "Los Yuyos",
          creditibilyIndex: 0.55,
        },
      ],
    },
    {
      name: "José Rodrigues de Souza Filho",
      playas: [
        {
          name: "Boipeba (Boca da Barra)",
          creditibilyIndex: 0.8,
        },
        {
          name: "Costa do Sauípe (Oca)",
          creditibilyIndex: 1.0,
        },
        {
          name: "Farol de Itapuã",
          creditibilyIndex: 1.0,
        },
        {
          name: "Morro de São Paulo (Segunda Praia)",
          creditibilyIndex: 1.0,
        },
        {
          name: "Ponta de Nossa Senhora de Guadalupe",
          creditibilyIndex: 1.0,
        },
        {
          name: "Porto da Barra",
          creditibilyIndex: 1.0,
        },
        {
          name: "Praia do Forte (Porto)",
          creditibilyIndex: 1.0,
        },
        {
          name: "Ribeira (Penha)",
          creditibilyIndex: 0.95,
        },
      ],
    },
    {
      name: "Juan Alfredo Cabrera Hernández",
      playas: [
        {
          name: "Buey Vaca",
          creditibilyIndex: 0.95,
        },
        {
          name: "Faro de Maya",
          creditibilyIndex: 0.95,
        },
        {
          name: "EL Mamey",
          creditibilyIndex: 0.95,
        },
        {
          name: "El Morrillo",
          creditibilyIndex: 0.95,
        },
        {
          name: "Varadero (Hotel Internacional)",
          creditibilyIndex: 0.9,
        },
        {
          name: "Varadero (Meliá Antillas)",
          creditibilyIndex: 0.9,
        },
        {
          name: "Varadero Histórico",
          creditibilyIndex: 0.95,
        },
      ],
    },
    {
      name: "Júlia Macêdo",
      playas: [
        {
          name: "Porto da Barra",
          creditibilyIndex: 0.65,
        },
      ],
    },
    {
      name: "Junia Kacenelenbogen Guimarães",
      playas: [
        {
          name: "Porto da Barra",
          creditibilyIndex: 0.8,
        },
        {
          name: "Ribeira (Penha)",
          creditibilyIndex: 0.8,
        },
        {
          name: "Farol de Itapuã",
          creditibilyIndex: 0.8,
        },
      ],
    },
    {
      name: "Liliam Rojas López",
      playas: [
        {
          name: "El Descanso",
          creditibilyIndex: 0.8,
        },
        {
          name: "Playa Larga",
          creditibilyIndex: 0.8,
        },
        {
          name: "Máquina",
          creditibilyIndex: 0.8,
        },
      ],
    },
    {
      name: "Lívia Garcia Prado",
      playas: [
        {
          name: "Praia Central",
          creditibilyIndex: 0.65,
        },
        {
          name: "Praia de Taquaras",
          creditibilyIndex: 0.7,
        },
        {
          name: "Praia de Taquarinhas",
          creditibilyIndex: 0.65,
        },
        {
          name: "Praia do Estaleirinho",
          creditibilyIndex: 0.7,
        },
        {
          name: "Praia do Estaleiro",
          creditibilyIndex: 0.75,
        },
        {
          name: "Praia Brava",
          creditibilyIndex: 0.7,
        },
      ],
    },
    {
      name: "Luis Cesar Herrera",
      playas: [
        {
          name: "Guacuco",
          creditibilyIndex: 0.6,
        },
        {
          name: "Guayacán",
          creditibilyIndex: 0.5,
        },
        {
          name: "Juventud",
          creditibilyIndex: 0.55,
        },
      ],
    },
    {
      name: "Manuel García Castro",
      playas: [
        {
          name: "Perla Blanca (Sector Paradissus)",
          creditibilyIndex: 0.9,
        },
      ],
    },
    {
      name: "Manuela Rendón Osorio",
      playas: [
        {
          name: "Playa Dulce",
          creditibilyIndex: 0.45,
        },
        {
          name: "La Martina",
          creditibilyIndex: 0.35,
        },
      ],
    },
    {
      name: "Mario Alberto Palacios Moreno",
      playas: [
        {
          name: "Ayangue",
          creditibilyIndex: 0.85,
        },
        {
          name: "Ballenita",
          creditibilyIndex: 0.75,
        },
        {
          name: "Malecón de Playas",
          creditibilyIndex: 0.85,
        },
        {
          name: "San Pablo",
          creditibilyIndex: 0.85,
        },
        {
          name: "Varadero",
          creditibilyIndex: 0.85,
        },
        {
          name: "Chabelita",
          creditibilyIndex: 0.85,
        },
        {
          name: "Paraíso de Engabao",
          creditibilyIndex: 0.85,
        },
        {
          name: "Puerto Engabao",
          creditibilyIndex: 0.85,
        },
      ],
    },
    {
      name: "Maritza Barreto",
      playas: [
        {
          name: "Flamenco",
          creditibilyIndex: 0.85,
        },
        {
          name: "Sardinera",
          creditibilyIndex: 0.85,
        },
        {
          name: "Escambron",
          creditibilyIndex: 0.9,
        },
        {
          name: "Playuela",
          creditibilyIndex: 0.95,
        },
        {
          name: "Culebrita",
          creditibilyIndex: 0.95,
        },
      ],
    },
    {
      name: "PALOMA ARIAS ORDIALES",
      playas: [
        {
          name: "Itauna",
          creditibilyIndex: 0.9,
        },
        {
          name: "Ponta da Farinha",
          creditibilyIndex: 0.85,
        },
        {
          name: "Pontal do Peró",
          creditibilyIndex: 0.8,
        },
        {
          name: "Praia Azeda",
          creditibilyIndex: 0.9,
        },
        {
          name: "Praia de Ubás",
          creditibilyIndex: 0.9,
        },
        {
          name: "Praia do Forno",
          creditibilyIndex: 0.85,
        },
      ],
    },
    {
      name: "Patricia Guadarrama",
      playas: [
        {
          name: "Celestun",
          creditibilyIndex: 0.85,
        },
        {
          name: "Sisal",
          creditibilyIndex: 1.0,
        },
      ],
    },
    {
      name: "Sofia Torres",
      playas: [
        {
          name: "Bahia de Santa Marta",
          creditibilyIndex: 0.45,
        },
        {
          name: "Taganga",
          creditibilyIndex: 0.45,
        },
        {
          name: "El Rodadero",
          creditibilyIndex: 0.45,
        },
      ],
    },
    {
      name: "Teresa Vera San Martín",
      playas: [
        {
          name: "Ayangue",
          creditibilyIndex: 0.75,
        },
        {
          name: "Ballenita",
          creditibilyIndex: 0.65,
        },
        {
          name: "Chabelita",
          creditibilyIndex: 0.75,
        },
        {
          name: "Malecón de Playas",
          creditibilyIndex: 0.75,
        },
        {
          name: "Puerto Engabao",
          creditibilyIndex: 0.75,
        },
        {
          name: "San Pablo",
          creditibilyIndex: 0.75,
        },
        {
          name: "Varadero",
          creditibilyIndex: 0.7,
        },
        {
          name: "Paraíso de Engabao",
          creditibilyIndex: 0.75,
        },
      ],
    },
    {
      name: "Yunior Ramón Velázquez Labrada",
      playas: [
        {
          name: "Cazonal",
          creditibilyIndex: 0.75,
        },
        {
          name: "Chivirico",
          creditibilyIndex: 0.7,
        },
        {
          name: "La Estrella",
          creditibilyIndex: 0.75,
        },
        {
          name: "Sevilla",
          creditibilyIndex: 0.75,
        },
        {
          name: "Siboney",
          creditibilyIndex: 0.8,
        },
      ],
    },
    {
      name: "Zulema Mir Frutos",
      playas: [
        {
          name: "Caletones",
          creditibilyIndex: 0.45,
        },
        {
          name: "Guardalavaca",
          creditibilyIndex: 0.65,
        },
        {
          name: "Playa Blanca",
          creditibilyIndex: 0.45,
        },
      ],
    },
  ];

  // Insertar evaluaciones

  for (const evaluacionData of evaluaciones) {
    for (const playaData of evaluacionData.playas) {
      await prisma.evaluation.create({
        data: {
          expertId: expertsMap[evaluacionData.name],
          beachId: beachMap[playaData.name],
          creditibilyIndex: playaData.creditibilyIndex,
          expertLastVisit: Date.now().toString(),
          beachDescription: "Descripción de la playa",
          evaluationYear: 2024,
        },
      });
    }
  }

  console.log("Evaluaciones guardadas exitosamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
