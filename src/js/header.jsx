import React from 'react';
import logo from '../assets/img/Logo.png';
import {Link} from "react-router-dom";

const Header = ()=> {
    return(
    <div className="header">
        <div className ="logo">
            <img src={logo} alt="logo"></img>
        </div>
        <div className="sections">
            <Link to="/tshirts">PLAYERAS</Link>
            <Link to="/">
                <div className="separation">
                    <span>ARTICULOS</span>
                    <span>PERSONALIZADOS</span>
                </div>
            </Link>
            <Link to="/">
                <div className="separation">
                    <span>ETIQUETAS</span>
                    <span>Y BORDADOS</span>
                </div>
            </Link>
            <Link to="/">
                <div className="separation">
                    <span>IMPRENTA Y</span>
                    <span>SEÑALIZACIÓN</span>
                </div>
            </Link>
            <Link to="/">
                <div className="separation">
                    <span>FACTURACIÓN</span>
                    <span>ELECTRONICA</span>
                </div>
            </Link>
            <Link to="/">
                <div className="separation">
                    <span>PAPELERIA PARA</span>
                    <span>EMPRESAS</span>
                </div>
            </Link>
        </div>
      </div>

    );
  }

export default Header