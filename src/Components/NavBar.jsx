import React from "react";
import "./NavBarStyles.css";
import Boton from "./Boton"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function NavBar() {
  return (
      <div className="navContainer">
        <div className="logoContainer">
          <Link className="logoLink" to="/">
            <img alt="Logo Ratex" className="logoRatex" src={require("../Imagenes/logoRatex.png")} />
          </Link>
        </div>
        <SearchBar></SearchBar>
        <div className="btnsContainer">
          <ul className="btnsLista">
            <li><Link to="/"><Boton text="SIGN IN"/></Link></li>
            <li><Link to="/"><Boton text="LOG IN"/></Link></li>
          </ul>
        </div>
      </div>
  );
}

export default NavBar;
