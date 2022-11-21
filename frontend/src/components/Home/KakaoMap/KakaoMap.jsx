import { Map } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import { DEFAULT_LOCATION } from '../../../constants/location';
import { useGetAllStations } from './hooks';
import { useRecoilState, useRecoilValue } from 'recoil';
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

  const { data: stations, isSuccess } = useGetAllStations();
  const { dateFixed } = useRecoilValue(reservationState);
  const [currentLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);

  const latitude = currentLocation?.latitude || DEFAULT_LOCATION.latitude;
  const longitude = currentLocation?.longitude || DEFAULT_LOCATION.longitude;

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
            onDragEnd={(map) =>
              setCurrentLocation({
                latitude: map.getCenter().getLat(),
                longitude: map.getCenter().getLng(),
              })
            }
            level={3}
          >
            {dateFixed.date && dateFixed.time
              ? stations.map((content) => (
                  <MarkerContainer key={content.id} content={content} />
                ))
              : stations?.map((content) => (
                  <MarkerContainer key={content.id} content={content} />
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
