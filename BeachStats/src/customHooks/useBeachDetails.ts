import { useEffect, useState } from "react";
import { Beach } from "../types";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { getBeachIDRequest } from "../services/beach";

export const useBeachDetails = (query: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Array<string> | null>(null);
  const [beach, setBeach] = useState<Beach>();

  useEffect(() => {
    setError(null);
    setLoading(true);
    getBeachIDRequest(query)
      .then((res) => {
        setBeach(res.data.data);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;

          if (axiosError.response) {
            setError(axiosError.response.data as Array<string>);
          } else if (axiosError.request) {
            toast.error("No se recibió respuesta:");
          }
        } else {
          toast.error("Error desconocido:");
          setError(["Error con la peticion al servidor"]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return { beach, loading, error };
};
