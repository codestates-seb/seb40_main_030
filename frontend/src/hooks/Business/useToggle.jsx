import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import {
  batteryDeleteModeState,
  stationDeleteModeState,
} from '@/recoil/business';
const useToggle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const setIsBatteryDeleteMode = useSetRecoilState(batteryDeleteModeState);
  const setIsStationDeleteMode = useSetRecoilState(stationDeleteModeState);
  const clickToggleHandler = () => {
    setIsClicked((prev) => !prev);
    setIsBatteryDeleteMode(false);
    setIsStationDeleteMode(false);
  };

  return { isClicked, setIsClicked, clickToggleHandler };
};

export default useToggle;
