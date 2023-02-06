import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentLocationState } from '@/recoil/pagesState';
import { PinningImage, UserMapMarker } from '@/assets';
import { DESKTOP_MAX_WIDTH } from '@/constants';
import { MapIndicator, MarkerContainer, KakaoRoadView } from './index';
import {
  useCheckDateFixed,
  useCurrentAddress,
  useGetAllStations,
  useWatchLocation,
  useGetFilteredStationsBySetTime,
} from '@/hooks';

import * as S from './KakaoMap.style';
import { Matches } from '@/@types';
import { Content } from '@/@types/index';

const KakaoMap = ({ matches }: { matches: Matches }) => {
  const [toggle, setToggle] = useState(false);
  const { data: stations } = useGetAllStations();
  const { location: myLocation } = useWatchLocation();
  const { data: filteredStations, refetch: updateLocation } =
    useGetFilteredStationsBySetTime();
  const [currentLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);
  const { isDateFixed } = useCheckDateFixed();
  const { shortAddress } = useCurrentAddress(currentLocation);

  const handleOnDragEvent = useCallback(
    (map: any) => {
      setCurrentLocation({
        latitude: map.getCenter().getLat(),
        longitude: map.getCenter().getLng(),
      });
    },
    [currentLocation]
  );

  const handleCurrentLocation = useCallback(
    (mouseEvent: any) => {
      setCurrentLocation({
        latitude: mouseEvent.latLng.getLat(),
        longitude: mouseEvent.latLng.getLng(),
      });
    },
    [currentLocation]
  );

  useEffect(() => {
    updateLocation();
  }, [filteredStations, shortAddress, updateLocation]);

  return (
    <S.MapWrapper matches={matches}>
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
          onClick={(_t, mouseEvent) => {
            handleCurrentLocation(mouseEvent);
          }}
          level={4}
          draggable={true}
        >
          {isDateFixed
            ? filteredStations?.map((content: Content) => (
                <MarkerContainer key={content.id} content={content} />
              ))
            : stations.map((content: Content) => (
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
          ></MapMarker>
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
            ></MapMarker>
          )}
        </Map>
      ) : (
        <KakaoRoadView location={currentLocation} />
      )}
    </S.MapWrapper>
  );
};

export default KakaoMap;
