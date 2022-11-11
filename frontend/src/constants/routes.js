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
});

export default ROUTES;
