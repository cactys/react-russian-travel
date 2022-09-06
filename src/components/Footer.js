import React from 'react';

function Footer(props) {
  return (
    <footer className='footer'>
      <nav className='footer__navigation'>
        <ul className='footer__links'>
          <li className='footer__item'>
            <a
              href='https://yandex.ru/maps'
              target='_blank'
              className='footer__link'
              rel='noreferrer'
            >
              Карты
            </a>
          </li>
          <li className='footer__item'>
            <a
              href='https://yandex.ru/pogoda'
              target='_blank'
              className='footer__link'
              rel='noreferrer'
            >
              Погода
            </a>
          </li>
          <li className='footer__item'>
            <a
              href='https://rasp.yandex.ru'
              target='_blank'
              className='footer__link'
              rel='noreferrer'
            >
              Расписание
            </a>
          </li>
          <li className='footer__item'>
            <a
              href='https://calendar.yandex.ru'
              target='_blank'
              className='footer__link'
              rel='noreferrer'
            >
              Календарь
            </a>
          </li>
          <li className='footer__item'>
            <a
              href='https://travel.yandex.ru'
              target='_blank'
              className='footer__link'
              rel='noreferrer'
            >
              Путешествия
            </a>
          </li>
        </ul>
      </nav>
      <p className='footer__copyright'>&copy; 2022. Владимир</p>
    </footer>
  );
}

export default Footer;
