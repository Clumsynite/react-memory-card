import React, { useState, useEffect } from "react";
import images from "./images";

const Cards = () => {
  const [cards, setCards] = useState(images);

  const cardsMap = cards.map((card, index) => {
    return (
      <div key={index} className="col mb-3" data-index={index}>
        <div className="card">
          <img src={card.src} alt={card.name} data-index={index} style={{height: "240px"}}/>
          <div className="card-footer font-weight-bold text-center">
            {card.name}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Cards">
      <div className="row row-cols-3 row-cols-md-6">
        {cards.length > 1 && cardsMap}
      </div>
    </div>
  );
};

export default Cards;
