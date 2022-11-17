import { useState } from 'react';
import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { Cards } from '../../@commons';

const MarkerContainer = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { location, name } = content;

  return (
    <>
      <MapMarker
        position={{
          lat: location.latitude,
          lng: location.longitude,
        }}
        title={name}
        onClick={() => setIsOpen(!isOpen)}
      ></MapMarker>
      {isOpen && <CustomOverlay content={content} setIsOpen={setIsOpen} />}
    </>
  );
};

const CustomOverlay = ({ content, setIsOpen }) => {
  const { location } = content;

  return (
    <CustomOverlayMap
      position={{
        lat: location.latitude,
        lng: location.longitude,
      }}
    >
      <Cards content={content} setIsOpen={setIsOpen} />
    </CustomOverlayMap>
  );
};

export default MarkerContainer;
