import React from "react";
import ReactDOM from "react-dom/client";
import RouterHandler from "./router";
import Navbar from "./components/navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterHandler />
  </React.StrictMode>
);
