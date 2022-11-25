import { atom } from 'recoil';

const deleteModeState = atom({
  key: 'deleteModeState',
  default: false,
});

export { deleteModeState };
