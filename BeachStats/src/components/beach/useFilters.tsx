import { useCallback, useMemo, useState } from "react";
import { Beach } from "../../types";

type SortOption =
  | "BQV-Descendente"
  | "BQV-Ascendente"
  | "Nombre-Ascendente"
  | "Nombre-Descendente";

export function useFilters(beaches: Beach[]) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("BQV-Descendente");
  const [selectedRegion, setSelectedRegion] = useState<string>("Todos");
  const [selectedType, setSelectedType] = useState<string>("Todos");
  const [selectedCountry, setSelectedCountry] = useState<string>("Todos");

  // Obtener opciones únicas para los filtros
  const filterOptions = useMemo(
    () => ({
      regions: ["Todos", ...new Set(beaches.map((beach) => beach.region))],
      types: ["Todos", ...new Set(beaches.map((beach) => beach.beachType))],
      countrys: ["Todos", ...new Set(beaches.map((beach) => beach.country))],
    }),
    [beaches]
  );

  // Filtrar y ordenar playas
  const filteredAndSortedBeaches = useMemo(() => {
    // Filtrar
    const filtered = beaches.filter((beach) => {
      const matchesSearch = beach.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRegion =
        selectedRegion === "Todos" || beach.region === selectedRegion;
      const matchesType =
        selectedType === "Todos" || beach.beachType === selectedType;
      const matchesCountry =
        selectedCountry === "Todos" || beach.country === selectedCountry;
      return matchesSearch && matchesRegion && matchesType && matchesCountry;
    });

    // Ordenar
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "BQV-Descendente":
          return b.bqvScore - a.bqvScore;
        case "BQV-Ascendente":
          return a.bqvScore - b.bqvScore;
        case "Nombre-Ascendente":
          return a.name.localeCompare(b.name);
        case "Nombre-Descendente":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [
    beaches,
    searchTerm,
    selectedRegion,
    selectedType,
    sortBy,
    selectedCountry,
  ]);

  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setSortBy("BQV-Descendente");
    setSelectedRegion("Todos");
    setSelectedType("Todos");
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    selectedRegion,
    setSelectedRegion,
    selectedType,
    setSelectedType,
    selectedCountry,
    setSelectedCountry,
    filterOptions,
    filteredAndSortedBeaches,
    resetFilters,
  };
}
