import React from "react";
import "./CardList.css";
import Card from '../Card/Card'

const CardList = ({ cards }) => {
    return (
      <div className="main-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  };
  export default CardList;
