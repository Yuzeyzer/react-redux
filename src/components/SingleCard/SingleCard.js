import React from "react";
import './style.css'

const SingleCard = ({ src }) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={src} alt="card-front" />
        <img src="/img/cover.png" alt="card-cover" />
      </div>
    </div>
  );
};

export default SingleCard;
