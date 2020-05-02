import React from 'react';
import facebook from '../assets/img/redes sociales/facebook.png'
import instagram from '../assets/img/redes sociales/instagram.png'
import mercadoLibre from '../assets/img/redes sociales/mercado libre.png'
import whats from '../assets/img/redes sociales/whats.png'

const ContactUs = ()=>{
  return(
      <div className="contact-us">
        <div className="first-section">
          <h1>
          <img src ={whats} alt="whatsapp"></img>
          555075-4410
          </h1>
          <h2>impressio_lh@hotmail.com</h2>
        </div>
        <div className="second-section">
          <h1>Tel:5679-4521</h1>
          <div className="imgs">
            <a><img src={mercadoLibre} alt="mercado libre" id="mercado"></img></a>
            <a>
              <img src={facebook} alt="Facebook"className="social-media"></img>
              impressio
              </a>
              <a href="https://www.instagram.com/impressio_l/?hl=es-la"> 
              <img src={instagram} alt="instagram" className="social-media"></img>
              impressio_l
              </a>
          </div>
        </div>
      </div>
  );
}
export default ContactUs;