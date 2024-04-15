import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import Inicio from "./Components/Inicio.jsx";
import MiFooter from "./Components/MiFooter.jsx";
import RatexPrivacyPolicy from "./Components/RatexPrivacyPolicy.jsx";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/RatexPrivacyPolicy" element={<RatexPrivacyPolicy />} />
        </Routes>
        <MiFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
