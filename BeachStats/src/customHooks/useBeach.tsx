import { useEffect, useState } from "react";
import { Beach } from "../types";
import { getBeachRequest } from "../services/beach";

function useBeach() {
  const [beaches, setBeaches] = useState<Beach[] | []>([]);
  const [error, setError] = useState<Array<string>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBeachRequest()
      .then((res) => {
        setBeaches(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(["Error al cargar las playas."]);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    beaches,
    error,
    setBeaches,
    loading,
  };
}

export default useBeach;
