import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Drinks from "../pages/Drinks";
import Cola from "../pages/Cola";

function RouterHandler() {
  return (
      <Routes>
        <Route path="/~db596" element={<Homepage />} />
        <Route path="/~db596/about" element={<About />} />
        <Route path="/~db596/drinks" element={<Drinks />} />
        <Route path="/~db596/cola" element={<Cola />} />
      </Routes>
  );
}

export default RouterHandler;
