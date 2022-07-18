import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './components.css'


function MenuAppBar() {
  return (
      <Toolbar>
      <AppBar className='AppBar' position="fixed" color='primary'>
        <Container className='Container' fixed >
          <Toolbar className='Toolbar'>
            <Button color="inherit"><Link to="/" className='L'>Главная</Link></Button>
            <Button color="inherit"><Link to="/price" className='L'>Цены</Link></Button>
            <Button color="inherit"><Link to="/contacts" className='L'>Контакты</Link></Button>
            <Button color="inherit"><Link to="/Buy"  className='L'>Купить</Link></Button>
          </Toolbar>
        </Container>
      </AppBar>
      </Toolbar>
  );
}

export default MenuAppBar;