import './App.css';
import MenuAppBar from './components/MenuAppBar';
import {Routes, Route} from 'react-router-dom';
import PriceList from './components/PriceList';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Buy from './components/Buy';
import FooterMenu from './components/FooterMenu'


function App() {
  return (
     <div className="App">
      <header className="App-header">
        <MenuAppBar/>
      </header>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/price' element={<PriceList/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/buy' element={<Buy/>}/>
      </Routes>
      <FooterMenu/>
     </div> 


   

  );
}

export default App;

