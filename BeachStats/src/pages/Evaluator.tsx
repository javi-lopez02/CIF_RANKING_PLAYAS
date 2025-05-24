import { toast } from "sonner";
import EvaluatorCard from "../components/evaluator/EvaluatorCard";
import useExpert from "../customHooks/useExperts";
import { Expert } from "../types";
import { Spinner } from "@heroui/spinner";

export default function Evaluator() {
  const { experts, error, loading } = useExpert();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <div className="w-full md:w-4/5 px-4 flex flex-col items-center">
        <div className="flex flex-col p-4 gap-8 w-full">
          <h2 className="py-4 text-center font-sans font-bold text-dark text-5xl">
            Nuestros Evaluadores
          </h2>
          {loading && (
            <div className="flex py-8 min-w-full items-center justify-center">
              <Spinner color="success" />
            </div>
          )}{" "}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full p-6">
              {experts.map((expert: Expert) => (
                <EvaluatorCard
                  key={expert.id}
                  name={expert.name}
                  email={expert.email}
                  codeNode={expert.codeNode}
                  institution={expert.institution}
                  studyLevel={expert.studyLevel}
                  image="https://www.shutterstock.com/image-photo/young-pretty-caucasian-woman-face-260nw-1854611098.jpg"
                  experienceYears={expert.experienceYears}
                  specializationAreas={expert.specializationAreas}
                />
              ))}
            </div>
          )}
        </div>
        {error && toast.error("Error al cargar los expertos")}
      </div>

      {/* Sección de Google Anuncios */}
      <div className="w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 flex items-center justify-center">
        <div className="w-full h-32 md:h-auto border border-gray-300 rounded flex items-center justify-center text-center p-4 text-gray-500">
          Este es el sitio donde van los anuncios de Google
        </div>
      </div>
    </div>
  );
}
