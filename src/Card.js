import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="cat-picture" src={props.catpicture} alt={props.catname} />
    </div>
  );
};

export default Card;
