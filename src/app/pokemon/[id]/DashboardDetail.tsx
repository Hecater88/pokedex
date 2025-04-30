import Dashboard from "@/app/components/Dashboard/Dashboard";
import Button from "@/app/components/shared/button";
import { getPokemonDetail } from "@/app/services/pokemon-detail-api";
import Link from "next/link";

const DashboardDetail = async ({ pokemonId }: { pokemonId: string }) => {
  const pokemonDetail = await getPokemonDetail(pokemonId);

  return (
    <>
      <div className="m-5">
        <Link href={`/`}>
          <Button className="text-black">Back</Button>
        </Link>
        <div>
          <Dashboard />
          <div>{pokemonDetail && JSON.stringify(pokemonDetail)}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardDetail;
