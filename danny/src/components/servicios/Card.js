import "./Servicios.css";

// componente card
function Card({ card, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(card)}>
      <h3>{card.title}</h3>
      {/* se puede añadir mas info de la card */}
    </div>
  );
}


export default Card;