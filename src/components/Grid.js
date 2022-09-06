import React from 'react';
import { images } from '../utils/constants';

function Grid() {
  console.log(images);
  return (
    <section className='photo-grid'>
      {images.map((image) => {
        return <img key={image.id} src={image.link} alt={image.title} className='photo-grid__image' />;
      })}
    </section>
  );
}

export default Grid;
