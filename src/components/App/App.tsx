import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { searchImages } from "../../api/unsplashApi";

// Описание типов для изображений и состояний
interface Image {
  id: string;
  urls: { regular: string; small: string };
  alt_description?: string;
}

interface Error {
  message: string;
}

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Обработчик поиска
  const handleSearch = async (newQuery: string) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
      fetchImages(newQuery, 1);
    }
  };

  // Получение изображений
  const fetchImages = async (searchQuery: string, pageNumber: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchImages(searchQuery, pageNumber);
      setImages((prevImages) => [...prevImages, ...data.results]);
    } catch (error) {
      console.error(error);
      setError({ message: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  // Обработчик загрузки следующей страницы
  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await fetchImages(query, nextPage);
  };

  // Открытие модального окна с изображением
  const openModal = (image: Image) => {
    if (isModalOpen) return; // Проверка на повторное открытие
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {loading && <Loader />}
          {images.length > 0 && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
