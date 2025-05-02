import { render, screen } from "@testing-library/react";
import CardListComponent from "./CardListComponent";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("CardListComponent", () => {
  it("should render name and children", () => {
    render(<CardListComponent name={"Testing"} id={22} />);
    expect(screen.getByText("Testing")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    );
  });
});
