import { memo } from "react";

import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem.jsx";

import { GalleryList } from "./ImageGallery.styled.js";

export const ImageGallery = memo(({ images, onImageClick }) => {
  return (
    <GalleryList>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </GalleryList>
  );
});
