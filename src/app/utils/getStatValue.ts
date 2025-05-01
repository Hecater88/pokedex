import { PokemonStatName, Stat } from "../types/pokemon";

export const getStat = (
  stats: Stat[],
  statName: PokemonStatName
): number | string => {
  const statValue = stats.find((item) => item.stat.name == statName);
  return statValue?.base_stat || "";
};
