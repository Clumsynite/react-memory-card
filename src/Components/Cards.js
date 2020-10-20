import React, { useState, useEffect } from "react";
import images from './images' 

const Cards = () => {
  const [cards, setCards] = useState(images);

  const cardsMap = cards.map((card, index) => {
    return (
      <div key={index} className="card" data-index={index}>
        <img src={card.src} alt={card.name} />
        <div className="card-body">
          <div className="card-title">{card.name}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="Cards">
      {cards.length > 1 && cardsMap}
      <img src="../images/nav-bg.jpg" alt="AAA" ></img>
    </div>
  );
};

export default Cards;
