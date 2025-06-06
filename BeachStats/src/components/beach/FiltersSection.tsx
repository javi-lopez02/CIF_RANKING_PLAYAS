import { BiSearch } from "react-icons/bi";

interface FiltersSectionProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  filterOptions: {
    regions: string[];
    types: string[];
    countrys: string[];
  };
  onFilterChange: () => void;
}

type SortOption =
  | "BQV-Descendente"
  | "BQV-Ascendente"
  | "Nombre-Ascendente"
  | "Nombre-Descendente";

// Componente de Filtros separado
export default function FiltersSection({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  selectedRegion,
  setSelectedRegion,
  selectedCountry,
  setSelectedCountry,
  selectedType,
  setSelectedType,
  filterOptions,
  onFilterChange,
}: FiltersSectionProps) {
  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
    onFilterChange();
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    onFilterChange();
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    onFilterChange();
  };

  return (
    <div className="rounded-lg shadow-md hover:shadow-dark-500 p-4 sm:p-6 mb-6 bg-gradient-to-tr from-gold-200 to-sky-200">
      {/* Primera fila: Búsqueda y Ordenamiento */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4 ">
        {/* Barra de búsqueda */}
        <div className="relative flex-1">
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar playa..."
            className="font-sans pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Segunda fila: Filtros por región y tipo */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        {/* Filtro por región */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ordena de:{" "}
          </label>
          <select
            className="w-full border border-gray-300 bg-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
          >
            <option value="BQV-Descendente">Mayor a menor BQV</option>
            <option value="BQV-Ascendente">Menor a mayor BQV</option>
            <option value="Nombre-Ascendente">Nombre (A-Z)</option>
            <option value="Nombre-Descendente">Nombre (Z-A)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Región
          </label>
          <select
            className="w-full border border-gray-300 bg-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            value={selectedRegion}
            onChange={(e) => handleRegionChange(e.target.value)}
          >
            {filterOptions.regions.map((region) => (
              <option key={region} value={region}>
                {region === "Todos" ? "Todas las Regiones" : region}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por tipo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Playa
          </label>
          <select
            className="w-full border border-gray-300 bg-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all "
            value={selectedType}
            onChange={(e) => handleTypeChange(e.target.value)}
          >
            {filterOptions.types.map((type) => (
              <option key={type} value={type}>
                {type === "Todos" ? "Todos los Tipos" : type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pais
          </label>
          <select
            className="w-full border border-gray-300 bg-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all "
            value={selectedCountry}
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            {filterOptions.countrys.map((region) => (
              <option key={region} value={region}>
                {region === "Todos" ? "Todas los Paises" : region}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
