import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar';

const setViewMock: jest.Mock = jest.fn();

describe('component Navbar', () => {
    const items = ['Start', 'Info', 'About', 'Profile'];

    it('component navbar renders without crash', () => {
        render(<Navbar items={items} setView={setViewMock} />);
    })

    it("renders Start, Info, About and Profile in order", () => {
        render(<Navbar items={items} setView={setViewMock} />);
        const listitems = screen.getAllByRole('listitem');
        expect(listitems.length).toBe(4);

        expect(listitems[0]).toHaveTextContent(/start/i);
        expect(listitems[1]).toHaveTextContent(/info/i);
        expect(listitems[2]).toHaveTextContent(/about/i);
        expect(listitems[3]).toHaveTextContent(/profile/i);
    })

    it('selected-class is activated on start when user enters page', () => {
        render(<Navbar items={items} setView={setViewMock} />);
        const selectedLi = screen.getByText(/Start/i);
        expect(selectedLi).toHaveClass('selected');        
    })

    it('selected-class is activated on clicks info link', () => {
        render(<Navbar items={items} setView={setViewMock} />);
        const selectedLi = screen.getByText(/Info/i);
        userEvent.click(selectedLi);
        expect(selectedLi).toHaveClass('selected');        
    })

    it('selected-class is activated on clicks about link', () => {
        render(<Navbar items={items} setView={setViewMock} />);
        const selectedLi = screen.getByText(/about/i);
        userEvent.click(selectedLi);
        expect(selectedLi).toHaveClass('selected');        
    })

    it('selected-class is activated on clicks profile link', () => {
        render(<Navbar items={items} setView={setViewMock} />);
        const selectedLi = screen.getByText(/profile/i);
        userEvent.click(selectedLi);
        expect(selectedLi).toHaveClass('selected');        
    })
})
