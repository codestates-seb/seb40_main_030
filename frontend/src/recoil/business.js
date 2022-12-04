import { atom } from 'recoil';

const batteryAddModeState = atom({
  key: 'batteryAddModeState',
  default: false,
});

const batteryDeleteModeState = atom({
  key: 'batteryDeleteModeState',
  default: false,
});

const batteryFilterState = atom({
  key: 'batteryFilterState',
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

const stationFilterState = atom({
  key: 'stationFilterState',
  default: 'total',
});
export {
  batteryAddModeState,
  batteryDeleteModeState,
  batteryFilterState,
  stationAddModeState,
  stationDeleteModeState,
  stationFilterState,
};
