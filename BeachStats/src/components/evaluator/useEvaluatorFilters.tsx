import { useState, useMemo } from "react";
import { Expert } from "../../types";

export const useEvaluatorFilters = (experts: Expert[]) => {
  const [searchName, setSearchName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // Obtener lista única de países
  const countries = useMemo(() => {
    if (!experts || experts.length === 0) return [];
    const uniqueCountries = [...new Set(experts.map(expert => expert.country).filter(Boolean))];
    return uniqueCountries.sort();
  }, [experts]);

  // Filtrar expertos
  const filteredExperts = useMemo(() => {
    if (!experts) return [];
    
    return experts.filter(expert => {
      const matchesName = expert.name.toLowerCase().includes(searchName.toLowerCase());
      const matchesCountry = selectedCountry === "" || expert.country === selectedCountry;
      
      return matchesName && matchesCountry;
    });
  }, [experts, searchName, selectedCountry]);

  const clearFilters = () => {
    setSearchName("");
    setSelectedCountry("");
  };

  return {
    searchName,
    setSearchName,
    selectedCountry,
    setSelectedCountry,
    countries,
    filteredExperts,
    clearFilters,
  };
};