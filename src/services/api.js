import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.autosystem.online',
});

export default api;
