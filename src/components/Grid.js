import React from 'react';

function Grid({ image, onImageClick }) {
  const handleClick = () => {
    onImageClick(image);
  };

  return (
    <img
      src={image.link}
      alt={image.title}
      className='photo-grid__image'
      onClick={handleClick}
    />
  );
}

export default Grid;
