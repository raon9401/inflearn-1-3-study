import axios from "axios";

const baseURL = `https://pokeapi.co/api/v2`;

export function getPokemons() {
  return axios.get(`${baseURL}/pokemon`);
}

export function getPokemon(url) {
  return axios.get(url);
}

export function getPokemonColor(name) {
  return axios.get(`${baseURL}/pokemon-species/${name}`);
}
