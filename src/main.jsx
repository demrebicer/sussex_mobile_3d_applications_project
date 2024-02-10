import React from "react";
import ReactDOM from "react-dom/client";
import RouterHandler from "./router";
import Navbar from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterHandler />
    </BrowserRouter>
  </React.StrictMode>
);
