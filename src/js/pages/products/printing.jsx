import React from 'react';
import Header from '../../header';
import content from './printingContent'
import ContactUs from '../../contactUs';


const Gallery = (props)=> {
    let i = 1;
    const imgs =  props.imgs.map((info)=>{
        if (i===1) {
            i++;
            return(
                <div className="blocks">
                    <div className="text">
                        <p>Papelería impresa</p>
                    </div>
                    <img src={info.src} alt={info.alt} key={info.alt}></img>
                </div>
            );
        }
        if (i===3) {
            i++;
            return(
                <div className="blocks">
                    <img src={info.src} alt={info.alt} key={info.alt}></img>
                    <div className="text">
                        <p>Lonas,Vinil Impreso con corte a registro <br></br> Corte Vinil adhesivo y Textil</p>
                    </div>
                </div>
            );
        }
        i++;
        return <img src={info.src} alt={info.alt} key={info.alt}></img>
    });
    return(
        <div className = "gallery">
                {imgs}
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