// BottomSheet
const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

const DEFAULT_LOCATION = {
  latitude: 37.4965,
  longitude: 127.0248,
};

// Reservation

const TIME = {
  HOUR: 3600000,
  PERCENTAGE: 100,
};

const BOOKING_TYPE = {
  MULTIPLE: 'multiple',
  SINGLE: 'single',
};

const SEARCH_LOCATION_SUGGESTIONS = [
  '이태원',
  '삼성동',
  '상봉동',
  '노량진',
  '청량리',
  '중곡',
  '이태리',
  '역삼역',
];

export {
  GEOLOCATION_OPTIONS,
  DEFAULT_LOCATION,
  SEARCH_LOCATION_SUGGESTIONS,
  BOOKING_TYPE,
};

export { TIME };
