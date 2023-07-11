import React from "react";

const BestPokemon = ({ abilities }) => {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul className="pokemon-list">
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
