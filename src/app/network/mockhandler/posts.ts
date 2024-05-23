
import { http, HttpResponse } from 'msw'

const response = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

 
// Describe the network.
export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/posts/:id', ({ params }) => {
    return HttpResponse.json(response)
  }),
]
