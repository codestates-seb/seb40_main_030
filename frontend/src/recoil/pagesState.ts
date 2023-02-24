import { atom } from 'recoil';

import { DEFAULT_LOCATION } from '@/constants';
import { convertMinTo10Min } from '@/utils';

const initialReservationValue = {
  startTime: { hours: new Date().getHours(), minutes: new Date().getMinutes() },
  returnTime: {
    hours: new Date().getHours() + 1,
    minutes: new Date().getMinutes(),
  },
  startDate: { year: null, month: null, date: null },
  endDate: { year: null, month: null, date: null },
  dateFixed: { date: false, time: false },
  bookingType: '',
  hours: new Date().getHours(),
  minutes: convertMinTo10Min(new Date().getMinutes()),
};

const sessionStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: unknown, _: unknown, isReset: unknown) => {
      isReset
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: any) => {
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
  default: {
    latitude: DEFAULT_LOCATION.latitude,
    longitude: DEFAULT_LOCATION.longitude,
  },
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
