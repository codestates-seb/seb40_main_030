/* eslint-disable no-undef */
import { Roadview } from 'react-kakao-maps-sdk';
import { Coordinate } from '@/@types/maps';

const KakaoRoadView = ({ location }: { location: Coordinate }) => {
  return (
    <>
      <Roadview
        position={{
          lat: location.latitude,
          lng: location.longitude,
          radius: 50,
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </>
  );
};

export default KakaoRoadView;
