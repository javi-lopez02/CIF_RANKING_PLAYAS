import { Spinner } from "@heroui/spinner";
import HowToBeExpert from "../components/home/How_ToBe_Expert";
import SchoolCard from "../components/school/SchoolCard";
import SchoolIntro from "../components/school/SchoolIntro";
import useSchool from "../customHooks/useSchool";
import { toast } from "sonner";

export default function School() {
  const { school, loading, error } = useSchool();
  if (error) {
    toast.error("Error al cargar las playas");
  }
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 w-full">
      <div className="w-full md:w-4/5 flex flex-col gap-8 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col w-full gap-4 lg:gap-8 py-4">
          <SchoolIntro></SchoolIntro>
          {/* Sección izquierda con galería */}
        </div>
        {loading && (
          <div className="flex py-16 items-center justify-center">
            <Spinner color="secondary" />
          </div>
        )}{" "}
        {!loading && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Nuestros Evaluadores Expertos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {school.map((schol) => (
                <SchoolCard school={schol}></SchoolCard>
              ))}
            </div>
          </div>
        )}
        <HowToBeExpert></HowToBeExpert>
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
