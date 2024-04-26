import React from "react";
import "./Inicio.css"
import Swipers from "./Swipers";



function Inicio() {
    return (
            <div className="Inicio">
                
                <h2>POPULARES</h2>
                    <Swipers></Swipers>
                <h2>RECOMENDADAS</h2>
                    <Swipers></Swipers>
            </div>
    )
};




export default Inicio;
