import axios from 'axios';
import qs from 'qs';

import setAuthToken from '@/components/@helper/utils/setAuthToken';
import { BASE_URL } from '@/constants/admin';

import {
  KAKAO_ACCOUNT_LOGOUT_URL,
  KAKAO_RENEW_TOKEN_URL,
  REDIRECT_URI,
} from '../constants/auth';
import { axiosAdminInstance } from './admin';
import { apiNeedToken } from './api';
import { apiClient } from './stations';

const sendAuthCode = async (code) => {
  console.log('인증코드 보내는 요청시작');
  const res = await axiosAdminInstance.post(`/auth/login2/${code}`);
  console.log(res);
  return res;
};

const setHeaderAccessToken = (token) => {
  if (token) {
    const UserType =
      localStorage.getItem('userType') || sessionStorage.getItem('userType');
    if (UserType === 'admin') {
      axiosAdminInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
    } else {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      apiNeedToken.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  } else {
    delete axiosAdminInstance.defaults.headers.common['Authorization'];
    delete apiClient.defaults.headers.common['Authorization'];
    delete apiNeedToken.defaults.headers.common['Authorization'];
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

//백엔드로 인증코드 보냄 or mock 서버로 보냄
const getTokenIndirectly = async (authorizationCode) => {
  try {
    const res = await axios.post('/login/token', {
      authorizationCode: authorizationCode,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

//클라이언트에서 직접 토큰 받아옴(백엔드 api 아직 완성x)
//쿼리스트링으로 보내야해서 fetch 사용. axios 직렬화 안하고 보내는 방법 찾는중..
const getTokenDirectly = async (path, authorizationCode) => {
  try {
    const res = await fetch(path, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: qs.stringify({
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        code: authorizationCode,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
      }),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

//카카오서버로부터 토큰에 맞는 해당 회원정보를 받아온다.
const getUserInfo = async (path, accessToken) => {
  try {
    const res = await axios.get(path, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      }, //엑세스 토큰 헤더에 담아서 요청
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

//카카오서버로 로그아웃 요청 보냄 - 토큰을 무효하게 만들어서 인가를 받을 수 없게 만든다.
const invalidateTokenDirectly = async (path, accessToken) => {
  try {
    const res = await axios.post(
      path,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` }, //엑세스 토큰 헤더에 담아서 요청
      },
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

//mock api 사용 / 백엔드 서버 우회 사용 로그아웃 요청 보냄
const invalidateTokenIndirectly = async (path, accessToken) => {
  try {
    const res = await axios.post('/logout', {
      path: path,
      accessToken: accessToken,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

//access 토큰 재발급 - 카카오서버로 요청
const renewTokenDirectly = async (refreshToken) => {
  const realRefreshToken = refreshToken?.split('=')[1];
  try {
    const res = await fetch(KAKAO_RENEW_TOKEN_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: qs.stringify({
        grant_type: 'refresh_token',
        client_id: import.meta.env.VITE_CLIENT_ID,
        refresh_token: realRefreshToken,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
      }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

//카카오계정 세션 만료 - 카카오서버로 요청
const logoutAccountSessionDirectly = async () => {
  try {
    const res = await axios.get(KAKAO_ACCOUNT_LOGOUT_URL);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//access 토큰 재발급 - msw 거쳐서 카카오서버로 요청
const renewTokenIndirectly = async () => {
  try {
    const res = await axios.get('/login/renew', {});

    return res;
  } catch (error) {
    console.log(error);
  }
};

//토큰 유효성 체크 임의 로직 , 임시로 만들어놓음
// const checkValidToken = (token) => {
//   let result;

//   result = token === undefined || token === 'undefined' ? false : true;
//   return result;
// };

//

// const testHandler = async (accessToken) => {
//   //테스트 api 위한 임시 핸들러
//   try {
//     return await axios.get('/test', {
//       headers: { Authorization: `Bearer ${accessToken}` }, //엑세스 토큰 헤더에 담아서 요청
//     });
//   } catch (error) {
//     if (error.response?.statusText === 'Unauthorized') {
//       console.log(error);
//     }
//   }
// };

const login = async () => {
  const res = await axios.post(`${BASE_URL}/auth/login`, {
    // email: 'test@gmail.com',
    // password: '123411aa',
    email: 'admin@gmail.com',
    password: 'asdf5t1234*',
  });
  return res;
};

const postLogin = async (loginInfo) => {
  return await axiosOauthInstance
    .post('/auth/login', loginInfo)
    .then((res) => {
      const token = res.headers.get('accesstoken');

      const [_, jwt] = token.split(' ');
      _;

      if (res.data === 'Success ADMIN') {
        localStorage.setItem('userType', 'admin');
      }

      localStorage.setItem('accesstoken', jwt);
      setAuthToken(jwt);
    })
    .catch(() => alert('로그인 실패'));
};

const postCheckedLogin = async (loginInfo) => {
  return await apiClient
    .post('/auth/login', loginInfo)
    .then((res) => {
      const token = res.headers.get('accesstoken');
      const refreshToken = res.headers.get('refreshtoken');

      const [_, jwt] = token.split(' ');
      _;

      if (res.data === 'Success ADMIN') {
        localStorage.setItem('userType', 'admin');
      }

      sessionStorage.setItem('accesstoken', jwt);
      localStorage.setItem('refreshtoken', refreshToken);

      setAuthToken(jwt);
    })
    .catch(() => alert('로그인 실패'));
};

export {
  setHeaderAccessToken,
  sendAuthCode,
  getTokenDirectly,
  getTokenIndirectly,
  invalidateTokenDirectly,
  invalidateTokenIndirectly,
  renewTokenDirectly,
  getUserInfo,
  renewTokenIndirectly,
  logoutAccountSessionDirectly,
  postLogin,
  postCheckedLogin,
  login,
};
