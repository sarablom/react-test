import {render, screen} from '@testing-library/react';
import Navbar from './Navbar';


describe('component Navbar', () => {
    const items = ['Start', 'Info', 'About', 'Profile'];

    it('component navbar renders without crash', () => {
        render(<Navbar items={items} />);
    })

    it('selected-class is activated when user clicks a link', () => {
        render(<Navbar items={items} />);

        const selectedLi = screen.getByText(/Home/i);

        expect(selectedLi).toHaveClass('selected')
    })
})

//const setViewMock: jest.Mock = jest.fn(); 