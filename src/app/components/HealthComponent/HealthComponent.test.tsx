import { render, screen } from "@testing-library/react";
import HealthComponent from "./HealthComponent";

jest.mock("../shared/progess", () => jest.fn(() => <div>ProgressBar</div>));

describe("HealthComponent", () => {
  it("Should display value and max", () => {
    render(<HealthComponent value={50} max={100} />);

    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
