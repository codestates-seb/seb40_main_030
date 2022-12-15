import { atom } from 'recoil';

import { localStorageEffect } from './pagesState';

const userType = atom({
  key: 'userType',
  default: '',
  effects: [localStorageEffect('userType')],
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
});

export { sessionState, userType, accessToken, refreshToken, loginCheckState };
