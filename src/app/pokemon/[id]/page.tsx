import { Suspense } from "react";
import DashboardDetail from "./DashboardDetail";
import { LoadingSpinner } from "@/app/components/ui/loading-spinner";

const PokemonPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <LoadingSpinner size={100} />
          </div>
        }
      >
        <DashboardDetail pokemonId={id} />
      </Suspense>
    </div>
  );
};

export default PokemonPage;
