import React from 'react';
import content from '../slider/sliderContent';
import Slider from '../slider/sliderForm'
import Header from '../header';
import ContactUs from '../contactUs'
import promotion from '../../assets/img/tapabocas.jpeg'


const Home = ()=>{
    return(
    <div className = "home">
         <Header></Header>
         <Slider imgs={content}></Slider>
         {/* <ContactUs></ContactUs> */}
         <h2>Promoción de cubrebocas y caretas</h2>
         <img src={promotion} alt="cubre bocas y caretas" id="masks"></img>
    </div>
   
    );
}

export default Home;