import { useState, useEffect } from 'react';

// type Position = {
//   coords: { latitude: number; longitude: number };
// }

const useCurrentLocation = (options = {}) => {
  // state 에 현재 위치 정보 저장
  const [location, setLocation] = useState(); // <object>
  // 에러 메시지 저장
  const [error, setError] = useState(''); // <string>

  // Geolocation getCurrentLocation 메소드 성공 callback handler
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  // Geolocation getCurrentLocation 메소드 실패 callback handler
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    // 현재 위치 정보가 Geolocation 에 저장되어있지 않다면 에러로 처리
    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    // Geolocation API 호출
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export default useCurrentLocation;
