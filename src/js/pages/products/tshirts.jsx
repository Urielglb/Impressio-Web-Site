import React from 'react';
import Header from '../../header';
import imgs from './tshirtsImgs'
import ContactUs from '../../contactUs';

const Tshirts = ()=>{
    return(
        <div className="tshirts">
            <Header></Header>
            <div className="main-img">
                <img src={imgs["mainImg"]} alt="imagen principal"></img>
                <div className="information">
                    <p>Pregunta por nuestros paquetes</p>
                    <p>Amplio catalogo de colores</p>
                </div>
            </div>
            <div className="catalog">

            </div>
            <ContactUs></ContactUs>
        </div>
    );

}

export default Tshirts;