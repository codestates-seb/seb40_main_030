import { useState } from 'react';
const useToggle = () => {
  const [clickPage, setClickPage] = useState('battery');

  const SelectBatteryHandler = () => {
    setClickPage('battery');
  };
  const SelectStationModeHandler = () => {
    setClickPage('station');
  };

  return {
    clickPage,
    setClickPage,
    SelectStationModeHandler,
    SelectBatteryHandler,
  };
};

export default useToggle;
