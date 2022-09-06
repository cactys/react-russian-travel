import React from 'react';

const AddImageForm = () => {
  return (
    <fieldset className='form__set'>
      <label className='form__field'>
        <input
          type='file'
          placeholder='Выберите файл'
          className='form__input form__input_add-image'
          id='add-file'
          name='file'
          accept='.jpg, .jpeg, .png, .gif, .bmp'
          multiple
          required
        />
        <label className='form__input-btn' for='add-file'>
          <svg
            className='form__input-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z'></path>
          </svg>
          <span className='form__input-text'>Прикрепить файл</span>
        </label>
        <span className='form__input-error add-file-error'></span>
      </label>
      <button type='button' className='form__add-button'></button>
    </fieldset>
  );
};

export default AddImageForm;