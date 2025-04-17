import React from "react";

const StarshipCard = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <div className="card-text">
        <p>
          <strong>Model:</strong> {props.model}
        </p>
        <p>
          <strong>Manufacturer:</strong> {props.manufacturer}
        </p>
        <p>
          <strong>Starship class:</strong> {props.starship_class}
        </p>
      </div>
    </div>
  );
};

export default StarshipCard;
