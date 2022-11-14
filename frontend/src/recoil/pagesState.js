import { atom } from 'recoil';

const navState = atom({
  key: 'navState',
  default: false,
});

export { navState };
