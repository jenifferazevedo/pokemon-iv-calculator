import React, { useState, useEffect } from "react";
import { callPokemonBaseAPI } from "../../libs/api";

const PokemonDataContext = React.createContext([{}, () => {}]);

const PokemonDataProvider = props => {
  // Global State
  const [state, setState] = useState({
    stateTeste: "Hello",
    pokemons: []
  });

  // Call API Sync
  useEffect(() => {
    callPokemonBaseAPI().then(response => {
      setState({ ...state, pokemons: response.data.results });
    });
  }, []);

  return (
    <PokemonDataContext.Provider value={[state, setState]}>
      {props.children}
    </PokemonDataContext.Provider>
  );
};

export { PokemonDataContext, PokemonDataProvider };
