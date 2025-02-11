import React from "react";
import s from "./ImageCard.module.css";

// Определяем интерфейсы TypeScript для пропсов
interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description?: string;
}

interface ImageCardProps {
  image: Image;
  onImageClick?: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  const handleClick = () => {
    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <div className={s.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={s.image}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
