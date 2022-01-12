import { render, screen, within } from '@testing-library/react';
import Counter from './Counter';

test('render component', () => {
    render(<Counter />);
})

test('value 1 shows on button', () => {
    const {getByText} = render(<Counter />)
    const counter = getByText('Value 1')
    const counterMessage = within(counter).getByText('Value 1')
})