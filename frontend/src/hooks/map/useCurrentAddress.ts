/* eslint-disable no-undef */
/* global kakao */

import { useCallback, useEffect, useState } from 'react';

import { Coordinate } from '@/@types/maps';

const useCurrentAddress = ({ latitude, longitude }: Coordinate) => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [shortAddress, setShortAddress] = useState('');

  const geocoder = new kakao.maps.services.Geocoder();
  const coord = new kakao.maps.LatLng(latitude, longitude);

  const callback = useCallback(
    (result: any) => {
      const fullAddress = { ...result }[0]?.address;

      const dong = fullAddress?.region_3depth_name;
      const gu = fullAddress?.region_2depth_name;
      const mainAddressNumber = fullAddress?.main_address_no;
      const subAddressNumber = fullAddress?.sub_address_no;

      const currentLocation = `${gu} ${dong} ${mainAddressNumber}-${subAddressNumber}`;

      setAddressDetail(fullAddress?.address_name);
      setCurrentAddress(currentLocation);
    },
    [latitude, longitude],
  );

  useEffect(() => {
    geocoder.coord2Address(coord?.getLng(), coord?.getLat(), callback);
  }, [latitude, longitude]);

  useEffect(() => {
    setShortAddress(addressDetail?.split(' ')[1]);
  }, [addressDetail?.split(' ')[1]]);

  return {
    currentAddress,
    addressDetail,
    shortAddress,
  };
};

export default useCurrentAddress;
