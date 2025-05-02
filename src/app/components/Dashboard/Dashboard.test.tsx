import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

import "@testing-library/jest-dom";

jest.mock("../PokemonOverview/PokemonOverview", () => () => (
  <div>PokemonOverview</div>
));
jest.mock("../CardDashboard/CardDashboard", () => ({ name, children }: any) => (
  <div>
    <h2>{name}</h2>
    {children}
  </div>
));
jest.mock("../HealthComponent/HealthComponent", () => ({ value, max }: any) => (
  <div>
    Health: {value}/{max}
  </div>
));
jest.mock("../StatsComponent/StatsComponent", () => () => (
  <div>StatsComponent</div>
));
jest.mock("../TableComponent/TableComponent", () => () => (
  <div>TableComponent</div>
));
const mockPokemon: any = {
  name: "metagross",
  height: 4,
  weight: 60,
  stats: [
    { base_stat: 35, stat: { name: "hp" } },
    { base_stat: 55, stat: { name: "attack" } },
    { base_stat: 40, stat: { name: "defense" } },
    { base_stat: 50, stat: { name: "special-attack" } },
    { base_stat: 50, stat: { name: "special-defense" } },
    { base_stat: 90, stat: { name: "speed" } },
  ],
  moves: [],
};
describe("Dashboard", () => {
  it("Renders all child components", () => {
    render(<Dashboard pokemon={mockPokemon} />);

    expect(screen.getByText("PokemonOverview")).toBeInTheDocument();
    expect(screen.getByText("PS")).toBeInTheDocument();
    expect(screen.getByText("Health: 35/255")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("0.4 m")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
    expect(screen.getByText("6 kg")).toBeInTheDocument();
    expect(screen.getByText("Base Stats")).toBeInTheDocument();
    expect(screen.getByText("StatsComponent")).toBeInTheDocument();
    expect(screen.getByText("TableComponent")).toBeInTheDocument();
  });
});
