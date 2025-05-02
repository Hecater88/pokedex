import { render, screen } from "@testing-library/react";
import PokemonOverview from "./PokemonOverview";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt={props.alt || "mocked image"} />;
  },
}));

const mockPokemon: any = {
  id: 6,
  name: "charizard",
  types: [
    { slot: 1, type: { name: "fire", url: "" } },
    { slot: 2, type: { name: "flying", url: "" } },
  ],
  height: 17,
  weight: 905,
  sprites: {
    front_default: "https://example.com/charizard.png",
  },
  abilities: [],
  stats: [],
};

describe("PokemonOverview", () => {
  it("Should render data", () => {
    render(<PokemonOverview pokemon={mockPokemon} />);

    expect(screen.getByText("#6")).toBeInTheDocument();
    expect(screen.getByText("charizard")).toBeInTheDocument();
    expect(screen.getByText("fire")).toBeInTheDocument();
    expect(screen.getByText("flying")).toBeInTheDocument();
    expect(screen.getByAltText("pokemon image")).toBeInTheDocument();
  });
});
