import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_NGROK,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': '111',
    'Content-Type': 'application/json',
  },
});

const apiAcc = axios.create({
  baseURL: import.meta.env.VITE_NGROK,
});

export { api, apiAcc };
