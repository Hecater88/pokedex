import React from "react";
import Container from "../shared/container";
import Image from "next/image";
import Badge from "../shared/badge";
import { typeBgColor } from "@/app/utils/typeBgColor";
import { PokemonDetail, Type } from "@/app/types/pokemon";

const PokemonOverview = ({ pokemon }: { pokemon: PokemonDetail }) => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-fit mx-auto">
          <div className="text-[6rem] md:text-[10rem] text-gray-200 font-bold absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            #{pokemon.id}
          </div>
          <div className="relative w-50 h-50">
            <Image
              className="relative z-10 pixel-image"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt="pokemon image"
              fill
            />
          </div>
        </div>
        <div>
          <h1 className="capitalize font-bold">{pokemon.name}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {pokemon.types.map((type: Type, index: number) => (
            <Badge
              key={index}
              className={`capitalize ${typeBgColor[type.type.name]}`}
            >
              {type.type.name}
            </Badge>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PokemonOverview;
