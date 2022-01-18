import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders hello heading', () => {
  render(<Greeting />);
  const heading = screen.getByText(/Hello/i);
  expect(heading).toBeInTheDocument();
});