import React from 'react';
import facebook from '../assets/img/redes sociales/facebook.png'
import instagram from '../assets/img/redes sociales/instagram.png'
import mercadoLibre from '../assets/img/redes sociales/mercado libre.png'
import whats from '../assets/img/redes sociales/whats.png'

const ContactUs = ()=>{
  return(
      <div className="contact-us">
        <div className="first-section">
          <h2>
          <img src ={whats} alt="whatsapp"></img>
          555075-4410
          </h2>
          <h2>impressio_lh@hotmail.com</h2>
        </div>
        <div className="second-section separation">
          <h1>Tel:5679-4521</h1>
          <div className="social-media">
            <a><img src={mercadoLibre} className="mercado" alt="mercado libre"></img></a>
            <a>
              <img src={facebook}></img>
              impressio
              </a>
              <a href="https://www.instagram.com/impressio_l/?hl=es-la">
              <img src={instagram}></img>
              impressio_l
              </a>
          </div>
        </div>
      </div>
  );
}
export default ContactUs;