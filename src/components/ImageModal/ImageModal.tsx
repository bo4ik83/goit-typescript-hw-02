import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

// Тип для изображения
interface Image {
  urls: {
    regular: string;
  };
  alt_description?: string;
}

// Типы пропсов компонента ImageModal
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.content}>
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Image preview"}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "fallback-image-url.jpg";
          }}
        />
        <button onClick={onClose} className={s.closeButton}>
          X
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
