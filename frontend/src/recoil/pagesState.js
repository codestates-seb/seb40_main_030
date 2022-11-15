import { atom } from 'recoil';

const initialReservationValue = {
  startTime: { hours: 1, minutes: 0 },
  endTime: { hours: 1, minutes: 0 },
  startDate: { year: 2022, month: 0, date: 0 },
  endDate: { year: 2022, month: 0, date: 0 },
  dateFixed: { date: false, time: false },
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

const navState = atom({
  key: 'navState',
  default: false,
});

const currentLocationState = atom({
  key: 'currentLocationState',
  default: { latitude: 37.4965, longitude: 127.0248 },
});

const reservationState = atom({
  key: 'reservationState',
  default: initialReservationValue,
  effects: [localStorageEffect('reservation')],
});

export {
  initialReservationValue,
  navState,
  currentLocationState,
  reservationState,
};
