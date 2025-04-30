"use client";
import { PokemonListProps } from "@/app/types/components/PokemonListProps";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDebaunce } from "@/app/hooks/useDebaunce";
import { Pokemon } from "@/app/types/pokemon";
import Link from "next/link";

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
    <div>
      <input
        placeholder="pokemon name or id"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div>
        {list?.map((pokemon, index) => (
          <div key={index}>
            <div>
              <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          </div>
        ))}
      </div>
      <div>{loading && "Loading..."}</div>
      <div ref={nextPokemons} className="h-10" />
    </div>
  );
};

export default PokemonListComponent;
