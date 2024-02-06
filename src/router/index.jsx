import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import 'bootstrap/dist/css/bootstrap.css';

function RouterHandler() {
  return (
    <Router>
      <Routes>
        <Route path="/~db596" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default RouterHandler;
