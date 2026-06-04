import { useState, useEffect, useMemo, useCallback } from "react";
import api from "./services/api.js";

import { Searchbar } from "./components/Searchbar/Searchbar.jsx";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import { Button } from "./components/Button/Button.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { Modal } from "./components/Modal/Modal.jsx";

import { Wrapper, ErrorText, EmptyText } from "./App.styled.js";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const newImages = await api.fetchImages(query, page);

        setImages((prev) => (page === 1 ? newImages : [...prev, ...newImages]));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = useCallback((query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  }, []);

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const openModal = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const isEmpty = useMemo(() => {
    return !isLoading && images.length === 0 && query;
  }, [isLoading, images, query]);

  return (
    <Wrapper>
      <Searchbar onSubmit={handleSearch} />

      {error && <ErrorText>Error: {error.message}</ErrorText>}

      {isLoading && <Loader />}

      {isEmpty && <EmptyText>No found results!</EmptyText>}

      <ImageGallery images={images} onImageClick={openModal} />

      {images.length > 0 && <Button onClick={handleLoadMore} />}

      {selectedImage && (
        <Modal
          largeImageURL={selectedImage.largeImageURL}
          tags={selectedImage.tags}
          onClose={closeModal}
        />
      )}
    </Wrapper>
  );
}

export default App;
