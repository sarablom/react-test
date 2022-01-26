import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactCard from "./ContactCard";
import { Contact } from "../../models/Contact";

describe("contactcard component", () => {
  let testContact: Contact;

  beforeEach(() => {
    testContact = createContact();
  });

  it("renders without crashing", () => {
    render(<ContactCard contact={testContact} />);
  });

  it("renders a pen button", () => {
    render(<ContactCard contact={testContact} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("shows no input fields initially", () => {
    render(<ContactCard contact={testContact} />);

    const maybeInputs = screen.queryAllByRole("textbox");
    expect(maybeInputs.length).toBe(0);
  })

  //
  //shows input field when user clicks pen
});

function createContact(): Contact {
  return {
    id: "1",
    name: "Erik",
    phoneNumbers: ["031-45045", "0762-548757"],
  };
}
