import {
  render,
  screen /*, queryByText, within*/,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "../../models/Contact";
import ContactCard from "./ContactCard";

describe("ContactCard component", () => {
  let testContact: Contact;
  let mockChangeContact: jest.Mock; //(newContact: Contact) => void;
  let jsxCard: any; // TODO: replace any with the correct data type

  beforeEach(() => {
    testContact = createContact();
    mockChangeContact = jest.fn();
    jsxCard = (
      <ContactCard contact={testContact} changeContact={mockChangeContact} />
    );
  });

  it("renders without crashing", () => {
    render(jsxCard);
  });

  it("renders a pen button (for editing a contact)", () => {
    render(jsxCard);

    // There is only one button in the component (for now)
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("shows no input fields initially", () => {
    render(jsxCard);

    const maybeInputs = screen.queryAllByRole("textbox");

    expect(maybeInputs.length).toBe(0);
  });

  it("shows input fields after click on pen", () => {
    render(jsxCard);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const maybeInputs = screen.queryAllByRole("textbox");

    expect(maybeInputs.length).toBeGreaterThan(0);
  });

  // In actuality, we test that changeContact is called with the correct new name
  it("shows the updated value after editing name", () => {
    render(jsxCard);
    const newName = "Leifi Plomeros";

    const button = screen.getByRole("button");
    userEvent.click(button);

    const nameInput = screen.getByDisplayValue(testContact.name);
    userEvent.type(nameInput, "{selectall}{backspace}" + newName);
    userEvent.click(button);
    // changeContact should be called once with the new Contact object now

    expect(mockChangeContact.mock.calls.length).toBe(1);
    const firstCall = mockChangeContact.mock.calls[0];
    const newContact = firstCall[0];
    expect(newContact.name).toBe(newName);
  });

  // TODO: test case that verifies that the contact data is rendered
});

function createContact(): Contact {
  return {
    id: "ididid",
    name: 'Karl-Erik "Stureplan" Pengarsson',
    phoneNumbers: ["08-9785743", "08-1739405"],
  };
}
