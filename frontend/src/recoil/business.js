import { atom } from 'recoil';

const addModeState = atom({
  key: 'addModeState',
  default: false,
});

const deleteModeState = atom({
  key: 'deleteModeState',
  default: false,
});

const filterState = atom({
  key: 'filterState',
  default: 'total',
});
export { addModeState, deleteModeState, filterState };
