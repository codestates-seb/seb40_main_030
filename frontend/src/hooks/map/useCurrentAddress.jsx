/* eslint-disable no-undef */
/*global kakao*/

import { useState } from 'react';

const useCurrentAddress = ({ latitude, longitude }) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  // 주소-좌표 변환 객체를 생성합니다
  let geocoder = new kakao.maps.services.Geocoder();

  let coord = new kakao.maps.LatLng(latitude, longitude);

  let callback = function (result) {
    const fullAddress = { ...result }[0]?.address;

    const dong = fullAddress?.region_3depth_name;
    const main_address_no = fullAddress?.main_address_no;
    const sub_address_no = fullAddress?.sub_address_no;

    const currentLocation = `${dong} ${main_address_no}-${sub_address_no}`;

    setAddressDetail(fullAddress?.address_name);
    setCurrentAddress(currentLocation);
  };
  geocoder.coord2Address(coord?.getLng(), coord?.getLat(), callback);

  return { currentAddress, addressDetail };
};

export default useCurrentAddress;
