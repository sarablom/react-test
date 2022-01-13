import { render, screen } from "@testing-library/react";
import DropMenu from "./DropMenu";

describe("Dropdown menu component", () => {
  it("renders without crashing", () => {
    render(<DropMenu />);
  });

  it("menu button exists", () => {
    render(<DropMenu />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("menu items does not show initally", () => {
    render(<DropMenu />);
    const item = screen.getByRole('listitem');
    expect(item).not.toBeInTheDocument();
  });
});

//menu items do show when the user clicks the menu button
//menu items hides when user clicks menu button again
