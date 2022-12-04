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

const accessToken = atom({
  key: 'accessToken',
  effects: [localStorageEffect('accessToken')],
});

const refreshToken = atom({
  key: 'refreshToken',
  default: '',
  effects: [localStorageEffect('refreshToken')],
});

const loginCheckState = atom({
  key: 'checkLogin',
  default: false,
  effects: [localStorageEffect('refreshToken')],
});

export { sessionState, loginState, accessToken, refreshToken, loginCheckState };
