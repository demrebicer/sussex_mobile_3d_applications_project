import React from "react";
import ReactDOM from "react-dom/client";
import RouterHandler from "./router";
import Navbar from "./components/navbar";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <RouterHandler />
    </BrowserRouter>
  </React.StrictMode>
);
