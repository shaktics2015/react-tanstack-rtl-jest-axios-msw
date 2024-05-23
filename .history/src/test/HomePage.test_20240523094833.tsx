
// import HomePage from '../app/pages/HomePage';
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'
// import * as ReactQuery from "@tanstack/react-query";
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

// jest.mock("@tanstack/react-query", () => {
//   const original: typeof ReactQuery = jest.requireActual("@tanstack/react-query");

//   return {
//     ...original,
//     useQuery: () => ({ isLoading: false, error: {}, data: [] }),
//   };
// });

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retryDelay: 1,
//       retry:0,
//     },
//   },
// }) 
// const wrapper = (ui: React.ReactElement) => {
//   return render(
//     <QueryClientProvider client={queryClient}>
//       {ui}
//     </QueryClientProvider>
//   );
// };

// describe("HomePage", () => {  
//     it('renders initial screen', () => {
//       wrapper(<HomePage />);
//       expect(screen.getByText('Data:')).toBeInTheDocument();
//     });
// });



// src/__tests__/UserComponent.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { http, HttpResponse } from 'msw'
// import { server } from '../app/network/mockhandler';
import HomePage from '../app/pages/HomePage';

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};



const response = {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

describe('UserComponent', () => {
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
