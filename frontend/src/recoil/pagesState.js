import { atom } from 'recoil';

const initialReservationValue = {
  startTime: { hours: null, minutes: null },
  endTime: { hours: null, minutes: null },
  startDate: { year: null, month: null, date: null },
  endDate: { year: null, month: null, date: null },
  dateFixed: { date: false, time: false },
  bookingType: null,
  hours: 1,
  minutes: 0,
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
  effects: [localStorageEffect('reservation')],
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
  snackBarState,
};
