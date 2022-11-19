import { atom } from 'recoil';

const loginState = atom({
  key: 'loginState',
  default: false,
});

const accessTokenVal = atom({
  key: 'accessToken',
  default: '',
});

const sessionState = atom({
  key: 'sessionState',
  default: false,
});

export { loginState, accessTokenVal, sessionState };
