import React from 'react'
import './components.css'
import logo from './logo.png'
import MapYa from './MapYa'


const Contacts = () => {
  return (
    <div>
      <div className='contacts-content'>
        <div className="contacts-title">
          Фитнес-клуб "Hanma Gym"
          <div>
            <img src={logo} className="logo" alt="logo" srcset=""/>
          </div>
        </div>
        <div className='Text-and-Map'>
          <div className='contacts-text'>
            <ol><b>Адресс головного фитнес-зала:</b> Россия, Московская область,<br/> Богородский г.о, Старая купавна, ул. Кирова, 19</ol>
            <ol><b>Время работы:</b> Пн-Вс: 6:00-24:00</ol>
            <ol><b>Позвонить гениям качалочки:</b>
              <li>8 (999) 541-59-83 - Сергей</li>
              <li>8 (985) 146-00-79 - Дмитрий</li>
              <li>8 (985) 964-31-24 - Егор</li>
            </ol>
            <ol><b>Написать:</b> hanma-gym_miigaik@yandex.ru</ol>
            <ol><b>Наши соцсети:</b> 
              <ol>VK</ol>
              <li><a target="_blank" rel="noreferrer" href="https://vk.com/seryozha_tikhonin">Сергей Тихонин</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://vk.com/id188067838">Чуреев Дмитрий</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://vk.com/old_pieerdun">Забелло Егор</a></li>
            </ol>
          </div> 
          <div className='Yandex-Map'>
            <MapYa/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts