import { Suspense } from "react";
import PokemonDetail from "./PokemonDetail";

const PokemonPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonDetail pokemonId={id} />
      </Suspense>
    </div>
  );
};

export default PokemonPage;
