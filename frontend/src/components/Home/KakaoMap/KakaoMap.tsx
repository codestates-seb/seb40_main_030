import { useState, useCallback, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useRecoilState } from 'recoil';

import { Matches, Content } from '@/@types';
import { PinningImage, UserMapMarker } from '@/assets';
import {
  MapIndicator,
  MarkerContainer,
  KakaoRoadView,
} from '@/components/Home/KakaoMap';
import { DESKTOP_MAX_WIDTH } from '@/constants';
import {
  useCheckDateFixed,
  useCurrentAddress,
  useWatchLocation,
  useGetStationsByRegion,
} from '@/hooks';
import { currentLocationState } from '@/recoil/pagesState';

import * as S from './KakaoMap.style';

function KakaoMap({ matches }: { matches: Matches }) {
  const [toggle, setToggle] = useState(false);
  const { location: myLocation } = useWatchLocation();
  const { data: filteredStations, refetch: updateLocation } =
    useGetStationsByRegion();
  const [currentLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);
  const { isDateFixed } = useCheckDateFixed();
  const { shortAddress } = useCurrentAddress(currentLocation);

  const handleOnDragEvent = useCallback(
    (map: kakao.maps.Map | any) => {
      setCurrentLocation({
        latitude: map.getCenter().getLat(),
        longitude: map.getCenter().getLng(),
      });
    },
    [currentLocation],
  );

  const handleCurrentLocation = useCallback(
    (mouseEvent: kakao.maps.event.MouseEvent | any) => {
      setCurrentLocation({
        latitude: mouseEvent.latLng.getLat(),
        longitude: mouseEvent.latLng.getLng(),
      });
    },
    [currentLocation],
  );

  useEffect(() => {
    updateLocation();
  }, [filteredStations, shortAddress]);

  return (
    <S.MapWrapper id='kakao-map' matches={matches}>
      <MapIndicator toggle={toggle} setToggle={setToggle} matches={matches} />
      {!toggle ? (
        <Map
          center={{
            lat: currentLocation.latitude,
            lng: currentLocation.longitude,
          }}
          style={{ width: '100%', height: '100%', maxWidth: DESKTOP_MAX_WIDTH }}
          onDragEnd={(map) => {
            handleOnDragEvent(map);
          }}
          onClick={(_, mouseEvent) => handleCurrentLocation(mouseEvent)}
          level={4}
          draggable
        >
          {isDateFixed
            ? filteredStations?.map((content: Content) => (
                <MarkerContainer key={content.id} content={content} />
              ))
            : filteredStations?.map((content: Content) => (
                <MarkerContainer key={content.id} content={content} />
              ))}
          <MapMarker
            position={{
              lat: myLocation.latitude,
              lng: myLocation.longitude,
            }}
            image={{
              src: UserMapMarker,
              size: {
                width: 50,
                height: 50,
              },
            }}
          />
          {currentLocation && (
            <MapMarker
              position={{
                lat: currentLocation.latitude,
                lng: currentLocation.longitude,
              }}
              image={{
                src: PinningImage,
                size: {
                  width: 30,
                  height: 30,
                },
              }}
            />
          )}
        </Map>
      ) : (
        <KakaoRoadView location={currentLocation} />
      )}
    </S.MapWrapper>
  );
}

export default KakaoMap;
