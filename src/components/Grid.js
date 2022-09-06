function Grid({ image, onImageClick }) {
  const handleClick = () => {
    onImageClick(image);
  };

  return (
    <img
      src={image.imageLink}
      alt={image.title}
      className='photo-grid__image'
      onClick={handleClick}
    />
  );
}

export default Grid;
