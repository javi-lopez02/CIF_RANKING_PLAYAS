import { useEffect, useState } from "react";
import { BeachData } from "../types";
import { getBeachTypeRequest } from "../services/topTen";

function useTopTypes(query: string) {
  const [beaches, setBeaches] = useState<BeachData[] | []>([]);
  const [error, setError] = useState<Array<string>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("Fetching beaches of type:", query);
    getBeachTypeRequest(query)
      .then((res) => {
        setBeaches(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(["Error al cargar las playas."]);
      })
      .finally(() => setLoading(false));
  }, [query]);

  return {
    beaches,
    error,
    setBeaches,
    loading,
  };
}

export default useTopTypes;
