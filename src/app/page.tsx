import { getServerAuthSession } from "../server/auth";
import { getPokemonList } from "./services/pokemon-list-api";
import PokemonListComponent from "./components/PokemonList/PokemonListComponent";
import { Pokemon } from "./types/pokemon";
import { redirect } from "next/navigation";

export default async function Home() {
  const authSession = await getServerAuthSession();
  if (!authSession) {
    redirect("/login");
  }

  const list = await getPokemonList();

  const listWithId = list.results.map((item: Pokemon, index: number) => {
    return { ...item, id: index };
  });

  return (
    <main className="flex flex-col gap-[32px] items-center min-h-screen bg-gray-100">
      {authSession?.user && (
        <div>
          <PokemonListComponent initialPokemonList={listWithId} />
        </div>
      )}
    </main>
  );
}
