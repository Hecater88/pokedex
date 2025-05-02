import PieChart from "../shared/pie-chart";
import { getStat } from "@/app/utils/getStatValue";
import { PokemonStatName, Stat } from "@/app/types/pokemon";

const StatsComponent = ({ stats }: { stats: Stat[] }) => {
  const attack = Number(getStat(stats, PokemonStatName.Attack));
  const defense = Number(getStat(stats, PokemonStatName.Defense));
  const speed = Number(getStat(stats, PokemonStatName.Speed));
  const statsPie = {
    labels: ["Attack", "Defense", "Speed"],
    datasets: [
      {
        data: [attack, defense, speed],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: ["black"],
        borderWidth: 4,
      },
    ],
  };

  const specialAttack = Number(getStat(stats, PokemonStatName.Attack));
  const specialDefense = Number(getStat(stats, PokemonStatName.SpecialDefense));
  const specialStatsPie = {
    labels: ["Special Attack", "Special Defense"],
    datasets: [
      {
        data: [specialAttack, specialDefense],
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderColor: ["black"],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <PieChart data={statsPie} />
      </div>
      <div>
        <PieChart data={specialStatsPie} />
      </div>
    </div>
  );
};

export default StatsComponent;
