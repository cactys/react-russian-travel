import React from 'react';
import kosa from '../images/place-kosa.jpg';
import kolsky from '../images/place-kolsky.jpg';
import altai from '../images/place-altai.jpg';
import winterBaikal from '../images/place-winter-baikal.jpg';
import karelia from '../images/place-karelia.jpg';

function Place(props) {
  return (
    <div className='places'>
      <div className='place'>
        <div className='place__header'>
          <h3 className='place__title'>Куршская коса</h3>
          <div className='place__website'>
            <p className='place__url-heading'>url</p>
            <a
              href='http://park-kosa.ru'
              className='place__link'
              target='_blank'
              rel='noreferrer'
            >
              park-kosa.ru
            </a>
          </div>
        </div>
        <article className='place__content'>
          <img src={kosa} alt='Куршская коса' className='place__image' />
          <div className='place__paragraphs'>
            <p className='place__paragraph'>
              Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных
              горизонта — спокойного Куршского залива с одной стороны и подёрнутого
              рябью волн Балтийского моря с другой. Уникальная природная зона на краю
              российского анклава.
            </p>
            <p className='place__paragraph'>
              На этом Калининградская область не заканчивается. Для путешественника и
              исследователя там же по соседству — самая западная точка России,
              Балтийская коса, — и немецкое наследие россыпи небольших приморских
              городов. Атмосфера здешних мест исключает суету, окуная в спокойствие
              природы и запах стального, прохладного моря.
            </p>
          </div>
        </article>
      </div>
      <div className='place'>
        <div className='place__header'>
          <h3 className='place__title'>Кольский</h3>
          <div className='place__website'>
            <p className='place__url-heading'>url</p>
            <a
              href='https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy'
              className='place__link'
              target='_blank'
              rel='noreferrer'
            >
              National Geographic
            </a>
          </div>
        </div>
        <div className='place__content'>
          <img src={kolsky} alt='Кольский' className='place__image' />
          <div className='place__paragraphs'>
            <p className='place__paragraph'>
              Почти весь полуостров находится за Полярным кругом. Саамская тундра, от
              которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся
              Баренцевым морем.
            </p>
            <p className='place__paragraph'>
              Возможно, вы смотрели Звягинцева и даже слышали историю арктического
              фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом
              школьных воспоминаний об уроках географии. Возможно, вы не
              интересовались пронизывающей земную кору сверхглубокой скважиной, а от
              апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное
              сияние начинает сбываться с билетомв Мурманск.
            </p>
          </div>
        </div>
      </div>
      <div className='place'>
        <div className='place__header'>
          <h3 className='place__title'>Алтай</h3>
          <div className='place__website'>
            <p className='place__url-heading'>url</p>
            <a
              href='https://www.facebook.com/vera.bashmakova/posts/10156011613718822'
              className='place__link'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </div>
        </div>
        <div className='place__content'>
          <img src={altai} alt='Алтай' className='place__image' />
          <div className='place__paragraphs'>
            <p className='place__paragraph'>
              Алтай — одно из красивейших мест в России. В первую очередь из-за гор:
              если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные
              реки и озёра. А если вы откроете в автомобиле окна, сможете
              познакомиться с невидимым чудом здешних мест — горным воздухом.
            </p>
            <p className='place__paragraph'>
              Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы
              увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят
              лоси, над хребтами летают орлы, а на равнинах пасутся косули. И
              знаменитые манулы — тоже обитатели Алтайского края.
            </p>
          </div>
        </div>
      </div>
      <div className='place'>
        <div className='place__header'>
          <h3 className='place__title'>Зимний Байкал</h3>
          <div className='place__website'>
            <p className='place__url-heading'>url</p>
            <a
              href='https://vk.com/baikalmile'
              className='place__link'
              target='_blank'
              rel='noreferrer'
            >
              https://vk.com/baikalmile
            </a>
          </div>
        </div>
        <div className='place__content'>
          <img src={winterBaikal} alt='Зимний Байкал' className='place__image' />
          <div className='place__paragraphs'>
            <p className='place__paragraph'>
              Всем известен Байкал как крупнейшее озеро в мире. Многие также знают,
              что это самый большой источник пресной воды и одно из красивейших мест
              в России.
            </p>
            <p className='place__paragraph'>
              Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по
              скийорингу. Это такой вид спорта, когда лыжник привязывает себя к
              мотоциклу, и тандем старается развить как можно бóльшую скорость на
              льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен
              мировой рекорд — 197.011 км/ч.
            </p>
          </div>
        </div>
      </div>
      <div className='place'>
        <div className='place__header'>
          <h3 className='place__title'>Карелия</h3>
          <div className='place__website'>
            <p className='place__url-heading'>url</p>
            <a
              href='http://vodlozero.ru'
              className='place__link'
              target='_blank'
              rel='noreferrer'
            >
              http://vodlozero.ru/
            </a>
          </div>
        </div>
        <div className='place__content'>
          <img src={karelia} alt='Куршская коса' className='place__image' />
          <div className='place__paragraphs'>
            <p className='place__paragraph'>
              Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу
              сибирская лиственница не растёт западнее Водлозера. Зато здесь она
              вымахивает на 30 метров — леса карельских национальных парков из-за
              непроходимых болот никогда не знали топора. Некоторым соснам уже больше
              чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце
              раньше, чем увидал его Иван Грозный. В девственном лесу на сотню
              километров не встретишь тропы. А на редких тропинках деревья в паре
              метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут
              хозяин.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
