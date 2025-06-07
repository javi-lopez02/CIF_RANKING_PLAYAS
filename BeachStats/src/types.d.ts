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
  municipality: string;
  province: string;
  country: string;
  beachType: "URBANA" | "DE_POBLADO" | "RURAL" | "NATURAL" | "ENCLAVE";
  bqvScore: number;
  bqvImage: string;
  additionalImages: string[];
  imageBeach: string;
  length: number;
  latitude: number;
  region:
    | "ATLANTICO_NORTE"
    | "ATLANTICO_SUR"
    | "PACIFICO_NORTE"
    | "PACIFICO_SUR"
    | "MEDITERRANEO"
    | "CARIBE";
  evaluations: {
    beachDescription: string;
    expert: Expert;
    creditibilyIndex: number;
  }[];
}

export interface Expert {
  id: string;
  name: string;
  email: string;
  country: string;
  institution: string;
  image: string;
  codeNode: string;
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
  graduatedDate: string?;
  specializationAreas: SPECIALITATION_AREA[];
  evaluations: {
    beach: Beach;
    creditibilyIndex: number;
  }[];
}

export interface Scientifics {
  id: string;
  name: string;
  image: string;
  country: string;
  schoolLevel: string;
  areaExperiencia: string;
}

export interface School {
  id: string;
  name: string;
  country: string;
}
