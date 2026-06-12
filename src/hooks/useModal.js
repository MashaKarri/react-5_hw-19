import { useState, useCallback } from "react";

export function useModal() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return {
    selectedImage,
    openModal,
    closeModal,
  };
}
