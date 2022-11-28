import { atom } from 'recoil';

const batteryAddModeState = atom({
  key: 'batteryAddModeState',
  default: false,
});

const batteryDeleteModeState = atom({
  key: 'batteryDeleteModeState',
  default: false,
});

const filterState = atom({
  key: 'filterState',
  default: 'total',
});

const stationAddModeState = atom({
  key: 'stationAddModeState',
  default: false,
});

const stationDeleteModeState = atom({
  key: 'stationDeleteModeState',
  default: false,
});
export {
  batteryAddModeState,
  batteryDeleteModeState,
  filterState,
  stationAddModeState,
  stationDeleteModeState,
};
