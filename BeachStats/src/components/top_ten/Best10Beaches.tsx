import { BiInfoCircle } from "react-icons/bi";
import { Beach } from "../../types";
import { Spinner } from "@heroui/spinner";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface Props {
  beach: Beach[];
  loading: boolean;
  error: string[] | undefined;
}

export default function Best10Beaches({ beach, loading, error }: Props) {
  const navigate = useNavigate();
  // Renderizado principal
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        {/* Título y descripción */}
        <div className="flex justify-between mb-12 text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-dark-700 font-sans text-dark-700 mb-2">
              LAS 10 MEJORES PLAYAS
            </h1>
            <h2 className="text-xl md:text-2xl font-medium font-sans text-dark-700 mb-4">
              SEGÚN LA CIENCIA
            </h2>
            <p className="text-gray-600 font-sans text-sm md:text-base max-w-3xl mx-auto">
              Un equipo de 46 expertos en gestión de playas evaluó 123 playas
              utilizando indicadores de ecosistemas. Vea cuáles son las mejores
              entre las playas analizadas.
            </p>
          </div>

          {/* Logo/Emblema */}
          <img
            src="/Ranking_logo.png"
            alt=""
            className="w-32 h-32 lg:w-48 lg:h-48"
          />
        </div>

        {/* Grilla de playas */}
        {loading && (
          <div className="flex items-center justify-center h-64 w-full">
            <Spinner color="primary"></Spinner>
          </div>
        )}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beach.map((beach, cont) => (
              <div
                key={beach.id}
                className="relative bg-white rounded-lg border-1 shadow-md hover:shadow-sky-400 overflow-hidden border-dark-700 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40">
                  <img
                    src={beach.imageBeach}
                    alt={beach.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-gold-500 text-dark-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                    {cont + 1}
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="font-bold text-center text-lg font-sans mb-1 text-dark-700">
                    {beach.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-lato text-center mb-3">
                    {beach.municipality}, {beach.province}, {beach.country}
                  </p>

                  <div className="flex justify-center mb-3">
                    <div className="bg-sky-100 text-sky-800 font-medium font-sans px-2.5 py-0.5 rounded text-sm inline-flex items-center">
                      <span>BQV:{beach.bqvScore}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/details?p=${beach.id}`)}
                    className="w-full  mt-2 text-dark-700 hover:text-gold-500 flex items-center justify-center py-1 px-2 rounded hover:bg-sky-50 transition-colors"
                  >
                    <BiInfoCircle size={16} className="mr-1" />
                    <span className="text-sm">Ver detalles</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {error && toast.error(error.join("Error al cargar las playas."))}
    </>
  );
}
