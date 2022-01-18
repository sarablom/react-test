import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Validation from "./Validation";

describe("validation component", () => {
    it("renders without crashing", () => {
        render(<Validation />);

        const inputField = screen.getByRole('textbox');

        expect(inputField).toBeEmptyDOMElement();
        expect(inputField).not.toHaveClass('valid');
    })

    it("css class 'valid' added when user writes valid name", () => {
        render(<Validation />);

        const inputField = screen.getByRole('textbox');
        userEvent.type(inputField, 'Sara');

        expect(inputField).toHaveClass('valid');
    })

    it("css class 'invalid' added when user writes invalid name", () => {
        render(<Validation />);

        const inputField = screen.getByRole('textbox');
        userEvent.type(inputField, 'Sara32');

        expect(inputField).toHaveClass('invalid');
    })

    it("show message 'Var vänlig skriv ditt namn' when input field is empty", () => {
        render(<Validation />);
        
        const message = screen.getByText(/Var vänlig skriv ditt namn/i);
        

        expect(message).toBeInTheDocument();
    })
})