import axios from "axios";

export function callPokemonBaseAPI() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        resolve(response);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}
