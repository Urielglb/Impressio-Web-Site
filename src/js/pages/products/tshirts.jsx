import React from 'react';
import Header from '../../header';
import content from './content/tshirtsContent'
import ContactUs from '../../contactUs';
import { useState } from 'react';


const Gallery = (props)=> {
    const[navState,setState] = useState(false);
    const imgs =  props.imgs.map((info)=>{
        return <img src={info.src} alt={info.alt} key={info.alt}></img>
    });
    return(
        <div className = "gallery">
            <h2 onClick={()=>setState(!navState)}>
                {navState?  <i className="fas fa-times"></i> : <i className="fas fa-palette"></i>}
                </h2>
            <div className="colors">
                <img src={content.colors} alt="Colores de playeras" className={
                navState?  "display" : "hide" 
                }></img>  
            </div>
            <div className="catalog">
                {imgs}
            </div>
        </div>

    );
}

  

const Tshirts = ()=>{
    return(
        <div className="tshirts">
            <Header></Header>
            <div className="main-img">
                <img src={content.mainImg} alt="imagen principal"></img>
                <div className="information">
                    <p>Pregunta por nuestros paquetes</p>
                    <p>Amplio catalogo de colores</p>
                </div>
            </div>
                <Gallery imgs = {content.imgs}></Gallery>
            <ContactUs></ContactUs>
        </div>
    );

}

export default Tshirts;