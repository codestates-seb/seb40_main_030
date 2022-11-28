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
  MYPAGE: {
    PATH: '/mypage',
    NAME: 'Mypage',
  },
  MYPROFILE: {
    PATH: '/myprofile',
    NAME: 'Myprofile',
  },
  BUSINESS: {
    PATH: 'business',
    NAME: 'Business',
  },
  ENTRANCE: {
    PATH: '/entrance',
    NAME: 'Entrance',
  },
  // LOGIN: {
  //   PATH: '/login',
  //   NAME: 'Login',
  // },
  // LOGOUT: {
  //   PATH: '/logout',
  //   NAME: 'Logout',
  // },
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
});

export default ROUTES;
