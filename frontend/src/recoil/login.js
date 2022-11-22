import { atom } from 'recoil';

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

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
