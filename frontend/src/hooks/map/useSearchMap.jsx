/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react';

const useSearchMap = () => {
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [locationData, setLocationData] = useState([]);

  // maxLength 가 15인듯
  const qs = new kakao.maps.services.Places();

  useEffect(() => {
    qs.keywordSearch(keyword || '코드스테이츠', (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setLocationData(data);
      }
    });
  }, [keyword]);

  return { inputRef, setKeyword, locationData };
};

export default useSearchMap;
