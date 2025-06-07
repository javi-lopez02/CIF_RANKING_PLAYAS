import { BeachInfo } from "../components/beachdetails/BeachInfo";
import { BiMapPin, BiPencil } from "react-icons/bi";
import { BeachPicture } from "../components/beachdetails/BeachPicture";
import BeachDescription from "../components/beachdetails/BeachDescription";
import HowToBeExpert from "../components/home/How_ToBe_Expert";
import BeachEvaluation from "../components/beachdetails/BeachEvaluation";
import { useState } from "react";
import { useBeachDetails } from "../customHooks/useBeachDetails";
import { toast } from "sonner";
import { Spinner } from "@heroui/spinner";

export default function BeachDetails() {
  const [query] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("p") ?? "";
  });

  const { beach, error, loading } = useBeachDetails(query);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 w-full">
      {loading && (
        <div className="flex py-8 min-w-full items-center justify-center">
          <Spinner color="secondary" />
        </div>
      )}
      {!loading && (
        <div className="w-full md:w-4/5 flex flex-col px-2 sm:px-4 md:px-6">
          <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8 py-4">
            {/* Sección izquierda con galería */}
            {beach && (
              <div className="flex flex-col w-full lg:w-3/5 gap-6">
                <BeachPicture beach={beach} />
                <BeachDescription
                  evaluations={beach.evaluations}
                  icon={BiPencil}
                ></BeachDescription>
              </div>
            )}
            {/* Sección derecha con ubicación */}
            {beach && (
              <div className="w-full lg:w-2/5 mt-4 lg:mt-0 flex flex-col gap-6">
                <BeachInfo
                  beach={beach}
                  // evaluators={beach.evaluations.expert}
                  icon={BiMapPin}
                />
                <BeachEvaluation beach={beach}></BeachEvaluation>
              </div>
            )}
          </div>
          <HowToBeExpert></HowToBeExpert>
          {error && toast.error(error)}
        </div>
      )}

      {/* Sección de Google Anuncios */}
      <div className="w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 flex items-center justify-center">
        <div className="w-full h-32 md:h-auto border border-gray-300 rounded flex items-center justify-center text-center p-4 text-gray-500">
          Este es el sitio donde van los anuncios de Google
        </div>
      </div>
    </div>
  );
}
