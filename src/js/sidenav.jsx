import React from 'react';
import {
    Link,
  } from "react-router-dom";

function nav(open) {
    let sideNav = document.querySelector('.nav-display');
    if (open) {
      sideNav.style.width = "250px";
    } else {
      sideNav.style.width = "0px";
    }
  }

const Sidenav = ()=>{
    return(
      <div className="sidenav">
          <h1 className="open-btn" onClick={()=>{nav(true)}}><i className="fas fa-bars"></i></h1>
          <div className="nav-display">
            <h1 className="close-btn" onClick={()=>{nav(false)}}><i className="fas fa-times"></i></h1>
            <Link to="/"><i className="fas fa-home"></i>Principal</Link>
            <Link to="/products"><i className="fas fa-shopping-bag"></i>Productos</Link>
            <Link to="/contact-us"><i className="fas fa-envelope"></i>Contactanos</Link>
          </div>
        </div>
    );
  } 

export default Sidenav;