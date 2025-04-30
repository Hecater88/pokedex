import { Suspense } from "react";
import DashboardDetail from "./DashboardDetail";

const PokemonPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardDetail pokemonId={id} />
      </Suspense>
    </div>
  );
};

export default PokemonPage;
