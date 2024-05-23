import { render, screen } from '@testing-library/react';
import Aisle from '../app/Aisle';

test('renders Aisle', () => {
  render(<Aisle />);
  const linkElement = screen.getByText(/Aisle/i);
  expect(linkElement).toBeInTheDocument();
});
