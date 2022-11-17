import { useEffect, useState } from 'react';
import { GEOLOCATION_OPTIONS } from '../../../../constants';

import useCurrentLocation from './useCurrentLocation';
import useWatchLocation from './useWatchLocation';

const useKakaoMap = () => {
  const { location: currentLocation, error: currentLocationError } =
    useCurrentLocation(GEOLOCATION_OPTIONS);
  const { location, cancelLocationWatch, error } =
    useWatchLocation(GEOLOCATION_OPTIONS);
  const [isWatchingForLocation, setIsWatchForLocation] = useState(true); // <boolean>

  useEffect(() => {
    // location 이 없는경우 early return;
    if (!location) return;

    // 3000ms 이후 cancelLocation
    setTimeout(() => {
      cancelLocationWatch();
      setIsWatchForLocation(false);
    }, 3000);
  }, [location, cancelLocationWatch]);

  return {
    currentLocation,
    currentLocationError,
    location,
    error,
    isWatchingForLocation,
  };
};

export default useKakaoMap;
