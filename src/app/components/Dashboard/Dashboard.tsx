"use client";

import Container from "../shared/container";
import ProgressBar from "../shared/progess";
import PieChart from "../shared/pie-chart";
import PokemonOverview from "../PokemonOverview/PokemonOverview";
import CardDashboard from "../CardDashboard/CardDashboard";
export const datapie = {
  labels: ["Ataque", "Defensa", "Velocidad"],
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderColor: ["black"],
      borderWidth: 3,
    },
  ],
};
export const datapie2 = {
  labels: ["Ataque especial", "Defensa especial"],
  datasets: [
    {
      /*       label: "especiales", */
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderColor: ["black"],
      borderWidth: 3,
    },
  ],
};
const Dashboard = ({ pokemon }: { pokemon: any }) => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
        <div className="flex flex-col gap-6">
          <PokemonOverview pokemon={pokemon} />

          <div className="flex flex-col gap-6">
            <Container>
              <ProgressBar value="50" max="100" style={{ height: "2rem" }} />
            </Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <CardDashboard name={"Height"} value={`${pokemon.height} kg`} />
              <CardDashboard name={"Weight"} value={`${pokemon.weight} m`} />

              <Container>Weight</Container>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Container>
            <div>
              <PieChart data={datapie} />
            </div>
          </Container>
          <Container>
            <div>
              <PieChart data={datapie2} />
            </div>
          </Container>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          <Container>Evoluciona a</Container>
          <Container>Juegos en los que aparece</Container>
        </div> */}
    </div>
  );
};

export default Dashboard;
