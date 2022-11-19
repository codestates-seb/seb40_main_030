import axios from 'axios';
import qs from 'qs';
import {
  KAKAO_ACCOUNT_LOGOUT_URL,
  KAKAO_RENEWTOKEN_URL,
  REDIRECT_URI,
} from '../constants/auth';

//백엔드로 인증코드 보냄 or mock 서버로 보냄
const getTokenIndirectly = async (authorizationCode) => {
  console.log('getTokenIndirectly 실행');
  try {
    const res = await axios.post('/login/token', {
      authorizationCode: authorizationCode,
    });
    return res;
  } catch (error) {
    console.log('getTokenIndirectly 에러발생', error);
  } finally {
    console.log('getTokenIndirectly 실행종료');
  }
};

//클라이언트에서 직접 토큰 받아옴(백엔드 api 아직 완성x)
//쿼리스트링으로 보내야해서 fetch 사용. axios 직렬화 안하고 보내는 방법 찾는중..
const getTokenDirectly = async (path, authorizationCode) => {
  console.log('getTokenDirectly 실행');

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
        client_secret: import.meta.env.VITE_ClIENT_SECRET,
      }),
    });
    return await res.json();
  } catch (error) {
    console.log('getTokenDirectly 에러발생', error);
  } finally {
    console.log('getTokenDirectly 실행종료');
  }
};

//카카오서버로부터 토큰에 맞는 해당 회원정보를 받아온다.
const getUserInfo = async (path, accessToken) => {
  console.log('getUserInfo 실행');
  console.log('유저정보받는 토큰', accessToken);
  try {
    const res = await axios.get(path, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      }, //엑세스 토큰 헤더에 담아서 요청
    });
    console.log('유저정보 응답은', res);
    return res;
  } catch (error) {}
};

//카카오서버로 로그아웃 요청 보냄 - 토큰을 무효하게 만들어서 인가를 받을 수 없게 만든다.
const invalidateTokenDirectly = async (path, accessToken) => {
  console.log('invalidateTokenDirectly 실행');
  console.log('엑세스토큰은', accessToken);
  // const token = localStorage.getItem('accessToken');
  try {
    const res = await axios.post(
      path,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` }, //엑세스 토큰 헤더에 담아서 요청
      }
    );
    return res;
  } catch (error) {
    console.log('invalidateTokenDirectly 에러발생', error);
  } finally {
    console.log('invalidateTokenDirectly 실행종료');
  }
};

//mock api 사용 / 백엔드 서버 우회 사용 로그아웃 요청 보냄
const invalidateTokenIndirectly = async (path, accessToken) => {
  console.log('invalidateTokenIndirectly 실행');
  console.log('엑세스토큰2', accessToken);
  try {
    const res = await axios.post('/logout', {
      path: path,
      accessToken: accessToken,
    });

    return res;
  } catch (error) {
    console.log('invalidateTokenIndirectly 에러', error);
  } finally {
    console.log('invalidateTokenIndirectly 실행종료');
  }
};

//access 토큰 재발급 - 카카오서버로 요청
const renewTokenDirectly = async (refreshToken) => {
  console.log('renewTokenDirectly 실행');
  const realRefreshToken = refreshToken?.split('=')[1];
  console.log('realRefreshToken은', realRefreshToken);
  console.log('refreshToken는', realRefreshToken);

  try {
    const res = await fetch(KAKAO_RENEWTOKEN_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: qs.stringify({
        grant_type: 'refresh_token',
        client_id: import.meta.env.VITE_CLIENT_ID,
        refresh_token: realRefreshToken,
        client_secret: import.meta.env.VITE_ClIENT_SECRET,
      }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log('renewTokenDirectly 에러발생', error.message);
  } finally {
    console.log('renewTokenDirectly 실행종료');
  }
};

//카카오계정 세션 만료 - 카카오서버로 요청
const logoutAccountSessionDirectly = async () => {
  console.log('logoutAccountSessionDirectly 실행');
  try {
    console.log(KAKAO_ACCOUNT_LOGOUT_URL);
    const res = await axios.get(KAKAO_ACCOUNT_LOGOUT_URL);
    console.log('카카오세션만료 응답은', res);
    return res;
  } catch (error) {
    console.log('logoutAccountSessionDirectly 에러발생', error.message);
  } finally {
    console.log('logoutAccountSessionDirectly 실행종료');
  }
};

//access 토큰 재발급 - msw 거쳐서 카카오서버로 요청
const renewTokenIndirectly = async () => {
  console.log('renewTokenIndirectly 실행');
  try {
    const res = await axios.get('/login/renew', {});
    console.log('재발급요청후 카카오서버에서 받은 응답은', res);
    return res;
  } catch (error) {
    console.log('renewTokenIndirectly 에러발생', error.message);
  } finally {
    console.log('renewTokenIndirectly 실행종료');
  }
};
//토큰 유효성 체크 임의 로직 , 임시로 만들어놓음
const checkValidToken = (token) => {
  let result;
  result = token?.length > 0 ? true : false;
  return result;
};
//
export {
  getTokenDirectly,
  getTokenIndirectly,
  invalidateTokenDirectly,
  invalidateTokenIndirectly,
  renewTokenDirectly,
  getUserInfo,
  renewTokenIndirectly,
  logoutAccountSessionDirectly,
  checkValidToken,
};
