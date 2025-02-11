import Modal from "react-modal";
import PropTypes from "prop-types";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
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
            e.target.src = "fallback-image-url.jpg";
          }}
        />
        <button onClick={onClose} className={s.closeButton}>
          X
        </button>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }),
};

export default ImageModal;
