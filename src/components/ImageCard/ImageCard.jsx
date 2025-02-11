import PropTypes from "prop-types";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
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

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onImageClick: PropTypes.func,
};

export default ImageCard;
