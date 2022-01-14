import {render, screen} from '@testing-library/react';
import Navbar from './Navbar';

const setViewMock: jest.Mock = jest.fn();

describe('component Navbar', () => {
    const items = ['Start', 'Info', 'About', 'Profile'];

    it('component navbar renders without crash', () => {
        render(<Navbar items={items} setView={setViewMock} />);
    })

    it('selected-class is activated when user clicks a link', () => {
        render(<Navbar items={items} setView={setViewMock} />);
        const selectedLi = screen.getByText(/Start/i);
        expect(selectedLi).toHaveClass('selected');

        
    })
})
