import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator components', () => {
    it('renders without crashing', () => {
        render(<Calculator />)
    })

    it('displays the value 1 initially', () => {
        render(<Calculator />)
        //i = insensitive Regex
        const element = screen.getByText(/Value: 1/i)
        expect(element).toBeInTheDocument()
    })

    //displays the value 2 when user clicks +1

    //displays the value 0 when user clicks -1

    //displays the value 0 when user clicks clear
})