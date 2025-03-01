/* eslint-disable react/prop-types */
import css from "./ImageCard.module.css";
const ImageCard = ({ image, openModal }) => {
  return (
    <div className={css.wrap}>
      <img
        className={css.img}
        src={image.urls.thumb}
        alt={image.alt_description}
        onClick={() => openModal(image)}
      />
    </div>
  );
};

export default ImageCard;