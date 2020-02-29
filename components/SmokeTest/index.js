import React from "react";
import styled from "styled-components";
import usePokemonData from "../../hooks/usePokemonData";

const Title = styled.h1`
  font-size: 50px;
  color: "#000";
`;

export default function index() {
  // Use the custom hook
  const { teste, pokemons } = usePokemonData();

  return (
    <div>
      <Title>{teste ? teste : "carregando"}</Title>
      {JSON.stringify(pokemons)}
    </div>
  );
}
