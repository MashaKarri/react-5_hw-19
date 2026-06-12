import { useState, useEffect } from "react";
import api from "../services/api";

export function useImageSearch(query, page) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await api.fetchImages(query, page);

        setImages((prev) => (page === 1 ? data : [...prev, ...data]));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return { images, setImages, isLoading, error };
}
