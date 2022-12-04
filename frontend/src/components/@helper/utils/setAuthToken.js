import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  // else delete axios.defaults.headers.common['accesstoken'];
};

export default setAuthToken;
