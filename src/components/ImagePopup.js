const ImagePopup = ({ isOpen, onClose, image }) => {
  return (
    <div
      className={`popup popup_type_photo ${isOpen && 'popup_opened'}`}
      onClick={onClose}
    >
      <div
        className="popup__container"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button className="popup__close" type="button" onClick={onClose} />
        <figure className="photo-container">
          <img
            className="photo-container__photo"
            alt={image?.title}
            src={image?.imageLink}
          />
          <figcaption className="photo-container__photo-title">
            {image?.title}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImagePopup;
