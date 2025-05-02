"use client";
import { PokemonListProps } from "@/app/types/components/PokemonListProps";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDebaunce } from "@/app/hooks/useDebaunce";
import { Pokemon } from "@/app/types/pokemon";
import Link from "next/link";
import Input from "../shared/input";
import CardListComponent from "../CardList/CardListComponent";
import Loader from "../shared/loading";
import { signOut } from "next-auth/react";
import Button from "../shared/button";

const PokemonListComponent = ({ initialPokemonList }: PokemonListProps) => {
  const [pokemons, setPokemons] = useState(initialPokemonList.slice(0, 20));
  const [listFiltered, setListFiltered] = useState<Pokemon[] | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const nextPokemons = useRef<HTMLDivElement | null>(null);

  const debauncedSearch = useDebaunce(searchValue, 600);

  useEffect(() => {
    if (debauncedSearch.trim() === "") {
      setListFiltered(null);
      return;
    }

    handleSearch(debauncedSearch);
  }, [debauncedSearch]);

  const handleSearch = (value: string) => {
    const data: Pokemon[] = initialPokemonList.filter((pokemon) =>
      pokemon.name.toLocaleLowerCase().includes(value)
    );
    setListFiltered(data);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && !searchValue) {
          setLoading(true);
          setTimeout(() => loadMore(), 2000);
        }
      },
      { threshold: 1 }
    );
    const currentNext = nextPokemons.current;
    if (currentNext) {
      observer.observe(currentNext);
    }
    return () => {
      if (currentNext) observer.unobserve(currentNext);
    };
  }, [nextPokemons, loading, searchValue, page]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setPokemons(initialPokemonList.slice(0, nextPage * 20));
    setLoading(false);
  };

  const list = useMemo(() => {
    return listFiltered && listFiltered?.length > 0 && searchValue
      ? listFiltered
      : pokemons;
  }, [listFiltered, searchValue, pokemons]);

  return (
    <div className="max-w-6xl m-auto">
      <div className="flex justify-end">
        <Button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="px-4 py-2 bg-red-500 text-white"
        >
          Log out
        </Button>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <Input
            placeholder="pokemon name or id"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {list?.map((pokemon, index) => (
            <Link key={index} href={`/pokemon/${pokemon.name}`}>
              <CardListComponent
                name={pokemon.name}
                id={pokemon.id}
                data-testid="pokemon-card"
              />
            </Link>
          ))}
        </div>
        <div>{loading && <Loader />}</div>
        <div ref={nextPokemons} className="h-10" />
      </div>
    </div>
  );
};

export default PokemonListComponent;
