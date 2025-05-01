"use client";
import PokemonOverview from "../PokemonOverview/PokemonOverview";
import CardDashboard from "../CardDashboard/CardDashboard";
import HealthComponent from "../HealthComponent/HealthComponent";
import StatsComponent from "../StatsComponent/StatsComponent";
import TableComponent from "../TableComponent/TableComponent";
import { PokemonDetail, PokemonStatName } from "@/app/types/pokemon";
import { getStat } from "@/app/utils/getStatValue";

const Dashboard = ({ pokemon }: { pokemon: PokemonDetail }) => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
        <div className="flex flex-col gap-6">
          <PokemonOverview pokemon={pokemon} />

          <div className="flex flex-col gap-6">
            <CardDashboard name={"PS"}>
              <HealthComponent
                value={Number(getStat(pokemon.stats, PokemonStatName.HP))}
                max={255}
              />
            </CardDashboard>

            <div className="grid grid-cols-2 gap-6">
              <CardDashboard name={"Height"}>
                <div className="text-end">{pokemon.height / 10} m</div>
              </CardDashboard>
              <CardDashboard name={"Weight"}>
                <div className="text-end">{pokemon.weight / 10} kg</div>
              </CardDashboard>
            </div>
          </div>
        </div>

        <div>
          <CardDashboard name={"Base Stats"}>
            <StatsComponent stats={pokemon.stats} />
          </CardDashboard>
        </div>
      </div>
      <div className="w-full overflow-x-auto p-2">
        <TableComponent moves={pokemon.moves} />
      </div>
    </div>
  );
};

export default Dashboard;
