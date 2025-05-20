import { useEffect, useState } from "react";
import { Beach } from "../types";
import { getBeachRequest } from "../services/beach";

function useBeach() {
  const [beaches, setBeaches] = useState<Beach[] | []>([]);
  const [error, setError] = useState<Array<string>>();

  useEffect(() => {
    getBeachRequest()
      .then((res) => {
        setBeaches(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(["Error al cargar las playas."]);
      });
  }, []);

  return {
    beaches,
    error,
    setBeaches,
  };
}

export default useBeach;
