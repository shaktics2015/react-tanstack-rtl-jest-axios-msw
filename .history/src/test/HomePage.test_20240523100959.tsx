import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../app/pages/HomePage';
import renderWithClient from './renderWithClient';
 
describe('HomePage', () => {
  it('renders loading state initially', () => {
    renderWithClient(<HomePage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders data after loading', async () => {
    renderWithClient(<HomePage />);
    await waitFor(() => expect(screen.getByTestId('data')).toBeDefined());
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });
 
});
