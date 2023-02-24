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
  MY_PAGE: {
    PATH: '/mypage',
    NAME: 'Mypage',
  },
  MY_PROFILE: {
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
  PAYMENT_COMPLETED: {
    PATH: `/payments/payment_completed`,
    NAME: 'Payments',
  },
  PAYMENT_CANCELED: {
    PATH: `/kakaoPayCancel/:paymentId`,
    NAME: 'payment_canceled',
  },
  PAYMENT_FAILED: {
    PATH: `/kakaoPaySuccessFail/:paymentId`,
    NAME: 'kakaoPayFailed',
  },
});

export default ROUTES;
