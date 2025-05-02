import { render, screen } from "@testing-library/react";
import StatsComponent from "./StatsComponent";
import { PokemonStatName } from "@/app/types/pokemon";

jest.mock("../shared/pie-chart", () => ({
  __esModule: true,
  default: ({ data }: any) => (
    <div data-testid="pie-chart">
      {data.labels.map((label: string, i: number) => (
        <div key={i}>{label}</div>
      ))}
    </div>
  ),
}));

const mockStats: any[] = [
  { base_stat: 80, stat: { name: PokemonStatName.Attack, url: "" } },
  { base_stat: 70, stat: { name: PokemonStatName.Defense, url: "" } },
  { base_stat: 90, stat: { name: PokemonStatName.Speed, url: "" } },
  { base_stat: 100, stat: { name: PokemonStatName.SpecialDefense, url: "" } },
];

describe("StatsComponent", () => {
  it("Should render data", () => {
    render(<StatsComponent stats={mockStats} />);

    const charts = screen.getAllByTestId("pie-chart");
    expect(charts).toHaveLength(2);

    expect(screen.getByText("Attack")).toBeInTheDocument();
    expect(screen.getByText("Defense")).toBeInTheDocument();
    expect(screen.getByText("Speed")).toBeInTheDocument();

    expect(screen.getByText("Special Attack")).toBeInTheDocument();
    expect(screen.getByText("Special Defense")).toBeInTheDocument();
  });
});
