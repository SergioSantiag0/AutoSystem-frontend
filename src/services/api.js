import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deployautosystem.site',
});

export default api;
