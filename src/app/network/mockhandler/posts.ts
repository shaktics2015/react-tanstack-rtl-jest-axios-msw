
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node' 

const response = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

// Describe the network.
const posts = [
  http.get('https://jsonplaceholder.typicode.com/posts/:id', ({ params }) => {
    return HttpResponse.json(response)
  }),
]

const handlers = [...posts];

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)