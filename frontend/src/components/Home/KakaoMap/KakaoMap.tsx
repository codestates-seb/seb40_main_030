import { useState, useCallback } from 'react';
import { useEffect } from 'react';
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
  useCurrentAddress,
  useGetAllStations,
  useWatchLocation,
} from '@/hooks';
import useGetFilteredStationsBySetTime from '@/hooks/stations/useGetFilteredStationsBySetTime';
import { currentLocationState } from '@/recoil/pagesState';

import * as S from './KakaoMap.style';

const KakaoMap = ({ matches }: { matches: boolean }) => {
  const [toggle, setToggle] = useState(false);
  const { data: stations } = useGetAllStations();
  const { location }: any = useWatchLocation();
  // @ts-ignore
  const { data: filteredStations, refetch: updateLocation } =
    useGetFilteredStationsBySetTime();
  const [currentLocation, setCurrentLocation] =
    useRecoilState(currentLocationState);
  const { isDateFixed } = useCheckDateFixed();
  const latitude = currentLocation?.latitude || DEFAULT_LOCATION.latitude;
  const longitude = currentLocation?.longitude || DEFAULT_LOCATION.longitude;

  const { shortAddress } = useCurrentAddress({ latitude, longitude });

  const handleOnDragEvent = useCallback(
    (map: any) => {
      setCurrentLocation({
        latitude: map.getCenter().getLat(),
        longitude: map.getCenter().getLng(),
      });
    },
    [currentLocation],
  );

  const handleCurrentLocation = useCallback(
    (mouseEvent: any) => {
      setCurrentLocation({
        latitude: mouseEvent.latLng.getLat(),
        longitude: mouseEvent.latLng.getLng(),
      });
    },
    [currentLocation],
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
            lat: latitude,
            lng: longitude,
          }}
          style={{ width: '100%', height: '100%', maxWidth: DESKTOP_MAX_WIDTH }}
          onDragEnd={(map) => {
            // setCurrentLocation({
            //   latitude: map.getCenter().getLat(),
            //   longitude: map.getCenter().getLng(),
            // });
            handleOnDragEvent(map);
          }}
          onClick={(_t, mouseEvent) => {
            // setCurrentLocation({
            //   latitude: mouseEvent.latLng.getLat(),
            //   longitude: mouseEvent.latLng.getLng(),
            // });
            handleCurrentLocation(mouseEvent);
          }}
          level={4}
          draggable={true}
        >
          {isDateFixed
            ? filteredStations?.map((content: any) => (
                <MarkerContainer key={content.id} content={content} />
              ))
            : stations.map((content: any) => (
                <MarkerContainer key={content.id} content={content} />
              ))}
          <MapMarker
            position={{
              lat: location?.latitude,
              lng: location?.longitude,
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
                lat: currentLocation?.latitude,
                lng: currentLocation?.longitude,
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
        <KakaoRoadView location={{ latitude, longitude }} />
      )}
    </S.MapWrapper>
  );
};

export default KakaoMap;
