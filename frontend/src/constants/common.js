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
  NULL: 'null',
};

const BOOKING_TYPE = {
  MULTIPLE: 'multiple',
  SINGLE: 'single',
};

const DESKTOP_MAX_WIDTH = '800px';
const DESKTOP_MARGIN_LEFT = '30%';
const DESKTOP_MEDIA_QUERY = '(min-width: 468px)';

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
  DESKTOP_MAX_WIDTH,
  DESKTOP_MARGIN_LEFT,
  DESKTOP_MEDIA_QUERY,
};

export { TIME };
