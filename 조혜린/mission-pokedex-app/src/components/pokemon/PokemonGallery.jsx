import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getPokemons } from "../../api/pokeApi";
import PokemonCard from "./PokemonCard";

export default function PokemonGallery() {
  const [pokemons, setPokemons] = useState([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });

  useEffect(() => {
    if (!isLoading) {
      setPokemons(data.data.results);
    }
  }, [isLoading, data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...!</div>;

  return (
    <main className="grid grid-cols-5 gap-8 px-32 mb-8">
      {pokemons.map((v, i) => (
        <PokemonCard key={`${v.name}_${i}`} url={v.url} name={v.name} />
      ))}
    </main>
  );
}
