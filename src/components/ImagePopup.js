const ImagePopup = ({ isOpen, onClose, image }) => {
  return (
    <div className={`popup popup_type_photo ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose} />
        <figure className="photo-container">
          <img
            className="photo-container__photo"
            alt={image?.title}
            src={image?.link}
          />
          <figcaption className="photo-container__photo-title">
            {image?.title}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
