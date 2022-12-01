import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { useRecoilState, useRecoilValue } from 'recoil';

import MapIndicator from '@/components/Home/KakaoMap/Features/MapIndicator';
import MarkerContainer from '@/components/Home/KakaoMap/Features/MarkerContainer';
import KakaoRoadView from '@/components/Home/KakaoMap/Features/RoadView';
import { DEFAULT_LOCATION } from '@/constants';
import { useCheckValidReserveTable, useGetAllStations } from '@/hooks';
import useGetFilteredStationsBySetTime from '@/hooks/stations/useGetFilteredStationsBySetTime';
import { reservationState, currentLocationState } from '@/recoil/pagesState';

import * as S from './KakaoMap.style';

const KakaoMap = () => {
  const [toggle, setToggle] = useState(false);
  const { data: stations, isSuccess } = useGetAllStations();
  const { dateFixed } = useRecoilValue(reservationState);
  const [currentLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);

  const { startPoint, endPoint } = useCheckValidReserveTable();
  const { data: filteredStations } = useGetFilteredStationsBySetTime({
    startTime: startPoint.replace(' ', 'T'),
    endTime: endPoint.replace(' ', 'T'),
  });

  const latitude = currentLocation?.latitude || DEFAULT_LOCATION.latitude;
  const longitude = currentLocation?.longitude || DEFAULT_LOCATION.longitude;

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
            level={8}
          >
            {/* 예약시간 설정 된 경우  /  안된경우  */}
            {dateFixed.date && dateFixed.time && filteredStations
              ? filteredStations?.map((content) => (
                  <MarkerContainer key={content.id} content={content} />
                ))
              : stations.map((content) => (
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
