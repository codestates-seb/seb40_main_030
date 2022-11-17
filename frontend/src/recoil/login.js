import { atom } from 'recoil';

const loginState = atom({
  key: 'loginState',
  default: false,
});

const accessTokenVal = atom({
  key: 'accessToken',
  default: '',
});

export { loginState, accessTokenVal };
