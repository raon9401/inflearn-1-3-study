import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchPokemonList = ({ offset }) => {
  console.log(offset);

  return api.get(`/pokemon/?limit=20&offset=${offset}`);
};

export const usePokemonList = ({ offset }) => {
  return useQuery({
    queryKey: ["pokemon-list", { offset }],
    queryFn: () => fetchPokemonList({ offset }),
    select: (result) => result,
  });
};
