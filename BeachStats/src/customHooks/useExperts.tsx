import { useEffect, useState } from "react";
import { Expert } from "../types";
import { getExpertRequest } from "../services/expert";

function useExpert() {
  const [experts, setExperts] = useState<Expert[] | []>([]);
  const [error, setError] = useState<Array<string>>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getExpertRequest()
      .then((res) => {
        setExperts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(["Error al cargar los expertos."]);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    experts,
    error,
    setExperts,
    loading,
  };
}

export default useExpert;
