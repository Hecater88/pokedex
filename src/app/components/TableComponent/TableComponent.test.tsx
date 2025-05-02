import { render, screen } from "@testing-library/react";
import TableComponent from "./TableComponent";

const mockMoves: any[] = [
  {
    move: { name: "tackle", url: "" },
    version_group_details: [
      {
        level_learned_at: 5,
        move_learn_method: { name: "level-up", url: "" },
        version_group: { name: "red-blue", url: "" },
      },
    ],
  },
  {
    move: { name: "hyper-beam", url: "" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: { name: "machine", url: "" },
        version_group: { name: "gold-silver", url: "" },
      },
    ],
  },
];

describe("TableComponent", () => {
  it("debe renderizar una tabla con movimientos ordenados por nivel y método", () => {
    render(<TableComponent moves={mockMoves} />);

    expect(screen.getByText("Move")).toBeInTheDocument();
    expect(screen.getByText("Method")).toBeInTheDocument();
    expect(screen.getByText("Level")).toBeInTheDocument();
    expect(screen.getByText("Game Version")).toBeInTheDocument();

    expect(screen.getByText("tackle")).toBeInTheDocument();
    expect(screen.getByText("level-up")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("red blue")).toBeInTheDocument();

    expect(screen.getByText("hyper-beam")).toBeInTheDocument();
    expect(screen.getByText("machine")).toBeInTheDocument();
    expect(screen.getByText("gold silver")).toBeInTheDocument();
    expect(screen.getAllByText("-")).toHaveLength(1);
  });
});
