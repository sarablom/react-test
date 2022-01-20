import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactList from "./ContactList";

describe("contactlist component", () => {
    it("renders without crashing", () => {
        render(<ContactList />)
    })
})

//(1) renders a specifik contact name
//(1) renders the correct phone number for a specific contact
//(1) renders the correct amount of contact elements


//user stories
//1. as a user I want to see all my contacts som that I don't need to remember their numbers

//2. as a user I want to update a contact with new in. formation so that the information is accurate