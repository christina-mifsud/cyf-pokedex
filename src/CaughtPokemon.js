import React, { useState } from "react";

const CaughtPokemon = () => {
  // all in a single arrow function for variables to be accessible
  const [caught, setCaught] = useState([]); // define caught as a state variable

  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    //const randomPokemonNum = Math.floor(Math.random() * 100) + 1; // generate a random number for the caught Pokemon
    setCaught([...caught, pokemonNameInput]); // update the caught state
    setPokemonNameInput("");
  }

  const date = new Date().toLocaleDateString();
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={(event) => setPokemonNameInput(event.target.value)}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul className="pokemon-list">
        {caught.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;
