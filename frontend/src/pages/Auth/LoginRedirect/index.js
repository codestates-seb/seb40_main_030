import useOauthLogin from '../../../hooks/Login/useOauthLogin';
const LoginRedirect = () => {
  console.log('리다이렉트 페이지 진입');
  useOauthLogin();
  return;
};

export default LoginRedirect;
