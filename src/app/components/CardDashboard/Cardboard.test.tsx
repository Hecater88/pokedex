import { render, screen } from "@testing-library/react";
import CardDashboard from "./CardDashboard";
import "@testing-library/jest-dom";

describe("CardDashboard", () => {
  it("should render name and children", () => {
    render(
      <CardDashboard name={"Testing"}>
        <span>Testing children</span>
      </CardDashboard>
    );
    expect(screen.getByText("Testing")).toBeInTheDocument();
    expect(screen.getByText("Testing children")).toBeInTheDocument();
  });
});
