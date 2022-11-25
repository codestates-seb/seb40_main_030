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

// 검색을 하고 -> 지도이동이 되고 -> 그 해당 x,y 핀이 박힌다.

// 지도 검색 -> 근처 반경 핀

// 검색 -> 이태원 -> 이태원 주변 반경에 중심 으로 이동 그 주변 핀들이 보이고

// 우리 db에서만 검색한다면 위경도 값 가져오면 get 1번
