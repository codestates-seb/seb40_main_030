import { useState } from 'react';
import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

import { Cards } from '@/components/@commons';
import { Content } from '../../../../@types/index';

const MarkerContainer = ({ content }: { content: Content }) => {
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

const CustomOverlay = ({
  content,
  setIsOpen,
}: {
  content: Content;
  setIsOpen: (arg: boolean) => void;
}) => {
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
