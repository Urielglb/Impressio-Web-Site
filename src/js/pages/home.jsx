import React from 'react';
import content from '../slider/sliderContent';
import Slider from '../slider/sliderForm'
import Header from '../header';
import ContactUs from '../contactUs'


const Home = ()=>{
    return(
    <div className = "home">
         <Header></Header>
         <Slider imgs={content}></Slider>
         <ContactUs></ContactUs>
    </div>
   
    );
}

export default Home;