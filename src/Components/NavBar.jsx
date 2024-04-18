import React, {useState} from "react";
import "./NavBarStyles.css";
import Boton from "./Boton"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import FormDialog from "./FormLogIn";
import FormDialogSign from "./FormSignIn";

/*let lastScrollTop = 0;

let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop>lastScrollTop) {
    navbar.style.top = "-80px";        
  }
  else{
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
})*/

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
            <li><FormDialogSign/></li>
            {/*<li><Link to="/"><Boton text="LOG IN"  /></Link></li>*/}
            <li><FormDialog/></li>
            
            
          </ul>
        </div>
      </div>
  );
}

//Adentro del link
/*
className="openLogInModal" 
onClick={()=>{setOpenLogInModal(true)}*/

//Afuera del link
/*{openLogInModal && <LogInModal closeModal={setOpenLogInModal}/>}*/

export default NavBar;


