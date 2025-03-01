/* eslint-disable react/prop-types */
import { useEffect } from "react";
import css from "./ImageModul.module.css";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
};

const ImageModal = ({ image, closeModal, open }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <Modal onRequestClose={closeModal} style={customStyles} isOpen={open}>
      <img
        className={css.img}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <div className={css.description}>
        <p className={css.author}>
          <b>Author: </b>
          <i>
            {image.user.last_name} {image.user.first_name}
          </i>
        </p>
        {image.user.twitter_username && (
          <p>
            <b>Twitter username: </b>
            <i>{image.user.twitter_username}</i>
          </p>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;