import { handlers } from "./posts";
import { setupServer } from 'msw/node' 

const handler = [...handlers];

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handler)