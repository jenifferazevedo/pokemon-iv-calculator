import App from "next/app";
import React from "react";
import { PokemonDataProvider } from "../components/PokemonDataContext";
import { ThemeProvider } from "styled-components";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PokemonDataProvider>
        <Component {...pageProps} />
      </PokemonDataProvider>
    );
  }
}
