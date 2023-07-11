import React from "react";

const Logo = (props) => {
  //console.log(props);
  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        className="pokemonImage"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="bird"
        onClick={props.handleClick}
      />
    </header>
  );
};

export default Logo;
