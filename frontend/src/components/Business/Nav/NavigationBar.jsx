import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { BatteryPageIcon, PlusIcon, StationPageIcon } from '@/assets';
import { batteryAddModeState, stationAddModeState } from '@/recoil/business';

import * as S from './Nav.style';
import ToggleButton from './ToggleButton';

const NavigationBar = ({
  clickPage,
  SelectBatteryHandler,
  SelectStationModeHandler,
  SelectAddModeHandler,
}) => {
  const [isSelected, setIsSelected] = useState([true, false, false]);
  const setBatteryAddMote = useSetRecoilState(batteryAddModeState);
  const setStationAddMote = useSetRecoilState(stationAddModeState);

  const changeAddModeHandler = () => {
    if (clickPage === 'battery') {
      setBatteryAddMote((preState) => !preState);
    } else if (clickPage === 'station') {
      setStationAddMote((preState) => !preState);
    }
  };

  return (
    <S.NavigationBarWrapper>
      <S.NavigationBarContainer isclicked={clickPage}>
        <div onClick={() => SelectBatteryHandler()}>
          <S.BatteryPageIconContainer isclicked={clickPage} />
          <h1>Battery</h1>
        </div>
        <div onClick={changeAddModeHandler}>
          <S.PlusIconContainer />
          <h2>Add</h2>
        </div>
        <div onClick={() => SelectStationModeHandler()}>
          <S.StationPageIconContainer isclicked={clickPage} />
          <h3>Station</h3>
        </div>
      </S.NavigationBarContainer>
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
