import React from 'react';
import Header from '../../header';
import content from './content/printingContent'
import ContactUs from '../../contactUs';


const Gallery = (props)=> {
    const imgs =  props.imgs.map((info)=>{
        return <img src={info.src} alt={info.alt} key={info.alt}></img>
    });
    return(
        <div className = "gallery">
                <div className="blocks">
                    <p>Papelería Impresa</p>
                    {imgs.slice(0,2)}
                </div>
                {imgs[2]}
                <div className="blocks">
                    {imgs.slice(3,5)}
                    <p>Lonas, Vinil Impreso con corte a registro 
                    <br></br>
                    Corte Vinil adhesivo y Textil
                    </p>
                </div>
                {imgs[5]}
        </div>

    );
}

  

const Printing = ()=>{
    return(
        <div className="printing">
            <Header></Header>
            <div className="main-img">
                <img src={content.mainImg} alt="imagen principal"></img>
            </div>
                <Gallery imgs = {content.imgs}></Gallery>
            {/* <ContactUs></ContactUs> */}
        </div>
    );

}

export default Printing;