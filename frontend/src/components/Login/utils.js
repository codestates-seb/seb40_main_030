import { axiosAdminInstance } from '@/apis/admin';
const moveToUrl = (pageUrl) => {
  window.location.assign(pageUrl);
};

const getAuthCode = () => {
  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get('code');
  return authorizationCode;
};

const checkLoginState = () => {
  const isLocalAuth = localStorage.getItem('accesstoken');
  const isSessionAuth = sessionStorage.getItem('accesstoken');
  const isAuth = isLocalAuth || isSessionAuth;

  if (isAuth) {
    axiosAdminInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${isAuth}`;
  } else {
    axiosAdminInstance.defaults.headers.common['Authorization'] = ``;
  }
};
export { getAuthCode, moveToUrl, checkLoginState };
