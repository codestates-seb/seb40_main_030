import { atom } from 'recoil';

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    console.log('초기 세션스토리지값 값은', savedValue);

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
