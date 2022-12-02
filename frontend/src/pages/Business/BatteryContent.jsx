import { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import BatteryTitle from '@/components/Business/Battery/BatteryTitle';
import BatteryInputForm from '@/components/Business/InputModal/BatteryInputForm';
import InputModal from '@/components/Business/InputModal/InputModal';
import {
  batteryAddModeState,
  stationAddModeState,
  batteryFilterState,
} from '@/recoil/business';

import BatteryList from '../../components/Business/Battery/BatteryList';
import BatteryFilter from '../../components/Business/Filter/BatteryFilter';
import useGetBatteryList from '../../hooks/Business/useGetBatteryList';
import useGetStationList from '../../hooks/Business/useGetStationList';
import * as S from './Business.style';

const BatteryContent = ({ openSnackBar, clickPage }) => {
  const { batteryInfo } = useGetBatteryList();
  const { stationInfo } = useGetStationList();
  // const [selectedFilter, setSelectedFilter] =
  //   useRecoilState(batteryFilterState);

  // const [isSelected, setIsSelected] = useState([true, false, false, false]);
  let recoilKeyName;
  if (clickPage === 'battery') {
    recoilKeyName = batteryAddModeState;
  } else if (clickPage === 'station') {
    recoilKeyName = stationAddModeState;
  }
  const [isAddMode, setIsAddMode] = useRecoilState(recoilKeyName);
  // useEffect(() => {
  //   setSelectedFilter('total');
  // }, [selectedFilter]);
  return (
    <>
      <InputModal isActive={isAddMode} closeModalHandler={setIsAddMode}>
        <BatteryInputForm
          openSnackBar={openSnackBar}
          batteryList={batteryInfo.batteryList}
          stationList={stationInfo.stationList}
        />
      </InputModal>
      <S.BodyWrapper>
        <BatteryTitle title={'My Battery'} />
        <BatteryFilter countList={batteryInfo.countList} />
        <BatteryList
          openSnackBar={openSnackBar}
          batteryList={batteryInfo.batteryList}
          stationList={stationInfo.stationList}
        />
      </S.BodyWrapper>
    </>
  );
};

export default BatteryContent;
