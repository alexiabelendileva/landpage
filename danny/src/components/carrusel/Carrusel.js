import React, { useEffect, useState } from "react";
import "./Carrusel.css"; // Estilos CSS para el carrusel
import Card2 from "./Card2";

const initialCards = [
  { id: 1, title: "Title 1", content: "Card 1" },
  { id: 2, title: "Title 2", content: "Card 2" },
  { id: 3, title: "Title 3", content: "Card 3" },
];

function Carrusel() {
  const [index, setIndex] = useState(0);
  const cardCount = initialCards.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cardCount);
    }, 5000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [cardCount]);

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cardCount);
  };

  const prevCard = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cardCount) % cardCount);
  };

  return (
    <div className="servicios">
      <h2>Te contamos cómo es trabajar con nosotros</h2>
      <p>Con confianza, resultados y respaldo. Sin complicaciones ni estrés.</p>
      <div className="slider-container">
        <div
          className="card-container"
          style={{ transform: `rotateY(${index * -120}deg)` }}
        >
          {initialCards.map((card, i) => (
            <div
              key={card.id}
              className="card-wrapper"
              style={{ transform: `rotateY(${i * 120}deg) translateZ(300px)` }}
            >
              <Card2 title={card.title} content={card.content} />
            </div>
          ))}
        </div>
        <div className="nav-buttons">
          <button className="nav-button" onClick={prevCard}>
            Previous
          </button>
          <button className="nav-button" onClick={nextCard}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
