
import React from 'react';

import Carrusel from "../carrusel/Carrusel";
import Presentacion from "../presentacion/Presentacion";
import Servicios from "../servicios/Servicios";
import SobreMi from "../sobreMi/Sobremi";
import Trabajo from "../trabajo/Trabajo";
import "./Body.css";

function Body() {
  return (
    <div>
      <Presentacion />
      <Carrusel />
      <SobreMi />
      <Trabajo/>
      <Servicios />
      {/* testimonios */}
      {/* FAQS */}
      {/* footer */}
    </div>
  );
}

export default Body;
