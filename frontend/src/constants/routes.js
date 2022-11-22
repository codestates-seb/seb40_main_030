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
  BUSSINES: {
    PATH: 'bussines',
    NAME: 'Bussines',
  },
  PAY: {
    PATH: '/pay/:paymentId/:memberId',
    NAME: 'pay',
  },
  ITEMSLIST: {
    PATH: '/itemslist',
    NAME: 'Itemslist',
  }
});

export default ROUTES;
