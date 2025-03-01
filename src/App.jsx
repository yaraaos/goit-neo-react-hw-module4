import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { searchPhotos } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const onSubmit = (searchQuery) => {
    setPage(0);
    setImages([]);
    setSearchValue(searchQuery);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (img) => {
    setIsOpen(true);
    setModalImage(img);
  };

  useEffect(() => {
    const handleResult = async () => {
      if (searchValue.length >= 2) {
        try {
          setIsLoading(true);
          setError(false);
          const res = await searchPhotos(searchValue, page + 1);

          if (page === 0) {
            setImages(res.results);
            setTotal(res.total);
          } else {
            setImages((images) => [...images, ...res.results]);
          }
        } catch {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      }
    };
    if (searchValue) handleResult();
  }, [searchValue, page]);
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && total > images.length && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {isOpen && (
        <ImageModal closeModal={closeModal} image={modalImage} open={isOpen} />
      )}
    </>
  );
}

export default App;