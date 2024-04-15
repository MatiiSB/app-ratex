import React from "react";
import "./Footer.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function MiFooter() {
  return (
    <div className="footer">

    {/*Contenedor de los links de privacidad y faqs, lado IZQ */}
      <div>
        <ul>
          <li>
          <Link className="btnsFooter" to="/RatexPrivacyPolicy">Faqs</Link>
          </li>
          <li>
            
          <Link className="btnsFooter" to="/RatexPrivacyPolicy">Politicas de Privacidad</Link>
          </li>
        </ul> 
      </div>

    {/*Contenedor de los logos de WPP y Mail, parte DER */ }
      <div>
        <ul>
          <li className="logosContacto">
            <a target="_blank" title="Enlace que pone en contacto con el Whatsapp de Ratex">
              <img
                alt="Logo Whatsapp"
                href=""
                className="logoFooter"
                src={require("../Imagenes/whatsapp.png")}>

                </img>
            </a>
          </li>
          <li>
            <a target="_blank" title="Enlace que pone en contacto con el Email de Ratex">
              <img
                alt="Logo Correo Electrónico"
                href=""
                className="logoFooter"
                src={require("../Imagenes/email.png")}>

                </img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MiFooter;
