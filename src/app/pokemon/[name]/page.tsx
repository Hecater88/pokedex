import { Suspense } from "react";
import PokemonDetail from "./PokemonDetail";
import Loader from "@/app/components/shared/loading";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import Button from "@/app/components/shared/button";
import Link from "next/link";

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
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl m-auto m-5 ">
        <div>
          <Link href={`/`}>
            <Button className="text-black">Back</Button>
          </Link>
        </div>
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
    </div>
  );
};

export default PokemonPage;
