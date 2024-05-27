import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchPokemonList = ({ offset }) => {
  return api.get(`/pokemon/?limit=40&offset=${offset}`);
};

const fetchPokemon = ({ id }) => {
  return api.get(`/pokemon/${id}/`);
};

export const usePokemonList = ({ offset }) => {
  return useQuery({
    queryKey: ["pokemon-list", { offset }],
    queryFn: () => fetchPokemonList({ offset }),
    select: (result) => result.data,
  });
};

export const usePokemonCard = ({ id }) => {
  return useQuery({
    queryKey: ["pokemon-card", { id }],
    queryFn: () => fetchPokemon({ id }),
    select: (result) => result.data,
  });
};
