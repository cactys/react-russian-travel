import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectImage, setSelectImage] = useState(null);

  const isOpenPopup = selectImage;

  useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    };
    if (isOpenPopup) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  });

  const closeAllPopups = () => {
    setIsOpen(false);
  };

  const handleImageClick = (selectImage) => {
    setIsOpen(true);
    setSelectImage(selectImage);
  };

  return (
    <div className='page'>
      <Header />
      <Main onImageClick={handleImageClick} />
      <Footer />
      <ImagePopup image={selectImage} isOpen={isOpen} onClose={closeAllPopups} />
    </div>
  );
};

export default App;
