import { setupServer } from 'msw/node' 
import { posts } from './posts';

const handlers = [...posts];

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)