import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { MapMarker } from 'react-kakao-maps-sdk';
import { useRecoilState } from 'recoil';

import { PinningImage, UserMapMarker } from '@/assets';
import MapIndicator from '@/components/Home/KakaoMap/Features/MapIndicator';
import MarkerContainer from '@/components/Home/KakaoMap/Features/MarkerContainer';
import KakaoRoadView from '@/components/Home/KakaoMap/Features/RoadView';
import { DEFAULT_LOCATION, DESKTOP_MAX_WIDTH } from '@/constants';
import {
  useCheckDateFixed,
  useCurrentLocation,
  useGetAllStations,
} from '@/hooks';
import useGetFilteredStationsBySetTime from '@/hooks/stations/useGetFilteredStationsBySetTime';
import { currentLocationState } from '@/recoil/pagesState';

import * as S from './KakaoMap.style';

const KakaoMap = ({ matches }) => {
  const [toggle, setToggle] = useState(false);
  const { location } = useCurrentLocation();
  const { data: stations } = useGetAllStations();
  const [currentLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);
  const { isDateFixed } = useCheckDateFixed();
  const { data: filteredStations, refetch: updateLocation } =
    useGetFilteredStationsBySetTime();
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
          }}
          onClick={(_t, mouseEvent) => {
            setCurrentLocation({
              latitude: mouseEvent.latLng.getLat(),
              longitude: mouseEvent.latLng.getLng(),
            });
            updateLocation();
          }}
          level={4}
          draggable={true}
        >
          {isDateFixed
            ? filteredStations?.map((content) => (
                <MarkerContainer key={content.id} content={content} />
              ))
            : stations.map((content) => (
                <MarkerContainer key={content.id} content={content} />
              ))}
          <MapMarker
            position={{
              lat: location?.latitude,
              lng: location?.longitude,
            }}
            image={{
              src: UserMapMarker, // 마커이미지의 주소입니다
              size: {
                width: 50,
                height: 50,
              },
            }}
          ></MapMarker>
          {currentLocation && (
            <MapMarker
              position={{
                lat: currentLocation?.latitude,
                lng: currentLocation?.longitude,
              }}
              image={{
                src: PinningImage, // 마커이미지의 주소입니다
                size: {
                  width: 20,
                  height: 20,
                },
              }}
            ></MapMarker>
          )}
        </Map>
      ) : (
        <KakaoRoadView location={{ latitude, longitude }} />
      )}
    </S.MapWrapper>
  );
};

export default KakaoMap;
