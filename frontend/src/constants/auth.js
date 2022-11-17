const REDIRECT_URI = 'http://127.0.0.1:5173/login';
const LOGOUT_REDIRECT_URI = 'http://127.0.0.1:5173/login';
const SIGNUP_REDIRECT_URI = 'http://127.0.0.1:5173/login'; // 회원가입완료후 로그인페이지로 리다이렉트해줄 변수;

const KAKAO_TOKENCODE_URL = 'https://kauth.kakao.com/oauth/token';
// const KAKAO_TOKEN_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${
//   import.meta.env.VITE_CLIENT_ID
// }&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
const KAKAO_AUTHCODE_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
  import.meta.env.VITE_CLIENT_ID
}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const KAKAO_TOKEN_LOGOUT_URL = 'https://kapi.kakao.com/v1/user/logout';
const KAKAO_RENEWTOKEN_URL = 'https://kauth.kakao.com/oauth/token';
export {
  KAKAO_AUTHCODE_URL,
  KAKAO_TOKENCODE_URL,
  REDIRECT_URI,
  LOGOUT_REDIRECT_URI,
  KAKAO_TOKEN_LOGOUT_URL,
  KAKAO_RENEWTOKEN_URL,
};
