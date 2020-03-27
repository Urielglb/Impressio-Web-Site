import React from 'react';
import logo from './assets/img/Logo.png'
import './sass/App.scss';
import content from './js/slider/sliderContent';
import Slider from './js/slider/slider';

function Header() {
  return(
  <div className="Header">
      <img src={logo} alt="logo"></img>
      <div>
      <h3>Facturación electrónica</h3>
      <p className="highlight">Nuevo Sistema 3.3</p>
      <p className="highlight">Servicio Personalizado</p>
      </div>
      
    </div>
  );
}

function App() {
  return (
    <div>
    <Header></Header>
    <Slider info={content.info} img={content.img} ></Slider>
    </div>
  );
}

export default App;
