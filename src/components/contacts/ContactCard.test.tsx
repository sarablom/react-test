import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ContactCard from './ContactCard';

describe("contactcard component", () => {
    it("renders without crashing", () => {
        render(<ContactCard />)
    })
})