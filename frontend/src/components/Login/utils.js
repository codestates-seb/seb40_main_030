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
  const accesstoken =
    localStorage.getItem('accesstoken') ||
    sessionStorage.getItem('accesstoken');
  if (accesstoken) {
    axiosAdminInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accesstoken}`;
  }
};
export { getAuthCode, moveToUrl, checkLoginState };
