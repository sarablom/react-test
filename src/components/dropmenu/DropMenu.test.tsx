import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
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
    const items = screen.queryAllByRole('listitem');
    const firstItem = items[0];
    expect(firstItem).toBeUndefined();
  });

  it('menu items do show when the user clicks the menu button', () => {
      render(<DropMenu />);
    const button = screen.getByRole('button', {name: 'Menu'});

    userEvent.click(button);

    const items = screen.queryAllByRole('listitem');
    const firstItem = items[0];

    //One way
    expect(firstItem).toBeInTheDocument();
    //Or another
    expect(items.length).toBeGreaterThan(0);
    //You can also check if ul is in document
  })

  it('menu items hides when user clicks menu button again', () => {
    render(<DropMenu />);
    const button = screen.getByRole('button', {name: 'Menu'});

    userEvent.click(button);
    userEvent.click(button);

    const items = screen.queryAllByRole('listitem');
    expect(items.length).toBe(0);
})
});
