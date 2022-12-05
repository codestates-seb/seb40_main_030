import axios from 'axios';

const localToken = localStorage.getItem('accesstoken');
const sessionToken = sessionStorage.getItem('accesstoken');

const apiIsToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${
      localToken !== null
        ? localToken
        : sessionToken !== null
        ? sessionToken
        : null
    }`,
  },
});

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
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
    'Access-Control-Allow-Origin': '*',
  },
});

export { apiIsToken, apiNotToken, apiClient };
