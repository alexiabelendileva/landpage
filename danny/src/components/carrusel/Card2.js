import Styles from "./Carrusel.css";
import React, { useState } from "react";
// componente card
function Card2({ content, title }) {
  return (
    <div className="card2">
      <div className="card-title">{title}</div>
      <div className="card-content">{content}</div>
    </div>
  );
}

export default Card2;
