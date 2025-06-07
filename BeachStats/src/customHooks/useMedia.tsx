import { useEffect, useState } from "react";
import { Media } from "../types";
import { getMediaRequest } from "../services/media";

function useMedia() {
  const [media, setMedia] = useState<Media[] | []>([]);
  const [error, setError] = useState<Array<string>>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getMediaRequest()
      .then((res) => {
        setMedia(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(["Error al cargar las categorias."]);
      })
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(media.length / 10);
  const startIndex = (currentPage - 1) * 10;
  const currentItems = media.slice(startIndex, startIndex + 10);

  return {
    media,
    error,
    setMedia,
    setCurrentPage,
    currentPage,
    totalPages,
    currentItems,
    loading,
  };
}

export default useMedia;
