import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Drinks from "../pages/Drinks";
import Cola from "../pages/Cola";
import Sprite from "../pages/Sprite";
import Fanta from "../pages/Fanta";
import Contact from "../pages/Contact";

function RouterHandler() {
  return (
      <Routes>
        <Route path="/~db596" element={<Homepage />} />
        <Route path="/~db596/about" element={<About />} />
        <Route path="/~db596/drinks" element={<Drinks />} />
        <Route path="/~db596/cola" element={<Cola />} />
        <Route path="/~db596/sprite" element={<Sprite />} />
        <Route path="/~db596/fanta" element={<Fanta />} />
        <Route path="/~db596/contact" element={<Contact />} />
      </Routes>
  );
}

export default RouterHandler;
