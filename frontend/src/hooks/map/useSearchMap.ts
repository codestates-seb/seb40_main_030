/* eslint-disable no-undef */
/*global kakao*/

import { useEffect, useRef, useState } from 'react';

const useSearchMap = () => {
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [locationData, setLocationData] = useState<any>([]);

  // maxLength 가 15인듯
  const qs = new kakao.maps.services.Places();

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      const kakaoStatus = new kakao.maps.services.Status();
      qs.keywordSearch(keyword, (data, status) => {
        if (keyword === '') {
          setLocationData([]);
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
