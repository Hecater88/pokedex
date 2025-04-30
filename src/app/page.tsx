import Link from "next/link";
import { getServerAuthSession } from "../server/auth";
import { getPokemonList } from "./services/pokemon-list-api";
import PokemonListComponent from "./components/PokemonList/PokemonListComponent";

export default async function Home() {
  const authSession = await getServerAuthSession();
  console.log("authSession", authSession);
  const list = await getPokemonList();
  console.log("list", list);
  console.log("next", list.next);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start font-pokemon">
      {authSession?.user && (
        <div>
          <PokemonListComponent initialPokemonList={list.results} />
        </div>
      )}
      {!authSession?.user && (
        <Link
          className="font-medium mt-2 text-blue-600 hover:underline"
          href="/login"
        >
          Login
        </Link>
      )}
    </main>
  );
}
