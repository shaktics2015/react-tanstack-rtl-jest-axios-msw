import './Aisle.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import HomePage from './pages/HomePage';

function Aisle() {
  const queryClient = new QueryClient({defaultOptions: {
    queries: {
      retry: false,
    },
  },})

  return (
    <QueryClientProvider client={queryClient}>
      <div className="aisle">
        Aisle
      </div>
      <HomePage/>
    </QueryClientProvider>
  );
}

export default Aisle;
