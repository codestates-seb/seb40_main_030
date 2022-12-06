import axios from 'axios';

const localToken = localStorage.getItem('accesstoken');
const sessionToken = sessionStorage.getItem('accesstoken');

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
    'ngrok-skip-browser-warning': '111',
    Authorization: `Bearer ${
      localToken !== null
        ? localToken
        : sessionToken !== null
        ? sessionToken
        : null
    }`,
  },
});

// authClient
const apiNotToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'ngrok-skip-browser-warning': '111',
  },
});
export { apiNotToken, apiNeedToken, apiClient, getConfig };
