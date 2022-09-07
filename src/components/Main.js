import lead from '../images/lead-polka.jpg';
import Grid from './Grid';
import Place from './Place';
import Cover from './Cover';
import { images } from '../utils/constants';
import { places } from '../utils/places';

function Main({ onImageClick }) {
  return (
    <main className='content'>
      <div className='lead'>
        <h1 className='lead__title'>Путешествия по России</h1>
        <p className='lead__subtitle'>
          Настоящая страна не в выпусках новостей, а здесь.
        </p>
        <figure className='lead__image-container'>
          <img src={lead} className='lead__image' alt='Ваша полка — верхняя' />
          <figcaption className='lead__caption'>ваша полка — верхняя</figcaption>
        </figure>
      </div>

      <div className='intro'>
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
      </div>
      <div className='add'>
        <button type='button' className='add__button'></button>
      </div>
      <div className='photo-grid'>
        {images.map((image) => {
          return <Grid key={image.id} image={image} onImageClick={onImageClick} />;
        })}
      </div>
      <div className='add'>
        <button type='button' className='add__button'></button>
      </div>
      <div className='places'>
        {places.map((place) => {
          return <Place key={place.id} place={place} onImageClick={onImageClick} />;
        })}
      </div>
      <Cover />
    </main>
  );
}

export default Main;
