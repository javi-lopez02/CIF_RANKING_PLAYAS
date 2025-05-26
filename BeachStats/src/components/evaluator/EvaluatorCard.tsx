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
    MENOS_5: "menos de 5 años",
    ENTRE_5_10: "entre 5 y 10 años",
    ENTRE_11_15: "entre 11 y 15 años",
    ENTRE_16_20: "entre 16 y 20 años",
    MAS_20: "más de 20 años",
  };

  // Función para generar texto en prosa
  const generateProseDescription = () => {
    const areas = specializationAreas.map((area) =>
      Object.keys(area)
        .map((key) => area[key].toLowerCase().replace(",", ", "))
        .join("")
        .replace("_", " ")
    );

    return `Conoce a ${name}, un distinguido profesional que forma parte de ${institution}. 
    Con una sólida formación académica que incluye ${studyLevelMap[
      studyLevel
    ].toLowerCase()}; 
    aporta ${
      experienceYearsMap[experienceYears]
    } de experiencia valiosa en el campo. 
    Se centra principalmente en ${areas}, áreas donde ha desarrollado un profundo 
    conocimiento y pasión por la investigación y aplicación práctica. Utilizando el código de nodo ${codeNode} para 
    referencias institucionales.`;
  };

  return (
    <div
      className="relative w-full h-96 rounded-lg overflow-hidden shadow-md hover:shadow-sky-400 bg-gradient-to-t from-gold-500 via-sky-500 to-sky-500 transition-all duration-300 cursor-pointer transform hover:scale-105 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img src={image} alt={name} className="w-full h-full object-fill" />
      </div>

      {/* Overlay oscuro que aparece en hover */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isHovering ? "opacity-70" : "opacity-0"
        }`}
      ></div>

      {/* Nombre siempre visible */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-20">
        <h2 className={`text-xl font-bold ${isHovering ? "text-white" : "text-black"}  drop-shadow-2xl text-center`}>
          {name.toUpperCase()}
        </h2>
      </div>

      {/* Información adicional que aparece en hover */}
      <div
        className={`absolute inset-0 p-6 z-10 flex flex-col justify-start transition-all duration-300 ease-in-out ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-white text-center  space-y-3">
          <div className="mt-4">
            <p className="text-sm text-white leading-relaxed">
              {generateProseDescription()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}