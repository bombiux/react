import React from "react";
import logored from "../assets/imagenes/logored.png"

function Cabezera() {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounde">
          <img src={logored} className="img-fluid logore" alt=""/>
        <button className="navbar-toggler  " >
          <i class="fas fa-bars"></i>
        </button>
        
      </nav>
    </div>
  );
}

export default Cabezera;
