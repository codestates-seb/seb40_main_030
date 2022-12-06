import axios from 'axios';

const getConfig = () => {
  const local = localStorage.getItem('accesstoken');
  const session = sessionStorage.getItem('accesstoken');

  let auth = '';

  if (local) {
    auth = `Bearer ${local}`;
  }
  if (session) {
    auth = `Bearer ${session}`;
  }

  const headers = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '111',
      Authorization: auth,
    },
  };
  return headers;
};

const apiNeedToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': '111',
  },
});

// authClient
const authClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': '111',
  },
});
export { authClient, apiNeedToken, apiClient, getConfig };
