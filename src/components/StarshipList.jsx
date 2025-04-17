import React from "react";
import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  return (
    <>
      {props.starships.map((starship, index) => (
        <StarshipCard
          key={index}
          name={starship.name}
          model={starship.model}
          manufacturer={starship.manufacturer}
          starship_class={starship.starship_class}
        />
      ))}
    </>
  );
};

export default StarshipList;
