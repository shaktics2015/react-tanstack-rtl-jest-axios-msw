import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from '../app/pages/HomePage';

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};


describe('HomePage', () => {
  it('renders loading state initially', () => {
    renderWithClient(<HomePage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders data after loading', async () => {
    renderWithClient(<HomePage />);
    await waitFor(() => expect(screen.getByText('userId')).toBeInTheDocument());
    expect(screen.getByText('title')).toBeInTheDocument();
  });
 
});
