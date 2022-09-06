import React from 'react';

function Place({ place, onImageClick }) {
  const paragraphs = place.paragraphs;

  const handleClick = () => {
    onImageClick(place);
  };

  return (
    <div className='place'>
      <div className='place__header'>
        <h3 className='place__title'>{place.title}</h3>
        <div className='place__website'>
          <p className='place__url-heading'>url</p>
          <a
            href={place.link}
            className='place__link'
            target='_blank'
            rel='noreferrer'
          >
            {place.nameLink}
          </a>
        </div>
      </div>
      <article className='place__content'>
        <img
          src={place.imageLink}
          alt={place.title}
          onClick={handleClick}
          className='place__image'
        />
        <div className='place__paragraphs'>
          {paragraphs.map((paragraph) => {
            return (
              <p key={paragraph.id} className='place__paragraph'>
                {paragraph.text}
              </p>
            );
          })}
        </div>
      </article>
    </div>
  );
}

export default Place;
