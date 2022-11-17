import { atom } from 'recoil';

const initialReservationValue = {
  startTime: { hours: 1, minutes: 0 },
  endTime: { hours: 1, minutes: 0 },
  startDate: { year: 2022, month: null, date: null },
  endDate: { year: 2022, month: null, date: null },
  dateFixed: { date: false, time: false },
  singeDate: undefined,
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

export {
  initialReservationValue,
  navState,
  currentLocationState,
  reservationState,
};
