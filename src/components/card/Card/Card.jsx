import React from "react";
import "./Card.css";


const Card = ({ title, description, image }) => {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button onClick={() => alert(title)} className="card-button">
          Дізнатися більше
        </button>
      </div>
    );
  };
  export default Card;
