import React from 'react';
import Slider from '../slider/slider';
import logo from '../../assets/img/Logo.png';
import content from '../slider/sliderContent';
import img from '../../assets/img/serigrafía.jpg';
import Sidenav from '../sidenav';


const Header = ()=> {
    return(
    <div className="header">
        <img src={logo} alt="logo"></img>
        <div>
        <h3>Facturación electrónica</h3>
        <p className="highlight">Nuevo Sistema 3.3</p>
        <p className="highlight">Servicio Personalizado</p>
        </div>
        
      </div>
    );
  }

const Home = ()=>{
    return(
    <div className = "home">
         <Sidenav></Sidenav>
         <Header></Header>
         <Slider info={content.info} img={content.img} ></Slider>
    </div>
   
    );
}

export default Home;