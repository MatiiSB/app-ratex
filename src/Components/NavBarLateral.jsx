import React, { useState } from "react";
import {
  FaFilm,
  FaFilter,
  FaTh,
  FaTv,
  FaThLarge,
  FaUser,
  FaRegStar,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './NavBarLateral.css';
function NavBarLateral({ children }) {
  const menuItems = [
    {
      path: "/",
      name: "Inicio",
      Icon: <FaTh/>,
    },
    {
      path: "/peliculas",
      name: "Peliculas",
      Icon: <FaFilm/>,
    },
    {
      path: "/serires",
      name: "Series",
      Icon: <FaTv />,
    },
    {
      path: "/categorias",
      name: "Categorias",
      Icon: <FaThLarge />,
    },
    {
      path: "/actores",
      name: "Actores",
      Icon: <FaUser />,
    },
    {
      path: "/filtros",
      name: "Filtros",
      Icon: <FaFilter />,
    },
    {
      path: "/puntuacion",
      name: "Puntuacion",
      Icon: <FaRegStar />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className="navLateralContainer">
      <div style={{width: isOpen ? "250px" : "100px" }} className="sidebar">
        <div className="top_section">
          <div style={{marginLeft: isOpen ? "200px" : "0px" }} className="bars">
            <FaBars  style={{fontSize: isOpen? "25px":"40px"}} onClick={toggle}/>
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div style={{fontSize: isOpen? "25px":"40px"}} className="icon">{item.Icon}</div>
            <div style={{display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <div className="hijos">{children}</div>
    </div>
  );
}

export default NavBarLateral;
