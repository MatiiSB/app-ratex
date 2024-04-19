import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import Inicio from "./Components/Inicio.jsx";
import MiFooter from "./Components/MiFooter.jsx";
import RatexPrivacyPolicy from "./Components/RatexPrivacyPolicy.jsx";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import NavBarLateral from "./Components/NavBarLateral.jsx";
import Actores from "./paginas/Actores.jsx";
import Categorias from "./paginas/Categorias.jsx";
import Filtros from "./paginas/Peliculas.jsx";
import Peliculas from "./paginas/Puntuacion.jsx";
import Series from "./paginas/Series.jsx";
import Puntuacion from "./paginas/Puntuacion.jsx";
import {Faqs} from "./Components/FAQs.jsx"



function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <NavBar id="navbar" />
        <NavBarLateral>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/" element={<Actores />} />
            <Route path="/" element={<Categorias />} />
            <Route path="/" element={<Filtros />} />
            <Route path="/" element={<Peliculas />} />
            <Route path="/" element={<Puntuacion />} />
            <Route path="/" element={<Series />} />
            <Route path="/FAQs" element={<Faqs/>} />
            <Route path="/RatexPrivacyPolicy" element={<RatexPrivacyPolicy />} />
          </Routes>
        </NavBarLateral>
        
        <MiFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
