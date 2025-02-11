import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

// Определяем тип для изображения
interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description?: string;
}

// Тип пропсов компонента ImageGallery
interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => (
  <ul className={s.gallery}>
    {images.map((image) => (
      <li key={image.id} onClick={() => onImageClick(image)}>
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
