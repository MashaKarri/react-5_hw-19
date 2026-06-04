import { useEffect, useCallback } from "react";

import { Overlay, Image } from "./Modal.styled.js";

export const Modal = ({ largeImageURL, tags, onClose }) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <div>
        <Image src={largeImageURL} alt={tags} />
      </div>
    </Overlay>
  );
};
