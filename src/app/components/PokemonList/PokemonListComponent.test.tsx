import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PokemonListComponent from "./PokemonListComponent";
import { useDebaunce } from "../../../app/hooks/useDebaunce";
import { signOut } from "next-auth/react";

jest.mock("@/app/hooks/useDebaunce", () => ({
  useDebaunce: jest.fn(),
}));

jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
}));

const initialPokemonList: any[] = [
  { id: 1, name: "bulbasaur" },
  { id: 2, name: "ivysaur" },
  { id: 3, name: "venusaur" },
  { id: 4, name: "charmander" },
  { id: 5, name: "charmeleon" },
  { id: 6, name: "charizard" },
];

describe("PokemonListComponent", () => {
  beforeEach(() => {
    (useDebaunce as jest.Mock).mockReturnValue("bul");
    global.IntersectionObserver = class {
      constructor(callback: any, options?: any) {}
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  });

  it("Should render the initial list of Pokémon", () => {
    render(<PokemonListComponent initialPokemonList={initialPokemonList} />);

    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("ivysaur")).toBeInTheDocument();
  });

  it("Should call signOut when the log out button is pressed.", () => {
    render(<PokemonListComponent initialPokemonList={initialPokemonList} />);

    fireEvent.click(screen.getByText(/log out/i));

    expect(signOut).toHaveBeenCalledWith({ callbackUrl: "/login" });
  });
});
