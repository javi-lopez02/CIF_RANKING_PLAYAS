import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface beachTypes {
  name: string;
  municipality: string;
  province: string;
  country: string;
  region:
    | "CARIBE"
    | "ATLANTICO_SUR"
    | "PACIFICO_NORTE"
    | "PACIFICO_SUR"
    | "MEDITERRANEO"
    | "ATLANTICO_NORTE";
  beachType: "URBANA" | "POBLADO" | "RURAL" | "NATURAL" | "ENCLAVE";
  length: number;
  latitude: number;
  bqvImage: string;
  urlPlaya: string;
  additionalImages: string[];
  evaluators: {
    name: string;
    score: number | 0;
  }[];
  bqvScore: number;
}

interface expertTypes {
  name: string;
  institution: string;
  country: string;
  photoUrl: string;
}

async function main() {
  const beachData: beachTypes[] = [
    {
      name: "Ponta de Nossa Senhora de Guadalupe",
      municipality: "Salvador",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "ENCLAVE",
      length: -386398132,
      latitude: -128139656,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Ponta-de-Nossa-Senhora-de-Guadalupe-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ponta-de-Nossa-Senhora-de-Guadalupe-Jose-Rodriguez-Brasil.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "José Rodrigues Souza Filho",
          score: 1,
        },
      ],
      bqvScore: 97,
    },
    {
      name: "Ensenachos",
      municipality: "Cayo Santa María",
      province: "Villa Clara",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7908901482,
      latitude: 2264572068,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Ensenachos-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ensenachos-Cuba-IMG-20250307-WA0047-Felix-Alexis-Correa-Alvarez-1.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Manuel García Castro",
          score: 0.85,
        },
      ],
      bqvScore: 95,
    },
    {
      name: "Piedra Movida",
      municipality: "Cayo Santa María",
      province: "Villa Clara",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7901766111,
      latitude: 2266010833,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Piedra-Movida-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Piedra-Movida-Cuba-IMG-20250307-WA0034-Felix-Alexis-Correa-Alvarez.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Piedra-movida-Cuba-IMG-20250307-WA0033-Felix-Alexis-Correa-Alvarez.jpg",
      ],
      evaluators: [
        {
          name: "Félix Alexis Correa Álvarez",
          score: 0.85,
        },
      ],
      bqvScore: 95,
    },
    {
      name: "Varadero (Meliá Antillas)",
      municipality: "Varadero",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -8117508611,
      latitude: 2319145556,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Varadero-Melia-Antillas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Varadero-Melia-las-antillas-Cuba-IMG-20240331-WA0006-Frank-Huerta.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Frank Huerta López",
          score: 0.95,
        },
        {
          name: "Juan Alfredo Cabrera",
          score: 0.8,
        },
        {
          name: "Liliam Rojas López",
          score: 0.8,
        },
      ],
      bqvScore: 95,
    },
    {
      name: "Caracol",
      municipality: "Cayo Santa María",
      province: "Villa Clara",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7914444444,
      latitude: 2263611111,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Caracol-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Caracol-Cuba-IMG-20250307-WA0060-Felix-Alexis-Correa-Alvarez.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Caracol-Cuba-IMG-20250307-WA0055-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Caracol-Cuba-IMG-20250307-WA0057-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Caracol-Cuba-IMG-20250307-WA0056-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Caracol-Cuba-IMG-20250307-WA0058-Felix-Alexis-Correa-Alvarez.jpg",
      ],
      evaluators: [
        {
          name: "Manuel García Castro",
          score: 0.85,
        },
      ],
      bqvScore: 94,
    },
    {
      name: "La Estrella (Hotel Playa)",
      municipality: "Cayo Santa María",
      province: "Villa Clara",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7905694444,
      latitude: 2266083333,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/La-Estrella-Hotel-Playa-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Estrella-Cuba-IMG-20250307-WA0031-Felix-Alexis-Correa-Alvarez.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Estrella-Hotel-Playa-Cuba-IMG-20250307-WA0063-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Estrella-Hotel-Playa-Cuba-IMG-20250307-WA0065-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Estrella-Hotel-Playa-Cuba-IMG-20250307-WA0029-Felix-Alexis-Correa-Alvarez.jpg",
      ],
      evaluators: [
        {
          name: "Félix Alexis Correa Álvarez",
          score: 0.85,
        },
      ],
      bqvScore: 94,
    },
    {
      name: "La Salina",
      municipality: "Cayo Santa María",
      province: "Villa Clara",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7915675326,
      latitude: 226262982,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/La-Salina-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Salina-Cuba-IMG-20250307-WA0050-Felix-Alexis-Correa-Alvarez.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Salina-Cuba-IMG-20250307-WA0051-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Salina-Cuba-IMG-20250307-WA0052-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Salina-Cuba-IMG-20250307-WA0049-Felix-Alexis-Correa-Alvarez.jpg",
      ],
      evaluators: [
        {
          name: "Félix Alexis Correa Álvarez",
          score: 0.85,
        },
      ],
      bqvScore: 94,
    },
    {
      name: "Praia do Forte",
      municipality: "São Francisco do Sul",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -4854081985,
      latitude: -2616640552,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-do-Forte-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-do-Forte-2-ALESSANDRA-PFUETZENREUTER-Brasil.png",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Forte-1-Brasil-ALESSANDRA-PFUETZENREUTER.png",
      ],
      evaluators: [
        {
          name: "Alessandra Pfuetzenreuter",
          score: 0.75,
        },
      ],
      bqvScore: 93,
    },
    {
      name: "La Estrella (Meliá Las Dunas)",
      municipality: "Cayo Santa María",
      province: "Villa Clara",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7904958056,
      latitude: 2266050692,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/La-Estrella-Melia-Las-Dunas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Estrella-Melia-Las-Dunas-Cuba-IMG-20250307-WA0065-Felix-Alexis-Correa-Alvarez.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Estrella-Melia-Las-Dunas-IMG-20250307-WA0064-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Estrella-Melia-Las-Dunas-IMG-20250307-WA0062-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Estrella-Melia-Las-Dunas-IMG-20250307-WA0061-Felix-Alexis-Correa-Alvarez.jpg",
      ],
      evaluators: [
        {
          name: "Manuel García Castro",
          score: 0.85,
        },
      ],
      bqvScore: 93,
    },
    {
      name: "Perla Blanca",
      municipality: "Cayo Santa María",
      province: "Villa Clara",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7898243889,
      latitude: 2266592778,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Perla-Blanca-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Perla-Blanca-Cuba-IMG-20250307-WA0038-Felix-Alexis-Correa-Alvarez.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Perla-Blanca-Cuba-IMG-20250307-WA0035-Felix-Alexis-Correa-Alvarez.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Perla-Blanca-Cuba-IMG-20250307-WA0037-Felix-Alexis-Correa-Alvarez.jpg",
      ],
      evaluators: [
        {
          name: "Manuel García Castro",
          score: 0.85,
        },
      ],
      bqvScore: 93,
    },
    {
      name: "Varadero (Hotel Internacional)",
      municipality: "Varadero",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -8124133611,
      latitude: 2316031389,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Varadero-Hotel-Internacional-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Varadero-Hotel-Internacional-Cuba-20230824_140636-Frank-Huerta-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Frank Huerta López",
          score: 0.95,
        },
        {
          name: "Juan Alfredo Cabrera",
          score: 0.8,
        },
        {
          name: "Liliam Rojas López",
          score: 0.8,
        },
      ],
      bqvScore: 93,
    },
    {
      name: "Los Frailes",
      municipality: "Puerto López",
      province: "Manabí",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "NATURAL",
      length: -8079394167,
      latitude: -1493894444,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Los-Frailes-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/1-Playa-Los-Frailes-Imagen-de-WhatsApp-2024-07-12-a-las-14.06.16_1deae689-Leonardo-Cuetara-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/1-Playa-Los-Frailes-Imagen-de-WhatsApp-2024-07-12-a-las-14.06.16_1deae689-Leonardo-Cuetara-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/3-Playa-Los-Frailes-Ecuador-Imagen-de-WhatsApp-2024-08-10-a-las-06.42.56_a1316715-Leonardo-Cuetara.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/2-Playa-Los-Frailes-Ecuador-Imagen-de-WhatsApp-2024-08-10-a-las-06.42.29_2c501f5a-Leonardo-Cuetara.jpg",
      ],
      evaluators: [
        {
          name: "Leonardo Manuel Cuétara Sánchez",
          score: 0.8,
        },
      ],
      bqvScore: 93,
    },
    {
      name: "Bahía de las  Aguilas",
      municipality: "Cabo Rojo",
      province: "Pedernales",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "NATURAL",
      length: -7162991944,
      latitude: 1784089145,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Bahia-de-las-Aguilas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Bahia-de-las-AguilasNo.3-Republica-Dominicana-Gladys-Rosado.png",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Bahia-de-las-Aguilas-No.1-Republica-Dominicana.-Gladys-Rosado.png",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Bahia-de-las-AguilasNo.2-Republica-Dominicana-Gladys-Rosado.png",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Bahia-de-las-AguilasNo.4-Republica-Dominicana-Gladys-Rosado.png",
      ],
      evaluators: [
        {
          name: "Gladys A. Rosado Jimenez",
          score: 0.8,
        },
      ],
      bqvScore: 92,
    },
    {
      name: "Praia do Estaleiro",
      municipality: "Balneário Camboriú",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -4858113209,
      latitude: -2702756991,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-do-Estaleiro-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-do-Estaleiro-Alessandra-Brasil.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Alessandra Pfuetzenreuter",
          score: 0.55,
        },
      ],
      bqvScore: 90,
    },
    {
      name: "Prainha",
      municipality: "Rio de Janeiro",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "NATURAL",
      length: -4350573399,
      latitude: -2304116853,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Prainha-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/prainha-Flavia-Lins-de-Barros.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Flavia Moraes Lins de Barros",
          score: 0.85,
        },
      ],
      bqvScore: 89,
    },
    {
      name: "Praia de A Lanzada",
      municipality: "O Grove y Sanxenxo",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "RURAL",
      length: -887818305,
      latitude: 4245086036,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-de-A-Lanzada-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/A_Lanzada_Espana.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0.85,
        },
        {
          name: "Jone Molina-Urruela",
          score: 0,
        },
      ],
      bqvScore: 89,
    },
    {
      name: "Punta Perdices",
      municipality: "San Antonio Este",
      province: "Río Negro",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -6484358899,
      latitude: -4078303212,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Punta-Perdices-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-PuntaPerdices4-Argentina-Leonor-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-PuntaPerdices2-Argentina-Leonor-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-PuntaPerdices3-Argentina-Leonor-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-PuntaPerdices.1-Argentina-Leonor-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Yanel Martín Varisto",
          score: 0.7,
        },
      ],
      bqvScore: 88,
    },
    {
      name: "Fazenda Roberto Marinho",
      municipality: "São Pedro da Aldeia",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -4211891919,
      latitude: -2287632592,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Fazenda-Roberto-Marinho-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Fazenda-Roberto-Marinho-Paloma-Brasil.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Paloma Arias Ordilaes",
          score: 0.9,
        },
      ],
      bqvScore: 88,
    },
    {
      name: "Ponta da Farinha",
      municipality: "Iguaba Grande",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "NATURAL",
      length: -4219586111,
      latitude: -2285516667,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Ponta-da-Farinha-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ponta-farinha-1-paloma-arias-palomaguaiano.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Paloma Arias Ordilaes",
          score: 0.9,
        },
      ],
      bqvScore: 88,
    },
    {
      name: "Jurerê Internacional",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4850056487,
      latitude: -2743715815,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Jurere-Internacional-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Jurere-Marcus-Polette.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Marcus Polette",
          score: 1,
        },
      ],
      bqvScore: 87,
    },
    {
      name: "Los Angeles",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "RURAL",
      length: -7388865284,
      latitude: 1129402032,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Los-Angeles-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-los-Angeles2-Colombia_Gleini_Gallardo-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-los-Angeles-Colombia_Gleini_Gallardo.jpg",
      ],
      evaluators: [
        {
          name: "Gleini Gallardo García",
          score: 0.7,
        },
      ],
      bqvScore: 87,
    },
    {
      name: "Macao",
      municipality: "Verón-Punta Cana",
      province: "La Altagracia",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -6853507557,
      latitude: 1877277773,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Macao-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Macao-4-RepublicaDominicana-Sarina-Suero.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Sarina Suero",
          score: 0.5,
        },
      ],
      bqvScore: 87,
    },
    {
      name: "Playa Blanca",
      municipality: "Nuquí",
      province: "Chocó",
      country: "Colombia",
      region: "PACIFICO_SUR",
      beachType: "NATURAL",
      length: -7600586695,
      latitude: 2108450694,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Blanca-Nuqui-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Blanca2_Colombia_Mariana-Rondon.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Blanca_Colombia_Mariana-Rondon.jpg",
      ],
      evaluators: [
        {
          name: "Mariana Rondón",
          score: 0.45,
        },
      ],
      bqvScore: 86,
    },
    {
      name: "El Cristo",
      municipality: "Cayo Saetía",
      province: "Holguín",
      country: "Cuba",
      region: "CARIBE",
      beachType: "RURAL",
      length: -7553108333,
      latitude: 2078127778,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Cristo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-El-Cristo-Mayari-Holguin-Cuba-1-Elier-Alexander-Cordova-Garcia-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-El-Cristo-Mayari-Holguin-Cuba-Elier-Alexander-Cordova-Garcia-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa_El_Cristo2-Elier-Alexander-Cordova-Garcia.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa_El_Cristo-Mayari-Holguin-Cuba-4-Elier-Alexander-Cordova-Garcia.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa_El-Cristo-Mayari-Holguin-Cuba-3-Elier-Alexander-Cordova-Garcia.jpg",
      ],
      evaluators: [
        {
          name: "Elier Alexander Córdova García",
          score: 0.7,
        },
      ],
      bqvScore: 86,
    },
    {
      name: "Domínicus",
      municipality: "Bayahíbe",
      province: "La Altagracia",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -6882561938,
      latitude: 1834475703,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Dominicus-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Dominicus-2-Republica-Dominicana-Sarina-Suero.heic",
      additionalImages: [],
      evaluators: [
        {
          name: "Sarina Suero",
          score: 0.5,
        },
      ],
      bqvScore: 86,
    },
    {
      name: "El Doradillo",
      municipality: "Puerto Madryn",
      province: "Chubut",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -6498614035,
      latitude: -4265571938,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Doradillo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/El-Doradillo-1_ARG-Veronica-Mariela-Blanco-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Verónica Mariela Blanco",
          score: 0.75,
        },
      ],
      bqvScore: 85,
    },
    {
      name: "Las Canteras",
      municipality: "Puerto Madryn",
      province: "Chubut",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -6496643333,
      latitude: -4264319444,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Las-Canteras-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Las-Canteras-2_ARG-1-Veronica-Mariela-Blanco.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Verónica Mariela Blanco",
          score: 0.75,
        },
      ],
      bqvScore: 85,
    },
    {
      name: "Mar Chiquita",
      municipality: "Partido de Vidal - Provincia de Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -5741491667,
      latitude: -3774306401,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Mar-Chiquita-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/MAR-CHIQUITA-FUENTE-TURISMO-Magdalena-Sanchez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Rosa Magdalena Sanchez",
          score: 0.5,
        },
      ],
      bqvScore: 85,
    },
    {
      name: "Praia de Nerga",
      municipality: "Cangas do Morrazo",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "RURAL",
      length: -8837369652,
      latitude: 4225804582,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-de-Nerga-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-de-Nerga-1-Espana-Jone-Molina-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jone Molina-Urruela",
          score: 0.45,
        },
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0,
        },
      ],
      bqvScore: 85,
    },
    {
      name: "Carhuaz",
      municipality: "Paracas",
      province: "PISCO",
      country: "Perú",
      region: "PACIFICO_SUR",
      beachType: "NATURAL",
      length: -7615177632,
      latitude: -1422099675,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Carhuaz-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/2-Carhuaz-Reserva-Nacional-de-Paracas-Peru-Oliver-Pereyra.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Oliver Simon Pereyra Meza",
          score: 0.5,
        },
      ],
      bqvScore: 85,
    },
    {
      name: "Itauna",
      municipality: "Saquarema",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4248345278,
      latitude: -2293579444,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Itauna-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Itauna-Alessandra-Pfuetzenreuter-Brasil.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Paloma Arias Ordilaes",
          score: 0.9,
        },
        {
          name: "Alessandra Pfuetzenreuter",
          score: 0.75,
        },
      ],
      bqvScore: 84,
    },
    {
      name: "Praia da Lagoinha do Leste",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "NATURAL",
      length: -484863806,
      latitude: -277732103,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-da-Lagoinha-do-Leste-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-da-Lagoinha-do-Leste-Brasil-Fabricio-Martinez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.65,
        },
      ],
      bqvScore: 84,
    },
    {
      name: "Arena Gorda",
      municipality: "Bávaro",
      province: "La Altagracia",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -6844199527,
      latitude: 1871042024,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Raspon-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Arena-Gorda-1-Republica-Dominicana-Sarina-Suero.heic",
      additionalImages: [],
      evaluators: [
        {
          name: "Sarina Suero",
          score: 0.5,
        },
      ],
      bqvScore: 84,
    },
    {
      name: "Balneario San Cayetano",
      municipality: "San Cayetano",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -5942714769,
      latitude: -3875423102,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Balneario-San-Cayetano-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Balneario-San-Cayetano-Magdalena-Sanchez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Rosa Magdalena Sanchez",
          score: 0.55,
        },
      ],
      bqvScore: 83,
    },
    {
      name: "Cariló",
      municipality: "Cariló",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -5689555747,
      latitude: -3717091088,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Carilo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Carilo-Argentina-WhatsApp-Image-2025-04-24-at-10.25.54-Ana-Faggi.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.85,
        },
      ],
      bqvScore: 83,
    },
    {
      name: "Centinela del Mar",
      municipality: "Centinela del Mar",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -582161398,
      latitude: -3843747835,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Centinela-del-Mar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Centinela-del-mar-Argentina-Ana-Faggi.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.8,
        },
      ],
      bqvScore: 83,
    },
    {
      name: "Pontal do Peró",
      municipality: "Cabo Frio",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -4197024722,
      latitude: -2282303056,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pontal-do-Pero-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PONTAL-DO-PERO-paloma-arias-palomaguaiano.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Paloma Arias Ordilaes",
          score: 0.9,
        },
      ],
      bqvScore: 83,
    },
    {
      name: "Praia Azedinha",
      municipality: "Armação dos Búzios",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -418821088,
      latitude: -227410835,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-Azedinha-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Azedinha-Brasil-Gabriel-Reges.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gabriel Moreira Reges",
          score: 0.6,
        },
      ],
      bqvScore: 83,
    },
    {
      name: "El Descanso",
      municipality: "Ciénaga de Zapata",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "RURAL",
      length: -8117693333,
      latitude: 22270925,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Descanso-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-El-Descanso-Matanzas-Screenshot_20250312-1038192-2-Liliam-Rojas.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Liliam Rojas López",
          score: 0.8,
        },
      ],
      bqvScore: 83,
    },
    {
      name: "Varadero (Calle 52)",
      municipality: "Varadero",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "URBANA",
      length: -8125576727,
      latitude: 2315284656,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Varadero-Calle-52-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PLaya-Varadero-Calle-521-Cuba-Alfredo-Cabrera.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PLaya-Varadero-Calle-52-Cuba-Alfredo-Cabrera.jpg",
      ],
      evaluators: [
        {
          name: "Juan Alfredo Cabrera",
          score: 0.8,
        },
      ],
      bqvScore: 83,
    },
    {
      name: "Valeria del Mar",
      municipality: "Veleria del Mar",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -5687701256,
      latitude: -3714643376,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Valeria-del-Mar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Argentina-Valeria-del-Mar-4-Ana-Maria-Faggi-de-Lenz.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Argentina-Valeria1-Ana-Maria-Faggi-de-Lenz.jpeg",
      ],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.85,
        },
      ],
      bqvScore: 82,
    },
    {
      name: "Turipana",
      municipality: "Tubara",
      province: "Atlántico",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7504931667,
      latitude: 1089641944,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Turipana-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PLaya-Turipana-Colombia_Gleini-Gallardo-2-scaled.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PLaya-Turipana-Colombia_Gleini-Gallardo-1-scaled.jpeg",
      ],
      evaluators: [
        {
          name: "Gleini Gallardo García",
          score: 0.7,
        },
      ],
      bqvScore: 82,
    },
    {
      name: "Guardalavaca (Gran Muthu Almirante)",
      municipality: "Guardalavaca",
      province: "Holguín",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7583916667,
      latitude: 2112138889,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Guardalavaca-Gran-Muthu-Almirante-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Vista_GRan_Muthu_Almirante-Guardalavaca-Cuba-03-Elier-Alexander-Cordova-Garcia.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Elier Alexander Córdova García",
          score: 0.8,
        },
      ],
      bqvScore: 82,
    },
    {
      name: "Punta Astillero",
      municipality: "Piojo",
      province: "Atlántico",
      country: "Colombia",
      region: "CARIBE",
      beachType: "RURAL",
      length: -752114,
      latitude: 1081440833,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Punta-Astillero-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Punta-Astillero-Piojo-Colombia-5-Admon-Empresas-Turisticas-y-hoteleras-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Punta-Astillero-1-Colombia-Dick-Acuna.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Punta-Astillero-2-Colombia-Dick-Acuna.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Punta-Astillero-3-Colombia-Dick-Acuna.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Punta-Astillero-Piojo-Colombia-4-Admon-Empresas-Turisticas-y-hoteleras-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Punta-Astillero-Piojo-Colombia-3-Admon-Empresas-Turisticas-y-hoteleras-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Punta-Astillero-Piojo-Colombia-2-Admon-Empresas-Turisticas-y-hoteleras-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Gleini Gallardo García",
          score: 0.75,
        },
        {
          name: "Dick All Acuña Hereira",
          score: 0.55,
        },
      ],
      bqvScore: 81,
    },
    {
      name: "Esmeralda  (Complejo Lunas)",
      municipality: "Rafael Freyre",
      province: "Holguín",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7587355636,
      latitude: 2111275799,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Esmeralda-Complejo-Lunas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Frente_Playa-Complejo-Lunas-Mares-Esmeralda-Holguin-Cuba-2-Elier-Alexander-Cordova-Garcia.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Elier Alexander Córdova García",
          score: 0.8,
        },
      ],
      bqvScore: 81,
    },
    {
      name: "Faro Maya",
      municipality: "Matanzas",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "RURAL",
      length: -8147383149,
      latitude: 2309484096,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Faro-Maya-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Faro-Maya-Cuba-Screensh-ot_20250311-202731-1-1-Liliam-Rojas.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Frank Huerta López",
          score: 0.95,
        },
        {
          name: "Juan Alfredo Cabrera",
          score: 0.8,
        },
        {
          name: "Liliam Rojas López",
          score: 0.8,
        },
      ],
      bqvScore: 81,
    },
    {
      name: "Guardalava (Complejo hotelero Brisas)",
      municipality: "Banes",
      province: "Holguín",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7582908244,
      latitude: 2112602594,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Guardalavaca-Complejo-hotelero-Brisas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/MGM-Almirante-Guardalavaca-Holguin-Cuba-01-Elier-Alexander-Cordova-Garcia-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Elier Alexander Córdova García",
          score: 0.8,
        },
        {
          name: "Angel Reyes",
          score: 0.75,
        },
      ],
      bqvScore: 81,
    },
    {
      name: "Puerto Pirámides",
      municipality: "Puerto Pirámides",
      province: "Chubut",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -6428017476,
      latitude: -4257383099,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Puerto-Piramides-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Piramides-4_ARG-Veronica-Mariela-Blanco-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Piramides-3_ARG-Veronica-Mariela-Blanco.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Piramides-2_ARG-Veronica-Mariela-Blanco-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Piramides-1_ARG-Veronica-Mariela-Blanco-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Verónica Mariela Blanco",
          score: 0.75,
        },
      ],
      bqvScore: 80,
    },
    {
      name: "Praia da Guarita",
      municipality: "Torres",
      province: "Rio Grande do Sul",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -4973626039,
      latitude: -2935949346,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-da-Guarita-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-da-Guarita-1-Brasil-Gerson-Fernandino-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gerson Fernandino de Andrade Neto",
          score: 0.6,
        },
      ],
      bqvScore: 80,
    },
    {
      name: "Praia das Conchas",
      municipality: "Cabo Frio",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -4198328132,
      latitude: -2286925992,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-das-Conchas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-das-Conchas-Brasil-Gabriel-Reges.webp",
      additionalImages: [],
      evaluators: [
        {
          name: "Gabriel Moreira Reges",
          score: 0.6,
        },
      ],
      bqvScore: 80,
    },
    {
      name: "Praia do Vao",
      municipality: "Vigo",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "URBANA",
      length: -8792600198,
      latitude: 421977768,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-do-Vao-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/O_Vao_Espana.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0.8,
        },
        {
          name: "Jone Molina-Urruela",
          score: 0,
        },
      ],
      bqvScore: 80,
    },
    {
      name: "Él Raspon",
      municipality: "Barranco",
      province: "Lima",
      country: "Perú",
      region: "PACIFICO_SUR",
      beachType: "NATURAL",
      length: -7631778997,
      latitude: -1390826999,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Raspon-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-03-13-at-9.35.21-PM-1-Oliver-Pereyra.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-03-13-at-9.58.18-PM-Oliver-Pereyra.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-03-14-at-7.04.08-PM-Oliver-Pereyra.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-03-14-at-7.02.54-PM-Oliver-Pereyra.jpeg",
      ],
      evaluators: [
        {
          name: "Oliver Simon Pereyra Meza",
          score: 0.5,
        },
      ],
      bqvScore: 80,
    },
    {
      name: "Costa Esmeralda",
      municipality: "Buenos Aires",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5677882256,
      latitude: -370184587,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Costa-Esmeralda-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Costa-Esmeralda-Argentina-IMG-20250211-WA0068-Patricia-E.-Perelman.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Patricia Perelman",
          score: 0.75,
        },
      ],
      bqvScore: 79,
    },
    {
      name: "Hijos del Mar",
      municipality: "Miramar",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -577843,
      latitude: -3824703,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Hijos-del-Mar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Hijosdelmar-Argentina-1-Ana-Maria-Faggi-de-Lenz.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.85,
        },
      ],
      bqvScore: 79,
    },
    {
      name: "Mendoza",
      municipality: "Tubara",
      province: "Atlántico",
      country: "Colombia",
      region: "CARIBE",
      beachType: "RURAL",
      length: -7504204167,
      latitude: 1090449444,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Mendoza-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Mendoza-Colombia-3-Gleini-Gallardo-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Mendoza-Colombia-2-Gleini-Gallardo-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Mendoza-Colombia-1-Gleini-Gallardo-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Gleini Gallardo García",
          score: 0.7,
        },
      ],
      bqvScore: 79,
    },
    {
      name: "Varadero (calle 55)",
      municipality: "Varadero",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "URBANA",
      length: -8125333333,
      latitude: 2315361111,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Varadero-calle-55-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Varadero-calle-55Screenshot_20250312-1435272-Liliam-Rojas.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Liliam Rojas López",
          score: 0.8,
        },
      ],
      bqvScore: 79,
    },
    {
      name: "Praia de Ladeira",
      municipality: "A Ramallosa - Baiona",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "POBLADO",
      length: -8827181367,
      latitude: 4211419454,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-de-Ladeira-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ladeira_Espana.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0.75,
        },
        {
          name: "Jone Molina-Urruela",
          score: 0,
        },
      ],
      bqvScore: 79,
    },
    {
      name: "Praia dos Naufragados",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "RURAL",
      length: -4856329267,
      latitude: -2783344692,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-dos-Naufragados-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-dos-Naufragados-Brasil-Fabricio-Martinez.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.6,
        },
      ],
      bqvScore: 78,
    },
    {
      name: "Segunda Ensenada",
      municipality: "Coveñas",
      province: "Sucre",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7564009247,
      latitude: 9424413026,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Segunda-Ensenada-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Segunda-Ensenada-BF-2-Colombia-Adriana-Jimenez-scaled.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Segunda-Ensenada-BF-3-Colombia-Adriana-Jimenez-scaled.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Segunda-Ensenada-BF-1-Colombia-Adriana-Jimenez-scaled.jpeg",
      ],
      evaluators: [
        {
          name: "Adriana Jiménez Zárate",
          score: 0.6,
        },
      ],
      bqvScore: 78,
    },
    {
      name: "El Peñón",
      municipality: "Cayo Saetía",
      province: "Holguín",
      country: "Cuba",
      region: "CARIBE",
      beachType: "NATURAL",
      length: -7553147222,
      latitude: 2077827778,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Penon-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-El-Penon-Mayari-Holguin-Cuba-1-Elier-Alexander-Cordova-Garcia-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-el-Penon-Mayari-Holguin-Cuba-2-Elier-Alexander-Cordova-Garcia-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-El-Penon-Mayaari-Holguin-Cuba-3-Elier-Alexander-Cordova-Garcia-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-el-Penon_Mayari-Holguin-Cuba-Elier-Alexander-Cordova-Garcia-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Elier Alexander Córdova García",
          score: 0.7,
        },
      ],
      bqvScore: 78,
    },
    {
      name: "Praia América",
      municipality: "Nigrán",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "URBANA",
      length: -8818140707,
      latitude: 4213425707,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-America-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/America_Espana.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0.75,
        },
        {
          name: "Jone Molina-Urruela",
          score: 0,
        },
      ],
      bqvScore: 78,
    },
    {
      name: "Garza Blanca",
      municipality: "Mismaloya",
      province: "Jalisco",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "ENCLAVE",
      length: -1052506576,
      latitude: 2057053017,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Garza-Blanca-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Garza-Blanca_Mexico_Maria-del-Rocio.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Garza-Blanca2_Mexico_Maria-del-Rocio.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Garza-Blanca3_Mexico_Maria-del-Rocio.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Garza-Blanca4_Mexico_Maria-del-Rocio.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Garza-Blanca5_Mexico_Maria-del-Rocio.jpeg",
      ],
      evaluators: [
        {
          name: "Maria del Rocio Meza Becerra",
          score: 0.4,
        },
      ],
      bqvScore: 78,
    },
    {
      name: "Praia do Moçambique",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "NATURAL",
      length: -4841640218,
      latitude: -2752342899,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-do-Mocambique-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia_Mocambique_Brasil_Fabricio_Martinez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.55,
        },
      ],
      bqvScore: 77,
    },
    {
      name: "Playa Blanca",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7750648867,
      latitude: 5564702493,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Blanca-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PlayaBlanca01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PlayaBlanca02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PlayaBlanca03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PlayaBlanca04-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PlayaBlanca05-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 0.9,
        },
      ],
      bqvScore: 77,
    },
    {
      name: "Puerto Mocho",
      municipality: "Barranquilla",
      province: "Atlántico",
      country: "Colombia",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7484371,
      latitude: 11063006,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Puerto-Mocho-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Mocho-3-Colombia-Dick-Acuna.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Mocho-4-Colombia-Dick-Acuna.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Mocho-5-Colombia-Dick-Acuna.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Mocho-2-Colombia-Dick-Acuna.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Mocho-1-Colombia-Dick-Acuna.jpeg",
      ],
      evaluators: [
        {
          name: "Gleini Gallardo García",
          score: 0.75,
        },
        {
          name: "Dick All Acuña Hereira",
          score: 0.55,
        },
      ],
      bqvScore: 77,
    },
    {
      name: "Playa Larga",
      municipality: "Ciénaga de Zapata",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -8119908123,
      latitude: 2228054092,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Larga-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-Larga-Screenshot_20250311-2105252-Liliam-Rojas.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Liliam Rojas López",
          score: 0.8,
        },
      ],
      bqvScore: 77,
    },
    {
      name: "Praia de Cabo",
      municipality: "Cesantes - Redondela",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "POBLADO",
      length: -8620396604,
      latitude: 4231093839,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-de-Cabo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Cabo_Espana.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0.8,
        },
        {
          name: "Jone Molina-Urruela",
          score: 0,
        },
      ],
      bqvScore: 77,
    },
    {
      name: "Ostende",
      municipality: "Ostende",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5686477684,
      latitude: -3712865402,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Ostende-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ostende-Argentina-Ana-Maria-Faggi-de-Lenz.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.9,
        },
      ],
      bqvScore: 76,
    },
    {
      name: "Praia da Reserva",
      municipality: "Rio de Janeiro",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "ENCLAVE",
      length: -4339381149,
      latitude: -2301347247,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-da-Reserva-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/praiadareserva_Brasil_2-Bruna-Leticia-Andrade.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Bruna Leticia Andrade",
          score: 0.5,
        },
      ],
      bqvScore: 76,
    },
    {
      name: "Praia da Punta",
      municipality: "Vigo",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "URBANA",
      length: -8697163747,
      latitude: 4225998725,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-da-Punta-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-da-Punta1-Espana-Jone-Molina.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jone Molina-Urruela",
          score: 0.45,
        },
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0,
        },
      ],
      bqvScore: 76,
    },
    {
      name: "Praia de Cesantes",
      municipality: "Cesantes - Redondela",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "POBLADO",
      length: -8621838889,
      latitude: 423091,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-de-Cesantes-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Cesantes_Espana.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0.8,
        },
        {
          name: "Jone Molina-Urruela",
          score: 0,
        },
      ],
      bqvScore: 76,
    },
    {
      name: "Anclote",
      municipality: "Bahia de Banderas",
      province: "Nayarit",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "POBLADO",
      length: -1055207724,
      latitude: 2077045286,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Anclote-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Anclote3-Mexico-Maria-Elena-Gonzalez-Ruelas.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Anclote2-Mexico-Maria-Elena-Gonzalez-Ruelas.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Anclote4-Mexico-Maria-Elena-Gonzalez-Ruelas.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Anclote5-Mexico-Maria-Elena-Gonzalez-Ruelas.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Anclote8-Mexico-Maria-Elena-Gonzalez-Ruelas.jpeg",
      ],
      evaluators: [
        {
          name: "Maria Elena Gonzalez Ruelas",
          score: 0.6,
        },
      ],
      bqvScore: 76,
    },
    {
      name: "Costa del Este",
      municipality: "Costa del Este",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -5668507008,
      latitude: -3660764837,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Costa-del-Este-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Costa-del-Este-Ana-Faggi.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.8,
        },
      ],
      bqvScore: 75,
    },
    {
      name: "El Edén",
      municipality: "Coveñas",
      province: "Sucre",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7566856944,
      latitude: 9404969444,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Eden-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/El-Eden_Colombia_Adriana_Jimenez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Adriana Jiménez Zárate",
          score: 0.55,
        },
      ],
      bqvScore: 75,
    },
    {
      name: "Praia do Fortiñón",
      municipality: "Vigo",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "POBLADO",
      length: -88141376,
      latitude: 421746266,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-do-Fortinon-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-do-Fortinon-2-Espana-Jone-Molina.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jone Molina-Urruela",
          score: 0.6,
        },
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0,
        },
      ],
      bqvScore: 75,
    },
    {
      name: "Amapas-Conchas Chinas",
      municipality: "Puerto Vallarta",
      province: "Jalisco",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "URBANA",
      length: -1052411232,
      latitude: 2059486296,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Amapas-Conchas-Chinas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Amapas-Conchas-Chinas-Mexico-2025-Emma-Noriega.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Emma Lizeth Noriega Garza",
          score: 0.75,
        },
      ],
      bqvScore: 75,
    },
    {
      name: "Frontón",
      municipality: "Las Galeras",
      province: "Samaná",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "NATURAL",
      length: -6915156733,
      latitude: 1929653268,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Fronton-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/imagen_no_disponible.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jose Luis Vasquez Almanzar",
          score: 0.5,
        },
      ],
      bqvScore: 75,
    },
    {
      name: "Aguas Verdes",
      municipality: "Aguas Verdes",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -5668202501,
      latitude: -3663695182,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Aguas-Verdes-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Aguas-Verdes-Ana-Faggi.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.8,
        },
      ],
      bqvScore: 74,
    },
    {
      name: "Pinamar",
      municipality: "Pinamar",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5685123124,
      latitude: -3711275593,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pinamar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Pinamar3-Ana-Maria-Faggi-de-Lenz.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.9,
        },
      ],
      bqvScore: 74,
    },
    {
      name: "Puerto Madryn",
      municipality: "Puerto Madryn",
      province: "Chubut",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -6503262679,
      latitude: -4277153246,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Puerto-Madryn-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Madryn-1_ARG-Veronica-Mariela-Blanco-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Madryn-2_ARG-Veronica-Mariela-Blanco-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Madryn-3_ARG-Veronica-Mariela-Blanco.jpg",
      ],
      evaluators: [
        {
          name: "Verónica Mariela Blanco",
          score: 0.75,
        },
      ],
      bqvScore: 74,
    },
    {
      name: "Hotel Pradomar",
      municipality: "Puerto Colombia",
      province: "Atlántico",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7495267675,
      latitude: 1100546985,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Hotel-Pradomar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Hotel_Pradomar_Colombia_Dick_Acuna.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Dick All Acuña Hereira",
          score: 0.55,
        },
      ],
      bqvScore: 74,
    },
    {
      name: "Sabanilla",
      municipality: "Puerto Colombia",
      province: "Atlántico",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7492213889,
      latitude: 11037675,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Sabanilla-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-Sabanilla-I-2-2-Admon-Empresas-Turisticas-y-hoteleras-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-Sabanilla-I-1-Admon-Empresas-Turisticas-y-hoteleras-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Gleini Gallardo García",
          score: 0.8,
        },
        {
          name: "Dick All Acuña Hereira",
          score: 0.55,
        },
      ],
      bqvScore: 74,
    },
    {
      name: "Praia de Patos",
      municipality: "Nigrán",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "URBANA",
      length: -8825901498,
      latitude: 4215429216,
      bqvImage:
        "vhttps://rankingmejoresplayas.com/wp-content/uploads/2025/05/Alcatraz-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-de-Patos-Espana-Jone-Molina.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Hotel_Pradomar2_Colombia_Dick_Acuna.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Hotel_Pradomar3_Colombia_Dick_Acuna.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Hotel_Pradomar4_Colombia_Dick_Acuna.jpeg",
      ],
      evaluators: [
        {
          name: "Jone Molina-Urruela",
          score: 0.45,
        },
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0,
        },
      ],
      bqvScore: 74,
    },
    {
      name: "Las Lajas",
      municipality: "Punta Arenas",
      province: "Nueva Esparta",
      country: "Venezuela",
      region: "CARIBE",
      beachType: "RURAL",
      length: -6440688333,
      latitude: 1097685278,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Las-Lajas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/LAS-LAJAS-5-VENEZUELA-Jaiser-Cardona-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jaiser Cardona",
          score: 0.55,
        },
      ],
      bqvScore: 74,
    },
    {
      name: "El Morrillo",
      municipality: "Matanzas",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "RURAL",
      length: -8150372778,
      latitude: 2304617696,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Morrillo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Cuba-El-Morrillo-Screenshot_20250311-203550-1-1-Liliam-Rojas.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Frank Huerta López",
          score: 0.95,
        },
        {
          name: "Juan Alfredo Cabrera",
          score: 0.8,
        },
        {
          name: "Liliam Rojas López",
          score: 0.8,
        },
      ],
      bqvScore: 73,
    },
    {
      name: "Máquina",
      municipality: "Ciénaga de Zapata",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -8118070556,
      latitude: 2227561389,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Maquina-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Cuba-playa-Maquina-Screenshot_20250311-210525-1-1-Liliam-Rojas.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Liliam Rojas López",
          score: 0.8,
        },
      ],
      bqvScore: 73,
    },
    {
      name: "Pesquero Nuevo (Iberoestar Selection Holguín)",
      municipality: "Rafael Freyre",
      province: "Holguín",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7593989771,
      latitude: 2109634226,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pesquero-Nuevo-Iberoestar-Selection-Holguin-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Pesquero-Nuevo-Playa-El-Faro1-Cuba-Zulema-Mir.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Zulema Mir Frutos",
          score: 0.55,
        },
      ],
      bqvScore: 73,
    },
    {
      name: "Pesquero Nuevo (Pesquero III )",
      municipality: "Rafael Freyre",
      province: "Holguín",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -759349341,
      latitude: 2109890635,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pesquero-Nuevo-Pesquero-III--scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Pesquero-Nuevo-Frente_Playa_Pesquero-III-Holguin-Cuba-Elier-Alexander-Cordova-Garcia-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Elier Alexander Córdova García",
          score: 0.8,
        },
      ],
      bqvScore: 73,
    },
    {
      name: "Malecón de Playas",
      municipality: "General Villamil Playas",
      province: "Guayas",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "URBANA",
      length: -8038768359,
      latitude: -2643259048,
      bqvImage:
        "vhttps://rankingmejoresplayas.com/wp-content/uploads/2025/05/Alcatraz-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Malecon-0-Ecuador-mario-palacios.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Mario Alberto Palacios Moreno",
          score: 0.8,
        },
        {
          name: "Teresa J. Vera San Martín",
          score: 0.7,
        },
      ],
      bqvScore: 73,
    },
    {
      name: "Playa de Oro",
      municipality: "Puerto Vallarta",
      province: "Jalisco",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "URBANA",
      length: -105242088,
      latitude: 2064630353,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-de-Oro-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-de-Oro-Mexico-2025-Emma-Noriega.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Emma Lizeth Noriega Garza",
          score: 0.75,
        },
      ],
      bqvScore: 73,
    },
    {
      name: "Palenque",
      municipality: "Santo Domingo",
      province: "San Cristóbal",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "RURAL",
      length: -7016653217,
      latitude: 1823433094,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Palenque-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Palenque3-Rep-Dominicana-Jael.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Palenque2-Rep-Dominicana-Jael.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Palenque-Rep-Dominicana-Jael.jpg",
      ],
      evaluators: [
        {
          name: "Jael Javier Olivares",
          score: 0.25,
        },
      ],
      bqvScore: 73,
    },
    {
      name: "Playa Dorada",
      municipality: "Puerto Plata",
      province: "Provincia Puerto Plata",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7064330401,
      latitude: 1977323505,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Dorada-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Dorada-No.2-Provincia-Puerto-Plata-Republica-Dominicana-Gladys-Rosado.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gladys A. Rosado Jimenez",
          score: 0.75,
        },
      ],
      bqvScore: 73,
    },
    {
      name: "Salinas de Bani",
      municipality: "Bani",
      province: "Peravia",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7054941547,
      latitude: 1821410715,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Salinas-de-Bani-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Salinas-de-Bani-1-Republica-Dominicana-Angel-L.-Javier-Hernandez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Angel Javier-Hernandez",
          score: 0.45,
        },
      ],
      bqvScore: 73,
    },
    {
      name: "Miramar",
      municipality: "Miramar",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5783177806,
      latitude: -3827382789,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Miramar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Miramar-centro1-Ana-Maria-Faggi-de-Lenz.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.85,
        },
      ],
      bqvScore: 72,
    },
    {
      name: "Parquemar",
      municipality: "Miramar",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5782357,
      latitude: -3826828,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Parquemar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Miramar-parquemar-2-Ana-Maria-Faggi-de-Lenz.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.85,
        },
      ],
      bqvScore: 72,
    },
    {
      name: "Balneário Camboriú (Praia Central)",
      municipality: "Balneário Camboriú",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4863303917,
      latitude: -2698480623,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Balneario-Camboriu-Praia-Central-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Balneario-Camboriu-Praia-Central-Marcus-Polette.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Marcus Polette",
          score: 0.95,
        },
      ],
      bqvScore: 72,
    },
    {
      name: "Bello Horizonte (Sector Zuana)",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7422673232,
      latitude: 111418625,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Bello-Horizonte-Sector-Zuana-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/zuana-Admon-Empresas-Turisticas-y-hoteleras.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/zuana-2-Admon-Empresas-Turisticas-y-hoteleras.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Zuana05-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Zuana04-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Zuana03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Zuana02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Zuana01-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 1,
        },
        {
          name: "Gleini Gallardo García",
          score: 0.7,
        },
      ],
      bqvScore: 72,
    },
    {
      name: "Palo Blanco",
      municipality: "Santiago de Tolú",
      province: "Sucre",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7560214127,
      latitude: 9479111952,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Palo-Blanco-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Palo_Blanco_Colombia_Adriana_Jimenez.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Palo_Blanco2_Colombia_Adriana_Jimenez.jpg",
      ],
      evaluators: [
        {
          name: "Adriana Jiménez Zárate",
          score: 0.5,
        },
      ],
      bqvScore: 72,
    },
    {
      name: "Playa Dulce",
      municipality: "SIboney",
      province: "Antioquía",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7674102146,
      latitude: 8096183333,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Dulce-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-PlayaDulce-1-Colombia-MANUELA-RENDON-OSORIO-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-PlayaDulce-2-Colombia-MANUELA-RENDON-OSORIO-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Manuela Rendón Osorio",
          score: 0.5,
        },
      ],
      bqvScore: 72,
    },
    {
      name: "Playa Tranquila",
      municipality: "Cartagena",
      province: "Bolívar",
      country: "Colombia",
      region: "CARIBE",
      beachType: "RURAL",
      length: -7568602782,
      latitude: 1015303911,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Tranquila-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/imagen_no_disponible.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Mariana Rondón",
          score: 0.55,
        },
      ],
      bqvScore: 72,
    },
    {
      name: "Praia de Panxón",
      municipality: "Nigrán",
      province: "Pontevedra (Galicia)",
      country: "España",
      region: "ATLANTICO_NORTE",
      beachType: "URBANA",
      length: -8821572661,
      latitude: 4214317607,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-de-Panxon-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Panxon_Espana.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gonzalo Méndez-Martínez",
          score: 0.7,
        },
        {
          name: "Jone Molina-Urruela",
          score: 0,
        },
      ],
      bqvScore: 72,
    },
    {
      name: "Farol de Itapuã",
      municipality: "Salvador",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -3835266944,
      latitude: -1295615833,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Farol-de-Itapua-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Farol-de-Itapua-J.K.-G-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "José Rodrigues Souza Filho",
          score: 1,
        },
        {
          name: "Junia Kacenelenbogen Guimarães",
          score: 0.65,
        },
        {
          name: "Danilo Souza Santana",
          score: 0.5,
        },
      ],
      bqvScore: 71,
    },
    {
      name: "Praia de Camboinhas",
      municipality: "Niterói",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4306489691,
      latitude: -2296000187,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-de-Camboinhas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Camboinhas_Brasil_1-Bruna-Leticia-Andrade.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Bruna Leticia Andrade",
          score: 0.5,
        },
      ],
      bqvScore: 71,
    },
    {
      name: "Salinas Del Rey",
      municipality: "Juan de Acosta",
      province: "Atlántico",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7509298415,
      latitude: 1087443333,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Salinas-Del-Rey-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Salinas-del-Rey-2-Colombia-Dick-Acuna.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Salinas-del-Rey-4-Colombia-Dick-Acuna.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Salinas-del-Rey-3-Colombia-Dick-Acuna.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Salinas-del-Rey-1-Colombia-Dick-Acuna.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Salinas-del-Rey-5-Colombia-Dick-Acuna.jpg",
      ],
      evaluators: [
        {
          name: "Dick All Acuña Hereira",
          score: 0.55,
        },
      ],
      bqvScore: 71,
    },
    {
      name: "Ancón",
      municipality: "Trinidad",
      province: "Sancti Spíritus",
      country: "Cuba",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -8000190369,
      latitude: 2173583059,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Ancon-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ancon-Cuba-IMG_20250222_102326-Annalay-Berdayes-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Annalay Berdayes Fernández",
          score: 0.75,
        },
        {
          name: "Angel Raúl Rodríguez Valdés",
          score: 0.6,
        },
      ],
      bqvScore: 71,
    },
    {
      name: "Cazonal",
      municipality: "Santiago de Cuba",
      province: "Santiago de Cuba",
      country: "Cuba",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -7547526013,
      latitude: 198869763,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Cazonal-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Cazonal-en-Santiago-de-Cuba-2-Yunior-Ramon-Velazquez-Labrada.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Alexis Santiago Pérez Figueredo",
          score: 0.85,
        },
        {
          name: "Yunior Ramón Velázquez Labrada",
          score: 0.75,
        },
      ],
      bqvScore: 71,
    },
    {
      name: "Punta Banda",
      municipality: "Ensenada",
      province: "Baja California",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "POBLADO",
      length: -1166335076,
      latitude: 3175098889,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Punta-Banda-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/imagen_no_disponible.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Francisco Detrell",
          score: 0.65,
        },
      ],
      bqvScore: 71,
    },
    {
      name: "La Reserva NATURAL del Puerto",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -575377818,
      latitude: -3805718556,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/La-reserva-del-puerto-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-reservadelpuerto_MDP1-Maria-Jose-Martin-Velasco.webp",
      additionalImages: [],
      evaluators: [
        {
          name: "Yamila Rodriguez",
          score: 0.5,
        },
        {
          name: "María José Martín Velasco",
          score: 0.45,
        },
      ],
      bqvScore: 70,
    },
    {
      name: "Arembepe Velha",
      municipality: "Camaçari",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -3818937034,
      latitude: -1278395573,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Arembepe-Velha-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-Arembepe-Velha-2-Arembepe-Brasil-Raija-Cisneiros-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Raija Cisneiros de Jesus",
          score: 0.6,
        },
      ],
      bqvScore: 70,
    },
    {
      name: "Peró",
      municipality: "Cabo Frio",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4198643056,
      latitude: -2285899444,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pero-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Pero-1-Brasil-Copy-Gabriel-Reges.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gabriel Moreira Reges",
          score: 0.6,
        },
      ],
      bqvScore: 70,
    },
    {
      name: "El Murciélago",
      municipality: "Manta",
      province: "Manabí",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "URBANA",
      length: -8073155833,
      latitude: -939555556,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Murcielago-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-El-Murcielago-1-Ecuador-Luis-Alberto-Cedeno-Macias.heic",
      additionalImages: [],
      evaluators: [
        {
          name: "Luis Alberto Cedeño Macias",
          score: 0.55,
        },
        {
          name: "Alina Heredia Vera",
          score: 0.35,
        },
      ],
      bqvScore: 70,
    },
    {
      name: "San Pablo",
      municipality: "Santa Elena/Santa Elena",
      province: "Santa Elena",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "POBLADO",
      length: -8076973694,
      latitude: -2133759296,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/San-Pablo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-San-Pablo-5-Ecuador-mario-palacios.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-San-Pablo-Ecuador-Teresa-Vera.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-San-Pablo-Ecuador-Teresa-Vera.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-San-Pablo-6-Ecuador-mario-palacios.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-San-Pablo-4-Ecuador-Sandra-Palacios-winkler.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-San-Pablo-2-Ecuador-Sandra-Palacios-winkler.jpg",
      ],
      evaluators: [
        {
          name: "Mario Alberto Palacios Moreno",
          score: 0.75,
        },
        {
          name: "Teresa J. Vera San Martín",
          score: 0.7,
        },
        {
          name: "Sandra Palacios Winkler",
          score: 0.55,
        },
      ],
      bqvScore: 70,
    },
    {
      name: "Varadero",
      municipality: "Guayaquil",
      province: "Posorja",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "POBLADO",
      length: -8029989587,
      latitude: -2723576705,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Varadero-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Varadero-1-Ecuador-Dolores-Astudillo.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ecuador-Varadero2-Teresa-Vera.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ecuador-Varadero1-Teresa-Vera.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Varadero-5-Ecuador-Dolores-Astudillo.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Varadero-4-Ecuador-Dolores-Astudillo.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Varadero-7-Ecuador-mario-palacios.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Varadero-1-Ecuador-mario-palacios.jpg",
      ],
      evaluators: [
        {
          name: "Mario Alberto Palacios Moreno",
          score: 0.8,
        },
        {
          name: "Teresa J. Vera San Martín",
          score: 0.7,
        },
      ],
      bqvScore: 70,
    },
    {
      name: "Bávaro",
      municipality: "Beron",
      province: "Higuey",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "URBANA",
      length: -6844935315,
      latitude: 1871680029,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Bavaro-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/r-playa-Bavaro-No.2-provincia-Altagracia-Republica-Dominicana-r-Gladys-Rosado.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Gladys A. Rosado Jimenez",
          score: 0.75,
        },
      ],
      bqvScore: 70,
    },
    {
      name: "CARIBE",
      municipality: "Santo domingo",
      province: "San Pedro de Macorís",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "ENCLAVE",
      length: -6949983441,
      latitude: 1840832637,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/CARIBE-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-CARIBE-Rep-Dominicana-Jael.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jael Javier Olivares",
          score: 0.25,
        },
      ],
      bqvScore: 70,
    },
    {
      name: "Juan Dolio",
      municipality: "Santo domingo",
      province: "San Pedro de Macorís",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "URBANA",
      length: -6939616224,
      latitude: 1842694961,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Juan-Dolio-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Juan-Dolio2-Rep-Dominicana-Jael.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Juan-Dolio3-Rep-Dominicana-Jael.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Juan-Dolio-Rep-Dominicana-Jael.jpg",
      ],
      evaluators: [
        {
          name: "Jael Javier Olivares",
          score: 0.3,
        },
      ],
      bqvScore: 70,
    },
    {
      name: "Piatã",
      municipality: "Salvador",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -383860814,
      latitude: -1295588919,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Piata-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-de-Piata-2-Danilo-Souza-Santana.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Danilo Souza Santana",
          score: 0.5,
        },
      ],
      bqvScore: 69,
    },
    {
      name: "Porto da Barra",
      municipality: "Salvador",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -3853294234,
      latitude: -1300331364,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Porto-da-Barra-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Porto-da-Barra-2_Salvador-Jose-Rodrigues-Souza-Filho-scaled.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "José Rodrigues Souza Filho",
          score: 1,
        },
        {
          name: "Junia Kacenelenbogen Guimarães",
          score: 0.6,
        },
      ],
      bqvScore: 69,
    },
    {
      name: "Praia da Paciência",
      municipality: "Salvador",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -3849702009,
      latitude: -1301090416,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-da-Paciencia-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-da-Paciencia-Jose-Rodrigues-Souza-Filho.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "José Rodrigues Souza Filho",
          score: 1,
        },
      ],
      bqvScore: 69,
    },
    {
      name: "Praia do Flamengo",
      municipality: "Salvador",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -3831892349,
      latitude: -1292952383,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-do-Flamengo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Flamengo_Brasil_1-Bruna-Leticia-Andrade.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Bruna Leticia Andrade",
          score: 0.45,
        },
      ],
      bqvScore: 69,
    },
    {
      name: "Praia do Santinho",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -4837622778,
      latitude: -2746210959,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-do-Santinho-1-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia_Santihno_Brasil_Fabricio_Martinez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.55,
        },
      ],
      bqvScore: 69,
    },
    {
      name: "Sapzurro",
      municipality: "Acandí",
      province: "Chocó",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7734709911,
      latitude: 8649073963,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Sapzurro-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Colombia-Sapzurro-3-Colombia-MANUELA-RENDON-OSORIO-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Sapzurro-2-Colombia-MANUELA-RENDON-OSORIO.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Sapzurro-1-Colombia-MANUELA-RENDON-OSORIO.jpg",
      ],
      evaluators: [
        {
          name: "Manuela Rendón Osorio",
          score: 0.45,
        },
      ],
      bqvScore: 69,
    },
    {
      name: "Buey Vaca",
      municipality: "Matanzas",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "URBANA",
      length: -8153285278,
      latitude: 23039725,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Buey-Vaca-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Buey-Vaca-Cuba-Screenshot_20250311-152004-1-Liliam-Rojas.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Juan Alfredo Cabrera",
          score: 0.9,
        },
        {
          name: "Liliam Rojas López",
          score: 0.75,
        },
      ],
      bqvScore: 69,
    },
    {
      name: "Camarones",
      municipality: "Puerto Vallarta",
      province: "Jalisco",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "URBANA",
      length: -1052324344,
      latitude: 206189731,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Camarones-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Camarones-Mexico-feb-2025-Emma-Noriega.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Emma Lizeth Noriega Garza",
          score: 0.75,
        },
      ],
      bqvScore: 69,
    },
    {
      name: "Guayacanes",
      municipality: "Guayacanes",
      province: "San Pedro de Macoris",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -6945275384,
      latitude: 1842065771,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Guayacanes-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/imagen-2-jose-luis-vasquez-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jose Luis Vasquez Almanzar",
          score: 0.5,
        },
      ],
      bqvScore: 69,
    },
    {
      name: "Pontal do Sul",
      municipality: "Pontal do Paraná",
      province: "Paraná",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4846759983,
      latitude: -2569770317,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pontal-do-Sul-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/imagen_no_disponible.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Daniel Telles",
          score: 0.75,
        },
      ],
      bqvScore: 68,
    },
    {
      name: "Praia do Flamengo",
      municipality: "Rio de Janeiro",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4317164556,
      latitude: -2293242489,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-do-Flamengo-RJ-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/flamengo-Salvador-Bahia-J.K.-G.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Junia Kacenelenbogen Guimarães",
          score: 0.55,
        },
      ],
      bqvScore: 68,
    },
    {
      name: "Matanzas",
      municipality: "Navidad, Chile",
      province: "O Higgins",
      country: "Chile",
      region: "PACIFICO_SUR",
      beachType: "POBLADO",
      length: -7187443656,
      latitude: -3396113752,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Matanzas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Matanza-Chile-2-Ricardo-Arce-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ricardo Arce Torres",
          score: 0.55,
        },
      ],
      bqvScore: 68,
    },
    {
      name: "Alcatraz",
      municipality: "Puerto Colombia",
      province: "Atlántico",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7492066305,
      latitude: 1103266654,
      bqvImage:
        "vhttps://rankingmejoresplayas.com/wp-content/uploads/2025/05/Alcatraz-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa_Alcatraz_Colombia_Dick_Acuna.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa_Alcatraz2_Colombia_Dick_Acuna.jpeg",
      ],
      evaluators: [
        {
          name: "Dick All Acuña Hereira",
          score: 0.55,
        },
      ],
      bqvScore: 68,
    },
    {
      name: "El Mamey",
      municipality: "Matanzas",
      province: "Matanzas",
      country: "Cuba",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -8149506062,
      latitude: 2305058975,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Mamey-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-El-Mamey-Cuba-Screenshot_20250311-1733432-1-Liliam-Rojas.png",
      additionalImages: [],
      evaluators: [
        {
          name: "Liliam Rojas López",
          score: 0.8,
        },
        {
          name: "Juan Alfredo Cabrera",
          score: 0.8,
        },
      ],
      bqvScore: 68,
    },
    {
      name: "Los Cocos",
      municipality: "Guayaquil",
      province: "Posorja",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "RURAL",
      length: -7421936708,
      latitude: 1123667181,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Los-Cocos-1-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/playa-cocos-3-Ecuador-William.png",
      additionalImages: [],
      evaluators: [
        {
          name: "William Guadalupe Freire",
          score: 0.75,
        },
      ],
      bqvScore: 68,
    },
    {
      name: "Najayo",
      municipality: "Najayo",
      province: "San Cristobal",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7010676488,
      latitude: 1830028325,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Najayo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/3-jose-luis-vasquez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jose Luis Vasquez Almanzar",
          score: 0.25,
        },
      ],
      bqvScore: 68,
    },
    {
      name: "Praia Brava",
      municipality: "Itajaí",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4841350037,
      latitude: -2739892639,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-Brava-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/imagen_no_disponible.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Marcus Polette",
          score: 1,
        },
      ],
      bqvScore: 67,
    },
    {
      name: "Ribeira (Penha)",
      municipality: "Salvador",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -3849733333,
      latitude: -1291018889,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Ribeira-Penha-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ribeira-Penha-1_Salvador-Jose-Rodrigues-Souza-Filho-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "José Rodrigues Souza Filho",
          score: 1,
        },
      ],
      bqvScore: 67,
    },
    {
      name: "Siboney",
      municipality: "Santiago de Cuba",
      province: "Siboney",
      country: "Cuba",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7570338953,
      latitude: 199600208,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Siboney-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Yunior-Playa-Siboney-en-Santiago-de-Cuba-2-Yunior-Ramon-Velazquez-Labrada.png",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-SIboney7-alexis-perez-figueredo.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Siboney-6-alexis-perez-figueredo.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Yunior-Playa-Siboney-en-Santiago-de-Cuba-4-Yunior-Ramon-Velazquez-Labrada.png",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Yunior-Playa-Siboney-en-Santiago-de-Cuba-3-Yunior-Ramon-Velazquez-Labrada.png",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Yunior_Playa-Siboney-en-Santiago-de-Cuba-1-Yunior-Ramon-Velazquez-Labrada.png",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Yunior-Playa-Siboney-en-Santiago-de-Cuba-5-Yunior-Ramon-Velazquez-Labrada.png",
      ],
      evaluators: [
        {
          name: "Alexis Santiago Pérez Figueredo",
          score: 0.85,
        },
        {
          name: "Yunior Ramón Velázquez Labrada",
          score: 0.8,
        },
      ],
      bqvScore: 67,
    },
    {
      name: "Ayangue",
      municipality: "Santa Elena",
      province: "Ayangue",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "POBLADO",
      length: -8075332325,
      latitude: -1979933153,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Ayangue-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ayangue-2-Ecuador-mario-palacios-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Mario Alberto Palacios Moreno",
          score: 0.8,
        },
        {
          name: "Teresa J. Vera San Martín",
          score: 0.75,
        },
        {
          name: "Sandra Palacios Winkler",
          score: 0.55,
        },
      ],
      bqvScore: 67,
    },
    {
      name: "Los Muertos",
      municipality: "Puerto Vallarta",
      province: "Jalisco",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "URBANA",
      length: -1052393145,
      latitude: 2059854399,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Los-Muertos-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-los-Muertos-Mexico-Nelly_Hostein-7.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-los-Muertos-Mexico-Nelly_Hostein-1.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-los-Muertos-Mexico-Nelly_Hostein-2.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-los-Muertos-Mexico-Nelly_Hostein-3.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-los-Muertos-Mexico-Nelly_Hostein-4.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-los-Muertos-Mexico-Nelly_Hostein-5.jpeg",
      ],
      evaluators: [
        {
          name: "Nelly Hostein",
          score: 0.75,
        },
      ],
      bqvScore: 67,
    },
    {
      name: "Alfar",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -5755566972,
      latitude: -3810233214,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Alfar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Alfar-5-Argentina-Yamila-Rodriguez-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Yamila Rodriguez",
          score: 0.5,
        },
      ],
      bqvScore: 66,
    },
    {
      name: "San Sebastián",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5754376,
      latitude: -37991276,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/San-Sebastian-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-San-Sebastian-3-Argentina-Gianfranco-Policastro-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-San-Sebastian-4-Argentina-Gianfranco-Policastro-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-San-Sebastian-5-Argentina-Gianfranco-Policastro-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Gianfranco Policastro",
          score: 0.5,
        },
      ],
      bqvScore: 66,
    },
    {
      name: "Piruí",
      municipality: "Camaçari",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -3818365933,
      latitude: -1277972516,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pirui-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-do-Pirui-3-Arembepe-Brasil-Raija-Cisneiros-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Raija Cisneiros de Jesus",
          score: 0.6,
        },
      ],
      bqvScore: 66,
    },
    {
      name: "Praia da Joaquina",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "ENCLAVE",
      length: -4844902676,
      latitude: -2762937625,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-da-Guarita-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-da-Joaquina-Fabricio.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.7,
        },
      ],
      bqvScore: 66,
    },
    {
      name: "Santamar",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7423100319,
      latitude: 1116724113,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Santamar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Santamar01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Santamar02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Santamar03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Santamar04-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 0.85,
        },
      ],
      bqvScore: 66,
    },
    {
      name: "El Salado",
      municipality: "Caimito",
      province: "Artemisa",
      country: "Cuba",
      region: "CARIBE",
      beachType: "RURAL",
      length: -8260184488,
      latitude: 2304164402,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Salado-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-playa-salado-2009-b-755x490-750x487-1-Edelsy-Carmona.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Edelsy Carmona",
          score: 0.5,
        },
      ],
      bqvScore: 66,
    },
    {
      name: "Las Terrenas",
      municipality: "Las Terrenas",
      province: "Samaná",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "URBANA",
      length: -6954214546,
      latitude: 193230919,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Las-Terrenas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Las-Terrenas-2-Republica-Dominicana-Angel-L.-Javier-Hernandez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Angel Javier-Hernandez",
          score: 0.3,
        },
      ],
      bqvScore: 66,
    },
    {
      name: "La Caleta",
      municipality: "Camet Norte",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -5748691233,
      latitude: -3782181112,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/La-Caleta-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Caleta-Camet-Norte-3-Mariana-Addino.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Mariana del Sol Addino",
          score: 0.55,
        },
      ],
      bqvScore: 65,
    },
    {
      name: "Playa Grande",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5753152513,
      latitude: -3802835081,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Grande-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-balneario-playa-grande-en-mar-del-plata-768x432-Magdalena-Sanchez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gianfranco Policastro",
          score: 0.5,
        },
        {
          name: "Rosa Magdalena Sanchez",
          score: 0.5,
        },
      ],
      bqvScore: 65,
    },
    {
      name: "Varese",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5753058645,
      latitude: -3801435379,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Varese-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/varese_MdP-Maria-Jose-Martin-Velasco.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "María José Martín Velasco",
          score: 0.4,
        },
      ],
      bqvScore: 65,
    },
    {
      name: "Baracoa",
      municipality: "Bauta",
      province: "Artemisa",
      country: "Cuba",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -8256202973,
      latitude: 2305196809,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Baracoa-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-playa-baracoa-Edelsy-Carmona.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-playa-baracoa-2-Edelsy-Carmona.jpg",
      ],
      evaluators: [
        {
          name: "Edelsy Carmona",
          score: 0.5,
        },
      ],
      bqvScore: 65,
    },
    {
      name: "Puerto Cardiel",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5754184381,
      latitude: -3797776775,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Puerto-Cardiel-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Cardiel-1-Argentina-Gianfranco-Policastro-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Puerto-Cardiel-2-Argentina-Gianfranco-Policastro-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Gianfranco Policastro",
          score: 0.55,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Sun Rider",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5753785134,
      latitude: -379573922,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Sun-Rider-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-SunRider_MarDelPlata-Maria-Jose-Martin-Velasco.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "María José Martín Velasco",
          score: 0.45,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Copacabana",
      municipality: "Rio de Janeiro",
      province: "Rio de Janeiro",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4318511111,
      latitude: -2297326389,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Copacabana-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/copacabana_Brasil-Flavia-Lins-de-Barros-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Flavia Moraes Lins de Barros",
          score: 0.7,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Placaford",
      municipality: "Salvador",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -3837110556,
      latitude: -1295124444,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Placaford-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/praia-de-placaford-5-Danilo-Souza-Santana.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Danilo Souza Santana",
          score: 0.5,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Puertecillo",
      municipality: "Navidad",
      province: "Valparaíso",
      country: "Chile",
      region: "PACIFICO_SUR",
      beachType: "POBLADO",
      length: -7195830116,
      latitude: -3408798406,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Puertecillo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Puertecillo-Chile-3-Ricardo-Arce.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ricardo Arce Torres",
          score: 0.55,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Manzanillo  del Mar",
      municipality: "Manzanillo del Mar, Cartagena",
      province: "Bolívar",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -754990774,
      latitude: 1051701842,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Manzanillo-del-Mar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Manzanillo-del-Mar2-Cartagena-Colombia-Gustavo-Echeverri-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gustavo Eugenio Echeverri Jaramillo",
          score: 0.7,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Miramar",
      municipality: "Puerto Colombia",
      province: "Atlántico",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -74953718,
      latitude: 11002085,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Miramar-1-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-Miramar-puerto-colombia-Gleini.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gleini Gallardo García",
          score: 0.75,
        },
        {
          name: "Dick All Acuña Hereira",
          score: 0.55,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Playa del Ritmo",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7423414843,
      latitude: 1117072621,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-del-Ritmo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PlayadelRitmo01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PlayadelRitmo02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PlayadelRitmo03-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 0.75,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Sierra Laguna",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7423474708,
      latitude: 1117293095,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Sierra-Laguna-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_SierraLaguna01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_SierraLaguna02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_SierraLaguna03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_SierraLaguna04-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_SierraLaguna05-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 0.75,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Guacuco",
      municipality: "Guacuco",
      province: "Nueva Esparta",
      country: "Venezuela",
      region: "CARIBE",
      beachType: "URBANA",
      length: -638154086,
      latitude: 110539031,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Guacuco-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/2-Guacuco-Venezuela-Luis-Herrera-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jaiser Cardona",
          score: 0.6,
        },
        {
          name: "Luis Cesar Herrera Rondón",
          score: 0.55,
        },
      ],
      bqvScore: 64,
    },
    {
      name: "Balneario Monte Hermoso",
      municipality: "Monte Hermoso",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -6128845002,
      latitude: -3898862022,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Balneario-Monte-Hermoso-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/MonteHermoso1-Argentina-Leonor.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/MonteHermoso2-Argentina-Leonor.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/MonteHermoso3-Argentina-Leonor.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/MonteHermoso4-Argentina-Leonor.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/MonteHermoso5-Argentina-Leonor.jpg",
      ],
      evaluators: [
        {
          name: "Yanel Martín Varisto",
          score: 0.6,
        },
      ],
      bqvScore: 63,
    },
    {
      name: "Piangüita",
      municipality: "Buenaventura",
      province: "Valle del Cauca",
      country: "Colombia",
      region: "PACIFICO_SUR",
      beachType: "POBLADO",
      length: -7719688079,
      latitude: 3838980989,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pianguita-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Pianguita-2-Colombia-MARIANA-ROSALYTH-RONDON-RAMOS.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Mariana Rondón",
          score: 0.5,
        },
      ],
      bqvScore: 63,
    },
    {
      name: "Chabelita",
      municipality: " General Villamil",
      province: "Guayas",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "URBANA",
      length: -804003214,
      latitude: -2638983836,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Chabelita-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Chabelita-4-Ecuador-mario-palacios.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Mario Alberto Palacios Moreno",
          score: 0.8,
        },
        {
          name: "Teresa J. Vera San Martín",
          score: 0.7,
        },
      ],
      bqvScore: 63,
    },
    {
      name: "Acevedo",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -57539738,
      latitude: -37963612,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Acevedo-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Acevedo-1-Argentina-Maria-Victoria-Laitano.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "María Victoria Laitano",
          score: 0.65,
        },
      ],
      bqvScore: 62,
    },
    {
      name: "Praia Brava",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -4862924688,
      latitude: -2695276328,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-Brava-FL-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia_Brava_Brasil_Fabricio_Martinez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.55,
        },
      ],
      bqvScore: 62,
    },
    {
      name: "Praia do Canal",
      municipality: "Camaçari",
      province: "Bahia",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -3817647222,
      latitude: -1277408056,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-do-Canal-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-do-Canal-3-Arembepe-Brasil-Raija-Cisneiros-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Raija Cisneiros de Jesus",
          score: 0.6,
        },
      ],
      bqvScore: 62,
    },
    {
      name: "Praia Mole",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -4843435809,
      latitude: -2760486471,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-Mole-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-Mole-Brasil-Fabricio.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.55,
        },
      ],
      bqvScore: 62,
    },
    {
      name: "La Boca",
      municipality: "Navidad",
      province: "O Higgins",
      country: "Chile",
      region: "PACIFICO_SUR",
      beachType: "POBLADO",
      length: -7184910602,
      latitude: -3392276497,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/La-Boca-1-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-La-Boca-Chile-2-Ricardo-Arce.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ricardo Arce Torres",
          score: 0.55,
        },
      ],
      bqvScore: 62,
    },
    {
      name: "Pozos Colorados",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7423053187,
      latitude: 1116557213,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pozos-Colorados-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PozosColorados01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PozosColorados02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PozosColorados03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PozosColorados04-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Pozos-Colorados-1-Colombia-Marie-1.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 0.75,
        },
        {
          name: "Marie Touchon",
          score: 0.55,
        },
      ],
      bqvScore: 62,
    },
    {
      name: "San Luis",
      municipality: "Cumaná",
      province: "Sucre",
      country: "Venezuela",
      region: "CARIBE",
      beachType: "URBANA",
      length: -6420487518,
      latitude: 1043347072,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/San-Luis-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PLaya-San-Luis-Migdalia-Venezuela.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Migdalia María Arcia de Gigante",
          score: 0.85,
        },
      ],
      bqvScore: 62,
    },
    {
      name: "Santa Teresita",
      municipality: "Santa Teresita",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5668805,
      latitude: -3654633,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Santa-Teresita-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Santa-Teresita-Ana-Faggi.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.8,
        },
      ],
      bqvScore: 61,
    },
    {
      name: "Imbé (Barra)",
      municipality: "Imbé",
      province: "Rio Grande do Sul",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5011619029,
      latitude: -2997123784,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Imbe-Barra-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-de-Imbe-Barra-1-Brasil-Gerson-Fernandino-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gerson Fernandino de Andrade Neto",
          score: 0.8,
        },
      ],
      bqvScore: 61,
    },
    {
      name: "Praia de Cabeçudas",
      municipality: "Itajaí",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -4863300884,
      latitude: -2692752739,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-de-Cabecudas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/imagen_no_disponible.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Marcus Polette",
          score: 1,
        },
      ],
      bqvScore: 61,
    },
    {
      name: "Plenomar",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "POBLADO",
      length: -7423198632,
      latitude: 1116864693,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Plenomar-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Plenomar01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Plenomar02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Plenomar03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Plenomar04-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 0.75,
        },
      ],
      bqvScore: 61,
    },
    {
      name: "Las Toninas",
      municipality: "Las Toninas",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5669179607,
      latitude: -3648746704,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Las-Toninas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/LAs-Toninas-Ana-Faggi.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.9,
        },
      ],
      bqvScore: 60,
    },
    {
      name: "Mar del Tuyu",
      municipality: "Mar del Tuyu",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5668692541,
      latitude: -3657764193,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Mar-del-Tuyu-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Mar-del-Tuyu-Ana-Faggi.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ana Maria Faggi",
          score: 0.8,
        },
      ],
      bqvScore: 60,
    },
    {
      name: "Playa Serena",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5757378612,
      latitude: -3810726163,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Serena-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-Serena-4-Argentina-Yamila-Rodriguez-scaled.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-Serena-5-Argentina-Yamila-Rodriguez-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-Serena-3-Argentina-Yamila-Rodriguez-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-Serena-2-Argentina-Yamila-Rodriguez-scaled.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Playa-Serena-1-Argentina-Yamila-Rodriguez-scaled.jpg",
      ],
      evaluators: [
        {
          name: "Yamila Rodriguez",
          score: 0.6,
        },
      ],
      bqvScore: 60,
    },
    {
      name: "Playita Mía",
      municipality: "Manta",
      province: "Manabí",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "URBANA",
      length: -8071104559,
      latitude: -949896912,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playita-Mia-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playitamia-1-Ecuador-Alina-Heredia.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Alina Heredia Vera",
          score: 0.35,
        },
      ],
      bqvScore: 60,
    },
    {
      name: "La Boca",
      municipality: "Balneario Parque Mar Chiquita",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -5741464519,
      latitude: -3773791671,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/La-Boca-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/La-Boca-1-Argentina-Mariana-Addino.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "Mariana del Sol Addino",
          score: 0.65,
        },
      ],
      bqvScore: 59,
    },
    {
      name: "Praia dos Açores",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -4852390923,
      latitude: -2778382246,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-dos-Acores-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-dos-Acores-Brasil-Fabricio.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.6,
        },
      ],
      bqvScore: 59,
    },
    {
      name: "Tramandaí",
      municipality: "Tramandaí",
      province: "Rio Grande do Sul",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5012716774,
      latitude: -2999460484,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Tramandai-Praia-Central-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-de-Tramandai-centro-2-Brasil-Gerson-Fernandino-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Gerson Fernandino de Andrade Neto",
          score: 0.8,
        },
      ],
      bqvScore: 59,
    },
    {
      name: "Bahía de Santa Marta",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7421506111,
      latitude: 1124363056,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Bahia-de-Santa-Marta-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_BahiaSantaMarta01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_BahiaSantaMarta02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_BahiaSantaMarta03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_BahiaSantaMarta04-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_BahiaSantaMarta05-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 1,
        },
      ],
      bqvScore: 59,
    },
    {
      name: "El Rodadero",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7422776235,
      latitude: 1120385919,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Rodadero-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_ElRodadero01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_ElRodadero02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_ElRodadero03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_ElRodadero04-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 0.9,
        },
        {
          name: "Marie Touchon",
          score: 0.55,
        },
      ],
      bqvScore: 59,
    },
    {
      name: "Constitución",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5754155,
      latitude: -37972022,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Constitucion-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Constitucion-1-Argentina-Maria-Victoria-Laitano.jpeg",
      additionalImages: [],
      evaluators: [
        {
          name: "María Victoria Laitano",
          score: 0.65,
        },
      ],
      bqvScore: 58,
    },
    {
      name: "Playa Popular",
      municipality: "Mar del Plata",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5754063713,
      latitude: -3800127923,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Popular-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Popular-1-Argentina-Maria-Victoria-Laitano.jpeg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Popular-2-Argentina-Maria-Victoria-Laitano.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Popular-3-Argentina-Maria-Victoria-Laitano.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Popular-4-Argentina-Maria-Victoria-Laitano.jpeg",
      ],
      evaluators: [
        {
          name: "María Victoria Laitano",
          score: 0.65,
        },
      ],
      bqvScore: 58,
    },
    {
      name: "Los Cocos",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -8031811363,
      latitude: -2712213377,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Los-Cocos-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_LosCocos01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_LosCocos02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_LosCocos03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_LosCocos04-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_LosCocos05-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 0.95,
        },
      ],
      bqvScore: 58,
    },
    {
      name: "Paseo de Roberto",
      municipality: "Bahía de Caráquez",
      province: "Manabí",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "URBANA",
      length: -80422895,
      latitude: -597608,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Paseo-de-Roberto-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PLaya-Paseo-Roberto-Ecuador-Fernanda-Navas-3.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fernanda Navas Moscoso",
          score: 0.7,
        },
      ],
      bqvScore: 58,
    },
    {
      name: "Península (barra del estero)",
      municipality: "Ensenada",
      province: "Baja California",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "POBLADO",
      length: -1166554056,
      latitude: 3172245833,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Peninsula-barra-del-estero-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Peninsula-barra-del-estero-Elizabeth-Violeta-Iris-Maldonado.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Elizabeth Iris",
          score: 0.5,
        },
      ],
      bqvScore: 58,
    },
    {
      name: "Playa Pacífica",
      municipality: "Ensenada",
      province: "Baja California",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "URBANA",
      length: -1166093107,
      latitude: 3181341729,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Pacifica-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/4_Pacifica_BC-Mexico-M.Concepcion-Arredondo.png",
      additionalImages: [],
      evaluators: [
        {
          name: "María Concepción Arredondo García",
          score: 0.9,
        },
        {
          name: "Elizabeth Iris",
          score: 0.5,
        },
      ],
      bqvScore: 57,
    },
    {
      name: "Boca Chica",
      municipality: "Boca Chica",
      province: "Santo Domingo",
      country: "Republica Dominicana",
      region: "CARIBE",
      beachType: "URBANA",
      length: -6960808456,
      latitude: 1844429785,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Boca-Chica-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Boca-Chica-1-Republica-Dominicana-Angel-L.-Javier-Hernandez.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Angel Javier-Hernandez",
          score: 0.45,
        },
      ],
      bqvScore: 57,
    },
    {
      name: "Morro das pedras",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -4848324772,
      latitude: -2769400875,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Morro-das-pedras-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Morro-das-pedras-Brasil-Fabricio.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.65,
        },
      ],
      bqvScore: 56,
    },
    {
      name: "Balneario Las Grutas",
      municipality: "Las Grutas",
      province: "Río Negro",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -6508290993,
      latitude: -4080895039,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Balneario-Las-Grutas-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Lasgrutas2-Argentina-Leonor-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Yanel Martín Varisto",
          score: 0.6,
        },
      ],
      bqvScore: 55,
    },
    {
      name: "Laguna Verde",
      municipality: "Valparaíso",
      province: "Valparaíso",
      country: "Chile",
      region: "PACIFICO_SUR",
      beachType: "POBLADO",
      length: -7167170074,
      latitude: -3310164891,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Laguna-Verde-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Laguna-Verde-Chile-2-Ricardo-Arce.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Ricardo Arce Torres",
          score: 0.5,
        },
      ],
      bqvScore: 55,
    },
    {
      name: "Playa Hermosa",
      municipality: "Ensenada",
      province: "Baja California",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "URBANA",
      length: -1166104602,
      latitude: 3183555795,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-Hermosa-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-Hermosa-Mexico-Elizabeth-Violeta-Iris-Maldonado.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "María Concepción Arredondo García",
          score: 0.95,
        },
        {
          name: "Francisco Detrell",
          score: 0.65,
        },
        {
          name: "Elizabeth Iris",
          score: 0.55,
        },
      ],
      bqvScore: 55,
    },
    {
      name: "Pântano do sul",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "POBLADO",
      length: -4850923124,
      latitude: -2778173815,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Pantano-do-sul-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Pantano-do-sul-Brasil-Fabricio.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.6,
        },
      ],
      bqvScore: 54,
    },
    {
      name: "Praia da Armação",
      municipality: "Florianópolis",
      province: "Santa Catarina",
      country: "Brasil",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -4850550658,
      latitude: -2774838284,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Praia-da-Armacao-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia-da-Armacao-Brasil-Fabricio.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fabrício Amorim Martinez",
          score: 0.55,
        },
      ],
      bqvScore: 54,
    },
    {
      name: "Canoa",
      municipality: "San Vicente",
      province: "Manabi",
      country: "Ecuador",
      region: "PACIFICO_SUR",
      beachType: "URBANA",
      length: -8045697524,
      latitude: -464296091,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Canoa-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PLaya-Canoa-Ecuador-Fernanda-Navas-3.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Fernanda Navas Moscoso",
          score: 0.65,
        },
      ],
      bqvScore: 54,
    },
    {
      name: "El Faro Beach",
      municipality: "Ensenada",
      province: "Baja California",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "URBANA",
      length: -116619273,
      latitude: 3178156432,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/El-Faro-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/imagen_no_disponible.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "María Concepción Arredondo García",
          score: 0.9,
        },
      ],
      bqvScore: 54,
    },
    {
      name: "Bella Vista",
      municipality: "Porlamar",
      province: "Nueva Esparta",
      country: "Venezuela",
      region: "CARIBE",
      beachType: "URBANA",
      length: -6383989769,
      latitude: 1095624489,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Bella-Vista-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/BELLA-VISTA-5-VENEZUELA-Jaiser-Cardona-scaled.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Jaiser Cardona",
          score: 0.6,
        },
      ],
      bqvScore: 54,
    },
    {
      name: "Salguero",
      municipality: "Santa Marta",
      province: "Magdalena",
      country: "Colombia",
      region: "CARIBE",
      beachType: "URBANA",
      length: -7423329859,
      latitude: 1118885202,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Salguero-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Salguero01-Camilo-M.-Botero.jpg",
      additionalImages: [
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Salguero-3-Colombia-Marie-1-scaled.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Salguero-2-Colombia-Marie-1-scaled.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Salguero-1-Colombia-Marie-1-scaled.jpeg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Salguero02-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Salguero03-Camilo-M.-Botero.jpg",
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_Salguero04-Camilo-M.-Botero.jpg",
      ],
      evaluators: [
        {
          name: "Camilo M. Botero",
          score: 0.9,
        },
        {
          name: "Marie Touchon",
          score: 0.55,
        },
      ],
      bqvScore: 53,
    },
    {
      name: "California Beach",
      municipality: "Santa Clara del Mar",
      province: "Buenos Aires",
      country: "Argentina",
      region: "ATLANTICO_SUR",
      beachType: "URBANA",
      length: -5749711161,
      latitude: -3783652567,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/California-Beach-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/California-Beach-3-Argenina-Mariana-Addino.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Mariana del Sol Addino",
          score: 0.45,
        },
      ],
      bqvScore: 50,
    },
    {
      name: "Playa 3Ms",
      municipality: "Ensenada",
      province: "Baja California",
      country: "México",
      region: "PACIFICO_NORTE",
      beachType: "URBANA",
      length: -1166955562,
      latitude: 3189260218,
      bqvImage:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/05/Playa-3Ms-scaled.jpg",
      urlPlaya:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/imagen_no_disponible.jpg",
      additionalImages: [],
      evaluators: [
        {
          name: "Francisco Detrell",
          score: 0.7,
        },
      ],
      bqvScore: 44,
    },
  ];

  const beachMap: Record<string, string> = {};

  for (const beach of beachData) {
    const playa = await prisma.beach.create({
      data: {
        name: beach.name,
        municipality: beach.municipality,
        province: beach.province,
        country: beach.country,
        region: beach.region,
        beachType: beach.beachType,
        length: beach.length,
        latitude: beach.latitude,
        bqvImage: beach.bqvImage,
        imageBeach: beach.urlPlaya,
        additionalImages: beach.additionalImages,
        bqvScore: beach.bqvScore,
      },
    });
    beachMap[playa.name] = playa.id;
  }

  const expertData: expertTypes[] = [
    {
      name: "Adriana Jiménez Zárate",
      institution: "U de Sucre",
      country: "Colombia",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Adriana-Jimenez.jpg",
    },
    {
      name: "Alessandra Pfuetzenreuter",
      institution: "Agencia Costeira e Programa Bandeira Azul",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Alessandra-Pfuetzenreuter.jpg",
    },
    {
      name: "Alexis Santiago Pérez Figueredo",
      institution: "Universidad de Oriente, Cuba",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Alexis-Santiago-Perez-Figueredo-1.jpg",
    },
    {
      name: "Alina Heredia Vera",
      institution: "Universidad Del Pacífico",
      country: "Ecuador",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "Ana Maria Faggi",
      institution: "Universidad de FLores",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ana-Maria-Faggi.jpg",
    },
    {
      name: "Angel Javier-Hernandez",
      institution:
        "Centro de Investigaciones de Biología Marina - Facultad de Ciencias - Universidad Autónoma de Santo Domingo",
      country: "Republica Dominicana",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Angel-Raul-Rodriguez-Valdes.jpg",
    },
    {
      name: "Angel Raúl Rodríguez Valdés",
      institution: "Centro de Servicios Ambientales-Sancti Spiritus",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "Angel Reyes",
      institution: "Centro de Investigaciones y Servicios Ambientales",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Angel-Reyes.jpg",
    },
    {
      name: "Annalay Berdayes Fernández",
      institution: "Centro de servicios ambientales Sancti Spíritus",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Annalay-Berdayes-Fernandez-1.jpg",
    },
    {
      name: "Bruna Leticia Andrade",
      institution: "UFRJ",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "Camilo M. Botero",
      institution: "Grupo de Investigación en Sistemas Costeros",
      country: "Colombia",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Camilo-Botero.jpg",
    },
    {
      name: "Daniel Telles",
      institution: "Professor Associado",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "Danilo Souza Santana",
      institution: "Rede Catussaba Resort e Hotéis",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Danilo-Souza-Santana.jpg",
    },
    {
      name: "Dick All Acuña Hereira",
      institution: "CLUSTER DE TURISMO DEL ATLANTICO",
      country: "Colombia",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Dick-All-Acuna.jpg",
    },
    {
      name: "Edelsy Carmona",
      institution: "Instituto de Geofísica y Astronomía",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Edelsy-Carmona.jpg",
    },
    {
      name: "Elier Alexander Córdova García",
      institution:
        "Centro de Investigaciones y Servicios Ambientales (CISAT-AMA-CITMA-CUBA)",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Elier-Alexander-Cordova-Garcia.jpg",
    },
    {
      name: "Elizabeth Iris",
      institution: "Universidad Autónoma de Baja California",
      country: "México",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Elizabeth-Iris.jpg",
    },
    {
      name: "Emma Lizeth Noriega Garza",
      institution: "Evaluador Independiente",
      country: "México",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Emma-Lizeth-Noriega-Garza.jpg",
    },
    {
      name: "Fabrício Amorim Martinez",
      institution: "SeaSon",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Fabricio-Amorim-Martinez.jpg",
    },
    {
      name: "Félix Alexis Correa Álvarez",
      institution: "CESAMVC",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Felix-Alexi-Correa.jpg",
    },
    {
      name: "Fernanda Navas Moscoso",
      institution: "Universidad Laica Eloy Alfaro de Manabí",
      country: "Ecuador",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Fernanda-Navas-Moscoso.jpg",
    },
    {
      name: "Flavia Moraes Lins de Barros",
      institution: "UFRJ",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Flavia-Moraes.jpg",
    },
    {
      name: "Francisco Detrell",
      institution: "Universidad Autónoma de Baja California",
      country: "México",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "Frank Huerta López",
      institution:
        "Centro de Capacitación.  Delegación del Ministerio del Turismo en Matanzas",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Frank-Huerta-Lopez.jpg",
    },
    {
      name: "Gabriel Moreira Reges",
      institution: "Geografia - UFRJ",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Gabriel-Moreira-Reges.jpg",
    },
    {
      name: "Gerson Fernandino de Andrade Neto",
      institution:
        "Professor, Universidade Federal do Rio Grande do Sul (UFRGS)",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Gerson-Fernandino-de-Andrade.jpg",
    },
    {
      name: "Gianfranco Policastro",
      institution: "Universidad Nacional de Mar del Plata",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Gianfranco-Policastro.jpg",
    },
    {
      name: "Gladys A. Rosado Jimenez",
      institution: "Universidad Autonoma de Santo Domingo",
      country: "Republica Dominicana",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Gladys-Rosado.jpg",
    },
    {
      name: "Gleini Gallardo García",
      institution: "Universidad Autónoma del Caribe",
      country: "Colombia",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Gleini-Gallardo.jpg",
    },
    {
      name: "Gonzalo Méndez-Martínez",
      institution: "Universidade de Vigo",
      country: "España",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Gonzalo-Mendez.jpg",
    },
    {
      name: "Gustavo Eugenio Echeverri Jaramillo",
      institution:
        "Grupo GIMA Universidad de San Buenaventura Cartagena Colombia",
      country: "Colombia",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Gustavo-Echeverri.jpg",
    },
    {
      name: "Jael Javier Olivares",
      institution: "Universidad Autónoma de Santo Domingo",
      country: "Republica Dominicana",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Jael-Javier.jpg",
    },
    {
      name: "Jaiser Cardona",
      institution: "Evaluador Independiente",
      country: "Venezuela",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Jasier-Cardona.jpg",
    },
    {
      name: "Jone Molina-Urruela",
      institution: "Universidade de Vigo",
      country: "España",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Jone-Molina-Urruela.jpg",
    },
    {
      name: "Jose Luis Vasquez Almanzar",
      institution: "CIBIMA",
      country: "Republica Dominicana",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "José Rodrigues Souza Filho",
      institution: "Instituto Federal Baiano",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Jose-Rodrigues.jpg",
    },
    {
      name: "Juan Alfredo Cabrera",
      institution: "Universidad de Matanzas Cuba",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Juan-Alfredo-Cabrera.jpg",
    },
    {
      name: "Junia Kacenelenbogen Guimarães",
      institution: "Universidade Federal da Bahia",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Junia-Kacenelenbogen-Guimaraes.jpg",
    },
    {
      name: "Leonardo Manuel Cuétara Sánchez",
      institution: "Universidad Técnica de Manabí",
      country: "Ecuador",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Leonardo-Manuel-Cuetara-Sanchez.jpg",
    },
    {
      name: "Liliam Rojas López",
      institution: "CSAM-CITMA",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Liliam-Rojas.jpg",
    },
    {
      name: "Luis Alberto Cedeño Macias",
      institution: "RACSE",
      country: "Ecuador",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Luis-Alberto-Cedeno-Macias.jpg",
    },
    {
      name: "Luis Cesar Herrera Rondón",
      institution: "Iconoplaya",
      country: "Venezuela",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Luis-Cesar-Herrera.jpg",
    },
    {
      name: "Manuel García Castro",
      institution: "CESAMVC",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Manuel-Garcia-Castro.jpg",
    },
    {
      name: "Manuela Rendón Osorio",
      institution: "Grupo de Investigación en Sistemas Costeros",
      country: "Colombia",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Manuela-Rendon.jpg",
    },
    {
      name: "Marcus Polette",
      institution: "Universidade do Vale do Itajaí",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Marcus-Polette.jpg",
    },
    {
      name: "María Concepción Arredondo García",
      institution:
        "Facultad de Ciencias Marinas, Universidad Autónoma de Baja California",
      country: "México",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "Maria del Rocio Meza Becerra",
      institution: "Universidad de Guadalajara",
      country: "México",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Maria-del-Rocio-Meza-Becerra.jpg",
    },
    {
      name: "Maria Elena Gonzalez Ruelas",
      institution: "Centro Universitario de la Costa UDG",
      country: "México",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Maria-Elena-Gonzalez-Ruelas.jpg",
    },
    {
      name: "María José Martín Velasco",
      institution:
        "Instituto de Geologia de Costas y del Cuaternario - Universidad Nacional de Mar del Plata",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Maria-Jose-Martin-Velasco.jpg",
    },
    {
      name: "María Victoria Laitano",
      institution:
        "Instituto de Investigaciones Marinas y Costeras-CONICET-UNMdP",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Maria-Victoria-Laitano.jpg",
    },
    {
      name: "Mariana del Sol Addino",
      institution: "Facultad de Ciencias Exactas y Naturales - UNMDP",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Mariana-del-sol.jpeg",
    },
    {
      name: "Mariana Rondón",
      institution: "Universidad del Valle",
      country: "Colombia",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Mariana-Rondon.jpg",
    },
    {
      name: "Marie Touchon",
      institution: "Evaluador Independiente",
      country: "Colombia",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Marie-Touchon.jpg",
    },
    {
      name: "Mario Alberto Palacios Moreno",
      institution: "Universidad Del Pacífico - Ecuador",
      country: "Ecuador",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Mario-Palacios-1.jpg",
    },
    {
      name: "Migdalia María Arcia de Gigante",
      institution: "Evaluador Independiente",
      country: "Venezuela",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Migdalia-Maria-Arcia-de-Gigante.jpg",
    },
    {
      name: "Nelly Hostein",
      institution: "Universidad de Guadalajara",
      country: "Mexico",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Nelly-Hostein.jpg",
    },
    {
      name: "Oliver Simon Pereyra Meza",
      institution: "SERNANP",
      country: "Perú",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "Paloma Arias Ordilaes",
      institution: "IEMAR",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Paloma-Arias-Ordilaes.jpg",
    },
    {
      name: "Patricia Perelman",
      institution: "Universidad de Flores",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Patricia-Perelman.jpg",
    },
    {
      name: "Rosa Magdalena Sanchez",
      institution: "Universidad Nacional de Mar del Plata",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Rosa-Magdalena-Sanchez.jpg",
    },
    {
      name: "Raija Cisneiros de Jesus",
      institution: "Universidade Federal da Bahia (UFBA)",
      country: "Brasil",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Raija-Cisneiros-de-Jesus.jpg",
    },
    {
      name: "Ricardo Arce Torres",
      institution: "Universidad Alberto Hurtado",
      country: "Chile",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ricardo-Arce-Torres.jpg",
    },
    {
      name: "Sandra Palacios Winkler",
      institution: "Evaluador Independiente",
      country: "Ecuador",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Sandra-Palacios-Winkler.jpg",
    },
    {
      name: "Sarina Suero",
      institution:
        "Centro de Investigaciones de Biología Marina-Idelisa Bonnelly de Calventi (CIBIMA-IBC) de la Universidad Autónoma de Santo Domingo (UASD)",
      country: "Republica Dominicana",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "Teresa J. Vera San Martín",
      institution:
        "Escuela Superior Politécnica del Litoral, ESPOL, Centro Internacional del Pacífico para la Reducción del Riesgo de Desastres",
      country: "Ecuador",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Teresa-Vera.jpg",
    },
    {
      name: "Verónica Mariela Blanco",
      institution: "UNPSJB",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "William Guadalupe Freire",
      institution: "Universidad Del Pacífico",
      country: "Ecuador",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Imagen-de-perfil-no-disponible.jpg",
    },
    {
      name: "Yamila Rodriguez",
      institution:
        "Instituto de Investigaciones Marinas y Costeras (UNMdP-CONICET)",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Yamila-Rodriguez.jpg",
    },
    {
      name: "Yanel Martín Varisto",
      institution: "Universidad Nacional del Sur",
      country: "Argentina",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Yanel-Leonor-Martin-Varisto.jpg",
    },
    {
      name: "Yunior Ramón Velázquez Labrada",
      institution: "Universidad de Oriente, Santiago de Cuba",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Yunior-Ramon-Velazquez-Labrada-1.jpg",
    },
    {
      name: "Zulema Mir Frutos",
      institution:
        "Centro de Investigaciones y Servicios Ambientales (CISAT-AMA-CITMA-Cuba)",
      country: "Cuba",
      photoUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Zulema-Mir-Frutos.jpg",
    },
  ];

  function normalizeName(name: string): string {
    return name
      .trim()
      .normalize("NFKC") // Elimina tildes y caracteres especiales
      .toLowerCase();
  }

  const expertMap: Record<string, string> = {};

  // Guardar expertos
  for (const expert of expertData) {
    const experto = await prisma.expert.create({
      data: {
        name: expert.name,
        country: expert.country,
        image: expert.photoUrl,
        institution: expert.institution,
      },
    });

    const normalized = normalizeName(experto.name);
    expertMap[normalized] = experto.id;
  }

  // Crear evaluaciones
  for (const beach of beachData) {
    for (const evaluatorData of beach.evaluators) {
      const normalizedEvaluatorName = normalizeName(evaluatorData.name);
      const expertId = expertMap[normalizedEvaluatorName];

      if (!expertId) {
        throw new Error(`No se encontró el experto: "${evaluatorData.name}"`);
      }

      await prisma.evaluation.create({
        data: {
          expertId,
          beachId: beachMap[beach.name],
          creditibilyIndex: evaluatorData.score,
          expertLastVisit: Date.now().toString(),
          beachDescription: "Descripción de la playa",
          evaluationYear: 2025,
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
