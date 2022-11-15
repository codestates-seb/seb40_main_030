import { atom } from 'recoil';

const navState = atom({
  key: 'navState',
  default: false,
});

const currentLocationState = atom({
  key: 'currentLocationState',
  default: { latitude: 37.4965, longitude: 127.0248 },
});

export { navState, currentLocationState };
