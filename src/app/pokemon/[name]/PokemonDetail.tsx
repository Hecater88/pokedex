import Dashboard from "@/app/components/Dashboard/Dashboard";
import { getPokemonDetail } from "@/app/services/pokemon-detail-api";
import PokemonNotFound from "./PokemonNotFound";

const PokemonDetail = async ({ pokemonId }: { pokemonId: string }) => {
  let pokemonData;
  try {
    pokemonData = await getPokemonDetail(pokemonId);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return <PokemonNotFound />;
  }

  if (!pokemonData || !pokemonData.name) {
    return <PokemonNotFound />;
  }

  return (
    <div>
      <Dashboard pokemon={pokemonData} />
    </div>
  );
};

export default PokemonDetail;
