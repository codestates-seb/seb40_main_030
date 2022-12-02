import axios from 'axios';

const apiLogin = axios.create({
  baseURL: import.meta.env.VITE_NGROK,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': '111',
    'Content-Type': 'application/json',
  },
});

export { apiLogin };
