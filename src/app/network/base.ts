import axios from 'axios';

const http = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  timeout: 15000,
  headers: {},
});

export default http;

