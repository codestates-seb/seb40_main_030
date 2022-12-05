import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { useRecoilState } from 'recoil';

import MapIndicator from '@/components/Home/KakaoMap/Features/MapIndicator';
import MarkerContainer from '@/components/Home/KakaoMap/Features/MarkerContainer';
import KakaoRoadView from '@/components/Home/KakaoMap/Features/RoadView';
import { DEFAULT_LOCATION, DESKTOP_MAX_WIDTH } from '@/constants';
import { useCheckDateFixed } from '@/hooks';
import useGetFilteredStationsBySetTime from '@/hooks/stations/useGetFilteredStationsBySetTime';
import { currentLocationState } from '@/recoil/pagesState';

import * as S from './KakaoMap.style';

const KakaoMap = ({ matches }) => {
  const [toggle, setToggle] = useState(false);
  // const { data: stations } = useGetAllStations();
  const [currentLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);

  const { isDateFixed } = useCheckDateFixed();
  const { data: filteredStations, refetch } = useGetFilteredStationsBySetTime();
  const latitude = currentLocation?.latitude || DEFAULT_LOCATION.latitude;
  const longitude = currentLocation?.longitude || DEFAULT_LOCATION.longitude;

  return (
    <S.MapWrapper matches={matches}>
      <MapIndicator toggle={toggle} setToggle={setToggle} matches={matches} />
      {!toggle ? (
        <Map
          center={{
            lat: latitude,
            lng: longitude,
          }}
          isPanto={true}
          style={{ width: '100%', height: '100%', maxWidth: DESKTOP_MAX_WIDTH }}
          onDragEnd={(map) => {
            setCurrentLocation({
              latitude: map.getCenter().getLat(),
              longitude: map.getCenter().getLng(),
            });
            refetch();
          }}
          level={5}
        >
          {/* 예약시간 설정 된 경우  /  안된경우  */}
          {isDateFixed
            ? filteredStations?.map((content) => (
                <MarkerContainer key={content.id} content={content} />
              ))
            : filteredStations.map((content) => (
                <MarkerContainer key={content.id} content={content} />
              ))}
          {/* {filteredStations.map((content)) => (
                <MarkerContainer key={content.id} content={content} />
              )} */}
          {/* {   filteredStations.map((content)) => (
          <MarkerContainer key={content.id} content={content} />)} */}
        </Map>
      ) : (
        <KakaoRoadView location={{ latitude, longitude }} />
      )}
    </S.MapWrapper>
  );
};

export default KakaoMap;
