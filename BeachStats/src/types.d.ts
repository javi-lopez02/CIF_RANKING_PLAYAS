export interface Media {
  id: string;
  name: string;
  url: string;
  image: string;
  year: number;
}

type SPECIALITATION_AREA = {
  BIOLOGIA_ECOLOGIA;
  GEOGRAFIA;
  GEOLOGIA;
  GESTION_COSTERA;
  INGENIERIA;
  OCEANOGRAFIA;
  QUIMICA;
  TURISMO;
  CIENCIAS_NATURALES;
  OTROS;
};

export interface Beach {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  coordinates: string;
  beachType: "URBANA" | "DE_POBLADO" | "RURAL" | "NATURAL";
  BQV: number;
  region: string;
  evaluations: {
    beachDescription: string;
    beachImages: string[];
    expert: Expert;
  };
}

export interface Expert {
  id: string;
  name: string;
  email: string;
  institution: string;
  image: string;
  codeNode: string;
  studyLevel: "SECONDARIA_O_UNIVERSIDAD" | "GRADUADO_UNIVERSITARIO" | "ESPECIALIZACION" | "MASTER" | "DOCTORADO";
  experienceYears: "MENOS_5" | "ENTRE_5_10" | "ENTRE_11_15" | "ENTRE_16_20" | "MAS_20";
  graduatedDate: string?;
  specializationAreas: SPECIALITATION_AREA[];
  evaluations: {
    creditibilyIndex: number;
  };
}
