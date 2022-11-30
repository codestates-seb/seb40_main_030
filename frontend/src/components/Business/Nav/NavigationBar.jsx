import { useRecoilState, useSetRecoilState } from 'recoil';

import { BatteryPageIcon, PlusIcon, StationPageIcon } from '@/assets';
import { batteryAddModeState, stationAddModeState } from '@/recoil/business';

import * as S from './Nav.style';
import ToggleButton from './ToggleButton';

const NavigationBar = ({
  clickPage,
  SelectBatteryHandler,
  SelectStationModeHandler,
}) => {
  const setBatteryAddMote = useSetRecoilState(batteryAddModeState);
  const setStationAddMote = useSetRecoilState(stationAddModeState);
  const changeAddModeHandler = () => {
    // if (isDeleteMode) setIsDeleteMode(false);
    if (clickPage === 'battery') {
      setBatteryAddMote((preState) => !preState);
    } else if (clickPage === 'station') {
      setStationAddMote((preState) => !preState);
    }
  };
  return (
    <S.NavigationBarWrapper>
      <S.NavigationBarContainer>
        <div onClick={SelectBatteryHandler}>
          <BatteryPageIcon width='35px' height='35px' />
        </div>
        <div onClick={changeAddModeHandler}>
          <PlusIcon width='50px' height='50px' />
        </div>
        {/* <ToggleButton
          isClicked={isClicked}
          clickToggleHandler={clickToggleHandler}
        /> */}
        <div onClick={SelectStationModeHandler}>
          <StationPageIcon width='35px' height='35px' />
        </div>
      </S.NavigationBarContainer>
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
