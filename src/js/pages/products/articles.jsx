import React from 'react';
import Header from '../../header';
import content from './content/articlesContent'
import ContactUs from '../../contactUs';

const Gallery = (props)=> {
    const imgs =  props.imgs.map((info)=>{
        return <img src={info.src} alt={info.alt} key={info.alt}></img>
    });
    return(
        <div className = "gallery">
            <div className="first-section">
                {imgs.slice(0,5)}
            </div>
            <div className="second-section">
                {imgs.slice(5,8)}
            </div>
        </div>
    );
}

  

const Articles = ()=>{
    return(
        <div className="articles">
            <Header></Header>
            <div className="main-img">
                <img src={content.mainImg} alt="imagen principal"></img>
            </div>
                <Gallery imgs = {content.imgs}></Gallery>
            {/* <ContactUs></ContactUs> */}
        </div>
    );

}

export default Articles;