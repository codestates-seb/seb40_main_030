const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

const DEFAULT_LOCATION = {
  latitude: 37.4965,
  longitude: 127.0248,
};

export { GEOLOCATION_OPTIONS, DEFAULT_LOCATION };
