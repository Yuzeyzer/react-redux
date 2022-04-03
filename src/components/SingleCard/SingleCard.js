import React from "react";
import "./style.css";

const SingleCard = ({ card,handleChoice,  flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img className="back" onClick={handleClick} src="/img/cover.png" alt="card-cover" />
      </div>
    </div>
  );
};

export default SingleCard;
