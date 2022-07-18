import React from 'react'
import PriceTable from './PriceTable'
import './components.css'
import { Typography } from '@mui/material'

const PriceList = () => {
  return (
    <div>
    <div className='Price-List'>
    <div className='Price-Content'>
      <Typography>
        <div className='Oglavlenie'>
          Клубные карты Hanma Gym
            <div className='Zagolovok1'>
                Мы помогаем стать лучше
           </div>
           <div className='txt1'>
              Покупая клубную карту, Вы становитесь членом клуба "Hanma Gym" со всеми возможностями и привилегиями.
           </div>
          <div className='Zagolovok2'>
              В каждый абонгемент входит:
          </div>
            <div className='SpisokGYM'>
              <li>Посещение просторного тренажёрного зала с панорамными окнами, профессиональным плотным покрытием, новейшим оборудованием премиум и бизнес класса</li>
              <li>Зал групповых занятий, оснащённый новым оборудованием, где каждый найдёт себе занятие, согласно своему уровню физической подготовки. Более 30 бесплатных тренировок в неделю.</li>
              <li>Зал единоборств. Плотное профессиональное покрытие (татами), разнообразие груш (для отработки боксёрских и кик-боксерских ударов), ринг с подиумом, большая рабочая зона.</li>
              <li>Банный комплекс. Просторная сауна с кристаллами Гималайской соли и русская паровая баня.</li>
              <li>С недавних пор вы можете купить клубную карту прям на сайте в личном кабинете без посещения клуба.</li>
            </div>
        </div>
      </Typography>
      <div className='Tablica'>
        <PriceTable/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default PriceList