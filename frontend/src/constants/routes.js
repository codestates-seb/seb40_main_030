// 라우팅에 필요한 정보

const ROUTES = Object.freeze({
  HOME: {
    PATH: '/',
    NAME: 'Home',
  },
  NOT_FOUND: {
    PATH: '*',
    NAME: 'Page Not Found',
  },
  SIGNUP: {
    PATH: '/signup',
    NAME: 'Signup',
  },
  ADMIN_SIGNUP: {
    PATH: '/adminsignup',
    NAME: 'Adminsignup',
  },
  MYPAGE: {
    PATH: '/mypage',
    NAME: 'Mypage',
  },
  MYPROFILE: {
    PATH: '/myprofile',
    NAME: 'Myprofile',
  },
  NOTICE: {
    PATH: '/notice',
    NAME: 'Notice',
  },
  BUSINESS: {
    PATH: '/business',
    NAME: 'Business',
  },
  LOGIN: {
    PATH: '/login',
    NAME: 'Login',
  },
  LOGIN_REDIRECT: {
    PATH: '/loginRedirect',
    NAME: 'LoginRedirect',
  },
  LOGOUT: {
    PATH: '/logout',
    NAME: 'Logout',
  },
  SEARCH: {
    PATH: '/search',
    NAME: 'Search',
  },
  RENTAL: {
    PATH: '/rental/:stationId',
    NAME: 'Rental',
  },
  SEARCH_ADDRESS: {
    PATH: '/searchaddress',
    NAME: 'Searchaddress',
  },
  PAYMENTS: {
    PATH: '/payments/:batteryId',
    NAME: 'Payments',
  },
  ORDERS: {
    PATH: '/orders/list',
    NAME: 'Orders',
  },
  PAYMENTCOMPLETED: {
    PATH: `/kakaoPaySuccess`,
    NAME: 'Payments',
  },
  PAYMENTCANCELED: {
    PATH: `/kakaoPayCancel`,
    NAME: 'kakaoPayCancel',
  },
  PAYMENTFAILED: {
    PATH: `/kakaoPayFailed`,
    NAME: 'kakaoPayFailed',
  },
  LOGINREDIRECT: {
    PATH: '/loginredirect',
    NAME: 'Loginredirect',
  },
});

export default ROUTES;
