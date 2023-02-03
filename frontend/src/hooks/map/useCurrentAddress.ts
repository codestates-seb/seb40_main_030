/* eslint-disable no-undef */
/*global kakao*/

import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useCurrentAddress = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [shortAddress, setShortAddress] = useState('');
  // 주소-좌표 변환 객체를 생성합니다
  let geocoder = new kakao.maps.services.Geocoder();

  let coord = new kakao.maps.LatLng(latitude, longitude);

  let callback = useCallback(
    (result: any) => {
      const fullAddress = { ...result }[0]?.address;

      const dong = fullAddress?.region_3depth_name;
      const gu = fullAddress?.region_2depth_name;
      const main_address_no = fullAddress?.main_address_no;
      const sub_address_no = fullAddress?.sub_address_no;

      const currentLocation = `${gu} ${dong} ${main_address_no}-${sub_address_no}`;

      setAddressDetail(fullAddress?.address_name);
      setCurrentAddress(currentLocation);
    },
    [currentAddress],
  );
  geocoder.coord2Address(coord?.getLng(), coord?.getLat(), callback);

  useEffect(() => {
    setShortAddress(addressDetail.split(' ')[1]);
  }, [addressDetail.split(' ')[1]]);

  return {
    currentAddress,
    addressDetail,
    shortAddress,
  };
};

export default useCurrentAddress;
