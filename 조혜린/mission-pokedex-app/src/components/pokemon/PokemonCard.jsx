import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getPokemon, getPokemonColor } from "../../api/pokeApi";
import { useEffect, useState } from "react";
import { colorConfig } from "../../constants/pokemon";

export default function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState({});
  const [pokemonColor, setPokemonColor] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(url),
  });

  const { data: pokemonColorData, isLoading: pokeColorIsLoading } = useQuery({
    queryKey: ["pokemon-color", name],
    queryFn: () => getPokemonColor(name),
  });

  useEffect(() => {
    if (!isLoading) {
      setPokemon(data.data);
    }
  }, [isLoading, data, setPokemon]);

  useEffect(() => {
    if (!pokeColorIsLoading) setPokemonColor(pokemonColorData.data.color.name);
  }, [pokeColorIsLoading, pokemonColorData, setPokemonColor]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="h-52 border rounded-xl bg-slate-800">
      <div className="flex justify-end px-2 pt-2">
        <h4
          className={`font-medium ${colorConfig.text[pokemonColor]}`}
        >{`#${String(pokemon.id).padStart(3, "0")}`}</h4>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="h-36"
          alt={`${pokemon.name} image`}
          src={pokemon?.sprites?.other?.home?.front_default}
        />
      </div>
      <div
        className={`${colorConfig.bg[pokemonColor]} rounded-b-md px-2 py-1 flex justify-center`}
      >
        <h4 className="font-medium text-white">{pokemon.name}</h4>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
