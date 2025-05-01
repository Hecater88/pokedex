import { Suspense } from "react";
import PokemonDetail from "./PokemonDetail";
import Loader from "@/app/components/shared/loading";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const PokemonPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;
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
              Searching <span className="capitalize bold">{name}</span>
            </h1>
            <Loader />
          </div>
        }
      >
        <PokemonDetail pokemonId={name} />
      </Suspense>
    </div>
  );
};

export default PokemonPage;
