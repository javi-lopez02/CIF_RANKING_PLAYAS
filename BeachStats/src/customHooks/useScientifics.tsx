import { useEffect, useState } from "react";
import { Scientifics } from "../types";
import { getScientificRequest } from "../services/scientific";

function useScientific() {
  const [scientific, setScientific] = useState<Scientifics[] | []>([]);
  const [error, setError] = useState<Array<string>>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getScientificRequest()
      .then((res) => {
        setScientific(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(["Error al cargar los expertos."]);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    scientific,
    error,
    setScientific,
    loading,
  };
}

export default useScientific;
