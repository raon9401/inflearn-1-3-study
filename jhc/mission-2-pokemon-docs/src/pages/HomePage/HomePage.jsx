import { useState } from "react";
import { usePokemonList } from "../../hooks/usePkemonList";

export const HomePage = () => {
  const [offset] = useState(20);

  const { data } = usePokemonList({ offset });

  console.log(data);

  return <div>HomePage</div>;
};
