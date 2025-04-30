import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import type { ChartData } from "chart.js";
import { defaults } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
defaults.font.family = "PokemonClassic";

interface LineProps {
  data: ChartData<"pie">;
}

const PieChart = ({ data }: LineProps) => {
  return (
    <Pie
      options={{
        maintainAspectRatio: false,
      }}
      data={data}
      width={200}
      height={200}
    />
  );
};

export default PieChart;
