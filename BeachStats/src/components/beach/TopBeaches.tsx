import { useCallback } from "react";
import useBeach from "../../customHooks/useBeach";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@heroui/spinner";
import { useFilters } from "./useFilters";
import FiltersSection from "./FiltersSection";
import { usePagination } from "./usePagination";
import BeachCard from "./BeachCard";
import Pagination from "./Pagination";
import { BiSearch } from "react-icons/bi";

// Componente principal
export default function TopBeaches() {
  const { beaches, error, loading } = useBeach();
  const navigate = useNavigate();

  const {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    selectedRegion,
    setSelectedRegion,
    selectedType,
    setSelectedType,
    filterOptions,
    filteredAndSortedBeaches,
    resetFilters,
  } = useFilters(beaches);

  const {
    currentItems: currentBeaches,
    totalPages,
    indexOfFirstItem,
    indexOfLastItem,
    currentPage,
    handlePageChange,
    resetToFirstPage,
  } = usePagination(filteredAndSortedBeaches);

  const handleBeachClick = useCallback(
    (beachId: string | number) => {
      navigate(`/details?p=${beachId}`);
    },
    [navigate]
  );

  const handleFilterChange = useCallback(() => {
    resetToFirstPage();
  }, [resetToFirstPage]);

  // Mostrar error si existe
  if (error) {
    toast.error("Error al cargar las playas");
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900">
          Explora las Playas del Mundo
        </h1>

        <FiltersSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          filterOptions={filterOptions}
          onFilterChange={handleFilterChange}
        />

        {/* Contador de resultados */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <p className="text-gray-600">
            Mostrando {indexOfFirstItem + 1}-{indexOfLastItem} de{" "}
            {filteredAndSortedBeaches.length} resultados
          </p>

          {(searchTerm ||
            selectedRegion !== "Todos" ||
            selectedType !== "Todos") && (
            <button
              onClick={resetFilters}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex py-16 items-center justify-center">
            <Spinner color="secondary" />
          </div>
        )}

        {/* Contenido principal */}
        {!loading && (
          <>
            {currentBeaches.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {currentBeaches.map((beach) => (
                  <BeachCard
                    key={beach.id}
                    beach={beach}
                    onClick={handleBeachClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <BiSearch size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No se encontraron playas
                </h3>
                <p className="text-gray-600 mb-4">
                  No se encontraron playas con los criterios seleccionados.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}
