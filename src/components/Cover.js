import React from 'react';

function Cover() {
  return (
    <div className='cover'>
      <a
        href='https://stampsy.com/na-elektrichkakh-do-baikala'
        target='_blank'
        className='cover__container'
        rel='noreferrer'
      >
        <h3 className='cover__title'>До Байкала «на собаках»</h3>
        <p className='cover__subtitle'>
          По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала на
          электричках.
        </p>
      </a>
    </div>
  );
}

export default Cover;