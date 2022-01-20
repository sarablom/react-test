import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactList from "./ContactList";

describe("contactlist component", () => {
  it("renders without crashing", () => {
    render(<ContactList />);
  });

  it("(1) renders a specifik contact name", () => {
    render(<ContactList />);
    const name = screen.getByText("Cecilia Circus");

    expect(name).toBeInTheDocument();
  });

  it("(1) renders the correct phone number for a specific contact", () => {
    render(<ContactList />);
    const contactName = "Bo Bengtsson";
    const contactPhone = "031-33333333";
    const contact = screen. getByTestId("contact135486");
    
    const nameElement = within(contact).getByText(contactName);
    expect(nameElement).toBeInTheDocument();

    const phoneElement = within(contact).getByText(contactPhone)
    expect(phoneElement).toBeInTheDocument();
  });

  it("(1) renders the correct amount of contact elements", () => {
    render(<ContactList />);

    const items = screen.getAllByRole("listitem");

    expect(items.length).toBe(3);

  })
});


//user stories
//1. as a user I want to see all my contacts som that I don't need to remember their numbers

//2. as a user I want to update a contact with new in. formation so that the information is accurate
