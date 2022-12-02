/* eslint-disable no-undef */
import { Roadview } from 'react-kakao-maps-sdk';

const KakaoRoadView = ({ location }) => {
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
