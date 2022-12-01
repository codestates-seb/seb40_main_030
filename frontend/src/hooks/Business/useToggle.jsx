import { useState } from 'react';
const useToggle = () => {
  const [clickPage, setClickPage] = useState('battery');

  const SelectBatteryHandler = () => {
    setClickPage('battery');
  };
  const SelectStationModeHandler = () => {
    setClickPage('station');
  };
  const SelectAddModeHandler = () => {
    setClickPage('addMode');
  };

  return {
    clickPage,
    setClickPage,
    SelectStationModeHandler,
    SelectBatteryHandler,
    SelectAddModeHandler,
  };
};

export default useToggle;
