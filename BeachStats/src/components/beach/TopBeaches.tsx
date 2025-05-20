import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt, BiSearch } from "react-icons/bi";
import useBeach from "../../customHooks/useBeach";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function TopBeaches() {
  // Estado para las playas
  const { beaches, error } = useBeach();
  const navigate = useNavigate();

  // Estado para filtros y paginación
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("BQV-Descendente");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState("Todos");
  const [selectedType, setSelectedType] = useState("Todos");
  const beachesPerPage = 12;

  // Obtener ubicaciones y categorías únicas para los filtros
  const regions = [
    "Todos",
    ...new Set(beaches.map((beach) => beach.region)),
  ];
  const types = [
    "Todos",
    ...new Set(beaches.map((beach) => beach.beachType)),
  ];

  // Filtrar y ordenar playas
  const filteredBeaches = beaches.filter((beach) => {
    const matchesSearch = beach.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      selectedRegion === "Todos" || beach.region === selectedRegion;
    const matchesCategory =
      selectedType === "Todos" || beach.beachType === selectedType;
    return matchesSearch && matchesLocation && matchesCategory;
  });

  // Ordenar playas
  const sortedBeaches = [...filteredBeaches].sort((a, b) => {
    if (sortBy === "BQV-Descendente") {
      return b.BQV - a.BQV;
    } else if (sortBy === "BQV-Ascendente") {
      return a.BQV - b.BQV;
    } else if (sortBy === "Nombre-Ascendente") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Calcular playas para la página actual
  const indexOfLastBeach = currentPage * beachesPerPage;
  const indexOfFirstBeach = indexOfLastBeach - beachesPerPage;
  const currentBeaches = sortedBeaches.slice(
    indexOfFirstBeach,
    indexOfLastBeach
  );
  const totalPages = Math.ceil(sortedBeaches.length / beachesPerPage);

  // Cambiar página
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="min-w-full max-w-full mx-auto p-4">
      <h1 className="text-5xl font-sans font-bold text-center mb-6 text-dark">
        Explora las Playas del Mundo
      </h1>

      {/* Búsqueda y filtros */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Barra de búsqueda */}
          <div className="relative flex-grow">
            <BiSearch className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar playa..."
              className="font-sans pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Selector de ordenamiento */}
          <div className="flex-shrink-0 w-full md:w-64">
            <select
              className="w-full border font-sans border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-navy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="BQV-Descendente">
                Ordenar: De mayor a menor BQV
              </option>
              <option value="BQV-Ascendente">
                Ordenar: De menor a mayor BQV
              </option>
              <option value="Nombre-Ascendente">Ordenar por: Nombre (A-Z)</option>
              <option value="Nombre-Descendente">Ordenar por: Nombre (Z-A)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Filtro por ubicación */}
          <div className="w-full md:w-1/2">
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                setCurrentPage(1); // Reset a la primera página al filtrar
              }}
            >
              {regions.map((location) => (
                <option key={location} value={location}>
                  {location === "Todos" ? "Todas las Regiones" : location}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por categoría */}
          <div className="w-full md:w-1/2">
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentPage(1); // Reset a la primera página al filtrar
              }}
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type === "Todos" ? "Todas los Tipos" : type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resultados y contador */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          Mostrando {indexOfFirstBeach + 1}-
          {Math.min(indexOfLastBeach, sortedBeaches.length)} de{" "}
          {sortedBeaches.length} resultados
        </p>
      </div>

      {/* Galería de playas */}
      {currentBeaches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBeaches.map((beach) => (
            <div
              key={beach.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              onClick={()=>(navigate(`/details?p=${beach.id}`))}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={""}
                  alt={beach.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-blue-500 mb-1">
                  {beach.name}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-2">
                  {beach.region} • {beach.beachType}
                </p>
                <div className="flex justify-center items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 font-medium px-2.5 py-0.5 rounded text-sm">
                    BQV {beach.BQV}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No se encontraron playas con los criterios seleccionados.
          </p>
        </div>
      )}

      {/* Paginación */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-3 py-2 rounded-md mr-2 bg-gray-100 hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <BiLeftArrowAlt size={18} />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gold"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center px-3 py-2 rounded-md ml-2 bg-gray-100 hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <BiRightArrowAlt size={18} />
        </button>
      </div>
      {error && (toast.error("Error al cargar las playas"))}
    </div>
  );
}
