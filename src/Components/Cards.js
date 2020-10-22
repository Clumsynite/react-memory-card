import React, { useState } from "react";
import images from "./images";

const Cards = (props) => {
  const [cards, setCards] = useState(images);

  const shuffle = () => {
    const array = cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (e) => {
    const index = e.target.getAttribute("data-index");
    const clicked = images[index].clicked;
    if (!clicked) {
      props.increaseScore();
      images[index].clicked = true;
    } else {
      props.resetScore();
      images.forEach((image) => (image.clicked = false));
    }
    setCards(shuffle());
  };

  const cardsMap = cards.map((card, index) => {
    return (
      <div
        key={index}
        className="avenger col-6  mb-3"
        data-index={index}
        onClick={handleClick}
      >
        <div
          className="card"
          data-index={index}
          style={{ cursor: "pointer" }}
          title={card.name}
        >
          <img
            src={card.src}
            alt={card.name}
            data-index={index}
            style={{ height: "240px" }}
          />
          <div
            className="card-footer font-weight-bold text-center"
            data-index={index}
            style={{ userSelect: "none", padding: "10px 0" }}
          >
            {card.name}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Cards">
      <div className="row row-cols-2 row-cols-md-6">
        {cards.length > 1 && cardsMap}
      </div>
    </div>
  );
};

export default Cards;
