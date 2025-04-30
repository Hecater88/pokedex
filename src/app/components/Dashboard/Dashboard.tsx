"use client";
import React from "react";
import CardComponent from "../Card/CardComponent";
import Image from "next/image";
import Badge from "../shared/badge";
import ProgressBar from "../shared/progess";
import PieChart from "../shared/pie-chart";
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
const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
        <div className="flex flex-col gap-6">
          <CardComponent>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex gap-4">
                <h1>Pokemon Name</h1>
                <span>
                  <b>#12</b>
                </span>
              </div>
              <div>
                <Image
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                  alt="pokemon image"
                  width={125}
                  height={125}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>tipo 1</Badge>
                <Badge>tipo 2</Badge>
                <Badge>tipo 3</Badge>
              </div>
            </div>
          </CardComponent>

          <div className="flex flex-col gap-6">
            <CardComponent>
              <ProgressBar value="50" max="100" style={{ height: "2rem" }} />
            </CardComponent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <CardComponent>Height</CardComponent>
              <CardComponent>Weight</CardComponent>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <CardComponent>
            <div>
              <PieChart data={datapie} />
            </div>
          </CardComponent>
          <CardComponent>
            <div>
              <PieChart data={datapie2} />
            </div>
          </CardComponent>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          <CardComponent>Evoluciona a</CardComponent>
          <CardComponent>Juegos en los que aparece</CardComponent>
        </div> */}
    </div>
  );
};

export default Dashboard;
