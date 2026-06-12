import { useState, useCallback, useMemo } from "react";
import { useImageSearch } from "./hooks/useImageSearch.js";
import { useModal } from "./hooks/useModal.js";

import { Searchbar } from "./components/Searchbar/Searchbar.jsx";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import { Button } from "./components/Button/Button.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { Modal } from "./components/Modal/Modal.jsx";

import { Wrapper, ErrorText, EmptyText } from "./App.styled.js";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { images, setImages, isLoading, error } = useImageSearch(query, page);

  const { selectedImage, openModal, closeModal } = useModal();

  const handleSearch = useCallback(
    (query) => {
      setQuery(query);
      setImages([]);
      setPage(1);
    },
    [setImages],
  );

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const isEmpty = useMemo(() => {
    return !isLoading && images.length === 0 && query;
  }, [isLoading, images.length, query]);

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
