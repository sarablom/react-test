import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ContactCard from './ContactCard';
import {Contact} from "../../models/Contact"

describe("contactcard component", () => {
    it("renders without crashing", () => {
        const contact: Contact = {id: "1", name: "Erik", phoneNumbers: []}

        render(<ContactCard contact={contact} />)
    })
})