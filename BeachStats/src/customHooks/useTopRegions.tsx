import { useEffect, useState } from "react";
import { Beach } from "../types";
import { getBeachRegionRequest } from "../services/topTen";

function useTopRegion(query: string) {
  const [beaches, setBeaches] = useState<Beach[] | []>([]);
  const [error, setError] = useState<Array<string>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBeachRegionRequest(query)
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

export default useTopRegion;
