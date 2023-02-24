import { useState, useEffect, useRef } from 'react';

import { Coordinate } from '@/@types/maps';
import { DEFAULT_LOCATION } from '@/constants';

const useWatchLocation = (options = {}) => {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [error, setError] = useState('');
  const locationWatchId = useRef<number | null>(null);

  const handleSuccess = (pos: { coords: Coordinate }) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };
  const handleError = () => {
    setError(error);
  };

  const cancelLocationWatch = () => {
    const { geolocation } = navigator;

    if (locationWatchId.current && geolocation) {
      geolocation.clearWatch(locationWatchId.current);
    }
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    if (locationWatchId.current) {
      locationWatchId.current = geolocation.watchPosition(
        handleSuccess,
        handleError,
        options,
      );
    }
  }, []);

  return { location, cancelLocationWatch, error };
};

export default useWatchLocation;
