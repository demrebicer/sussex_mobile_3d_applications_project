import React, { useRef, useState } from "react";
import "../assets/styles/cola.scss";

import colaCan from "../assets/images/colaCan.png";

function Cola() {
  return (
    <div className="cola">
      <h1 className="background-text">Coca</h1>
      <h1 className="background-text">Cola</h1>
      <img className="cola-can" src={colaCan} alt="Cola Can" />
    </div>
  );
}

export default Cola;
