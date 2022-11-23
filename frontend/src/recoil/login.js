import { atom } from 'recoil';
import { localStorageEffect } from './pagesState';

const loginState = atom({
  key: 'loginState',
  default: false,
  effects: [localStorageEffect('loginState')],
});

const sessionState = atom({
  key: 'sessionState',
  default: false,
  effects: [localStorageEffect('sessionState')],
});

const accessTokenVal = atom({
  key: 'accessToken',
  default: '',
});

export { loginState, accessTokenVal, sessionState };
