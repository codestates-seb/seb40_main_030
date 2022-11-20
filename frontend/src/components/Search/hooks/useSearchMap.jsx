import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentLocationState } from '../../../recoil/pagesState';

const useSearchMap = () => {
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [locationData, setLocationData] = useState([]);
  // const [currentLocation, setCurrentLocation] =
  //   useRecoilState(currentLocationState);

  // maxLength 가 15인듯
  const qs = new kakao.maps.services.Places();

  // const {data,status } = useQuery(['kakao-map','map-search'], () => qs.keywordSearch(keyword))

  useEffect(() => {
    qs.keywordSearch(keyword || '코드스테이츠', (data, status) => {
      console.log(status);
      if (status === kakao.maps.services.Status.OK) {
        setLocationData(data);
      }
    });
  }, [keyword]);

  return { inputRef, setKeyword, locationData };
};

export default useSearchMap;
