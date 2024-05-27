import Card from "./Card";
import "./Servicios.css";
import React, { useState } from "react";

// componente principal
function Servicios() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };
  // lista de cards
  const defaultImage =
    "https://static.vecteezy.com/system/resources/previews/020/901/570/non_2x/cute-puppy-cartoon-style-vector.jpg";

  const cardData = [
    {
      id: 1,
      title: "Card 1",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/020/901/570/non_2x/cute-puppy-cartoon-style-vector.jpg",
    },
    {
      id: 2,
      title: "Card 2",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqOgglNF5iofblnd2ChyN5463lipl2zFtyLGWBSnvzw&s",
    },
    {
      id: 3,
      title: "Card 3",
      imageUrl:
        "https://framerusercontent.com/images/0QoyS6eoDcR3toTbyQGQ1yTUpY.png",
    },
    {
      id: 4,
      title: "Card 4",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqOgglNF5iofblnd2ChyN5463lipl2zFtyLGWBSnvzw&s",
    },
  ];

  // establecer estilo de fondo con la imagen seleccionada
  const backgroundImageStyle = selectedCard
    ? { backgroundImage: `url('${selectedCard.imageUrl}')` }
    : { backgroundImage: `url(${defaultImage})` };

  return (
    <div className="card-list" id="servicios" style={backgroundImageStyle}>
      <div className="cards">
        {cardData.map((card) => (
          <Card key={card.id} card={card} onSelect={handleCardSelect} />
        ))}
      </div>
      <div className="image-preview">
        {selectedCard ? (
          <img src={selectedCard.imageUrl} alt={selectedCard.title} />
        ) : (
          <img src={defaultImage} alt="Default" />
        )}
      </div>
    </div>
  );
}

export default Servicios;
