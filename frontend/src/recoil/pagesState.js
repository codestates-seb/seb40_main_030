import { atom } from 'recoil';

import convertMinTo10Min from '@/components/@helper/utils/convertMiinTo10Min';

const initialReservationValue = {
  startTime: { hours: new Date().getHours(), minutes: new Date().getMinutes() },
  returnTime: {
    hours: new Date().getHours() + 1,
    minutes: new Date().getMinutes(),
  },
  startDate: { year: null, month: null, date: null },
  endDate: { year: null, month: null, date: null },
  dateFixed: { date: false, time: false },
  bookingType: null,
  hours: new Date().getHours(),
  minutes: convertMinTo10Min(new Date().getMinutes()),
};

const sessionStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const reservationState = atom({
  key: 'reservationState',
  default: initialReservationValue,
  effects: [sessionStorageEffect('reservation')],
});

const navState = atom({
  key: 'navState',
  default: false,
});

const currentLocationState = atom({
  key: 'currentLocationState',
  default: { latitude: 37.4965, longitude: 127.0248 },
});

const snackBarState = atom({
  key: 'snackbarState',
  default: {
    isActive: false,
    message: '',
  },
});

export {
  initialReservationValue,
  navState,
  currentLocationState,
  reservationState,
  sessionStorageEffect,
  localStorageEffect,
  snackBarState,
};
