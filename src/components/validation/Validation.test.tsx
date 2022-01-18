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
})