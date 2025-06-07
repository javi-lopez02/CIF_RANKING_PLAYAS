import { useEffect, useState } from "react";
import { School } from "../types";
import { getSchoolRequest } from "../services/school";

function useSchool() {
  const [school, setSchool] = useState<School[] | []>([]);
  const [error, setError] = useState<Array<string>>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getSchoolRequest()
      .then((res) => {
        setSchool(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(["Error al cargar los expertos."]);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    setSchool,
    error,
    school,
    loading,
  };
}

export default useSchool;
