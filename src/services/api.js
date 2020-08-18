import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.autosystem.online',
});

export default api;
