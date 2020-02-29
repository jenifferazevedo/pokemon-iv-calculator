import { useContext } from "react";
import { PokemonDataContext } from "../components/PokemonDataContext/";

const usePokemonData = () => {
  // Desconstruct state from context
  const [state, setState] = useContext(PokemonDataContext);

  // Create custom functions and whatever u want here
  const setPokemon = list => {
    setState({ ...state, pokemons: list });
  };

  // Export state from context and custom functions
  return {
    pokemons: state.pokemons,
    teste: state.stateTeste,
    setPokemon
  };
};

export default usePokemonData;
