import { toast } from "sonner";
import EvaluatorCard from "../components/evaluator/EvaluatorCard";
import useExpert from "../customHooks/useExperts";
import { Expert } from "../types";
import { Spinner } from "@heroui/spinner";
import { useEvaluatorFilters } from "../components/evaluator/useEvaluatorFilters";
import EvaluatorIntroduction from "../components/evaluator/EvaluatorIntroduction";

export default function Evaluator() {
  const { experts, error, loading } = useExpert();
  const {
    searchName,
    setSearchName,
    selectedCountry,
    setSelectedCountry,
    countries,
    filteredExperts,
    clearFilters,
  } = useEvaluatorFilters(experts);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <div className="w-full md:w-4/5 px-4 flex flex-col items-center">
        <div className="flex flex-col p-4 gap-4 w-full">
          <h2 className="py-4 text-center font-sans font-bold text-dark-700 text-5xl">
            Nuestros Evaluadores
          </h2>

          {/* Texto de introducción */}
          <EvaluatorIntroduction />

          <div className="bg-gradient-to-tr from-gold-200 to-sky-200 rounded-lg shadow-md p-4 sm:p-6 w-full max-w-5xl mx-auto">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
              Filtrar Evaluadores
            </h3>

            {/* Contenedor principal de filtros */}
            <div className="space-y-4">
              {/* Primera fila: Filtros de búsqueda */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Filtro por nombre */}
                <div className="w-full">
                  <label
                    htmlFor="searchName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Buscar por nombre
                  </label>
                  <input
                    id="searchName"
                    type="text"
                    placeholder="Escribe el nombre del evaluador..."
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>

                {/* Filtro por país */}
                <div className="w-full">
                  <label
                    htmlFor="countrySelect"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Filtrar por país
                  </label>
                  <select
                    id="countrySelect"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="">Todos los países</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Segunda fila: Botón y contador */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                {/* Botón para limpiar filtros */}
                <div className="order-2 sm:order-1">
                  <button
                    onClick={clearFilters}
                    className="w-full sm:w-auto px-4 py-2 text-sm bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Limpiar filtros
                  </button>
                </div>

                {/* Contador de resultados */}
                <div className="order-1 sm:order-2 text-sm text-gray-600">
                  {!loading && (
                    <p className="text-center sm:text-right">
                      Mostrando{" "}
                      <span className="font-semibold">
                        {filteredExperts.length}
                      </span>{" "}
                      de{" "}
                      <span className="font-semibold">
                        {experts?.length || 0}
                      </span>{" "}
                      evaluadores
                      {(searchName || selectedCountry) && (
                        <span className="ml-2 text-sky-600 font-medium">
                          (filtros aplicados)
                        </span>
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {loading && (
            <div className="flex py-8 min-w-full items-center justify-center">
              <Spinner color="success" />
            </div>
          )}

          {!loading && (
            <>
              {filteredExperts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center w-full p-6">
                  {filteredExperts.map((expert: Expert) => (
                    <EvaluatorCard key={expert.id} evaluator={expert} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-500 text-lg mb-2">
                    No se encontraron evaluadores
                  </div>
                  <p className="text-gray-400 text-sm">
                    Intenta ajustar los filtros de búsqueda
                  </p>
                </div>
              )}
            </>
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
