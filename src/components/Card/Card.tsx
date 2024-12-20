import React from "react";
import "./Card.css";

const SimpleCard = () => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/345x140"
        alt="Imagen Elegante"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">Título del Card</h2>
        <p className="card-text">
          Descripción breve del contenido del card. ¡Hazlo elegante y llamativo!
        </p>
      </div>
    </div>
  );
};

export default SimpleCard;
