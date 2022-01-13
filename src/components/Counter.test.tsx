import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from './Counter';

test('render component', () => {
    render(<Counter />);
})

test('value 1 shows on button', () => {
    render(<Counter />);

    const value = screen.getByText(/Value 1/i);
    expect(value).toBeInTheDocument();
})

it('displays the value 2 when user clicks button', () => {
    render(<Counter />)

    const button = screen.getByRole('button')

    userEvent.click(button)

    const element = screen.getByText(/Value 2/i)
    expect(element).toBeInTheDocument()
})

it('displays the value 3 when user clicks button twice', () => {
    render(<Counter />)

    const button = screen.getByRole('button')

    userEvent.click(button)
    userEvent.click(button)

    const element = screen.getByText(/Value 3/i)
    expect(element).toBeInTheDocument()
})