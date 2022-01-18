import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Chat from "./Chat";

describe("chat component", () => {
  it("chat component renders without crashing", () => {
    render(<Chat />);
  });

  it("input field is not visible until user clicks icon", () => {
    render(<Chat />);

    const inputField = screen.queryByRole("textbox");

    expect(inputField).toBeNull();
  });

  it("input field to show when user clicks icon", () => {
    render(<Chat />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const inputField = screen.getByRole("textbox");

    expect(inputField).toBeInTheDocument();
  });

  it("input field disapears when user clicks icon again", () => {
    render(<Chat />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    userEvent.click(button);
    const inputField = screen.queryByRole("textbox");

    expect(inputField).toBeNull();
  });

  it("input field turns empty when user clicks enter", () => {
    render(<Chat />);

    const button = screen.getByRole("button");
    userEvent.click(button);
    userEvent.type(screen.getByRole('textbox'), 'Hello World!{enter}');
    const inputField = screen.queryByRole("textbox");

    expect(inputField).toHaveValue("")
  })

  it("displays the input value in chat history", () => {
    render(<Chat />);

    const button = screen.getByRole("button");
    userEvent.click(button);
    userEvent.type(screen.getByRole('textbox'), 'Hello World!{enter}');

    const element = screen.getByText(/Hello World!/i)
    expect(element).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'Hello World!{enter}');

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(2);    
  })
});
