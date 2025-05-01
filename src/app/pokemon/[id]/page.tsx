import { Suspense } from "react";
import PokemonDetail from "./PokemonDetail";
import Loader from "@/app/components/shared/loading";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const PokemonPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const authSession = await getServerAuthSession();
  if (!authSession) {
    redirect("/login");
  }
  return (
    <div className="bg-gray-100">
      <Suspense
        fallback={
          <div className="p-5">
            <h1>
              Searching <span className="capitalize bold">{id}</span>
            </h1>
            <Loader />
          </div>
        }
      >
        <PokemonDetail pokemonId={id} />
      </Suspense>
    </div>
  );
};

export default PokemonPage;
