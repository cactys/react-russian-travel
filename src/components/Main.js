import React from 'react';
import lead from '../images/lead-polka.jpg';
import train from '../images/photo-grid-train.jpg';
import atharvaTulsi from '../images/photo-grid-atharva-tulsi.jpg';
import tuman from '../images/photo-grid-tuman.jpg';
import sochi from '../images/photo-grid-sochi.jpg';
import arisa from '../images/photo-grid-arisa.jpg';
import baikalFirst from '../images/photo-grid-baikal.jpg';
import baikalSecond from '../images/photo-grid-baikal-2.jpg';
import elbrus from '../images/photo-grid-elbrus.jpg';
import kondratiev from '../images/photo-grid-kondratiev.jpg';
import kamchatkaFirst from '../images/photo-grid-kamchatka-1.jpg';
import kamchatkaSecond from '../images/photo-grid-kamchatka-2.jpg';
import ergaki from '../images/photo-grid-ergaki.jpg';

function Main() {
  return (
    <main className='content'>
      <section className='lead'>
        <h1 className='lead__title'>Путешествия по России</h1>
        <p className='lead__subtitle'>
          Настоящая страна не в выпусках новостей, а здесь.
        </p>
        <figure className='lead__image-container'>
          <img src={lead} className='lead__image' alt='Ваша полка — верхняя' />
          <figcaption className='lead__caption'>ваша полка — верхняя</figcaption>
        </figure>
      </section>

      <section className='intro'>
        <h2 className='intro__title'>Чего мы там не видели?</h2>
        <p className='intro__text'>
          По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36%
          планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не
          видели? На самом деле, Россия — это целая вселенная с ласковым морем юга,
          густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти
          красоты можно без миллионов на счету, загранпаспорта и многочасовых
          перелетов. Как, например, Вера Башмакова — смелая молодая мама, которая
          взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч
          километров по родной стране. Мы выбрали и описали некоторые интересные
          места, достойные вашего отпуска.
        </p>
        <ul className='intro__lists'>
          <li className='intro__list'>
            <span className='intro__list-bold'>Часовых поясов</span> 11
          </li>
          <li className='intro__list'>
            <span className='intro__list-bold'>
              Объектов природного наследия ЮНЕСКО
            </span>{' '}
            12
          </li>
          <li className='intro__list'>
            <span className='intro__list-bold'>
              Объектов культурного наследия ЮНЕСКО
            </span>{' '}
            16
          </li>
          <li className='intro__list'>
            <span className='intro__list-bold'>Природных заповедников</span> 105
          </li>
          <li className='intro__list'>
            <span className='intro__list-bold'>Аэропортов</span> 241
          </li>
        </ul>
      </section>

      <section className='photo-grid'>
        <img src={train} alt='Поезд' className='photo-grid__image' />
        <img src={atharvaTulsi} alt='Атхарва Тулси' className='photo-grid__image' />
        <img src={tuman} alt='Туман' className='photo-grid__image' />
        <img src={sochi} alt='Сочи' className='photo-grid__image' />
        <img src={arisa} alt='Ариса' className='photo-grid__image' />
        <img src={baikalFirst} alt='Байкал' className='photo-grid__image' />
        <img src={elbrus} alt='Эльюрус' className='photo-grid__image' />
        <img src={kondratiev} alt='Кондратьево' className='photo-grid__image' />
        <img src={kamchatkaFirst} alt='Камчатка' className='photo-grid__image' />
        <img src={kamchatkaSecond} alt='Камчатка' className='photo-grid__image' />
        <img src={baikalSecond} alt='Байкал' className='photo-grid__image' />
        <img src={ergaki} alt='Ергаки' className='photo-grid__image' />
      </section>
    </main>
  );
}

export default Main;
