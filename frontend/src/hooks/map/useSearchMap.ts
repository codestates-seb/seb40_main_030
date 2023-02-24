import { useEffect, useRef, useState } from 'react';

const { kakao } = window;

const useSearchMap = () => {
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [locationData, setLocationData] = useState<unknown[] | []>([]);

  useEffect(() => {
    const qs = new kakao.maps.services.Places();

    const { OK: StatusOk } = new kakao.maps.services.Status();

    const timer = setTimeout(() => {
      qs.keywordSearch(keyword, (data, status) => {
        if (keyword === '') {
          setLocationData([]);
          return;
        }
        if (status === StatusOk) {
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
