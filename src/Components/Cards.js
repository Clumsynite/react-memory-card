import React, { useState, useEffect } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(cardsToArray);
  }, [cards]);
  const cardsToArray = () => {
    const array = [];
    for (let i = 0; i < 3; i++) {
      array.push({
        name: `avenger-${i + 1}`,
        src: function () {
          return `../images/${this.name}.jpg`;
        },
        clicked: false,
      });
    }
    return array;
  };

  return (
    <div className="Cards">
      Cards
      {cards.length > 1 && cards[0].src()}
    </div>
  );
};

export default Cards;
