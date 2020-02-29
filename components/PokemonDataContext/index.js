import React, { useState } from "react";

const PokemonDataContext = React.createContext([{}, () => {}]);

const PokemonDataProvider = props => {
  // Global State
  const [state, setState] = useState({
    stateTeste: "Hello",
    pokemons: []
  });
  return (
    <PokemonDataContext.Provider value={[state, setState]}>
      {props.children}
    </PokemonDataContext.Provider>
  );
};

export { PokemonDataContext, PokemonDataProvider };
