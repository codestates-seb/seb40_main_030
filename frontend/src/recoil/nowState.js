import { atom } from 'recoil';

const nowState = atom({
  key: 'nowState',
  default: '',
});

export { nowState };
