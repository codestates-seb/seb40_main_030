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
  LOGIN: {
    PATH: '/login',
    NAME: 'Login',
  },
  LOGOUT: {
    PATH: '/logout',
    NAME: 'Logout',
  },
  SIGNUP: {
    PATH: '/signup',
    NAME: 'Signup',
  },
  BUSINESS: {
    PATH: 'business',
    NAME: 'Business',
  },
  PAYMENTS: {
    PATH: '/payments/:batteryId',
    NAME: 'Payments',
  },
  ITEMSLIST: {
    PATH: '/itemslist',
    NAME: 'Itemslist',
  },
  ENTRANCE: {
    PATH: '/entrance',
    NAME: 'Entrance',
  },
  SEARCH: {
    PATH: '/search',
    NAME: 'Search',
  },
  RENTAL: {
    PATH: '/rental/:stationId',
    NAME: 'Rental',
  },
});

export default ROUTES;
