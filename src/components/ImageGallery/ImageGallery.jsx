import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard.jsx";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={s.gallery}>
    {images.map((image) => (
      <li key={image.id} onClick={() => onImageClick(image)}>
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
