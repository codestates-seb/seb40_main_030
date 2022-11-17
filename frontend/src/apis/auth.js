import axios from 'axios';
import qs from 'qs';
import { KAKAO_RENEWTOKEN_URL, REDIRECT_URI } from '../constants/auth';

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

//카카오서버로 로그아웃 요청 보냄 - 토큰을 무효하게 만들어서 인가를 받을 수 없게 만든다.
const invalidateTokenDirectly = async (path) => {
  console.log('invalidateTokenDirectly 실행');
  const token = localStorage.getItem('accessToken');
  try {
    const res = await axios.post(
      path,
      {},
      {
        headers: { Authorization: `Bearer ${token}` }, //엑세스 토큰 헤더에 담아서 요청
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
const invalidateTokenIndirectly = async (path) => {
  console.log('invalidateTokenIndirectly 실행');
  try {
    const res = await axios.post('/logout', { path: path });
    return res;
  } catch (error) {
    console.log('invalidateTokenIndirectly 에러', error);
  } finally {
    console.log('invalidateTokenIndirectly 실행종료');
  }
};

//access 토큰 재발급 - 카카오서버로 요청
const renewTokenDirectly = async () => {
  console.log('renewTokenDirectly 실행');
  const refreshToken = localStorage.getItem('refreshToken');
  console.log('로컬에서 가져온 리프레쉬 토큰', refreshToken);
  try {
    if (refreshToken === 'undefined' || !refreshToken) {
      throw new Error('refresh token이 유효하지 않습니다.');
    }
    const res = await fetch(KAKAO_RENEWTOKEN_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: qs.stringify({
        grant_type: 'refresh_token',
        client_id: import.meta.env.VITE_CLIENT_ID,
        refresh_token: refreshToken,
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

export {
  getTokenDirectly,
  getTokenIndirectly,
  invalidateTokenDirectly,
  invalidateTokenIndirectly,
  renewTokenDirectly,
};
