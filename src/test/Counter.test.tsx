
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../app/components/Counter';
import userEvent from '@testing-library/user-event';

describe("Counter", () => {
    it('renders initial screen', () => {
        render(<Counter />);
        expect(screen.getByText('Increment')).toBeInTheDocument();
        expect(screen.getByText('Decrement')).toBeInTheDocument();
    });
    it('should render decremented value of counter', async () => {
        render(<Counter />);
        const button = screen.getByText('Decrement')
        userEvent.click(button);
        await waitFor(() => expect(screen.getByText('Count: -1')).toBeInTheDocument());
    });
    it('should render incremented value of counter', async () => {
        render(<Counter />);
        const button = screen.getByText('Increment')
        userEvent.click(button);
        await waitFor(() => expect(screen.getByText('Count: 1')).toBeInTheDocument());
    });
});