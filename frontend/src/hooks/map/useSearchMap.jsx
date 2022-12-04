/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react';

const useSearchMap = () => {
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [locationData, setLocationData] = useState([]);

  // maxLength 가 15인듯
  const qs = new window.kakao.maps.services.Places();

  useEffect(() => {
    const timer = setTimeout(() => {
      const kakaoStatus = new window.kakao.maps.services.Status();
      qs.keywordSearch(keyword, (data, status) => {
        if (keyword === '') {
          setLocationData('');
          return;
        }
        if (status === kakaoStatus.OK) {
          setLocationData(data);
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return { inputRef, setKeyword, locationData };
};

export default useSearchMap;
