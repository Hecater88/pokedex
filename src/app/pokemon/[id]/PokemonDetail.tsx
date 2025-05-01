import Dashboard from "@/app/components/Dashboard/Dashboard";
import Button from "@/app/components/shared/button";
import { getPokemonDetail } from "@/app/services/pokemon-detail-api";
import Link from "next/link";

const PokemonDetail = async ({ pokemonId }: { pokemonId: string }) => {
  const pokemonData = await getPokemonDetail(pokemonId);
  console.log("pokemonData", pokemonData);
  return (
    <>
      <div className="m-5">
        <Link href={`/`}>
          <Button className="text-black">Back</Button>
        </Link>
        <div>
          <Dashboard pokemon={pokemonData} />
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
