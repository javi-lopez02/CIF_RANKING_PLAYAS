import { useEffect, useState } from "react";
import { Media } from "../types";
import { getMediaRequest } from "../services/media";

function useMedia() {
  const [media, setMedia] = useState<Media[] | []>([]);
  const [error, setError] = useState<Array<string>>();

  useEffect(() => {
    getMediaRequest()
      .then((res) => {
        setMedia(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(["Error al cargar las categorias."]);
      });
  }, []);

  return {
    media,
    error,
    setMedia,
  };
}

export default useMedia;
