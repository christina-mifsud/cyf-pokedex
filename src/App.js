import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function logWhenClicked() {
  console.log("Image was clicked!");
}

function App() {
  return (
    <div className="App">
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
