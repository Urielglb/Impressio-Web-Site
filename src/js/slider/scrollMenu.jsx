import React from 'react';


const ImgContainer = (props)=>{
  return(
    <div className="container">
      <img src={props.img}></img>
      <p>{props.name}</p>
    </div>
  );
}

const ScrollMenu = (props)=>{
  const gallery = props.content.map((card)=>{
    return <ImgContainer img={card.img} name={card.name} key={card.name}></ImgContainer>
 });
  return(
    <div className="scroll-menu">
      {gallery}
    </div>
  );
}
  export default ScrollMenu;