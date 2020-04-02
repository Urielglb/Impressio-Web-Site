import React from 'react';
import ScrollMenu from '../slider/scrollMenu';
import logo1 from '../../assets/img/Logo1.png';
import logo2 from '../../assets/img/Logo2.png';
import content from '../slider/scrollMenuContent';
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
        <img src={logo1} alt="logo"></img>
        <img src={logo2} alt="logo"></img>
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