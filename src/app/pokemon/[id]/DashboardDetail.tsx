import { getPokemonDetail } from "@/app/services/pokemon-detail-api";
import Link from "next/link";

const DashboardDetail = async ({ pokemonId }: { pokemonId: string }) => {
  const pokemonDetail = await getPokemonDetail(pokemonId);

  /*  console.log("pokemonDetail", pokemonDetail); */
  return (
    <div>
      DashboardDetail
      <div>
        <Link href={`/`}>back</Link>
        <div>{pokemonDetail && JSON.stringify(pokemonDetail)}</div>
      </div>
    </div>
  );
};

export default DashboardDetail;
