import { Map } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import { useGetAllZones, useGetFilteredZone } from './hooks';
import { useRecoilValue } from 'recoil';
import {
  reservationState,
  currentLocationState,
} from '../../../recoil/pagesState';

import KakaoRoadView from './RoadView';
import MarkerContainer from './MarkerContainer';
import MapIndicator from './MapIndicator/MapIndicator';

import * as S from './KakaoMap.style';

// type Location = {
//   location: {
//     latitude: number;
//     longitude: number;
//   };
//   toggle: boolean;
// };

const KakaoMap = () => {
  const [toggle, setToggle] = useState(false);

  const { data: zones, isSuccess } = useGetAllZones();
  const { filteredZones } = useGetFilteredZone();
  const { dateFixed } = useRecoilValue(reservationState);
  const currentLocation = useRecoilValue(currentLocationState);

  const latitude = currentLocation?.latitude || 37.4965;
  const longitude = currentLocation?.longitude || 127.0248;

  // location 기반 필터링시에 범위를 어디까지 할것인가를 알아봐야함

  if (isSuccess) {
    return (
      <S.MapWrapper>
        <MapIndicator toggle={toggle} setToggle={setToggle} />
        {!toggle ? (
          <Map
            center={{
              lat: latitude,
              lng: longitude,
            }}
            isPanto={true}
            style={{ width: '100%', height: '100%' }}
            level={3}
          >
            {dateFixed.date && dateFixed.time
              ? filteredZones?.map((content) => (
                  <MarkerContainer key={content.zoneId} content={content} />
                ))
              : zones?.map((content) => (
                  <MarkerContainer key={content.zoneId} content={content} />
                ))}
          </Map>
        ) : (
          <KakaoRoadView location={{ latitude, longitude }} />
        )}
      </S.MapWrapper>
    );
  }
};

export default KakaoMap;
