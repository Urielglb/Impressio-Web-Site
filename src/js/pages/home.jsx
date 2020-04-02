import React from 'react';
import ScrollMenu from '../slider/scrollMenu';
import logo from '../../assets/img/Logo.png';
import content from '../slider/slider';
import Sidenav from '../sidenav';



const SocialMedia = ()=>{
  return(
    <div>
      <h1 className="title highlight">Redes Sociales</h1>
      <div className="social-media">
      <h3><i className="fab fa-facebook"></i><a>Facebook</a></h3>
      <h3><i className="fab fa-instagram"></i><a>Instagram</a></h3>
      </div>
    </div>
  );
}

const Header = ()=> {
    return(
    <div className="header">
        <img src={logo} alt="logo"></img>
      </div>
    );
  }

const Home = ()=>{
    return(
    <div className = "home">
         <Sidenav></Sidenav>
         <Header></Header>
         <h1 className="title highlight">Productos y servicios</h1>
         <ScrollMenu content={content}></ScrollMenu>
         <SocialMedia></SocialMedia>
         
    </div>
   
    );
}

export default Home;