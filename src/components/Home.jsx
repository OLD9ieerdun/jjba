import {Link} from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material';
import React from 'react';
import './components.css';
import logo from './logo.png';
import { Button } from '@mui/material';
import firstphoto from './photo/1.jpg';
import secondphoto from './photo/2.jpg';
import thirdphoto from './photo/3.jpg';
import fourthphoto from './photo/4.jpg';
import fifthphoto from './photo/5.jpg';
import sixthphoto from './photo/6.jpg';
import seventhphoto from './photo/7.jpg';
import eighthphoto from './photo/8.jpg';
import ninthphoto from './photo/9.jpg';
import tenthphoto from './photo/10.jpg';
import eleventhphoto from './photo/11.jpg';
import twelvephoto from './photo/12.jpg';
import serega from './photo/serega.png';
import dima from './photo/dima.png';
import egor from './photo/egor.png';
import EasterEgg from './EasterEgg.jpg'



const Home = () => {

  const [open, setOpen] = React.useState(false)
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
      <div className="Home-Menu">
        <div className="Home-Menu-Item"><a href="#about">О нас</a></div>
        <div className="Home-Menu-Item"><a href="#gallery">Галерея</a></div>
        <div className="Home-Menu-Item"><a href="#team">Наша команда</a></div>
        <div className="App-logo">
        <a onClick={handleClickOpen}><img src={logo} className="logo" alt="logo" srcset=""/></a> 
          
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Вы обнаружили пасхалку нашего сайта</DialogTitle>
        <DialogContent>
        <DialogContentText>Тут мы отдыхаем в баньке после качалочки</DialogContentText>
          <img src={EasterEgg} className="Egg" alt="Egg" srcset=""/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>Круто!!!</Button>
        </DialogActions>
      </Dialog>
      <div className='Welcome'> 
        <div className='Welcome-title'>
          Приобрести абонемент и стать сильнее
        </div>  
          <Button className='Welcome-buttion' ><Link to="/Buy" className='Big-Buttion-Buy'>КУПИТЬ</Link></Button> 
      </div>
      <div id='about'>
        <div className='about-title'>Hanma Gym это</div>
        <div className='about-text'>
          <li>Первоклассный фитнесс-клуб общей площадью 1500 м2</li>
          <li>Просторный тренажёрный зал с панорамными окнами, кардиозона из 18 тренажёров, современное и технологичное фитнес-оборудование</li>
          <li>Единственный в городе профессиональный комплекс для функционального тренинга – IZ-H shape, петли TRX</li>
          <li>Сауна с кристаллами гималайской соли, русская парная, фитнес-бар</li>
          <li>Квалифицированный тренерский состав</li>
          <li>Зал единоборств с профессиональным рингом и шестью грушами для отработки различных видов ударов</li>
          <li>Широкая сетка групповых программ по самым востребованным направлениям</li>
          <li>Бесплатная парковка, сейфовые ячейки, бесплатные улыбки</li>
        </div>
      </div>
      <div id='gallery'>
        <div className='gallery-title'>
          Фотографии нашего зала
        </div>
        <div className='images'>
          <div><img src={firstphoto} className="Photo" alt="1" srcset="" draggable="false"/></div>
          <div><img src={secondphoto} className="Photo" alt="2" srcset="" draggable="false"/></div>
          <div><img src={thirdphoto} className="Photo" alt="3" srcset="" draggable="false"/></div>
          <div><img src={fourthphoto} className="Photo" alt="4" srcset="" draggable="false"/></div>
          <div><img src={fifthphoto} className="Photo" alt="5" srcset="" draggable="false"/></div>
          <div><img src={sixthphoto} className="Photo" alt="6" srcset="" draggable="false"/></div>
          <div><img src={seventhphoto} className="Photo" alt="7" srcset="" draggable="false"/></div>
          <div><img src={eighthphoto} className="Photo" alt="8" srcset="" draggable="false"/></div>
          <div><img src={ninthphoto} className="Photo" alt="9" srcset="" draggable="false"/></div>
          <div><img src={tenthphoto} className="Photo" alt="10" srcset="" draggable="false"/></div>
          <div><img src={eleventhphoto} className="Photo" alt="11" srcset="" draggable="false"/></div>
          <div><img src={twelvephoto} className="Photo" alt="12" srcset="" draggable="false"/></div>
        </div>
      </div>
      <div id='team'>
        <div className='team-title'>
          Наша команда
        </div>
        <div className="team-raskaz">
          <b>"Hanma Gym"</b> - это огромное объединение любителей аниме и спорта. Вдохновившись культовым аниме-сериалом "Боец Баки", наша команда создала сеть собственных тематических спортивных залов, в которых каждый посетитель сможет найти что-то свое, знакомое, связанное с этим невероятным сериалом. 
          На нашем логотипе красуется отец главного героя сериала, сильнейший человек планеты - Ханма Юдзеро. 
          Посметрев этот великолепный тайтл, наша команда настолько замотивировалась заниматься спортом, что решила хоть на шаг приблизиться к силе и воле этого персонажа. 
          А также мы загорелись идеей открыть свой спортивный зал и мотивировать остальных людей к такому же стремлению, как и наше собственное.
                 
        </div>
        <div className="team-we">
          Наша команда состоит из настоящих профессионалов своего дела, каждый из которых добился невероятных успехов в мире спорта!
        </div>
        <div className="team-personal">
        <b>Давайте знакомиться!</b>
          <div className='O-nas-vseh'>
            <div className='O-nas'>
              <img src={serega} className="Photo" alt="serega" srcset="" draggable="false"/>
              <h1><b>Тихонин Сергей</b></h1><br/>Чемпион Мира по литрболу<br/>Главные достоинства:<br/>
              Главный workrater МИИГАиКа.<br/>
              Качается по 168 часов в неделю.<br/>
              Попал в книгу рекордов Гинеса за самое большое количество подтягиваний<br/> без остановки.<br/>
              Любимая цитата - "Всё начинается с осознания собственных слабостей".<br/>
              Увлекается програмированием и качалкой.
            </div>
            <div className='O-nas'>
            <img src={dima} className="Photo" alt="dima" srcset="" draggable="false"/>
              <h1><b>Чуреев Дмитрий</b></h1><br/>Мастер спорта по всем видам спорта<br/>Главные достоинства:<br/>
              Личший футболист по мнению популярного издания "МИИГАиК_news".<br/>
              Знает и владеет абсолютно всеми видами спорта.<br/>
              Обучит вас правильно играть в шашки на Ярославском шоссе.<br/>
              Любимая цитата - "За что мы все любим футбол? За то, что полсе него..."<br/>
              Увлекается програмированием и суетологией.
            </div>
            <div className='O-nas'>
              <img src={egor} className="Photo" alt="egor" srcset="" draggable="false"/>
              <h1><b>Забелло Егор</b></h1><br/>Пивной сенсей<br/>Главные достоинства:<br/>
              Мощнейший самурай всего МИИГАиКа.<br/>
              В пивном сражении с ним падет каждый.<br/>
              Сам Ханма Юдзеро выбрал Егора своим преемником.<br/>
              Любимая цитата - "Сила в пиве и нашем тренажерном зале "Hanma Gym".<br/>
              Увлекается програмированием и укриплением здоровья <br/>по особой методике пивной диеты.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home