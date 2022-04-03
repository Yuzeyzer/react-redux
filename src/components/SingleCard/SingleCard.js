import React from "react";
import "./style.css";

const SingleCard = ({ src, handleChoice, id }) => {
  const handleClick = () => {
    handleChoice({ id, src });
  };
  return (
    <div className="card">
      <div>
        <img className="front" src={src} alt="card-front" />
        <img onClick={handleClick} src="/img/cover.png" alt="card-cover" />
      </div>
    </div>
  );
};

export default SingleCard;
