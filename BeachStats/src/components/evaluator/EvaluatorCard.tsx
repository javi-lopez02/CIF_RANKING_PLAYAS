import { useState } from "react";

type specializationAreas = {
  BIOLOGIA_ECOLOGIA: string;
  GEOGRAFIA: string;
  GEOLOGIA: string;
  GESTION_COSTERA: string;
  INGENIERIA: string;
  OCEANOGRAFIA: string;
  QUIMICA: string;
  TURISMO: string;
  CIENCIAS_NATURALES: string;
  OTROS: string;
};

interface EvaluatorCardProps {
  name: string;
  image: string;
  institution: string;
  codeNode: string;
  email: string;
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
  specializationAreas: specializationAreas[];
}

export default function EvaluatorCard({
  name,
  image,
  institution,
  codeNode,
  email,
  studyLevel,
  experienceYears,
  specializationAreas,
}: EvaluatorCardProps) {
  const [isHovering, setIsHovering] = useState(false);

  // Mapeo de nivel de estudios para mostrar texto más amigable
  const studyLevelMap = {
    SECONDARIA_O_UNIVERSIDAD: "Secundaria o Universidad",
    GRADUADO_UNIVERSITARIO: "Graduado Universitario",
    ESPECIALIZACION: "Especialización",
    MASTER: "Máster",
    DOCTORADO: "Doctorado",
  };

  // Mapeo de años de experiencia para mostrar texto más amigable
  const experienceYearsMap = {
    MENOS_5: "Menos de 5 años",
    ENTRE_5_10: "Entre 5 y 10 años",
    ENTRE_11_15: "Entre 11 y 15 años",
    ENTRE_16_20: "Entre 16 y 20 años",
    MAS_20: "Más de 20 años",
  };

  return (
    <div
      className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Imagen de fondo con overlay gradiente */}
      <div className="absolute inset-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gold to-sky opacity-30"></div>
      </div>

      {/* Contenido visible inicialmente (siempre visible pero cambia en hover) */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-20 transition-all duration-300 ease-in-out">
        <h2 className="text-xl font-bold mb-2 text-dark drop-shadow-lg">
          {name}
        </h2>
        <div className="flex flex-col space-y-1 text-white text-sm">
          <p>
            <span className="font-semibold text-gold">Institución:</span>{" "}
            {institution}
          </p>
          <p>
            <span className="font-semibold text-gold">CI:</span> 02100368960
          </p>

          {/* Información adicional que aparece en hover */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isHovering ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold text-gold">Email:</span>{" "}
                {email}
              </p>
              <p>
                <span className="font-semibold text-gold">
                  Código de Nodo:
                </span>{" "}
                {codeNode}
              </p>
              <p>
                <span className="font-semibold text-gold">
                  Nivel de Estudios:
                </span>{" "}
                {studyLevelMap[studyLevel]}
              </p>
              <p>
                <span className="font-semibold text-gold">
                  Experiencia:
                </span>{" "}
                {experienceYearsMap[experienceYears]}
              </p>
              <div>
                <span className="font-semibold text-gold block mb-1">
                  Áreas de Especialización:
                </span>
                <ul className="list-disc pl-5 space-y-1">
                  {specializationAreas.map((area, index) => (
                    <li key={index} className="text-xs">
                      {Object.keys(area).map((key) => area[key])}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
